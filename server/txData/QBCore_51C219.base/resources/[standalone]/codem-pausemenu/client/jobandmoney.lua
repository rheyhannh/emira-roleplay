RegisterNetEvent("esx:setJob")
AddEventHandler("esx:setJob", function(job)
    LoadMoneyAndJob()
end)

RegisterNetEvent("QBCore:Client:OnJobUpdate")
AddEventHandler("QBCore:Client:OnJobUpdate", function()
    LoadMoneyAndJob()
end)

RegisterNetEvent("QBCore:Client:OnMoneyChange")
AddEventHandler("QBCore:Client:OnMoneyChange", function()
    LoadMoneyAndJob()
end)

function LoadMoneyAndJob()
    WaitNui()
    WaitPlayer()
    local cash = nil
    local bank = nil
    local job = 'UNEMPLOYED'
    local job_grade = 'Civil'
    local loopCounter = 0
    while true do
        if Core ~= nil then
            local Player = GetPlayerData()
            if Player then
                if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
                    for _,v in pairs(Player.accounts) do
                        if v.name == 'bank' then
                            bank = v.money
                        end
                    end
                    cash = TriggerCallback('codem-pausemenu:GetPlayerCash')
                    job = Player.job.label
                    job_grade = Player.job.grade_label
                    break
                else
                    cash = Player.money.cash
                    bank = Player.money.bank
                    job = Player.job.label
                    job_grade = Player.job.grade.name
                    break
                end
            end
            loopCounter = loopCounter + 1
            if loopCounter >= 3 then
                break
            end
        end
        Wait(1000)
    end

    NuiMessage('UPDATE_MONEY', {
        cash = cash or 0,
        bank = bank or 0,
    })
    NuiMessage('UPDATE_JOB', {
        job = job,
        job_grade_name = job_grade,
    })

 
end

RegisterNetEvent('codem-pausemenu:RefreshCash')
AddEventHandler('codem-pausemenu:RefreshCash', function()
    if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
        local cash = TriggerCallback('codem-pausemenu:GetPlayerCash')
        local bank = 0
        local Player = GetPlayerData()
        if Player then
            for _,v in pairs(Player.accounts) do
                if v.name == 'bank' then
                    bank = v.money
                end
            end
        end
        NuiMessage('UPDATE_MONEY', {
            cash = cash or 0,
            bank = bank or 0,
        })
    end
end)