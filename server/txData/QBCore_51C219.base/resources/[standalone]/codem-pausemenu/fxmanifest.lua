fx_version 'adamant'
game 'gta5'
author 'lucidb_'
description 'CodeM-pausemenu-remake'
version '1.1.5'

shared_scripts {
    'shared/config.lua',
    'shared/GetCore.lua',
    'shared/language.lua',
}

server_scripts {
    -- '@mysql-async/lib/MySQL.lua',
    '@oxmysql/lib/MySQL.lua',
    'server/*.lua',
}

client_scripts {
    'client/*.lua',
}

ui_page 'html/index.html'

files {
  	'html/**/*'
}

escrow_ignore {
    'shared/*.lua',
    'client/editable.lua',
    'client/jobandmoney.lua',
    'server/giverewards.lua',
    'server/utility.lua'
}

lua54 'yes'
dependency '/assetpacks'