function GiveItem(source, itemname, amount)
    local Player = GetPlayer(source)
    if Player then
        if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
            Player.addInventoryItem(itemname, amount)
        else
            Player.Functions.AddItem(itemname, amount)
        end
    end
end

function GiveMoney(source, amount)
    local Player = GetPlayer(source)
    if Player then
        if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
            Player.addMoney(amount)
        else
            Player.Functions.AddMoney('cash', amount)
        end
    end
end

function GiveWeapon(source, name, amount)
    local Player = GetPlayer(source)
    if Player then
        if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
            for i=1, amount do
                Player.addWeapon(name, 0)
            end
        else
            Player.Functions.AddItem(name, amount)
        end
    end
end

function GiveVehicle(source, name, garage, helicopter)
    local Player = GetPlayer(source)
    local identifier = GetIdentifier(source)
    local plate = GeneratePlate()
    local vehicleProps = GetVehicleProperties(name, plate, helicopter)
    if identifier then
        if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
            garage = garage or 'SanAndreasAvenue'
    
            local error, message = pcall(function()
                ExecuteSql(string.format("INSERT INTO owned_vehicles (owner, plate, vehicle, stored, parking) VALUES ('%s', '%s', %q, %f, '%s')", identifier, plate, json.encode(vehicleProps), 1, garage))
            end)
            if error then
                ExecuteSql(string.format("INSERT INTO owned_vehicles (owner, plate, vehicle) VALUES ('%s', '%s', %q)", identifier, plate, json.encode(vehicleProps)))
            end
        else
            garage = garage or 'motelgarage'
            ExecuteSql(string.format("INSERT INTO `player_vehicles` (license, citizenid, vehicle, hash, mods, plate, garage) VALUES ('%s', '%s', '%s', '%s', %q, '%s', '%s')",
            Player.PlayerData.license, identifier, name, GetHashKey(name), json.encode(vehicleProps),  plate, garage))
        end
    end
end

 function Round(value, numDecimalPlaces)
	if numDecimalPlaces then
		local power = 10^numDecimalPlaces
		return math.floor((value * power) + 0.5) / (power)
	else
		return math.floor(value + 0.5)
	end
end

