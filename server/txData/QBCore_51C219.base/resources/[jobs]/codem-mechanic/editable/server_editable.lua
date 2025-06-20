jobs = {}

RegisterServerEvent('codem-mechanic:billPlayer', function(data)
    local src = source
    local identifier = GetIdentifier(src)
    local xIdentifier = GetIdentifier(tonumber(data.plyid))
    local name = GetName(tonumber(src))
    if Config.BillScript == 'codemBilling' then
        exports["codem-billing"]:createBilling(src, data.plyid, tonumber(data.totalPrice), 'Mechanic Price', Config.SocietyNameJob[GetJob(src)] )
    end
    if Config.BillScript == 'codemBillingv2' then
        exports["codem-billingv2"]:CreateBillingJob(src, tonumber(data.plyid), tonumber(data.totalPrice), 'Mechanic Price')
    end
    if Config.BillScript == "qbdefault" then
        ExecuteSql
        (string.format(
            "INSERT INTO `phone_invoices` (`citizenid`, `amount`, `society`, `sender`, `sendercitizenid`) VALUES ('%s', '%s', '%s', '%s', '%s')",
            xIdentifier, tonumber(data.totalPrice), Config.SocietyNameJob[GetJob(src)] or "unknown",
            name,
            identifier))
    end
    if Config.BillScript == "okokBilling" then
        TriggerEvent("okokBilling:CreateCustomInvoice", tonumber(data.plyid), tonumber(data.totalPrice), "Mechanic Price",
            GetName(src),
            identifier, Config.SocietyNameJob[GetJob(src)] or "unknown")
    end

    if Config.BillScript == "jaksamBilling" then
        exports["billing_ui"]:createBill(identifier, xIdentifier, "Mechanic Price", tonumber(data.totalPrice),
            Config.SocietyNameJob[GetJob(src)] or "unknown", "society")
    end
    if Config.BillScript == "esxdefault" then
        ExecuteSql(string.format(
            "INSERT INTO billing (identifier, sender, target_type, target, label, amount) VALUES ('%s', '%s', '%s', '%s', '%s', '%s')",
            xIdentifier, identifier, 'society', 'society_' .. Config.SocietyNameJob[GetJob(src)], "Mechanic Price",
            tonumber(data.totalPrice)))
    end
    IncreaseEmployeeBills(src)
    UpdateEmployeeProfits(src, data.totalPrice)
end)

function GetAvaliableJobs()
    local jobs = {}
    for job, v in pairs(Config.MechanicSettings) do
        jobs[job] = 0
    end
    return jobs
end

function UpdateJobs()
    local avaliableJobs = GetAvaliableJobs()
    for job,val in pairs(avaliableJobs) do
        if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
            local Players = Core.GetPlayers()
            for _,src in pairs(Players) do
                local Player = Core.GetPlayerFromId(tonumber(src))
                if Player then
                    if Player.job.name == job then
                        avaliableJobs[job] = avaliableJobs[job] + 1
                    end
                end  
            end
        else
            for _,Player in pairs(Core.Players) do
                if Player.PlayerData.job.name == job then
                    avaliableJobs[job] = avaliableJobs[job] + 1
                end
            end
        end
    end
    jobs = avaliableJobs
    TriggerClientEvent("codem-mechanic:UpdateJobs", -1, jobs)
end

RegisterServerEvent("QBCore:Server:OnJobUpdate")
AddEventHandler("QBCore:Server:OnJobUpdate", function(source, job)
    UpdateJobs()
end)

RegisterServerEvent("esx:setJob")
AddEventHandler("esx:setJob", function(src, newjob, lastJob)
    local avaliableJobs = GetAvaliableJobs()
    if avaliableJobs[newjob.name] ~= nil or avaliableJobs[lastJob.name] ~= nil then
        UpdateJobs()
    end
end)

RegisterServerEvent("QBCore:Server:OnPlayerLoaded")
AddEventHandler("QBCore:Server:OnPlayerLoaded", function()
    UpdateJobs()
end)

