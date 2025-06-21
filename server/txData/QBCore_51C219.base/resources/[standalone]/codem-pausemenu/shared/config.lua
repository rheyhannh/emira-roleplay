Config = {}
Config.Framework = 'autodetect' -- esx, oldesx, qb, oldqb, autodetect
Config.SQL = "oxmysql" -- oxmysql, ghmattimysql, mysql-async
Config.Theme = 'red' -- orange, green, pink, red, blue
Config.ReOpenPausemenu = true -- if this is enabled it'll open the pausemenu again after player opened and closed settings/map
Config.UseRegisterKeyMappingSystem = false -- if this option set to true the script will use the RegisterKeyMapping system or false will use the traditional system
Config.OpenAnimation = true -- if this option set to true the pausemenu will open with focus player animation

--[[
    if you set the option above to true you can reference here if you want to change MenuOpenKey
    https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/

    if false you can reference here to change MenuOpenKey
    https://docs.fivem.net/docs/game-references/controls/

    Note : If Config.UseRegisterKeyMappingSystem is set to true, even if you change the Config.MenuOpenKey value after logging into the server it will still be the same in-game. You can do a few things to fix this
    1- Change the script name
    This will reset the key for everyone and new key you've written in Config.MenuOpenKey will be apply to everyone

    2- Change the key from settings/keybinds/fivem
    This will be only apply to you and other players also need to change from settings

    3- Set Config.UseRegisterKeyMappingSystem to false
    This is not the recommend way because script may consume more resmon value
]]--
Config.MenuOpenKey = 200 
Config.MapOpenKey = 199
Config.Admins = {
    "admin",
    "superadmin",
    "god",
    "mod",
    "moderator",
}
Config.MloPurchaseWebhook = ''
Config.DiscordLink = 'discord.gg/codem'
Config.Commands = {
    {
        name = 'hudsettings',
        desc = 'Opens the hud settings user interface '
    }
}

Config.NavMenu = { -- enable or disable system features
    guidebook = true, 
    battlepass = true, 
    quit_game = true,
    store = true,
    daily_awards = true,
}

Config.MenuClosed = function() -- to show other hud elements
    TriggerEvent("mHud:ShowHud")
    TriggerEvent('codem-blackhudv2:SetForceHide', false, false)
    TriggerEvent('codem-venicehud:SetForceHide', false)
end

Config.MenuOpened = function() -- to hide other hud elements
    TriggerEvent("mHud:HideHud")
    TriggerEvent('codem-blackhudv2:SetForceHide', true, true)
    TriggerEvent('codem-venicehud:SetForceHide', true)
end

Config.CodemMultichar = false
Config.MulticharOpen = function()
    CloseMenu()
    DoScreenFadeOut(300)
    Wait(300)
    ClearFocus()
    DoScreenFadeIn(300)
    TriggerEvent('m-multichar-client-Load')
end


Config.Clothes = "codem-appearance" -- fivem-appearance -- illenium-appearance -- codem-appearance -- esx_skin -- qb-clothing
function RefreshSkin()
    if Config.Clothes == 'fivem-appearance' then
        TriggerEvent("fivem-appearance:client:reloadSkin")
    end
    if Config.Clothes == 'illenium-appearance' then
        TriggerEvent("illenium-appearance:client:reloadSkin")
    end
    if Config.Clothes == 'codem-appearance' then
        TriggerEvent("codem-appearance:reloadSkin")
    end
    if Config.Clothes == 'esx_skin' then
        TriggerEvent("esx_skin:getLastSkin", function(lastSkin)
            TriggerEvent('skinchanger:loadSkin', lastSkin)
        end)
    end
    if Config.Clothes == 'qb-clothes' then
        TriggerEvent("qb-clothing:reloadSkin")
        --[[
            // Add this code in qb-clothing client/main.lua

            RegisterNetEvent("qb-clothing:reloadSkin")
            AddEventHandler("qb-clothing:reloadSkin", function()
                local playerPed = PlayerPedId()
                local health = GetEntityHealth(playerPed)
                reloadSkin(health)
            end)
        --]]
    end
end

