
CREATE TABLE IF NOT EXISTS `pausemenu_battlepass_dailymissions` (
  `missions` longtext DEFAULT NULL,
  `updatedAt` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;


CREATE TABLE IF NOT EXISTS `pausemenu_battlepass_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` longtext NOT NULL,
  `level` int(11) NOT NULL DEFAULT 1,
  `xp` int(11) NOT NULL DEFAULT 0,
  `purchased` int(11) NOT NULL DEFAULT 0,
  `claimedLevels` longtext NOT NULL DEFAULT '{}',
  `missions` longtext DEFAULT '{}',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE IF NOT EXISTS `pausemenu_battlepass_day_counter` (
  `counter` int(11) DEFAULT 30
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;


CREATE TABLE IF NOT EXISTS `pausemenu_battlepass_transactions` (
  `tbx_id` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE IF NOT EXISTS `pausemenu_daily_awards` (
  `identifier` longtext DEFAULT NULL,
  `claimedDays` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;


CREATE TABLE IF NOT EXISTS `pausemenu_daily_awards_day_counter` (
  `counter` int(11) DEFAULT NULL,
  `updatedAt` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;


CREATE TABLE IF NOT EXISTS `pausemenu_guidebook` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` longtext DEFAULT NULL,
  `html` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;


CREATE TABLE IF NOT EXISTS `pausemenu_peds` (
  `identifier` longtext DEFAULT NULL,
  `ped` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

CREATE TABLE IF NOT EXISTS `pausemenu_commands` (
  `command` longtext DEFAULT NULL,
  `desc` longtext DEFAULT NULL,
  UNIQUE KEY `command` (`command`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

CREATE TABLE IF NOT EXISTS `pausemenu_keybinds` (
  `key` longtext NOT NULL,
  `desc` longtext DEFAULT NULL,
  `combinationkey` longtext DEFAULT NULL,
  `combinationdesc` longtext DEFAULT NULL,
  UNIQUE KEY `key` (`key`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

