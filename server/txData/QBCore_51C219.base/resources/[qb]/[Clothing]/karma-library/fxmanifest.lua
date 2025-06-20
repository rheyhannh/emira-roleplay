fx_version "cerulean"

games {"gta5"}

lua54 'yes'

author "ANTUNES"

description "Karma Developments Library"

client_scripts {
	"**/cl_*.lua",
	"**/cl_*.js"
}

shared_script '**/sh_*.*'

server_scripts {
	"**/sv_*.lua",
	"**/sv_*.js"
}

escrow_ignore {
    "client/*.lua",
    "server/*.lua",
}

-- MADE BY KARMA DEVELOPMENTS WITH LOVE 
-- JOIN ON KARMA DEVELOPMENTS SUPPORT DISCORD : https://discord.gg/wKkJdg3KtE
dependency '/assetpacks'