Config.Keybinds = {
    ['ESC'] = false,
    ['F1'] = {
        desc = 'Opens the phone',
    },
    ['F2'] = false,
    ['F3'] = false,
    ['F4'] = false,
    ['F5'] = {
        desc = 'Opens the phone',
    },
    ['F6'] = false,
    ['F7'] = false,
    ['F8'] = false,
    ['F9'] = false,
    ['F10'] = false,
    ['F11'] = false,
    ['F12'] = false,
    ['“'] = false,
    ['1'] = false,
    ['2'] = false,
    ['3'] = false,
    ['4'] = false,
    ['5'] = false,
    ['6'] = false,
    ['7'] = false,
    ['8'] = false,
    ['9'] = false,
    ['0'] = false,
    ['-'] = false,
    ['+'] = false,
    ['BACKSPACE'] = false,
    ['TAB'] = false,
    ['Q'] = false,
    ['W'] = false,
    ['E'] = false,
    ['R'] = false,
    ['T'] = false,
    ['Y'] = false,
    ['U'] = false,
    ['I'] = false,
    ['O'] = false,
    ['P'] = false,
    ['['] = false,
    [']'] = false,
    ['CAPS'] = false,
    ['A'] = false,
    ['S'] = false,
    ['D'] = false,
    ['F'] = false,
    ['G'] = false,
    ['H'] = false,
    ['J'] = false,
    ['K'] = false,
    ['L'] = false,
    ['='] = false,
    ['@'] = false,
    ['ENTER'] = false,
    ['LEFTSHIFT'] = {
        desc = 'Opens the phone',
        combinationKey = 'F2',
        combinationDesc = 'Adjusts the mic radius', 
    },
    ['Z'] = false,
    ['X'] = false,
    ['C'] = false,
    ['V'] = false,
    ['B'] = false,
    ['N'] = false,
    ['M'] = false,
    ['<'] = false,
    ['>'] = false,
    ['?'] = false,
    ['RIGHTSHIFT'] = false,
    ['LEFTCTRL'] = false,
    ['LEFTALT'] = false,
    ['WINDOWS'] = false,
    ['SPACE'] = false,
    ['RIGHTALT'] = false,
    ['COPY'] = false,
    ['RIGHTCTRL'] = false,
}

Config.DailyAwardItems = {
    {
        amount = 5000,
        label = 'Cash',
        image = 'cash.png',
        type = 'money',
    },
    {
        name = 'water_bottle',
        label = 'Water',
        image = 'water.png',
        amount = 2,
        type = 'item',
    },
    {
        name = 'advancedrepairkit',
        label = 'Repair Kit',
        image = 'advancedkit.png',
        amount = 1,
        type = 'item',
    },
    {
        name = 'phone',
        label = 'Phone',
        image = 'samsungphone.png',
        amount = 1,
        type = 'item',
    },
    {
        name = 'water_bottle',
        label = 'Water',
        image = 'water.png',
        amount = 2,
        type = 'item',
    },
    {
        name = 'phone',
        label = 'Phone',
        image = 'samsungphone.png',
        amount = 1,
        type = 'item',
    },
    {
        amount = 5000,
        label = 'Cash',
        image = 'cash.png',
        type = 'money',
    },
    {
        name = 'water_bottle',
        label = 'Water',
        image = 'water.png',
        amount = 2,
        type = 'item',
    },
    {
        name = 'advancedrepairkit',
        label = 'Repair Kit',
        image = 'advancedkit.png',
        amount = 1,
        type = 'item',
    },
    {
        name = 'phone',
        label = 'Phone',
        image = 'samsungphone.png',
        amount = 1,
        type = 'item',
    },
    {
        name = 'water_bottle',
        label = 'Water',
        image = 'water.png',
        amount = 2,
        type = 'item',
    },
    {
        name = 'phone',
        label = 'Phone',
        image = 'samsungphone.png',
        amount = 1,
        type = 'item',
    },

    {
        name = 'advancedrepairkit',
        label = 'Repair Kit',
        image = 'advancedkit.png',
        amount = 1,
        type = 'item',
    },
    {
        name = 'phone',
        label = 'Phone',
        image = 'samsungphone.png',
        amount = 1,
        type = 'item',
    },
    {
        name = 'water_bottle',
        label = 'Water',
        image = 'water.png',
        amount = 2,
        type = 'item',
    },
    {
        name = 'phone',
        label = 'Phone',
        image = 'samsungphone.png',
        amount = 1,
        type = 'item',
    },

    {
        name = 'advancedrepairkit',
        label = 'Repair Kit',
        image = 'advancedkit.png',
        amount = 1,
        type = 'item',
    },
    {
        name = 'phone',
        label = 'Phone',
        image = 'samsungphone.png',
        amount = 1,
        type = 'item',
    },
    {
        name = 'water_bottle',
        label = 'Water',
        image = 'water.png',
        amount = 2,
        type = 'item',
    },
    {
        name = 'phone',
        label = 'Phone',
        image = 'samsungphone.png',
        amount = 1,
        type = 'item',
    },

    {
        name = 'advancedrepairkit',
        label = 'Repair Kit',
        image = 'advancedkit.png',
        amount = 1,
        type = 'item',
    },
    {
        name = 'phone',
        label = 'Phone',
        image = 'samsungphone.png',
        amount = 1,
        type = 'item',
    },
    {
        name = 'water_bottle',
        label = 'Water',
        image = 'water.png',
        amount = 2,
        type = 'item',
    },
    {
        name = 'phone',
        label = 'Phone',
        image = 'samsungphone.png',
        amount = 1,
        type = 'item',
    },
    {
        name = 'adder',
        label = 'Adder',
        image = 'Adder.png', -- check html/assets/car_images for more car images
        type = 'vehicle',
        garage = 'motelgarage', -- this option is adjusted for qb-core if you use another garage script you can type the garage name here

    },
    {
        name = 'adder',
        label = 'Adder',
        image = 'Adder.png', -- check html/assets/car_images for more car images
        type = 'vehicle',
        garage = 'motelgarage', -- this option is adjusted for qb-core if you use another garage script you can type the garage name here

    },

    {
        name = 'phone',
        label = 'Phone',
        image = 'samsungphone.png',
        amount = 1,
        type = 'item',
    },
}