RegisterServerEvent("esx:playerLoaded")
AddEventHandler("esx:playerLoaded", function()
    UpdateJobs()
end)

AddEventHandler("playerDropped", function()
    local src = source
    local avaliableJobs = GetAvaliableJobs()
    local job, grade = GetJob(src)
    if  avaliableJobs[job] ~= nil then
        UpdateJobs()

    end
end)

function GetPlayerMoney(source)
    local money = 0
    local Player = GetPlayer(source)
    if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
        money = Player.getMoney() 
    else
        money = Player.Functions.GetMoney('cash')
    end
    return money
end

function GetPlayerBank(source)
    local bank = 0
    local Player = GetPlayer(source)
    if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
        bank = Player.getAccount('bank').money
    else
        bank = Player.Functions.GetMoney('bank')
    end
    return bank
end

function doesExportExistInResource(resourceName, exportName)
    local status, _ = xpcall(function()
        local _ = exports[resourceName][exportName]
    end, debug.traceback)
    return status
end

CreateThread(function()
    Citizen.Wait(500)
    while Core == nil do
        Wait(0)
    end
    if Config.MechanicMode == 'half_job' then
        UpdateJobs()
    end
    RegisterCallback('codem-mechanic:getAccount', function(source, cb)
        local avatar = GetDiscordAvatar(source) or
            Config.ExampleProfilePicture
        local name = GetName(source)
        local data = {
            name = name,
            avatar = avatar,
            cash =  GetPlayerMoney(source),
        }
        cb(data)
    end)
    RegisterCallback('codem-mechanic:getPlayerAccount', function(source, cb)
        local cash = 0
        if Config.MoneyType ==  'cash' then
            cash = GetPlayerMoney(source)
        elseif Config.MoneyType == 'bank' then
            cash = GetPlayerBank(source)
        end

        cb(cash)
    end)
    RegisterCallback('codem-mechanic:getJobCount', function(source, cb, job)
        cb(jobs[job])
    end)
    RegisterCallback('codem-mechanic:getMechanicVault', function(source, cb)
        local src = source
        local job, grade = GetJob(src)
        if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
            TriggerEvent("esx_addonaccount:getSharedAccount", 'society_' .. job, function(account)
                if account then
                    cb(account.money)
                else
                    cb(0)
                end
            end)
        elseif Config.Framework == 'qb' or Config.Framework == "oldqb" then
            if Config.newManagementSystem then
                local account_money = exports["qb-banking"]:GetAccount(job)
                if account_money then
                    cb(account_money.account_balance)
                else
                    cb(0)
                end
            else
                if GetResourceState('qb-management') ~= 'missing' then

                    if not doesExportExistInResource("qb-management", "GetAccount") then
                        print('qb-management does not have GetAccount export')
                        return cb(0)
                    end

                    local account_money = exports["qb-management"]:GetAccount(job)
                    if account_money then
                        cb(account_money)
                    else
                        cb(0)
                    end
                end
            end

        end
    end)
end)

function CheckCanUseMechanic(mechanic) 
    if Config.MechanicMode == 'half_job'  then
        if Config.MechanicSettings[mechanic] or Config.MechanicSettings[job] then
            if (jobs[mechanic] ~= nil and jobs[mechanic] == 0) or (Config.MechanicSettings[mechanic] or Config.MechanicSettings[job]) then
                 return true
            end
        end
    end
    return false
end

function getNearestMechanic(src)
    local ped = GetPlayerPed(src)
    local pedCoords = GetEntityCoords(ped)
    for job, v in pairs(Config.MechanicSettings) do
        for _, coords in pairs(v.mechanicMenuCoords) do
            local dist =  #(pedCoords - coords)
            if dist < 5.0 then
                return job
            end
        end
    end
    return false
end