function GetVehicleProperties(name, plate, helicopter)
    local extras = {}
    for i=1, 12 do
        extras[i] = false
    end
    if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
      
        local defaultProps = {
			model             = GetHashKey(name),
			plate             = plate,
			plateIndex        = 0,

			bodyHealth        = Round(1000, 1),
			engineHealth      = Round(1000, 1),
			tankHealth        = Round(1000, 1),

			fuelLevel         = Round(100, 1),
			dirtLevel         = Round(0, 1),
			color1            = 0,
            color1Custom =  {255, 255, 255},

			color2            = 0,
		    color2Custom      = {255, 255, 255},

            color1Type = 0,
            color2Type = 0,
			customPrimaryColor = {255, 255, 255},
			customSecondaryColor = {255, 255, 255},

			pearlescentColor  = 111,
			wheelColor        = 156,

			wheels            = 0,
			windowTint        = -1,
			xenonColor        = 255,

			neonEnabled       = {
				false,
				false,
				false,
				false
			},

			neonColor         = {255,0,255},
			extras            = extras,
			tyreSmokeColor    = {255,255,255},
            dashboardColor    = 0,
            interiorColor     = 0,
			modSpoilers       = -1,
			modFrontBumper    = -1,
			modRearBumper     = -1,
			modSideSkirt      = -1,
			modExhaust        = -1,
			modFrame          = -1,
			modGrille         = -1,
			modHood           = -1,
			modFender         = -1,
			modRightFender    = -1,
			modRoof           = -1,

			modEngine         = -1,
			modBrakes         = -1,
			modTransmission   = -1,
			modHorns          = -1,
			modSuspension     = -1,
			modArmor          = -1,

			modTurbo          = false,
			modSmokeEnabled   = false,
			modXenon          = false,

			modFrontWheels    = -1,
			modBackWheels     = -1,

			modPlateHolder    = -1,
			modVanityPlate    = -1,
			modTrimA          = -1,
			modOrnaments      = -1,
			modDashboard      = -1,
			modDial           = -1,
			modDoorSpeaker    = -1,
			modSeats          = -1,
			modSteeringWheel  = -1,
			modShifterLeavers = -1,
			modAPlate         = -1,
			modSpeakers       = -1,
			modTrunk          = -1,
			modHydrolic       = -1,
			modEngineBlock    = -1,
			modAirFilter      = -1,
			modStruts         = -1,
			modArchCover      = -1,
			modAerials        = -1,
			modTrimB          = -1,
			modTank           = -1,
			modWindows        = -1,
			modDoorR          = -1,
			modLivery         = -1,
			modLightbar       = -1,
            livery            = -1,
		}
        if helicopter  then
            defaultProps.liveryRoof = -1
            defaultProps.extras = {
                ["1"] = true,
                ["2"] = true,
                ["7"] = true,
            }
            defaultProps.windowStatus = {
                ["1"] = true,
                ["2"] = true,
                ["3"] = true,
                ["4"] = true,
                ["5"] = true,
                ["6"] = true,
                ["7"] = false,
                ["0"] = true,
            }
        end
        return defaultProps
    else
        local defaultProps = {
            model = GetHashKey(name),
            plate = plate,
			plateIndex        = 0,
			bodyHealth        = Round(1000,  0.1),
			engineHealth      = Round(1000,  0.1),
			tankHealth        = Round(1000,  0.1),
			fuelLevel         = Round(100, 0.1),
			dirtLevel         = Round(0, 0.1),

			color1            = 0,
			color2            = 0,

			pearlescentColor  = 111,
			wheelColor        = 156,
            dashboardColor    = 0,
            interiorColor     = 0,
			wheels            = 0,
			windowTint        = -1,
			xenonColor        = 255,
            neonEnabled = {
                false,
                false,
                false,
                false
            },
			neonColor         = {255,0,255},
			extras            = extras,
			tyreSmokeColor    = {255,255,255},
            modSpoilers = -1,
            modFrontBumper = -1,
            modRearBumper = -1,
            modSideSkirt = -1,
            modExhaust = -1,
            modFrame = -1,
            modGrille =-1,
            modHood = -1,
            modFender = -1,
            modRightFender = -1,
            modRoof =-1,
            modEngine = -1,
            modBrakes = -1,
            modTransmission = -1,
            modHorns = -1,
            modSuspension = -1,
            modArmor = -1,
            modTurbo = false,
            modSmokeEnabled = false,
            modXenon = false,
            modFrontWheels = -1,
            modBackWheels =-1,
            modCustomTiresF = false,
            modCustomTiresR = false,
            modPlateHolder = -1,
            modVanityPlate = -1,
            modTrimA = -1,
            modOrnaments = -1,
            modDashboard = -1,
            modDial = -1,
            modDoorSpeaker = -1,
            modSeats = -1,
            modSteeringWheel = -1,
            modShifterLeavers = -1,
            modAPlate = -1,
            modSpeakers = -1,
            modTrunk = -1,
            modHydrolic = -1,
            modEngineBlock = -1,
            modAirFilter = -1,
            modStruts = -1,
            modArchCover = -1,
            modAerials = -1,
            modTrimB = -1,
            modTank = -1,
            modWindows = -1,
            modLivery = 0,
        }
        if helicopter  then
            defaultProps.liveryRoof = -1
            defaultProps.extras = {
                ["1"] = true,
                ["2"] = true,
                ["7"] = true,
            }
            defaultProps.windowStatus = {
                ["1"] = true,
                ["2"] = true,
                ["3"] = true,
                ["4"] = true,
                ["5"] = true,
                ["6"] = true,
                ["7"] = false,
                ["0"] = true,
            }
        end

        return defaultProps
    end
end

local StringCharset = {}
local NumberCharset = {}

for i = 48,  57 do NumberCharset[#NumberCharset+1] = string.char(i) end
for i = 65,  90 do StringCharset[#StringCharset+1] = string.char(i) end
for i = 97, 122 do StringCharset[#StringCharset+1] = string.char(i) end

function RandomStr(length)
    if length <= 0 then return '' end
    return RandomStr(length - 1) .. StringCharset[math.random(1, #StringCharset)]
end

function RandomInt(length)
    if length <= 0 then return '' end
    return RandomInt(length - 1) .. NumberCharset[math.random(1, #NumberCharset)]
end


function GeneratePlate()
    local tableName = 'player_vehicles'
    local plate = RandomInt(1) .. RandomStr(2) .. RandomInt(3) .. RandomStr(2)

    if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
        tableName = 'owned_vehicles'
		plate = RandomStr(3) .. ' ' .. RandomInt(3)
    end
    plate = plate:upper()
    local result =  ExecuteSql(string.format("SELECT plate FROM %s WHERE plate = '%s'", tableName, plate))
    if result[1] then
        return GeneratePlate()
    else
        return plate:upper()
    end
end

