if Config.UseRegisterKeyMappingSystem then
    RegisterKeyMapping('pausemenu', 'pausemenu', 'keyboard', Config.MenuOpenKey)
    RegisterCommand('pausemenu', function()
        if not IsPauseMenuActive() then
            OpenMenu()
        end
    end)
    RegisterKeyMapping('map', 'map', 'keyboard', Config.MapOpenKey)
    RegisterCommand('map', function()
        if not IsPauseMenuActive() then
            CloseMenu()
            ActivateFrontendMenu('FE_MENU_VERSION_SP_PAUSE')
            while not IsFrontendReadyForControl() do Wait(0) end
            if isFirst then
                Wait(700)
                isFirst = false
            end
            PauseMenuceptionGoDeeper(-1)
            PauseMenuceptionTheKick()
        end
    end)
else
    CreateThread(function()
        while true do
            Wait(0)
            if IsControlJustPressed(0, Config.MenuOpenKey) then
                if not IsPauseMenuActive() then
                    OpenMenu()
                end
            end
            if IsControlJustPressed(0, Config.MapOpenKey) then
                if not IsPauseMenuActive() then
                    CloseMenu()
                    ActivateFrontendMenu('FE_MENU_VERSION_SP_PAUSE')
                    while not IsFrontendReadyForControl() do Wait(0) end
                    if isFirst then
                        Wait(700)
                        isFirst = false
                    end
                    PauseMenuceptionGoDeeper(-1)
                    PauseMenuceptionTheKick()
                end
            end
        end
    end)
end