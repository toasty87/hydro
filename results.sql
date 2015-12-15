CREATE TABLE `hydro`.`results` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `inserttime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `water` FLOAT NOT NULL DEFAULT 0,
  `air` FLOAT NOT NULL DEFAULT 0,
  `ph` FLOAT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));
