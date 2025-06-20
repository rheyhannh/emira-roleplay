# Karma Developments - Clothing System 4.0

# THE LATEST UPDATE 3.0 IS AT THE END OF THE DOCUMENT [CLOTHES FIX + APPLY CLOTHES JOBS + PEDS WITH PERMS]


- Hello, first of all thank you for purchasing our script !
- Don't forget to configure the shared/config.js file according to your server.
- Feel free to open a support ticket to resolve your problem/question. - Karma Developments - 
- Please do not forget to run our `clothing.sql` (it will add some tables at playerskins and create 2 new db)

## Getting Started

Please, to avoid any problem add the following resources to your `server.cfg`:

ensure karma-library 
ensure karma-polyzone
ensure karma-outfits
ensure karma-clothing

## If your 'qb-core' folder is with a different name

Please, verify the config.lua and config.js and put your folder on the CoreFolder (config.js) or on the FrameworkFolder (config.lua)


## Helpful Commands

/outfits - Open the outfits menu. ( This is only on DEV )
/clothing - Open the clothing menu. ( This is only on DEV )
/barber - Visit the Barber for a haircut. ( This is only on DEV )
/tattoo - Visit the Tattoo Shops for tattoos. ( This is only on Dev )

- If you want to remove the Peds from the Clothing System, please just ask on the ticket so we can help you ;)


## For QB-SPAWN Users

- If you're using QB-SPAWN, here's how you can load the player's clothing and appearance:

# Important: Make sure to remove or comment out login:getCharModels from the server-side of qb-spawn.
    
```lua
    -- [CLIENT SIDE] || [CLIENT SIDE] || [CLIENT SIDE]
    function Login.LoadPed(ped, data, model)
        model = model ~= nil and tonumber(model) or false
        CreateThread(function()
            RequestModel(model)
            while not HasModelLoaded(model) do
                Wait(0)
            end
            SetPlayerModel(PlayerId(), model)
            SetPedComponentVariation(ped, 0, 0, 0, 2)
            TriggerEvent('qb-clothing:client:loadPlayerClothing', data, ped)
        end)
        return
    end
```

# If you want to add new Images of a Custom Clothing :

- Download the Fivem Green Screener at : https://github.com/Bentix-cs/fivem-greenscreener
- Take a picture of your image, and upload it on `web/dist/clothing/`




██╗░░░██╗██████╗░██████╗░░█████╗░████████╗███████╗
██║░░░██║██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
██║░░░██║██████╔╝██║░░██║███████║░░░██║░░░█████╗░░
██║░░░██║██╔═══╝░██║░░██║██╔══██║░░░██║░░░██╔══╝░░
╚██████╔╝██║░░░░░██████╔╝██║░░██║░░░██║░░░███████╗
░╚═════╝░╚═╝░░░░░╚═════╝░╚═╝░░╚═╝░░░╚═╝░░░╚══════╝

# Update 3.2 Fix Clothing Bugs + Apply clothings (jobs/jail/etc...) + Peds with users perms

In this update we fixed most of the bugs present in the clothing system.
If you identify any bug please open a ticket so we can fix it :)



█▀▀ █▀▀█ █░░ 　 █▀▀ █░░█ █▀▀█ █▀▀▄ █▀▀▀ █▀▀ █▀▀ 
▀▀█ █░░█ █░░ 　 █░░ █▀▀█ █▄▄█ █░░█ █░▀█ █▀▀ ▀▀█ 
▀▀▀ ▀▀▀█ ▀▀▀ 　 ▀▀▀ ▀░░▀ ▀░░▀ ▀░░▀ ▀▀▀▀ ▀▀▀ ▀▀▀

# !!!!!!!!!!! IMPORTANT NOTE !!!!!!!!!!! #

This update for sql is only for previous costumers which bought it before this new update 3.2, if you bought it after YOU CAN SKIP THIS AND JUST INSERT THE DATABASE NORMALY (THE FILE ´clothing.sql´) AND CONTINUE IN "APPLY CLOTHES" SECTION!!!