RegisterServerEvent('codem-mechanic:vehicleMechanicComplete', function(data)
    local src = source
    local job, grade = GetJob(src)
    if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
        if Config.MechanicMode == 'only_job' then
            if Config.ModifyWithYourCash then
                if Config.MoneyType == 'cash' then
                    local playerCash = GetPlayerMoney(src)
                    if playerCash >= tonumber(data) then
                        if RemoveMoney(src, tonumber(data)) then
                            TriggerClientEvent('codem-mechanic:completeVehicle', src)
                            TriggerClientEvent("codem-mechanic:RefreshMechanicVault", src, GetPlayerMoney(src))
                        end
                    end
                elseif Config.MoneyType == 'bank' then
                    local playerBank = GetPlayerBank(src)
                    if playerBank >= tonumber(data) then
                        if RemoveMoneyBank(src, tonumber(data)) then
                            TriggerClientEvent('codem-mechanic:completeVehicle', src)
                            TriggerClientEvent("codem-mechanic:RefreshMechanicVault", src, GetPlayerBank(src))
                        end
                    end
                end

            else
                TriggerEvent("esx_addonaccount:getSharedAccount", 'society_' .. job, function(account)
                    if account.money >= tonumber(data) then
                        account.removeMoney(data)
                        Wait(350)
                        local players = GetOnlineMechanicEmployees(job)
                        local newAccountMoney = tonumber(account.money) - tonumber(data)
                        for _, v in pairs(players) do
                            TriggerClientEvent("codem-mechanic:RefreshMechanicVault", tonumber(v), newAccountMoney)
                            TriggerClientEvent("codem-mechanic:RefreshBossMoney", v)
                        end
                        TriggerClientEvent('codem-mechanic:completeVehicle', src)
                    end
                end)
            end

        elseif Config.MechanicMode == 'no_job' or CheckCanUseMechanic(getNearestMechanic(src))  then
            local mechanic = Config.MechanicSettings[job]
            if not mechanic then
                if RemoveMoney(src, data) then
                    TriggerClientEvent('codem-mechanic:completeVehicle', src)
                    TriggerClientEvent("codem-mechanic:RefreshMechanicVault", src, GetPlayerMoney(src))
                end
            else
                if Config.ModifyWithYourCash then
                    if Config.MoneyType == 'cash' then
                        local playerCash = GetPlayerMoney(src)
                        if playerCash >= tonumber(data) then
                            if RemoveMoney(src, tonumber(data)) then
                                TriggerClientEvent('codem-mechanic:completeVehicle', src)
                                TriggerClientEvent("codem-mechanic:RefreshMechanicVault", src, GetPlayerMoney(src))
                            end
                        end
                    elseif Config.MoneyType == 'bank' then
                        local playerBank = GetPlayerBank(src)
                        if playerBank >= tonumber(data) then
                            if RemoveMoneyBank(src, tonumber(data)) then
                                TriggerClientEvent('codem-mechanic:completeVehicle', src)
                                TriggerClientEvent("codem-mechanic:RefreshMechanicVault", src, GetPlayerBank(src))
                            end
                        end
                    end
                else
                    TriggerEvent("esx_addonaccount:getSharedAccount", 'society_' .. job, function(account)
                        if account.money >= tonumber(data) then
                            account.removeMoney(data)
                            Wait(350)
                            local players = GetOnlineMechanicEmployees(job)
                            local newAccountMoney = tonumber(account.money) - tonumber(data)
                            for _, v in pairs(players) do
                                TriggerClientEvent("codem-mechanic:RefreshMechanicVault", tonumber(v), newAccountMoney)
                                TriggerClientEvent("codem-mechanic:RefreshBossMoney", v)
                            end
                            TriggerClientEvent('codem-mechanic:completeVehicle', src)
                        end
                    end)
                end
            end

        end
      
    elseif Config.Framework == 'qb' or Config.Framework == "oldqb" then
        if Config.MechanicMode == 'only_job' then
            if Config.ModifyWithYourCash then
                if Config.MoneyType == 'cash' then
                    local playerCash = GetPlayerMoney(src)
                    if playerCash >= tonumber(data) then
                        if RemoveMoney(src, tonumber(data)) then
                            TriggerClientEvent('codem-mechanic:completeVehicle', src)
                            TriggerClientEvent("codem-mechanic:RefreshMechanicVault", src, GetPlayerMoney(src))
                        end
                    end
                elseif Config.MoneyType == 'bank' then
                    local playerBank = GetPlayerBank(src)
                    if playerBank >= tonumber(data) then
                        if RemoveMoneyBank(src, tonumber(data)) then
                            TriggerClientEvent('codem-mechanic:completeVehicle', src)
                            TriggerClientEvent("codem-mechanic:RefreshMechanicVault", src, GetPlayerBank(src))
                        end
                    end
                end
            else
                if Config.newManagementSystem then
                    local account_money = exports["qb-banking"]:GetAccount(job)
                    if account_money.account_balance >= data then
                        exports["qb-banking"]:RemoveMoney(job, data)
                        Wait(350)
                        local players = GetOnlineMechanicEmployees(job)
                        local newAccountMoney = exports["qb-banking"]:GetAccount(job)
                        for _, v in pairs(players) do
                            TriggerClientEvent("codem-mechanic:RefreshMechanicVault", tonumber(v), newAccountMoney.account_balance)
                            TriggerClientEvent("codem-mechanic:RefreshBossMoney", v)
                        end
                        TriggerClientEvent('codem-mechanic:completeVehicle', src)
                    end
                else
                    if GetResourceState('qb-management') ~= 'missing' then
                        if not doesExportExistInResource("qb-management", "GetAccount") or not doesExportExistInResource("qb-management", "RemoveMoney") then
                            print('qb-management does not have GetAccount export')
                            return
                        end

                        local account_money = exports["qb-management"]:GetAccount(job)
                        if account_money >= data then
                            exports["qb-management"]:RemoveMoney(job, data)
                            Wait(350)
                            local players = GetOnlineMechanicEmployees(job)
                            local newAccountMoney = exports["qb-management"]:GetAccount(job)
                            for _, v in pairs(players) do
                                TriggerClientEvent("codem-mechanic:RefreshMechanicVault", tonumber(v), newAccountMoney)
                                TriggerClientEvent("codem-mechanic:RefreshBossMoney", v)
                            end
                            TriggerClientEvent('codem-mechanic:completeVehicle', src)
                        end
                    end
                end
            end
        elseif Config.MechanicMode == 'no_job' or CheckCanUseMechanic(getNearestMechanic(src)) then
            local mechanic = Config.MechanicSettings[job]
            if mechanic then
                if Config.ModifyWithYourCash then
                    if Config.MoneyType == 'cash' then
                        local playerCash = GetPlayerMoney(src)
                        if playerCash >= tonumber(data) then
                            if RemoveMoney(src, tonumber(data)) then
                                TriggerClientEvent('codem-mechanic:completeVehicle', src)
                                TriggerClientEvent("codem-mechanic:RefreshMechanicVault", src, GetPlayerMoney(src))
                            end
                        end
                    elseif Config.MoneyType == 'bank' then
                        local playerBank = GetPlayerBank(src)
                        if playerBank >= tonumber(data) then
                            if RemoveMoneyBank(src, tonumber(data)) then
                                TriggerClientEvent('codem-mechanic:completeVehicle', src)
                                TriggerClientEvent("codem-mechanic:RefreshMechanicVault", src, GetPlayerBank(src))
                            end
                        end
                    end
                else
                    if Config.newManagementSystem then
                        local account_money = exports["qb-banking"]:GetAccount(job)
                        if account_money.account_balance >= data then
                            exports["qb-banking"]:RemoveMoney(job, data)
                            Wait(350)
                            local players = GetOnlineMechanicEmployees(job)
                            local newAccountMoney = exports["qb-banking"]:GetAccount(job)
                            for _, v in pairs(players) do
                                TriggerClientEvent("codem-mechanic:RefreshMechanicVault", tonumber(v), newAccountMoney.account_balance)
                                TriggerClientEvent("codem-mechanic:RefreshBossMoney", v)
                            end
                            TriggerClientEvent('codem-mechanic:completeVehicle', src)
                        end
                    else
                        if GetResourceState('qb-management') ~= 'missing' then
                            if not doesExportExistInResource("qb-management", "GetAccount") or not doesExportExistInResource("qb-management", "RemoveMoney") then
                                print('qb-management does not have GetAccount export')
                                return
                            end

                            local account_money = exports["qb-management"]:GetAccount(job)
                            if account_money >= data then
                                exports["qb-management"]:RemoveMoney(job, data)
                                Wait(350)
                                local players = GetOnlineMechanicEmployees(job)
                                local newAccountMoney = exports["qb-management"]:GetAccount(job)
                                for _, v in pairs(players) do
                                    TriggerClientEvent("codem-mechanic:RefreshMechanicVault", tonumber(v), newAccountMoney)
                                    TriggerClientEvent("codem-mechanic:RefreshBossMoney", v)
                                end
                                TriggerClientEvent('codem-mechanic:completeVehicle', src)
                            end
                        end
                    end
                end
            else
                if RemoveMoney(src, data) then
                    TriggerClientEvent('codem-mechanic:completeVehicle', src)
                    TriggerClientEvent("codem-mechanic:RefreshMechanicVault", src, GetPlayerMoney(src))
                end
            end
        end
        TriggerEvent('codem-mechanic:server:EndModify', src)
    end
end)


