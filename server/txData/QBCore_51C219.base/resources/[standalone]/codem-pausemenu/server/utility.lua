function CheckIsAdmin(source)
    if source == 0 then
        return false
    end
    if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
        local Player = Core.GetPlayerFromId(source)
        if Player then
            for _, v in pairs(Config.Admins) do
                if Player.getGroup() == v then
                    return true
                end
            end
        end
    elseif Config.Framework == 'qb' then
        for _, v in pairs(Config.Admins) do
            if Core.Functions.HasPermission(source, v) or IsPlayerAceAllowed(source, 'command') then
                return true
            end
        end
    elseif Config.Framework == 'oldqb' then
        for _, v in pairs(Config.Admins) do
            if Core.Functions.GetPermission(source) == v then
                return true
            end
        end
    end
    return false
end

function GetRPName(identifier, source)
	local result = ExecuteSql("SELECT firstname, lastname FROM users WHERE identifier = '"..identifier.."'")
    local data = result[1]
	if data then
        if data.firstname and data.lastname then
            return data.firstname .. ' ' .. data.lastname
        end
	end
    return false
end

function GetPlayerRoleplayName(source)
    while not Core do
        Citizen.Wait(0)
    end
    local steamName = GetPlayerName(source)
    local playerName
    if Config.Framework == "esx" or Config.Framework == 'oldesx' then
        local Player = Core.GetPlayerFromId(source)
        if Player then
            playerName = Player.getName()
        end
        if steamName == playerName then
            local dbName = GetRPName(Player.identifier, source)
            playerName = dbName
        end
    else
        local Player = Core.Functions.GetPlayer(source)
        if Player then
            playerName = Player.PlayerData.charinfo.firstname .. " " .. Player.PlayerData.charinfo.lastname
        end
    end
    return playerName
end

function GetIdentifier(source)
    local Player = GetPlayer(source)
    local identifier = false
    if Player then
        if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
            identifier = Player.identifier
        else
            identifier = Player.PlayerData.citizenid
        end
    end
    return identifier
end

function GetPlayer(source)
    local Player = false
    while Core == nil do
        Citizen.Wait(0)
    end
    if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
        Player = Core.GetPlayerFromId(source)
    else
        Player = Core.Functions.GetPlayer(source)
    end
    return Player
end

function GetPlayerMoney(source, value)
    local Player = GetPlayer(source)
    if Player then
        if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
            if value == 'bank' then
                return Player.getAccount('bank').money
            end
            if value == 'cash' then
                return Player.getMoney()
            end
        elseif Config.Framework == 'qb' or Config.Framework == 'oldqb' then
            if value == 'bank' then
                return Player.PlayerData.money['bank']
            end
            if value == 'cash' then
                return Player.PlayerData.money['cash']
            end
        end
    end
end

function RemoveMoney(source, money)
    local Player = GetPlayer(source)

    if Player then
        if Config.Framework == 'esx' or Config.Framework == 'oldesx' then
            Player.removeAccountMoney("bank", money)
        else
            Player.Functions.RemoveMoney('bank', money)
        end
    end
end

function GetStoreItemByName(name)
    local items = {}
    for _, v in pairs(Config.StoreItems) do
        for __, vv in pairs(v.items) do
            table.insert(items, vv)
        end
    end
    for _, v in pairs(items) do
        if v.name == name then
            return v
        end
    end
    return false
end

RegisterCommand('battlepass', function (source, args)
    if source > 0 then
        return
    end
    ExecuteSql(string.format("INSERT INTO pausemenu_battlepass_transactions (tbx_id) VALUES ('%s')", args[1]))
end)