If you have some knowledge of sql you can simply add a new column model_name to the playerskins database:

  `model_name` varchar(50) DEFAULT NULL,

If you don't, you have to drop the corrent playerskins database and update for the following:


```sql

CREATE TABLE IF NOT EXISTS `playerskins` (
  `id` int(25) NOT NULL AUTO_INCREMENT,
  `citizenid` varchar(255) DEFAULT NULL,
  `model` varchar(50) NOT NULL DEFAULT '',
  `model_name` varchar(50) DEFAULT NULL,
  `drawables_texture` text NOT NULL,
  `props_texture` text NOT NULL,
  `hairColor` text NOT NULL,
  `fadeLayer` text DEFAULT '0',
  `customHeadModel` tinyint(4) NOT NULL DEFAULT 0,
  `skin` text NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=182 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

```



█▀▀█ █▀▀█ █▀▀█ █░░ █░░█ 　 █▀▀ █░░ █▀▀█ ▀▀█▀▀ █░░█ █▀▀ █▀▀ 
█▄▄█ █░░█ █░░█ █░░ █▄▄█ 　 █░░ █░░ █░░█ ░░█░░ █▀▀█ █▀▀ ▀▀█ 
▀░░▀ █▀▀▀ █▀▀▀ ▀▀▀ ▄▄▄█ 　 ▀▀▀ ▀▀▀ ▀▀▀▀ ░░▀░░ ▀░░▀ ▀▀▀ ▀▀▀