Citizen.CreateThread(function()
    if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
        for _, v in pairs(Config.MechanicSettings) do
            TriggerEvent('esx_society:registerSociety', _, _, 'society_' .. _, 'society_' .. _, 'society_' .. _,
                { type = 'private' })
        end
    end
end)

CreateThread(function()
    RegisterCallback('codem-mechanic:GetPlayerInventory', function(source, cb)
        cb(GetPlayerInventory(source))
    end)
    RegisterCallback('codem-mechanic:GetLogs', function(source, cb)
        local job = GetJob(source)
        local data = {}
        local mechanic = GetMechanicDataByName(job)
        if mechanic then
            data = GetMechanicLogs(job)
        end
        cb(data)
    end)
    RegisterCallback('codem-mechanic:GetBossInventory', function(source, cb, name)
        local mechanic = GetMechanicDataByName(name)
        if mechanic then
            cb(mechanic.inventory)
        else
            cb({})
        end
    end)

    RegisterCallback('codem-mechanic:GetEmployees', function(source, cb)
        local job = GetJob(source)
        local mechanic = GetMechanicDataByName(job)
        if mechanic then
            cb(mechanic.employees)
        else
            cb({})
        end
    end)

    RegisterCallback('codem-mechanic:GetBossMoney', function(source, cb)
        local job = GetJob(source)
        local mechanic = GetMechanicDataByName(job)
        local money = false
        if mechanic then
            if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
                TriggerEvent("esx_addonaccount:getSharedAccount", 'society_' .. job, function(account)
                    money = account.money
                end)
            else
                if Config.UseCodemXBossMenu then
                    if GetResourceState('cdm-xboss') == 'missing' then
                        print("you either changed the resource name or you don't have the cdm-xboss")
                        money = 0
                    else
                        money = exports["cdm-xboss"]:getSocietyMoney(source)
                    end
                else
                    if Config.newManagementSystem then
                        local account_money = exports["qb-banking"]:GetAccount(job)
                        if account_money and account_money.account_balance then
                            money = account_money.account_balance
                        else
                            if Config.CreateJobAccount then
                                exports["qb-banking"]:CreateJobAccount(job, 0)
                                money = 0
                            end
                        end
                    else
                        if GetResourceState('qb-management') ~= 'missing' then
                            if not doesExportExistInResource("qb-management", "GetAccount") then
                                print('qb-management does not have GetAccount export')
                                return
                            end

                            local account_money = exports["qb-management"]:GetAccount(job)
                            money = account_money
                        end
                    end
                end
            end
        else
            money = 0
        end
        while money == false do
            Wait(0)
        end
        cb(money)
    end)
    RegisterCallback('codem-mechanic:GetJobRanks', function(source, cb)
        cb(GetJobRanks(source))
    end)
end)


