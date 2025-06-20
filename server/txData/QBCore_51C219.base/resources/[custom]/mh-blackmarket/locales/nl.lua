--[[ ===================================================== ]] --
--[[            MH Blackmarket Script by MaDHouSe          ]] --
--[[ ===================================================== ]] --
local Translations = {
    notify = {
        ['no_blackmoney'] = "Je hebt geen zwart geld bij je..",
        ['shop_not_found'] = "Shop bestaad niet",
    },
    target = {
        ['talk_to'] = "Talk to MaDHouSe",
    }
}

Lang = Locale:new({
    phrases = Translations,
    warnOnMissing = true,
    fallbackLang = Lang,
})
