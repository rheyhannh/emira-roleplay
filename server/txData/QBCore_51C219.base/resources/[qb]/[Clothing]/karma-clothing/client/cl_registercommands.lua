-- Clothing System -> Players RegisterCommands List

local DebugLogs = false
function DebugLogs(text)
    if DebugLogs then
        print(text)
    end
end

local QBCore = exports[Config.FrameworkFolder]:GetCoreObject()

function ReloadSkin(extra)
    local PlayerData = QBCore.Functions.GetPlayerData()
    
    local PedToLoad

    DebugLogs('Reload Skin:')
    DebugLogs(PedPlayerHas)

    if PedPlayerHas then
        PedToLoad = PedPlayerHas
        DebugLogs('Load Skin: '..PedToLoad)
    else 
        if extra then
            DebugLogs('Has extra')
            local gender = QBCore.Functions.GetPlayerData().charinfo.gender

            if gender == 0 or gender == 'man' then
                PedToLoad = "mp_m_freemode_01"
            else
                PedToLoad = "mp_f_freemode_01"
            end
        else
            DebugLogs('Don´t have extra')
            PedToLoad = GetEntityModel(PlayerPedId())
        end

    end

    exports['karma-clothing']:SetModel(PedToLoad)
end

RegisterNetEvent('qb-clothes:loadPlayerSkin')
AddEventHandler('qb-clothes:loadPlayerSkin', function(extra)
    ReloadSkin(extra)
end)

RegisterCommand('reloadskin', function()
    ReloadSkin()
end)


-- MADE BY KARMA DEVELOPMENTS WITH LOVE 
-- JOIN ON KARMA DEVELOPMENTS SUPPORT DISCORD : https://discord.gg/wKkJdg3KtE