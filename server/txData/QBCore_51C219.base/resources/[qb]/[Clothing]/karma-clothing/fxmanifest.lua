fx_version "cerulean"

games { "gta5" }

lua54 'yes'

author 'ANTUNES'

description "Karma Developments Clothing System"

version "3.2"

ui_page 'web/dist/index.html'

files {
    "web/dist/**/*",
}

client_scripts {
    "@karma-library/client/cl_rpcs.js",
    "@karma-library/client/cl_rpc.lua",
    "shared/config.js",
    "shared/config.lua"
}

client_scripts { 
    "client/cl_*.js",
    "client/cl_*.lua",
    "shared/blips.lua",
    "shared/outfits.lua",
    "shared/config.lua",

    "apply_clothes.lua" -- Updated file
}

shared_script "shared/config.js"

server_scripts {
    "@karma-library/server/sv_rpcs.js",
    "@karma-library/server/sv_rpcs.lua",
    "@karma-library/server/sv_sql.js",
    "@karma-library/server/sv_sql.lua",
    "server/*.lua"
}

server_scripts { 
    "server/sv_*.js",
    "server/sv_*.lua"
}

escrow_ignore {
    "client/cl_registercommands.lua",
    "shared/blips.lua",
    "server/sv_registercommands.lua",
    "shared/outfits.lua",
    "shared/config.lua",
    "apply_clothes.lua"
}

provide 'qb-clothing'

exports {
    'GetCoreObject'
}


-- MADE BY KARMA DEVELOPMENTS WITH LOVE 
-- JOIN ON KARMA DEVELOPMENTS SUPPORT DISCORD : https://discord.gg/wKkJdg3KtE
dependency '/assetpacks'