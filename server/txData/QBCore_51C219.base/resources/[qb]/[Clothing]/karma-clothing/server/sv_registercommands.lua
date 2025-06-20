-- Clothing System -> STAFF RegisterCommands List (This uses Default HasPermission to get STAFF Permissions)

local QBCore = exports['qb-core']:GetCoreObject()

RegisterCommand("clothing", function(source)
     local src = source
     local Player = QBCore.Functions.GetPlayer(source)
     if Player then
         if QBCore.Functions.HasPermission(source, "admin") or QBCore.Functions.HasPermission(source, "god") then
             TriggerClientEvent('qb-clothing:client:openMenu', src)
         else
             TriggerClientEvent('QBCore:Notify', src, 'You do not have permission to use this command.', 'error')
         end
     else
         TriggerClientEvent('QBCore:Notify', src, 'Player not found.', 'error')
     end
end, false)

RegisterCommand("barber", function(source)
     local src = source
     local Player = QBCore.Functions.GetPlayer(source)
     if Player then
         if QBCore.Functions.HasPermission(source, "admin") or QBCore.Functions.HasPermission(source, "god") then
             TriggerClientEvent('qb-clothing:client:openBarberMenu', src)
         else
             TriggerClientEvent('QBCore:Notify', src, 'You do not have permission to use this command.', 'error')
         end
     else
         TriggerClientEvent('QBCore:Notify', src, 'Player not found.', 'error')
     end
end, false)
 
RegisterCommand("tattoos", function(source)
     local src = source
     local Player = QBCore.Functions.GetPlayer(source)
     if Player then
         if QBCore.Functions.HasPermission(source, "admin") or QBCore.Functions.HasPermission(source, "god") then
             TriggerClientEvent('karma-clothing:openTattoo', src, false, false)
         else
             TriggerClientEvent('QBCore:Notify', src, 'You do not have permission to use this command.', 'error')
         end
     else
         TriggerClientEvent('QBCore:Notify', src, 'Player not found.', 'error')
     end
end, false)

RegisterCommand("outfits", function(source)
    local src = source
    local Player = QBCore.Functions.GetPlayer(source)
    if Player then
        if QBCore.Functions.HasPermission(source, "admin") or QBCore.Functions.HasPermission(source, "god") then
            TriggerClientEvent('qb-clothing:client:openOutfitMenu', src, false, false)
        else
            TriggerClientEvent('QBCore:Notify', src, 'You do not have permission to use this command.', 'error')
        end
    else
        TriggerClientEvent('QBCore:Notify', src, 'Player not found.', 'error')
    end
end, false)

RegisterCommand("register", function(source)
    local src = source
    local Player = QBCore.Functions.GetPlayer(source)
    if Player then
        if QBCore.Functions.HasPermission(source, "admin") or QBCore.Functions.HasPermission(source, "god") then
            TriggerClientEvent('qb-clothes:client:CreateFirstCharacter', src, false, false)
        else
            TriggerClientEvent('QBCore:Notify', src, 'You do not have permission to use this command.', 'error')
        end
    else
        TriggerClientEvent('QBCore:Notify', src, 'Player not found.', 'error')
    end
end, false)




-- Without permissions xd 

-- RegisterCommand("clothing", function()
--     TriggerClientEvent('qb-clothing:client:openMenu')
-- end)

-- RegisterCommand("barber", function()
--     TriggerClientEvent('qb-clothing:client:openBarberMenu')
-- end)

-- RegisterCommand("tattoos", function()
--     TriggerClientEvent('karma-clothing:openTattoo', false, false)
-- end)

-- RegisterCommand("register", function()
--     TriggerClientEvent("qb-clothes:client:CreateFirstCharacter")
-- end)

-- RegisterCommand("outfits" , function ()
--     TriggerClientEvent('qb-clothing:client:openOutfitMenu')
-- end)