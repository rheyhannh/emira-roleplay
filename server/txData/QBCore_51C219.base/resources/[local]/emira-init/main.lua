--[[ 
    Script untuk Auto-Reset Resource 'karma-clothing' dan Dependensinya
]]

local hasRestarted = false

AddEventHandler('onServerResourceStart', function(resourceName)
    if resourceName == 'karma-clothing' and not hasRestarted then
        hasRestarted = true

        Citizen.SetTimeout(5000, function()
            print('[emira-init] Restart karma-clothing agar dapat berfungsi dengan baik')
            ExecuteCommand('ensure karma-clothing')

            Citizen.SetTimeout(3000, function()
                print('[emira-init] Start qb-houses setelah melakukan restart karma-clothing')
                ExecuteCommand('ensure qb-houses')

                Citizen.SetTimeout(3000, function()
                    print('[emira-init] Start qb-apartments setelah melakukan restart karma-clothing')
                    ExecuteCommand('ensure qb-apartments')
                end)
            end)
        end)
    end
end)
