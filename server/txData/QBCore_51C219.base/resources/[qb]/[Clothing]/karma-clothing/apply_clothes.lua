local QBCore = exports['qb-core']:GetCoreObject()

local UseLoadOutfitFromQbCoreAdapted = true
local TestOutfitPrison = true

--[[
    Set as true (or false) if you want to load the skin using the qbcore function (adapted to karma-clothing)
    This will add the feature to apply costum clothes from scripts (like qb-prison for example)
]]

RegisterCommand('test_outfit_prison',function()

    TriggerEvent('qb-clothing:client:loadOutfit_Karma_Adapted',
    {
        ['t-shirt'] = { item = 15, texture = 0 },
        ['torso2'] = { item = 345, texture = 0 },
        ['arms'] = { item = 19, texture = 0 },
        ['pants'] = { item = 3, texture = 7 },
        ['shoes'] = { item = 1, texture = 0 },
    })
    
end)

local skinData = {
    ["face"] =                 {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["face2"] =                {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["facemix"] =              {skinMix = 0, shapeMix = 0, defaultSkinMix = 0.0, defaultShapeMix = 0.0},
    ["pants"] =                {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["hair"] =                 {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["eyebrows"] =             {item = -1,   texture = 1,  defaultItem = -1,     defaultTexture = 1},
    ["beard"] =                {item = -1,   texture = 1,  defaultItem = -1,     defaultTexture = 1},
    ["blush"] =                {item = -1,   texture = 1,  defaultItem = -1,     defaultTexture = 1},
    ["lipstick"] =             {item = -1,   texture = 1,  defaultItem = -1,     defaultTexture = 1},
    ["makeup"] =               {item = -1,   texture = 1,  defaultItem = -1,     defaultTexture = 1},
    ["ageing"] =               {item = -1,   texture = 0,  defaultItem = -1,     defaultTexture = 0},
    ["arms"] =                 {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["t-shirt"] =              {item = 1,    texture = 0,  defaultItem = 1,      defaultTexture = 0},
    ["torso2"] =               {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["vest"] =                 {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["bag"] =                  {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["shoes"] =                {item = 0,    texture = 0,  defaultItem = 1,      defaultTexture = 0},
    ["mask"] =                 {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["hat"] =                  {item = -1,   texture = 0,  defaultItem = -1,     defaultTexture = 0},
    ["glass"] =                {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["ear"] =                  {item = -1,   texture = 0,  defaultItem = -1,     defaultTexture = 0},
    ["watch"] =                {item = -1,   texture = 0,  defaultItem = -1,     defaultTexture = 0},
    ["bracelet"] =             {item = -1,   texture = 0,  defaultItem = -1,     defaultTexture = 0},
    ["accessory"] =            {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["decals"] =               {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["eye_color"] =            {item = -1,   texture = 0,  defaultItem = -1,     defaultTexture = 0},
    ["moles"] =                {item = 0,    texture = 0,  defaultItem = -1,     defaultTexture = 0},
    ["nose_0"] =               {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["nose_1"] =               {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["nose_2"] =               {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["nose_3"] =               {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["nose_4"] =               {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["nose_5"] =               {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["cheek_1"] =              {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["cheek_2"] =              {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["cheek_3"] =              {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["eye_opening"] =          {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["lips_thickness"] =       {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["jaw_bone_width"] =       {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["eyebrown_high"] =        {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["eyebrown_forward"] =     {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["jaw_bone_back_lenght"] = {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["chimp_bone_lowering"] =  {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["chimp_bone_lenght"] =    {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["chimp_bone_width"] =     {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["chimp_hole"] =           {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
    ["neck_thikness"] =        {item = 0,    texture = 0,  defaultItem = 0,      defaultTexture = 0},
}

local function typeof(var)
    local _type = type(var);
    if(_type ~= "table" and _type ~= "userdata") then
        return _type;
    end
    local _meta = getmetatable(var);
    if(_meta ~= nil and _meta._NAME ~= nil) then
        return _meta._NAME;
    else
        return _type;
    end
end

if UseLoadOutfitFromQbCoreAdapted then
    RegisterNetEvent('qb-clothing:client:loadOutfit_Karma_Adapted', function(data)
        local ped = PlayerPedId()

        if typeof(data) ~= "table" then data = json.decode(data) end

        for k in pairs(data) do
            skinData[k].item = data[k].item
            skinData[k].texture = data[k].texture

            -- To secure backwards compability for facemixing
            if data[k].shapeMix then
                skinData[k].shapeMix = data[k].shapeMix
            end

            if data[k].skinMix then
                skinData[k].skinMix = data[k].skinMix
            end
        end

        -- Pants
        if data["pants"] ~= nil then
            SetPedComponentVariation(ped, 4, data["pants"].item, data["pants"].texture, 0)
        end

        -- Arms
        if data["arms"] ~= nil then
            SetPedComponentVariation(ped, 3, data["arms"].item, data["arms"].texture, 0)
        end

        -- T-Shirt
        if data["t-shirt"] ~= nil then
            SetPedComponentVariation(ped, 8, data["t-shirt"].item, data["t-shirt"].texture, 0)
        end

        -- Vest
        if data["vest"] ~= nil then
            SetPedComponentVariation(ped, 9, data["vest"].item, data["vest"].texture, 0)
        end

        -- Torso 2
        if data["torso2"] ~= nil then
            SetPedComponentVariation(ped, 11, data["torso2"].item, data["torso2"].texture, 0)
        end

        -- Shoes
        if data["shoes"] ~= nil then
            SetPedComponentVariation(ped, 6, data["shoes"].item, data["shoes"].texture, 0)
        end

        -- Bag
        if data["bag"] ~= nil then
            SetPedComponentVariation(ped, 5, data["bag"].item, data["bag"].texture, 0)
        end

        -- Badge
        if data["decals"] ~= nil then
            SetPedComponentVariation(ped, 10, data["decals"].item, data["decals"].texture, 0)
        end

        -- Accessory
        if data["accessory"] ~= nil then
            if QBCore.Functions.GetPlayerData().metadata["tracker"] then
                SetPedComponentVariation(ped, 7, 13, 0, 0)
            else
                SetPedComponentVariation(ped, 7, data["accessory"].item, data["accessory"].texture, 0)
            end
        else
            if QBCore.Functions.GetPlayerData().metadata["tracker"] then
                SetPedComponentVariation(ped, 7, 13, 0, 0)
            else
                SetPedComponentVariation(ped, 7, -1, 0, 2)
            end
        end

        -- Mask
        if data["mask"] ~= nil then
            SetPedComponentVariation(ped, 1, data["mask"].item, data["mask"].texture, 0)
        end

        -- Bag
        if data["bag"] ~= nil then
            SetPedComponentVariation(ped, 5, data["bag"].item, data["bag"].texture, 0)
        end

        -- Hat
        if data["hat"] ~= nil then
            if data["hat"].item ~= -1 and data["hat"].item ~= 0 then
                SetPedPropIndex(ped, 0, data["hat"].item, data["hat"].texture, true)
            else
                ClearPedProp(ped, 0)
            end
        end

        -- Glass
        if data["glass"] ~= nil then
            if data["glass"].item ~= -1 and data["glass"].item ~= 0 then
                SetPedPropIndex(ped, 1, data["glass"].item, data["glass"].texture, true)
            else
                ClearPedProp(ped, 1)
            end
        end

        -- Ear
        if data["ear"] ~= nil then
            if data["ear"].item ~= -1 and data["ear"].item ~= 0 then
                SetPedPropIndex(ped, 2, data["ear"].item, data["ear"].texture, true)
            else
                ClearPedProp(ped, 2)
            end
        end

    end)
end