RegisterServerEvent("codem-mechanic:WithdrawMoney")
AddEventHandler("codem-mechanic:WithdrawMoney", function(amount)
    local src = source
    if tonumber(amount) == nil then return end
    local job, grade = GetJob(src)
    local mechanic = Config.MechanicSettings[job]
    if mechanic then
        if CheckPermission(src, 'accessVault') then
            if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
                if Config.UseCodemXBossMenu then
                    if GetResourceState('cdm-xboss') == 'missing' then
                        print("you either changed the resource name or you don't have the cdm-xboss")
                        return
                    end
                    local account_money = exports["cdm-xboss"]:getSocietyMoney(src) 

                    if account_money >= amount then  
                        exports["cdm-xboss"]:WithdrawMoney(src, amount)            
                        AddLog(job, string.format(Config.Locales.WITHDRAW_MONEY, GetName(src), amount))
    
                        Wait(350)
                        local players = GetOnlineMechanicEmployees(job)
                        for _, v in pairs(players) do
                            TriggerClientEvent("codem-mechanic:RefreshBossMoney", v)
                        end
                    end
                else
                    TriggerEvent("esx_addonaccount:getSharedAccount", 'society_' .. job, function(account)
                        if account.money >= amount then
                            account.removeMoney(amount)
                            AddMoney(src, amount)
                            AddLog(job, string.format(Config.Locales.WITHDRAW_MONEY, GetName(src), amount))
    
                            Wait(350)
                            local players = GetOnlineMechanicEmployees(job)
                            for _, v in pairs(players) do
                                TriggerClientEvent("codem-mechanic:RefreshBossMoney", v)
                            end
                        end
                    end)
                end
            else
                if Config.UseCodemXBossMenu then
                    if GetResourceState('cdm-xboss') == 'missing' then
                        print("you either changed the resource name or you don't have the cdm-xboss")
                        return
                    end
                    local account_money = exports["cdm-xboss"]:getSocietyMoney(src) 
                    if account_money >= amount then                   
                        exports["cdm-xboss"]:WithdrawMoney(src, amount)            

                        AddLog(job, string.format(Config.Locales.WITHDRAW_MONEY, GetName(src), amount))
    
                        Wait(350)
                        local players = GetOnlineMechanicEmployees(job)
                        for _, v in pairs(players) do
                            TriggerClientEvent("codem-mechanic:RefreshBossMoney", v)
                        end
                    end
                else
                    if Config.newManagementSystem then
                        local account_money = exports["qb-banking"]:GetAccount(job)
                        if account_money.account_balance >= amount then
                            exports["qb-banking"]:RemoveMoney(job, amount)
                            AddMoney(src, amount)
                            AddLog(job, string.format(Config.Locales.WITHDRAW_MONEY, GetName(src), amount))
                            Wait(350)
                            local players = GetOnlineMechanicEmployees(job)
                            for _, v in pairs(players) do
                                TriggerClientEvent("codem-mechanic:RefreshBossMoney", v)
                            end
                        end
                    else
                        if GetResourceState('qb-management') ~= 'missing' then
                            if not doesExportExistInResource("qb-management", "GetAccount") or not doesExportExistInResource("qb-management", "RemoveMoney") then
                                print('qb-management does not have GetAccount export')
                                return
                            end

                            local account_money = exports["qb-management"]:GetAccount(job)
                            if account_money >= amount then
                                exports["qb-management"]:RemoveMoney(job, amount)
                                AddMoney(src, amount)
                                AddLog(job, string.format(Config.Locales.WITHDRAW_MONEY, GetName(src), amount))
                                Wait(350)
                                local players = GetOnlineMechanicEmployees(job)
                                for _, v in pairs(players) do
                                    TriggerClientEvent("codem-mechanic:RefreshBossMoney", v)
                                end
                            end
                        end
                    end
                end
            end
        end
    end
end)