Config.BattlepassDayCountDown = 30 -- When you launch codem-pausemenu on your server, battlepass will be activated and this option determines how many days battlepass should be active before resetting everybody's battlepass data
Config.FreeBattlepass = false -- This option makes battlepass free for everyone (if this set to true you don't have to make tebex integration)
Config.BattlepassMissionsPerDay = 6 -- [[

    -- Missions in codem-pausemenu's battlepass system are created from the Config.BattlepassMissions pool, and this option determines how many missions the system should get from the pool per day.
    -- Note : for example if this option is set to 6 and amount of missions in the pool is less than 6 then the script will generate a random number between 1 and maximum missions amount
--]]

Config.BattlepassMissions = {
    {
        id = 1,
        desc = 'Eat any 5 food',
        repeatAmount = 5,
        xpAmount = 1000,
        func = function(_self)
            if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
                  
                RegisterNetEvent('esx_basicneeds:onUse')
                AddEventHandler('esx_basicneeds:onUse', function(type)
                    if type == 'food' then
                        TriggerServerEvent('codem-pausemenu:AddBattlepassMissionProgress', _self.id)
                    end
                end)
            else
                RegisterNetEvent('consumables:client:Eat')
                AddEventHandler('consumables:client:Eat', function()
                    TriggerServerEvent('codem-pausemenu:AddBattlepassMissionProgress', _self.id)
                end)
            end
        end,
    },
    {
        id = 2,
        desc = 'Drink something 3 times',
        repeatAmount = 3,
        xpAmount = 1000,
        func = function(_self)
            if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
                RegisterNetEvent('esx_basicneeds:onUse')
                AddEventHandler('esx_basicneeds:onUse', function(type)
                    if type == 'drink' then
                        TriggerServerEvent('codem-pausemenu:AddBattlepassMissionProgress', _self.id)
                    end
                end)
            else
                RegisterNetEvent('consumables:client:Drink')
                AddEventHandler('consumables:client:Drink', function()
                    TriggerServerEvent('codem-pausemenu:AddBattlepassMissionProgress', _self.id)
                end)
            end
        end,
    },
    {
        id = 3,
        desc = 'Drive for 5 km',
        repeatAmount = 5,
        xpAmount = 1000,
        func = function(_self)
            local lastCoords
            CreateThread(function()
                while true do
                    local player = PlayerPedId()
                    local veh = GetVehiclePedIsIn(player)
                    if veh ~= 0 then
                        local coords = GetEntityCoords(player)
                        if IsVehicleOnAllWheels(veh) then
                            if not lastCoords then
                                lastCoords = GetEntityCoords(player)
                            end
                            local dst = #(coords - lastCoords)
                            TriggerServerEvent('codem-pausemenu:AddBattlepassMissionProgress', _self.id, math.floor(dst*1.33)/1000)
                            lastCoords = GetEntityCoords(player)
                        end
                    end
                    Wait(3000)
                end
            end)
        end,
    },
    {
        id = 4,
        desc = 'Drive for an hour',
        repeatAmount = 60,
        xpAmount = 1000,
        func = function(_self)
            local drivingSeconds = 0
            CreateThread(function()
                while true do
                    local player = PlayerPedId()
                    local veh = GetVehiclePedIsIn(player)
                    if veh ~= 0 then
                        if GetEntitySpeed(veh) > 0 then
                            drivingSeconds = drivingSeconds + 1
                            if drivingSeconds > 60 then
                                drivingSeconds = 0
                                TriggerServerEvent('codem-pausemenu:AddBattlepassMissionProgress', _self.id, 1)
                            end
                        end
                    end
                    Wait(1000)
                end
            end)
        end,
    },
    {
        id = 5,
        desc = 'Drive at 140 km/h or more for 3 minutes',
        repeatAmount = 3,
        xpAmount = 1000,
        func = function(_self)
            local drivingSeconds = 0

            CreateThread(function()
                while true do
                    local player = PlayerPedId()
                    local veh = GetVehiclePedIsIn(player)
                    if veh ~= 0 then
                        local speed = GetEntitySpeed(veh) * 3.6
                        if speed > 140 then
                            drivingSeconds = drivingSeconds + 1
                            if drivingSeconds > 60 then
                                drivingSeconds = 0
                                TriggerServerEvent('codem-pausemenu:AddBattlepassMissionProgress', _self.id)
                            end
                        end
                    end
                    Wait(1000)
                end
            end)
        end,
    },
    {
        id = 6,
        desc = 'Walk or run for 2km',
        repeatAmount = 2,
        xpAmount = 1000,
        func = function(_self)
            local lastCoords
            CreateThread(function()
                while true do
                    local player = PlayerPedId()
                    local coords = GetEntityCoords(player)
                    if IsPedRunning(player) or IsPedWalking(player) or IsPedSprinting(player) and not IsPedInAnyVehicle(player) then
                        if not lastCoords then
                            lastCoords = GetEntityCoords(player)
                        end
                        local dst = #(coords - lastCoords)
                        TriggerServerEvent('codem-pausemenu:AddBattlepassMissionProgress', _self.id, math.floor(dst*1.33)/1000)
                        lastCoords = GetEntityCoords(player)
                    end
                    Wait(3000)
                end
            end)
        end,
    },
}

Config.BattlepassItems = {
    {
        amount = 5000,
        label = 'Cash',
        image = 'cash.png',
        type = 'money',
        requiredXP = 1000,
        level = 1,
        premium = false,
    },
    {
        name = 'water_bottle',
        label = 'Water',
        image = 'water.png',
        amount = 2,
        type = 'item',
        requiredXP = 1500,
        level = 2,
        premium = true,
    },
    {
        name = 'advancedrepairkit',
        label = 'Repair Kit',
        image = 'advancedkit.png',
        amount = 1,
        type = 'item',
        requiredXP = 2000,
        level = 3,
        premium = true,
    },
    {
        name = 'weapon_pistol',
        label = 'Pistol',
        image = 'advancedkit.png',
        amount = 1,
        type = 'weapon',
        requiredXP = 1000,
        level = 4,
        premium = false,
    },
    {
        name = 'adder',
        label = 'Adder',
        image = 'Adder.png', -- check html/assets/car_images for more car images
        type = 'vehicle',
        garage = 'motelgarage', -- this option is adjusted for qb-core if you use another garage script you can type the garage name here
        requiredXP = 2000,
        level = 5,
        premium = true,
    },
}

Config.MainStoreItems = {
    {
        header = 'ABIGAIL MANOR',
        label = 'CUSTOM BUILD MLO',
        desc = 'This MLO incluedes 1 Helipad, 21 custom made room, custom interiors, 1 king size garage, beautiful LS view, 1 pool with 1 jakuzi. 123 yard outdoor. Good for large families.',
        price = 1250000,
        itemtype = 'house',
        small_image = 'manor.png',
        big_image = 'manor.png',

    },
    {
        header= 'Tennis',
        label= 'Beach',
        price = 10000,
        itemtype = 'ped',
        name = 'a_f_y_tennis_01',
        big_image = 'store-right-item-big.png',
        small_image = 'store-right-item.png',

    },
    {
        header= 'Afriamer',
        label= 'Beach',
        price = 1000,
        itemtype = 'ped',
        name = 'a_m_m_afriamer_01',
        big_image = 'store-right-item-big.png',
        small_image = 'store-right-item.png',

    },
    {
        header= 'Tennis',
        label= 'Beach',
        price = 2000,
        itemtype = 'ped',
        name = 'a_f_y_tennis_01',
        big_image = 'store-right-item-big.png', 
        small_image = 'store-right-item.png',

    },
}

Config.StoreItems = {
    {
        name= 'vehicles',
        label= 'VEHICLES',
        searchPlaceholder= 'Search any vehicle...',
        items= {
            {
                header= 'Adder',
                label= 'Adder',
                name = 'adder',
                price= 320000,
                category= 'super',
                itemtype = 'vehicle',
                garage = 'SanAndreasAvenue', -- this option is adjusted for esx_garage if you use another garage script you can type the garage name here
            },
            {
                header= 'Frogger',
                label= 'Frogger',
                name = 'frogger',
                helicopter = true,
                price= 20000,
                category= 'super',
                itemtype = 'vehicle',
                garage = 'motelgarage', -- this option is adjusted for qb-core if you use another garage script you can type the garage name here
            },
            {
                header= 'BMW',
                label= 'v430',
                name = 'bmw420',
                price= 220000,
                image= './assets/images/car.png',
                category= 'super',
                itemtype = 'vehicle',
                garage = 'motelgarage', -- this option is adjusted for qb-core if you use another garage script you can type the garage name here
            },
            {
                header= 'BMW',
                label= 'v450',
                name = 'bmw420',
                price= 320000,
                image= './assets/images/car.png',
                category= 'sedan',
                itemtype = 'vehicle',
                garage = 'motelgarage', -- this option is adjusted for qb-core if you use another garage script you can type the garage name here
            },
            {
                header= 'BMW',
                label= 'v450',
                name = 'bmw420',
                price= 320000,
                image= './assets/images/car.png',
                category= 'sedan',
                itemtype = 'vehicle',
                garage = 'motelgarage', -- this option is adjusted for qb-core if you use another garage script you can type the garage name here
            },
            {
                header= 'BMW',
                label= 'v250',
                name = 'bmw420',
                price= 220000,
                image= './assets/images/car.png',
                category= 'motorcycle',
                itemtype = 'vehicle',
                garage = 'motelgarage', -- this option is adjusted for qb-core if you use another garage script you can type the garage name here
            },
            {
                header= 'BMW',
                label= 'v250',
                name = 'bmw420',
                price= 120000,
                image= './assets/images/car.png',
                category= 'motorcycle',
                itemtype = 'vehicle',
                garage = 'motelgarage', -- this option is adjusted for qb-core if you use another garage script you can type the garage name here
            },

        },
        categories= {
            {
                name= 'all',
                label= 'All Vehicles'
            },
            {
                name= 'super',
                label= 'Super Import Vehicles'
            },
            {
                name= 'sedan',
                label= 'Sedan Import Vehicles'
            },
            {
                name= 'motorcycle',
                label= 'Motorcycle Import Vehicles'
            },
            {
                name= 'van',
                label= 'VAN Import Vehicles'
            },
            {
                name= 'sport',
                label= 'Sport Import Vehicles'
            },
        },
    },
    {
        name= 'peds',
        label= 'PED’s',
        searchPlaceholder= 'Search any ped...',
        items= {
            {
                header= 'Tennis',
                label= 'Beach',
                name = 'a_f_y_tennis_01',
                price= 10000,
                category= 'ambient_female',
                itemtype = 'ped',

            },
            {
                header= 'Afriamer',
                label= '',
                name = 'a_m_m_afriamer_01',
                price= 20000,
                category= 'ambient_male',
                itemtype = 'ped',
            },
            {
                header= 'Custom',
                label= 'Male',
                name = 'a_f_m_bodybuild_01',
                price= 220000,
                category= 'custom',
                itemtype = 'ped',
            },
            {
                header= 'Scenario',
                label= 'Male',
                name = 'a_f_m_bodybuild_01',
                price= 220000,
                category= 'scenario_male',
                itemtype = 'ped',
            },
            {
                header= 'Scenario',
                label= 'Female',
                name = 'a_f_m_bodybuild_01',
                price= 220000,
                category= 'scenario_female',
                itemtype = 'ped',
            },
          

        },
        categories= {
            {
                name= 'all',
                label= 'All PED’s'
            },
            {
                name= 'custom',
                label= 'Custom PED’s'
            },
            {
                name= 'ambient_male',
                label= 'Ambient Male'
            },
            {
                name= 'ambient_female',
                label= 'Ambient Female'
            },
            {
                name= 'scenario_male',
                label= 'Scenario Male'
            },
            {
                name= 'scenario_female',
                label= 'Scenario Female'
            },
            {
                name= 'mypeds',
                label= 'My PED’s'
            },
        },
    },
    {
        name= 'weapons',
        label= 'WEAPONS',
        searchPlaceholder= 'Search any weapon...',
        items= {
            {
                header= 'Assault Rifle',
                label= '7.62mm',
                name = 'weapon_assaultrifle',
                price= 20000,
                image = './assets/item_images/weapon.png',
                category= 'assault',
                itemtype = 'weapon',
            },
            {
                header= 'Micro SMG',
                label= '5.56mm',
                name = 'weapon_microsmg',
                price= 22000,
                category= 'smg',
                itemtype = 'weapon',
            },
            {
                header= 'LMG',
                label= '5.56mm',
                name = 'weapon_mg',
                price= 220000,
                category= 'lmg',
                itemtype = 'weapon',
            },
            {
                header= 'Pistol',
                label= '9mm',
                name = 'weapon_pistol',
                price= 2000,
                
                category= 'pistol',
                itemtype = 'weapon',
            },
        },
        categories= {
            {
                name= 'all',
                label= 'All Weapons'
            },
            {
                name= 'custom',
                label= 'Custom Weapons'
            },
            {
                name= 'assault',
                label= 'Assault Rifles'
            },
            {
                name= 'smg',
                label= 'SMG’s'
            },
            {
                name= 'lmg',
                label= 'LMG’s'
            },
            {
                name= 'pistol',
                label= 'Pistols'
            },
        },
    },

    {
        name= 'mlo',
        label= 'MLO’s',
        searchPlaceholder= 'Search any MLO...',
        items= {
            {
                header= 'Apartment',
                label= 'Venice Beach',
                price= 20000,
                image= './assets/images/manor-img.png',
                category= 'villa',
                itemtype = 'house',
            },
            {
                header= 'Apartment',
                label= 'Venice Beach',
                price= 20000,
                image= './assets/images/manor-img.png',
                category= 'apartment',
                itemtype = 'house',
            },
            {
                header= 'Apartment',
                label= 'Venice Beach',
                price= 20000,
                image= './assets/images/manor-img.png',
                category= 'mansion',
                itemtype = 'house',
            },
            {
                header= 'Apartment',
                label= 'Venice Beach',
                price= 20000,
                image= './assets/images/manor-img.png',
                category= 'mansion',
                itemtype = 'house',
            },
        },
        categories= {
            {
                name= 'all',
                label= 'All MLO’s'
            },
            {
                name= 'villa',
                label= 'Villas'
            },
            {
                name= 'apartment',
                label= 'Apartments'
            },
            {
                name= 'mansion',
                label= 'Mansions'
            },
            {
                name= 'store',
                label= 'Stores'
            },
            {
                name= 'businesses',
                label= 'Businesses'
            },
        },
    },
    {
        name= 'other',
        label= 'OTHER',
        searchPlaceholder= 'Search anything...',
        items = {},
        categories= {},
    },
    {
        name= 'hotdeals',
        label= 'HOT DEALS',
        searchPlaceholder= 'Search anything...',
        items = {
            {
                header= 'LMG',
                label= '5.56mm',
                name = 'weapon_mg',
                price= 22000,
                category= 'weapons',
                itemtype = 'weapon',
            },
            {
                header= 'Apartment',
                label= 'Venice Beach',
                price= 2000,
                image= './assets/images/manor-img.png',
                category= 'mlo',
                itemtype = 'house',
            },
            {
                header= 'Apartment',
                label= 'Venice Beach',
                price= 2000,
                image= './assets/images/manor-img.png',
                category= 'apartment',
                itemtype = 'house',
            },
           
            {
                header= 'Pistol',
                label= '9mm',
                name = 'weapon_pistol',
                price= 200,
                category= 'weapons',
                itemtype = 'weapon',
            },
            {
                header= 'Scenario',
                label= 'Male',
                name = 'a_f_m_bodybuild_01',
                price= 22000,
                category= 'scenario_male',
                itemtype = 'ped',
            },
        },
        categories= {
            {
                name= 'all',
                label= 'All Deals'
            },
            {
                name= 'peds',
                label= 'Peds'
            },
            {
                name= 'items',
                label= 'Items'
            },
            {
                name= 'mlo',
                label= 'MLO’s'
            },
            {
                name= 'weapons',
                label= 'Weapons'
            },
            
        },
    },
}

Config.Notify = function(message)
    if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
        TriggerEvent("esx:showNotification", message)
    else
        TriggerEvent('QBCore:Notify', message, "success", 1500)
    end
end