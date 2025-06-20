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
) 
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB 
AUTO_INCREMENT=182 
DEFAULT CHARSET=utf8mb4 ;

CREATE TABLE `karma_head_clothing` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`cid` VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_general_ci',
	`citizenid` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`model` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`head_blend` LONGTEXT NOT NULL DEFAULT '""' COLLATE 'utf8mb4_bin',
	`head_features` LONGTEXT NOT NULL DEFAULT '""' COLLATE 'utf8mb4_bin',
	`head_overlays` LONGTEXT NOT NULL DEFAULT '""' COLLATE 'utf8mb4_bin',
	`fade` LONGTEXT NULL DEFAULT '""' COLLATE 'utf8mb4_general_ci',
	`tattoos` LONGTEXT NOT NULL DEFAULT '[]' COLLATE 'utf8mb4_general_ci',
	`eye_color` INT(11) NOT NULL DEFAULT '0',
	`created_at` TIMESTAMP NOT NULL DEFAULT current_timestamp(),
	`updated_at` TIMESTAMP NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	PRIMARY KEY (`id`) USING BTREE,
	CONSTRAINT `head_blend` CHECK (json_valid(`head_blend`)),
	CONSTRAINT `head_features` CHECK (json_valid(`head_features`)),
	CONSTRAINT `head_overlays` CHECK (json_valid(`head_overlays`))
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=79
;


CREATE TABLE `karma_outfits` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`cid` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`citizenid` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`name` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`tags` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`slot` INT(11) NULL DEFAULT NULL,
	`model` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`drawables_texture` TEXT NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`props_texture` TEXT NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`hairColor` TEXT NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`fadeLayer` TEXT NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`customHeadModel` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`created_at` TIMESTAMP NOT NULL DEFAULT current_timestamp(),
	`updated_at` TIMESTAMP NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	PRIMARY KEY (`id`) USING BTREE,
	UNIQUE INDEX `unique_citizen_slot` (`citizenid`, `slot`) USING BTREE,
	UNIQUE INDEX `unique_cid_slot` (`slot`, `citizenid`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=54
;