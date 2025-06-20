-- Define the polyzones, because who doesn't love fancy coordinates?
local polyzones = {
    { 
        name = "grapeseed_clothing_outfits",
        coords = { x = 1698.6844, y = 4818.2109, z = 42.0631 },  -- GPS coords, obviously
        radius = 1.5  -- Bubble size, like in a video game
    },
    { 
        name = "portala_drive_clothing_outfits",
        coords = { x = -703.9740, y = -152.2432, z = 37.4151 },  -- More coords, 'cause why not?
        radius = 2.0 -- Bubble size, because bigger is better
    },
    {
        name="strawberry_avenue_clothing_outfits",
        coords = { x = 71.2092, y = -1387.5037, z = 29.3761},
        radius = 1.5
    },
    -- Add more stores here, like a shopping spree in cyberspace
}

-- Variable to control if the interaction is visible, like a popup in your face
local interactionVisible = false

-- Function to check if the player is inside any polyzone. It's like a virtual shopping spree
function IsPlayerInPolyzone(playerCoords)
    for _, zone in ipairs(polyzones) do
        local distance = GetDistanceBetweenCoords(playerCoords.x, playerCoords.y, playerCoords.z, zone.coords.x, zone.coords.y, zone.coords.z, true)
        if distance <= zone.radius then
            return true, zone.name
        end
    end
    return false, nil
end

-- Function to show the interaction. It's like a holographic sign saying "Press E to outfit up!"
function ShowInteraction()
    interactionVisible = true
    exports['karma-interaction']:showInteraction("E", "Check Outfits")
end

-- Function to hide the interaction. It's like the shopkeeper saying, "See you in the matrix!"
function HideInteraction()
    interactionVisible = false
    exports['karma-interaction']:hideInteraction()
end

-- Continuously checks the player's position and if the "E" key was pressed. Like a GPS tracking your every move
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        
        local playerPed = PlayerPedId()
        local playerCoords = GetEntityCoords(playerPed)
        local isInPolyzone, zoneName = IsPlayerInPolyzone(playerCoords)

        if isInPolyzone then
            if not interactionVisible then
                ShowInteraction()
            end

            -- Checks if the player pressed the "E" key inside the polyzone. It's like saying, "Change that outfit, you know you want to!"
            if IsControlJustReleased(0, 38) then  -- 38 is the code for the "E" key. Magic number!
                if zoneName == "grapeseed_clothing_outfits" then
                    TriggerEvent("qb-clothing:client:openOutfitMenu")
                elseif zoneName == "portala_drive_clothing_outfits" then
                    TriggerEvent("qb-clothing:client:openOutfitMenu")
                elseif zoneName == "strawberry_avenue_clothing_outfits" then 
                    TriggerEvent("qb-clothing:client:openOutfitMenu")
                    -- Add more Outfits Stores Locations here same as above as needed.
                end
            end
        else
            if interactionVisible then
                HideInteraction()
            end
        end
    end
end)
