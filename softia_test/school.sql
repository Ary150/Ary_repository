-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 24 Novembre 2022 à 15:07
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `school`
--

-- --------------------------------------------------------

--
-- Structure de la table `attestion`
--

CREATE TABLE IF NOT EXISTS `attestion` (
  `id` int(11) NOT NULL,
  `id_convention` int(11) NOT NULL,
  `id_etudiant` int(11) NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  KEY `attestation_id_etudiant_foreign` (`id_etudiant`),
  KEY `attestation_id_convention_foreign` (`id_convention`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `attestion`
--

INSERT INTO `attestion` (`id`, `id_convention`, `id_etudiant`, `message`) VALUES
(1, 2, 1, 'test'),
(1, 2, 1, '					\r\n		Vous avez suivi #nbHeur# de formation chez FormationPlus.\r\n		Pouvez-vous nous retourner ce mail avec la pièce jointe signée.\r\n		Cordialement,\r\n		FormationPlus\r\n				'),
(1, 2, 1, '					\r\n		Vous avez suivi #nbHeur# de formation chez FormationPlus.\r\n		Pouvez-vous nous retourner ce mail avec la pièce jointe signée.\r\n		Cordialement,\r\n		FormationPlus\r\n				'),
(1, 2, 1, '					\r\n		Vous avez suivi #nbHeur# de formation chez FormationPlus.\r\n		Pouvez-vous nous retourner ce mail avec la pièce jointe signée.\r\n		Cordialement,\r\n		FormationPlus\r\n				'),
(1, 2, 1, '					\r\n		Vous avez suivi #nbHeur# de formation chez FormationPlus.\r\n		Pouvez-vous nous retourner ce mail avec la pièce jointe signée.\r\n		Cordialement,\r\n		FormationPlus\r\n				'),
(1, 2, 1, '					\r\n		Vous avez suivi #nbHeur# de formation chez FormationPlus.\r\n		Pouvez-vous nous retourner ce mail avec la pièce jointe signée.\r\n		Cordialement,\r\n		FormationPlus\r\n				'),
(1, 2, 1, '					\r\n		Vous avez suivi #nbHeur# de formation chez FormationPlus.\r\n		Pouvez-vous nous retourner ce mail avec la pièce jointe signée.\r\n		Cordialement,\r\n		FormationPlus\r\n				'),
(1, 2, 1, '					\r\n		Vous avez suivi #nbHeur# de formation chez FormationPlus.\r\n		Pouvez-vous nous retourner ce mail avec la pièce jointe signée.\r\n		Cordialement,\r\n		FormationPlus\r\n				');

-- --------------------------------------------------------

--
-- Structure de la table `convention`
--

CREATE TABLE IF NOT EXISTS `convention` (
  `id` int(11) NOT NULL,
  `nom` varchar(10) NOT NULL,
  `nbHeur` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `convention`
--

INSERT INTO `convention` (`id`, `nom`, `nbHeur`) VALUES
(1, 'Geste et p', 0),
(2, 'Eco condui', 0),
(3, 'Gestion st', 0);

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

CREATE TABLE IF NOT EXISTS `etudiant` (
  `id` int(11) NOT NULL,
  `nom` varchar(10) NOT NULL,
  `prenom` varchar(10) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `id_convention` int(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `etudient_id_convention_foreign` (`id_convention`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Contenu de la table `etudiant`
--

INSERT INTO `etudiant` (`id`, `nom`, `prenom`, `mail`, `id_convention`) VALUES
(1, 'Ary', 'Kn', 'ary@gmail.com', 2),
(2, 'Will', 'Wiwi', 'will@gmail.com', 1),
(3, 'Mehd', 'At', 'mehd@gmail.com', 3),
(4, 'Quentin', 'Za', 'quentin@gmail.com', 1);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `attestion`
--
ALTER TABLE `attestion`
  ADD CONSTRAINT `attestation_id_convention_foreign` FOREIGN KEY (`id_convention`) REFERENCES `convention` (`id`),
  ADD CONSTRAINT `attestation_id_etudiant_foreign` FOREIGN KEY (`id_etudiant`) REFERENCES `etudiant` (`id`);

--
-- Contraintes pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD CONSTRAINT `etudient_id_convention_foreign` FOREIGN KEY (`id_convention`) REFERENCES `convention` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
