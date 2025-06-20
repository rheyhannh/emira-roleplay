Citizen.CreateThread(function()
    
    local Config = Config or {}

Config.Stores = {
    [1] = {shopType   = 'clothing', coords = vector3(1693.32, 4823.48, 41.06)},
    [2] = {shopType   = 'clothing', coords = vector3(-712.215881, -155.352982, 37.4151268)},
    [3] = {shopType   = 'clothing', coords = vector3(-1192.94495, -772.688965, 17.3255997)},
    [4] = {shopType   = 'clothing', coords = vector3(425.236, -806.008, 28.491)},
    [5] = {shopType   = 'clothing', coords = vector3(-162.658, -303.397, 38.733)},
    [6] = {shopType   = 'clothing', coords = vector3(75.950, -1392.891, 28.376)},
    [7] = {shopType   = 'clothing', coords = vector3(-822.194, -1074.134, 10.328)},
    [8] = {shopType   = 'clothing', coords = vector3(-1450.711, -236.83, 48.809)},
    [9] = {shopType   = 'clothing', coords = vector3(4.254, 6512.813, 30.877)},
    [10] = {shopType   = 'clothing', coords = vector3(615.180, 2762.933, 41.088)},
    [11] = {shopType   = 'clothing', coords = vector3(1196.785, 2709.558, 37.222)},
    [12] = {shopType  = 'clothing', coords = vector3(-3171.453, 1043.857, 19.863)},
    [13] = {shopType  = 'clothing', coords = vector3(-1100.959, 2710.211, 18.107)},
    [14] = {shopType  = 'clothing', coords = vector3(-1207.65, -1456.88, 4.3784737586975)},
    [15] = {shopType  = 'clothing', coords = vector3(121.76, -224.6, 53.56)},
    [16] = {shopType  = 'barber', coords = vector3(-814.3, -183.8, 36.6)},
    [17] = {shopType  = 'barber', coords = vector3(136.8, -1708.4, 28.3)},
    [18] = {shopType  = 'barber', coords = vector3(-1282.6, -1116.8, 6.0)},
    [19] = {shopType  = 'barber', coords = vector3(1931.5, 3729.7, 31.8)},
    [20] = {shopType  = 'barber', coords = vector3(1212.8, -472.9, 65.2)},
    [21] = {shopType  = 'barber', coords = vector3(-32.9, -152.3, 56.1)},
    [22] = {shopType  = 'barber', coords = vector3(-278.1, 6228.5, 30.7)},
    [23] = {shopType  = 'tattoo', coords = vector3(1322.6, -1651.9, 51.2)},
    [24] = {shopType  = 'tattoo', coords = vector3(-1154.01, -1425.31, 4.95)},
    [25] = {shopType  = 'tattoo', coords = vector3(322.62, 180.34, 103.59)},
    [26] = {shopType  = 'tattoo', coords = vector3(-3169.52, 1074.86, 20.83)},
    [27] = {shopType  = 'tattoo', coords = vector3(1864.1, 3747.91, 33.03)},
    [28] = {shopType  = 'tattoo', coords = vector3(-294.24, 6200.12, 31.49)},
}

    for k, _ in pairs (Config.Stores) do
        if Config.Stores[k].shopType == "clothing" then
            local clothingShop = AddBlipForCoord(Config.Stores[k].coords)
            SetBlipSprite(clothingShop, 366)
            SetBlipColour(clothingShop, 47)
            SetBlipScale (clothingShop, 0.7)
            SetBlipAsShortRange(clothingShop, true)
            BeginTextCommandSetBlipName("STRING")
            AddTextComponentString("Clothing Shop")
            EndTextCommandSetBlipName(clothingShop)
        end

        if Config.Stores[k].shopType == "barber" then
            local barberShop = AddBlipForCoord(Config.Stores[k].coords)
            SetBlipSprite(barberShop, 71)
            SetBlipColour(barberShop, 0)
            SetBlipScale (barberShop, 0.7)
            SetBlipAsShortRange(barberShop, true)
            BeginTextCommandSetBlipName("STRING")
            AddTextComponentString("Barber Shop")
            EndTextCommandSetBlipName(barberShop)
        end

        if Config.Stores[k].shopType == "tattoo" then
            local tattooShop = AddBlipForCoord(Config.Stores[k].coords)
            SetBlipSprite(tattooShop, 75)
            SetBlipColour(tattooShop, 1)
            SetBlipScale  (tattooShop, 0.7)
            SetBlipAsShortRange(tattooShop, true)
            BeginTextCommandSetBlipName("STRING")
            AddTextComponentString("Tattoo Shop")
            EndTextCommandSetBlipName(tattooShop)
        end
    end
end)