In this update you can now apply clothes [file: "apply_clothes.lua] directly to the player for example in cases like qb-prison where when the players go to jail it applies clothes for the prisioner. 
For this you need to change in every script you want to apply directly the clothes from:

# TriggerEvent('qb-clothing:client:loadOutfit')

to 

# TriggerEvent('qb-clothing:client:loadOutfit_Karma_Adapted')

# !!! IF YOU DON'T UPDATE THE EVENT IT WILL NOT WORK !!!

in the file we leave the following command for you to test this event, remember to delete this command if you don't want to have it in your server:

# "test_outfit_prison"

```lua

RegisterCommand('test_outfit_prison',function()

    TriggerEvent('qb-clothing:client:loadOutfit_Adapted',
    {
        ['t-shirt'] = { item = 15, texture = 0 },
        ['torso2'] = { item = 345, texture = 0 },
        ['arms'] = { item = 19, texture = 0 },
        ['pants'] = { item = 3, texture = 7 },
        ['shoes'] = { item = 1, texture = 0 },
    })
    
end)

```


█▀▀█ █▀▀ █▀▀▄ █▀▀ 　 █▀▀█ █░░ █▀▀█ █░░█ █▀▀ █▀▀█ 　 █░░░█ █░░█ ░▀░ ▀▀█▀▀ █▀▀ █░░ ░▀░ █▀▀ ▀▀█▀▀ 
█░░█ █▀▀ █░░█ ▀▀█ 　 █░░█ █░░ █▄▄█ █▄▄█ █▀▀ █▄▄▀ 　 █▄█▄█ █▀▀█ ▀█▀ ░░█░░ █▀▀ █░░ ▀█▀ ▀▀█ ░░█░░ 
█▀▀▀ ▀▀▀ ▀▀▀░ ▀▀▀ 　 █▀▀▀ ▀▀▀ ▀░░▀ ▄▄▄█ ▀▀▀ ▀░▀▀ 　 ░▀░▀░ ▀░░▀ ▀▀▀ ░░▀░░ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ░░▀░░


In this update we also implemented a new config part in the end of the [file: config.js] where you can whitelist players by his fivem license, citizen id and in the:

Players in this list will be able to use others peds besides the default "male [mp_m_freemode_01] and female [mp_f_freemode_01]"


// You can either insert the license or citizenid [One of them or you can use mixed]
["WhitelistedPedUsers"] : [
    "license:60xxxxxxxxxxxxxxxxxxxxxxxxx02", // Add here fivem licenses
    "license:60xxxxxxxxxxxxxxxxxxxxxxxxx01", // Add here fivem licenses
    "14340377", // Add here citizenid for QB Core
    "14340372" // Add here citizenid for QB Core
]



█▀▄▀█ █░░█ █░░ ▀▀█▀▀ ░▀░ █▀▀ █▀▀█ █▀▀█ █▀▀█ █▀▀ █░░█ ▀▀█▀▀ █▀▀ █▀▀█ 　 █▀▀ █░░█ █▀▀█ █▀▀▄ █▀▀▀ █▀▀ █▀▀ 
█░▀░█ █░░█ █░░ ░░█░░ ▀█▀ █░░ █▄▄█ █▄▄▀ █▄▄█ █░░ █▀▀█ ░░█░░ █▀▀ █▄▄▀ 　 █░░ █▀▀█ █▄▄█ █░░█ █░▀█ █▀▀ ▀▀█ 
▀░░░▀ ░▀▀▀ ▀▀▀ ░░▀░░ ▀▀▀ ▀▀▀ ▀░░▀ ▀░▀▀ ▀░░▀ ▀▀▀ ▀░░▀ ░░▀░░ ▀▀▀ ▀░▀▀ 　 ▀▀▀ ▀░░▀ ▀░░▀ ▀░░▀ ▀▀▀▀ ▀▀▀ ▀▀▀




In this update we also implemented a new Config for which Multi Character Script you are using, for that please choose one of the following options in config.lua for the one you are currently using (if you use a different version please open a ticket so we can make it compatible):

Config.MultiCharacterScript = "qb-multicharacter" -- Options: "qb-multicharacter", "um-multicharacter"


# If you are using `qb-multicharacter` you must update the following code in `qb-multicharacter` IN CASE YOU ARE USING UM-MULTICHARACTER YOU CAN FOLLOW THE STEPS FOR IT AFTER THIS:

# But in case of you are using a different Multicharacter make sure to contact their support with this README and they will know how to do this small-update :)

# - !!! IF YOU ARE TOO LAZY TO DO THIS UPDATES YOU CAN SIMPLY DOWNLOAD OUR QB-MULTICHARACTER ALREADY WORKING FOR IT :KEK:


█▀▀█ █▀▀▄ ── █▀▄▀█ █──█ █── ▀▀█▀▀ ─▀─ █▀▀ █──█ █▀▀█ █▀▀█ █▀▀█ █▀▀ ▀▀█▀▀ █▀▀ █▀▀█ 
█──█ █▀▀▄ ▀▀ █─▀─█ █──█ █── ──█── ▀█▀ █── █▀▀█ █▄▄█ █▄▄▀ █▄▄█ █── ──█── █▀▀ █▄▄▀ 
▀▀▀█ ▀▀▀─ ── ▀───▀ ─▀▀▀ ▀▀▀ ──▀── ▀▀▀ ▀▀▀ ▀──▀ ▀──▀ ▀─▀▀ ▀──▀ ▀▀▀ ──▀── ▀▀▀ ▀─▀▀

# [client.lua]:


# - Change this in line 206:

```lua


RegisterNUICallback('cDataPed', function(nData, cb)
    local cData = nData.cData
    SetEntityAsMissionEntity(charPed, true, true)
    DeleteEntity(charPed)
    if cData ~= nil then
        if not cached_player_skins[cData.citizenid] then
            local temp_model = promise.new()
            local temp_data = promise.new()

            QBCore.Functions.TriggerCallback('qb-multicharacter:server:getSkin', function(model, data)
                temp_model:resolve(model)
                temp_data:resolve(data)
            end, cData.citizenid)

            local resolved_model = Citizen.Await(temp_model)
            local resolved_data = Citizen.Await(temp_data)

            cached_player_skins[cData.citizenid] = {model = resolved_model, data = resolved_data}
        end

        local model = cached_player_skins[cData.citizenid].model
        local data = cached_player_skins[cData.citizenid].data

        model = model ~= nil and tonumber(model) or false

        if model ~= nil then
            initializePedModel(model, json.decode(data))
        else
            initializePedModel()
        end
        cb("ok")
    else
        initializePedModel()
        cb("ok")
    end
end)

```


# - To this:


```lua

RegisterNUICallback('cDataPed', function(nData, cb)
    local cData = nData.cData
    SetEntityAsMissionEntity(charPed, true, true)
    DeleteEntity(charPed)
    if cData ~= nil then

        if not cached_player_skins[cData.citizenid] then
            local temp_model = promise.new()
            local temp_data = promise.new()

            QBCore.Functions.TriggerCallback('qb-multicharacter:server:getSkin', function(model, data)
                temp_model:resolve(model)
                temp_data:resolve(data)
            end, cData.citizenid)

            local resolved_model = Citizen.Await(temp_model)
            local resolved_data = Citizen.Await(temp_data)

            cached_player_skins[cData.citizenid] = {model = resolved_model, data = resolved_data}
        end

        local model = cached_player_skins[cData.citizenid].model
        local data = cached_player_skins[cData.citizenid].data

        model = model ~= nil and tonumber(model) or false

        if model ~= nil then
            initializePedModel(model, data)
        else
            initializePedModel()
        end
        cb("ok")
    else
        initializePedModel()
        cb("ok")
    end
end)

```

# - Change in line 34:

```lua

local function initializePedModel(model, data)
    CreateThread(function()
        if not model then
            model = joaat(randommodels[math.random(#randommodels)])
        end
        loadModel(model)
        charPed = CreatePed(2, model, Config.PedCoords.x, Config.PedCoords.y, Config.PedCoords.z - 0.98, Config.PedCoords.w, false, true)
        SetPedComponentVariation(charPed, 0, 0, 0, 2)
        FreezeEntityPosition(charPed, false)
        SetEntityInvincible(charPed, true)
        PlaceObjectOnGroundProperly(charPed)
        SetBlockingOfNonTemporaryEvents(charPed, true)
        if data then
            TriggerEvent('qb-clothing:client:loadPlayerClothing', data, charPed)
        end
    end)
end

```

# - To the following:

```lua

local function initializePedModel(model, data)
    CreateThread(function()
        if not model then
            model = joaat(randommodels[math.random(#randommodels)])
        end
        loadModel(model)
        charPed = CreatePed(2, model, Config.PedCoords.x, Config.PedCoords.y, Config.PedCoords.z - 0.98, Config.PedCoords.w, false, true)
        
        TriggerEvent('karma-clothing:LoadPed', charPed) 

        SetPedComponentVariation(charPed, 0, 0, 0, 2)
        FreezeEntityPosition(charPed, false)
        SetEntityInvincible(charPed, true)
        PlaceObjectOnGroundProperly(charPed)
        SetBlockingOfNonTemporaryEvents(charPed, true)
        if data then
            TriggerEvent('qb-clothing:client:loadPlayerClothing', data, charPed)
        end
    end)
end

```


# - In server.lua also in qb-multicharacter change the following, line 198:

```lua

QBCore.Functions.CreateCallback("qb-multicharacter:server:getSkin", function(_, cb, cid)
    local result = MySQL.query.await('SELECT * FROM playerskins WHERE citizenid = ? AND active = ?', {cid, 1})
    if result[1] ~= nil then
        cb(result[1].model, result[1].skin)
    else
        cb(nil)
    end
end)

```

# - To this:

```lua

QBCore.Functions.CreateCallback("qb-multicharacter:server:getSkin", function(_, cb, cid)

    local skinQuery = MySQL.single.await('SELECT * FROM playerskins WHERE citizenid = ? AND active = ? LIMIT 1', 
                                         { cid, 1 })

    local Data = {
        newSkin = nil,
        newHead = {
            headblend = {},
            features = {},
            overlays = {},
            eyeColor = 0,
            fade = 0,
            tattoos = {}
        }
    }

    if skinQuery ~= nil then

        Data.newSkin = json.decode(skinQuery.skin)

        local headDataQuery = MySQL.single.await('SELECT citizenid, model, head_blend, head_features, head_overlays, fade, tattoos, eye_color FROM karma_head_clothing WHERE citizenid = ? LIMIT 1',
            { cid }
        )

        if headDataQuery then
            Data.newHead = {
                headblend = json.decode(headDataQuery.head_blend),
                features = json.decode(headDataQuery.head_features),
                overlays = json.decode(headDataQuery.head_overlays),
                eyeColor = headDataQuery.eye_color,
                fade = headDataQuery.fade,
                tattoos = json.decode(headDataQuery.tattoos)
            }
        end
        
        cb(skinQuery.model or nil, Data)
    end

    cb(nil, nil)

end)


```


█░█ █▀▄▀█ ▄▄ █▀▄▀█ █░█ █░░ ▀█▀ █ █▀▀ █░█ ▄▀█ █▀█ ▄▀█ █▀▀ ▀█▀ █▀▀ █▀█
█▄█ █░▀░█ ░░ █░▀░█ █▄█ █▄▄ ░█░ █ █▄▄ █▀█ █▀█ █▀▄ █▀█ █▄▄ ░█░ ██▄ █▀▄


# - In Framework -> getskin.lua change to the following code to this:

```lua

lib.callback.register("um-multicharacter:server:getSkin", function(_, cid)

    if selectedClothingMenu == 'bl_appearance' then
        local appearance = exports.bl_appearance:GetPlayerAppearance(cid)

        if not appearance then
            return nil, nil
        end

        return appearance.model, appearance
    end

    local skinQuery = MySQL.single.await('SELECT * FROM playerskins WHERE citizenid = ? AND active = ? LIMIT 1', 
                                         { cid, 1 })

    local Data = {
        newSkin = nil,
        newHead = {
            headblend = {},
            features = {},
            overlays = {},
            eyeColor = 0,
            fade = 0,
            tattoos = {}
        }
    }

    if skinQuery ~= nil then

        Data.newSkin = json.decode(skinQuery.skin)

        local headDataQuery = MySQL.single.await('SELECT citizenid, model, head_blend, head_features, head_overlays, fade, tattoos, eye_color FROM karma_head_clothing WHERE citizenid = ? LIMIT 1',
            { cid }
        )

        if headDataQuery then
            Data.newHead = {
                headblend = json.decode(headDataQuery.head_blend),
                features = json.decode(headDataQuery.head_features),
                overlays = json.decode(headDataQuery.head_overlays),
                eyeColor = headDataQuery.eye_color,
                fade = headDataQuery.fade,
                tattoos = json.decode(headDataQuery.tattoos)
            }
        end

        return skinQuery.model or nil, Data
    end

    return nil, nil
end)

```



█▀▀ █░█ ▀▀█▀▀ █▀▀█ █▀▀█ 　 █▀▀▄ █▀▀ █▀▀▄ █░░█ █▀▀▀ 　 █░░ █▀▀█ █▀▀▀ █▀▀ 
█▀▀ ▄▀▄ ░░█░░ █▄▄▀ █▄▄█ 　 █░░█ █▀▀ █▀▀▄ █░░█ █░▀█ 　 █░░ █░░█ █░▀█ ▀▀█ 
▀▀▀ ▀░▀ ░░▀░░ ▀░▀▀ ▀░░▀ 　 ▀▀▀░ ▀▀▀ ▀▀▀░ ░▀▀▀ ▀▀▀▀ 　 ▀▀▀ ▀▀▀▀ ▀▀▀▀ ▀▀▀

# - To help identify possible bugs we added debug logs which you can find in most of the files [cl_main.js] [cl_registercommands.lua]
# - They are by default set as false but you can set as true if you wan't to follow the development process