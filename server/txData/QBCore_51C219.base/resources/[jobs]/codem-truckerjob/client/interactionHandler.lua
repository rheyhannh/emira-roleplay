jobData = {
    jobname = nil,
    job_grade_name = nil,
    job_grade = nil,
    job_label = nil
}

function InitNPCInteraction()
    if Config.InteractionHandler == 'ox_target' then
        exports.ox_target:addBoxZone({
            name = 'trucker-npc',
            coords = vector3(Config.NpcLocation.coords.x, Config.NpcLocation.coords.y, Config.NpcLocation.coords.z),
            size = vec3(3.6, 3.6, 3.6),
            drawSprite = true,
            options = {
                {
                    name = 'trucker-npc',
                    event = 'codem-truckerjob:OpenMenu',
                    icon = 'fas fa-gears',
                    label = Config.Language.open_menu,
                }
            }
        })
    end
    if Config.InteractionHandler == 'qb_target' then
        exports['qb-target']:AddBoxZone('trucker-npc',
            vector3(Config.NpcLocation.coords.x, Config.NpcLocation.coords.y, Config.NpcLocation.coords.z), 1.5, 1.6,
            {
                name = 'trucker-npc',
                heading = 12.0,
                debugPoly = false,
                minZ = Config.NpcLocation.coords.z - 2,
                maxZ = Config.NpcLocation.coords.z + 2,
            },
            {
                options = {
                    {
                        num = 1,
                        type = "client",
                        icon = 'fas fa-gears',
                        label = Config.Language.open_menu,
                        targeticon = 'fas fa-gears',
                        action = function()
                            TriggerEvent("codem-truckerjob:OpenMenu")
                        end
                    }
                },
                distance = 3.5,
            })
    end
    if Config.InteractionHandler == 'codem-textui' then
        local isTextUiOpen = false
        CreateThread(function()
            while true do
                local cd = 1500
                local plyCoords = GetEntityCoords(PlayerPedId())
                local vec = vector3(Config.NpcLocation.coords.x, Config.NpcLocation.coords.y,
                    Config.NpcLocation.coords.z + 1)
                local dist = #(vec - plyCoords)
                local isInZone = false
                local menuOpen = false
                if not menuOpen then
                    if dist < 2.0 then
                        isInZone = true
                        cd = 0
                        if not isTextUiOpen and not menuOpen then
                            isTextUiOpen = true
                            exports["codem-textui"]:OpenTextUI(Config.Language.open_menu, "E", "thema-6")
                        end
                        if IsControlJustPressed(0, 38) then
                            TriggerEvent("codem-truckerjob:OpenMenu")
                            menuOpen = true
                        end
                    end
                end
                if menuOpen then
                    exports["codem-textui"]:CloseTextUI()
                end

                if isTextUiOpen and not isInZone then
                    exports["codem-textui"]:CloseTextUI()
                    isTextUiOpen = false
                    menuOpen = false
                end
                Wait(cd)
            end
        end)
    end
    if Config.InteractionHandler == 'qb_textui' or Config.InteractionHandler == 'esx_textui' or Config.InteractionHandler == 'drawtext' then
        CreateThread(function()
            local show = false
            while true do
                local cd = 1500
                local plyCoords = GetEntityCoords(PlayerPedId())
                local vec = vector3(Config.NpcLocation.coords.x, Config.NpcLocation.coords.y,
                    Config.NpcLocation.coords.z + 1)
                local dist = #(vec - plyCoords)
                if dist < 5.0 then
                    cd = 0
                    if not show then
                        if Config.InteractionHandler == 'esx_textui' then
                            Core.TextUI(Config.Language.open_menu)
                            show = true
                        end
                        if Config.InteractionHandler == 'qb_textui' then
                            TriggerEvent("qb-core:client:DrawText", Config.Language.open_menu)
                            show = true
                        end
                    end
                    if Config.InteractionHandler == 'drawtext' then
                        DrawMarker(2, vec, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.3, 0.2, 0.15, 255, 255, 255, 255, false, false,
                            false,
                            true, false, false, false)
                        DrawText3D(vec.x, vec.y, vec.z, Config.Language.open_menu)
                    end
                    if IsControlJustPressed(0, 38) then
                        TriggerEvent("codem-truckerjob:OpenMenu")
                    end
                else
                    if show then
                        show = false
                        if Config.InteractionHandler == 'esx_textui' then
                            Core.HideUI()
                        end
                        if Config.InteractionHandler == 'qb_textui' then
                            TriggerEvent("qb-core:client:HideText")
                        end
                    end
                end
                Wait(cd)
            end
        end)
    end
end

RegisterNetEvent("esx:setJob")
AddEventHandler("esx:setJob", function(job)
    Wait(1000)
    SetPlayerJob()
end)

RegisterNetEvent("QBCore:Client:OnJobUpdate")
AddEventHandler("QBCore:Client:OnJobUpdate", function(data)
    Wait(1000)
    SetPlayerJob()
end)


function SetPlayerJob()
    while Core == nil do
        Wait(0)
    end
    Wait(500)

    WaitPlayer()

    if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
        local PlayerData = Core.GetPlayerData()
        jobData.jobname = PlayerData.job.name
        jobData.job_grade_name = PlayerData.job.label
        jobData.job_grade = tonumber(PlayerData.job.grade)
    else
        local PlayerData = Core.Functions.GetPlayerData()
        jobData.jobname = PlayerData["job"].name
        jobData.job_grade_name = PlayerData["job"].label
        jobData.job_grade = PlayerData["job"].grade.level
    end
end

function canOpenMenu()
    local ped = PlayerPedId()
    if IsPedInAnyVehicle(ped, false) then
        return false
    end
    if Config.JobName then
        if Config.JobName ~= 'all' and Config.JobName ~= jobData.jobname then
            return false
        end
    end
    return true
end

function DrawText3D(x, y, z, text)
    SetTextScale(0.35, 0.35)
    SetTextFont(4)
    SetTextProportional(1)
    SetTextColour(255, 255, 255, 215)
    SetTextEntry('STRING')
    SetTextCentre(true)
    AddTextComponentString(text)
    SetDrawOrigin(x, y, z, 0)
    DrawText(0.0, 0.0)
    local factor = (string.len(text)) / 370
    DrawRect(0.0, 0.0 + 0.0125, 0.017 + factor, 0.03, 0, 0, 0, 75)
    ClearDrawOrigin()
end