RegisterServerEvent("codem-mechanic:DepositMoney")
AddEventHandler("codem-mechanic:DepositMoney", function(amount)
    local src = source
    local Player = GetPlayer(sdrc)

    if tonumber(amount) == nil then return end
    local job, grade = GetJob(src)
    local mechanic = Config.MechanicSettings[job]
    if mechanic then
        if CheckPermission(src, 'accessVault') then
            if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
                if Config.UseCodemXBossMenu then
                    if GetResourceState('cdm-xboss') == 'missing' then
                        print("you either changed the resource name or you don't have the cdm-xboss")
                        return
                    end
                    if Player.getMoney() >= amount then    
                        exports["cdm-xboss"]:DepositMoney(src, amount)            
                        AddLog(job, string.format(Config.Locales.DEPOSIT_MONEY, GetName(src), amount))
    
                        Wait(350)
                        local players = GetOnlineMechanicEmployees(job)
                        for _, v in pairs(players) do
                            TriggerClientEvent("codem-mechanic:RefreshBossMoney", v)
                        end
                    end
                else
                    TriggerEvent("esx_addonaccount:getSharedAccount", 'society_' .. job, function(account)
                        if RemoveMoney(src, amount) then
                            account.addMoney(amount)
                            AddLog(job, string.format(Config.Locales.DEPOSIT_MONEY, GetName(src), amount))
                            Wait(350)
                            local players = GetOnlineMechanicEmployees(job)
                            for _, v in pairs(players) do
                                TriggerClientEvent("codem-mechanic:RefreshBossMoney", v)
                            end
                        end
                    end)
                end
            else
                if Config.UseCodemXBossMenu then
                    if GetResourceState('cdm-xboss') == 'missing' then
                        print("you either changed the resource name or you don't have the cdm-xboss")
                        return
                    end
                    if Player.Functions.GetMoney('cash')  >= amount then    
                        exports["cdm-xboss"]:DepositMoney(src, amount)            
                        AddLog(job, string.format(Config.Locales.DEPOSIT_MONEY, GetName(src), amount))
    
                        Wait(350)
                        local players = GetOnlineMechanicEmployees(job)
                        for _, v in pairs(players) do
                            TriggerClientEvent("codem-mechanic:RefreshBossMoney", v)
                        end
                    end
                else
                    if Config.newManagementSystem then
                        if RemoveMoney(src, amount) then
                            exports["qb-banking"]:AddMoney(job, amount)
                            AddLog(job, string.format(Config.Locales.DEPOSIT_MONEY, GetName(src), amount))
                            Wait(350)
                            local players = GetOnlineMechanicEmployees(job)
                            for _, v in pairs(players) do
                                TriggerClientEvent("codem-mechanic:RefreshBossMoney", v)
                            end
                        end
                    else
                        if GetResourceState('qb-management') ~= 'missing' then
                            if not doesExportExistInResource("qb-management", "AddMoney") then
                                print('qb-management does not have GetAccount export')
                                return
                            end
                            
                            if RemoveMoney(src, amount) then

                                exports["qb-management"]:AddMoney(job, amount)
                                AddLog(job, string.format(Config.Locales.DEPOSIT_MONEY, GetName(src), amount))
        
                                Wait(350)
                                local players = GetOnlineMechanicEmployees(job)
                                for _, v in pairs(players) do
                                    TriggerClientEvent("codem-mechanic:RefreshBossMoney", v)
                                end
                            end
                        end
                    end
                end
            end
        end
    end
end)

