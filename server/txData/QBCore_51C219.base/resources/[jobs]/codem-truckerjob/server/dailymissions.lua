function CreateDailyMission()
    local missions = {}
    for _, v in pairs(Config.DailyMissions) do
        missions[_] = v
        missions[_].process = 0
    end
    return missions
end

local spamDailyMissionPlayer = {}

RegisterServerEvent("codem-truckerjob:AddDailyMissionProcess")
AddEventHandler("codem-truckerjob:AddDailyMissionProcess", function(key)
    local src = source
    local identifier = GetIdentifier(src)
    local playerData = GetPlayerJobData(src)
    if playerData then
        if spamDailyMissionPlayer[src] then
            print('Player ' .. src .. ' tried to execute dailymission trigger too fast')
            return
        end 
        spamDailyMissionPlayer[src] = true
        SetTimeout(5000, function()
            spamDailyMissionPlayer[src] = false
        end)
        if playerData.dailymissions.data[key].max > playerData.dailymissions.data[key].process then
            playerData.dailymissions.data[key].process = playerData.dailymissions.data[key].process + 1
        end
        if playerData.dailymissions.data[key].process == playerData.dailymissions.data[key].max then
            playerData.dailymissions.data[key].process = playerData.dailymissions.data[key].max
            AddXP(src, playerData.dailymissions.data[key].xp)
        end
        SyncPlayerDataByKey(src, "dailymissions", playerData.dailymissions)
        ExecuteSql("UPDATE codem_truckerjob SET `dailymissions` = '" ..
            json.encode(playerData.dailymissions) .. "' WHERE `identifier` = '" .. identifier .. "'")
    end
end)

RegisterServerEvent('codem-truckerjob:CheckDailyMission')
AddEventHandler('codem-truckerjob:CheckDailyMission', function()
    local src = source
    local identifier = GetIdentifier(src)
    local playerData = GetPlayerJobData(src)
    if playerData then
        local diff = os.difftime(playerData.dailymissions.resetAt, os.time())
        if diff <= 0 then
            playerData.dailymissions.resetAt = os.time() + 86400
            playerData.dailymissions.data = CreateDailyMission()
            ExecuteSql("UPDATE codem_truckerjob SET `dailymissions` = '" ..
                json.encode(playerData.dailymissions) .. "' WHERE `identifier` = '" .. playerData.identifier .. "'")
            SyncPlayerDataByKey(src, "dailymissions", playerData.dailymissions)
        end
    end
end)

function addMoney(src, payment)
    local Player = GetPlayer(src)
    if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
        Player.addMoney(payment)
    else
        Player.Functions.AddMoney("cash", payment)
    end
end

function AddInventoryItem(src, item, amount)
    local Player = GetPlayer(src)
    amount = tonumber(amount) or 1
    if Player then
        if Config.Inventory == "qb_inventory" then
            Player.Functions.AddItem(item, amount)
        elseif Config.Inventory == "esx_inventory" then
            Player.addInventoryItem(item, amount)
        elseif Config.Inventory == "ox_inventory" then
            exports.ox_inventory:AddItem(src, item, amount)
        elseif Config.Inventory == "codem-inventory" then
            exports["codem-inventory"]:AddItem(src, item, amount)
        elseif Config.Inventory == "qs_inventory" then
            exports['qs-inventory']:AddItem(src, item, amount)
        end
    end
end

function RemoveItem(src, item, amount)
    local Player = GetPlayer(src)
    amount = tonumber(amount) or 1

    if Player then
        if Config.Inventory == "qb_inventory" then
            Player.Functions.RemoveItem(item, amount)
        elseif Config.Inventory == "esx_inventory" then
            Player.removeInventoryItem(item, amount)
        elseif Config.Inventory == "ox_inventory" then
            exports.ox_inventory:RemoveItem(src, item, amount)
        elseif Config.Inventory == "codem-inventory" then
            exports["codem-inventory"]:RemoveItem(src, item, amount)
        elseif Config.Inventory == "qs_inventory" then
            exports['qs-inventory']:RemoveItem(src, item, amount)
        end
    end
end
