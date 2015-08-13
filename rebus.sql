-- phpMyAdmin SQL Dump
-- version 4.2.6deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 13, 2015 at 01:04 PM
-- Server version: 5.5.44-0ubuntu0.14.10.1
-- PHP Version: 5.5.12-2ubuntu4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `rebus`
--

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE IF NOT EXISTS `results` (
`id` int(11) NOT NULL,
  `word` varchar(30) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`id`, `word`, `description`) VALUES
(1, 'lorem', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tellus convallis, facilisis ligula eget, hendrerit elit. Nulla eget neque quis ante tincidunt condimentum a sed purus.');

-- --------------------------------------------------------

--
-- Table structure for table `words`
--

CREATE TABLE IF NOT EXISTS `words` (
`id` int(11) NOT NULL,
  `word` varchar(30) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `words`
--

INSERT INTO `words` (`id`, `word`, `description`) VALUES
(1, 'lorem', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tellus convallis, facilisis ligula eget, hendrerit elit. Nulla eget neque quis ante tincidunt condimentum a sed purus.'),
(2, 'lorem', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tellus convallis, facilisis ligula eget, hendrerit elit. Nulla eget neque quis ante tincidunt condimentum a sed purus.'),
(3, 'lorem', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tellus convallis, facilisis ligula eget, hendrerit elit. Nulla eget neque quis ante tincidunt condimentum a sed purus'),
(4, 'lorem', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tellus convallis, facilisis ligula eget, hendrerit elit. Nulla eget neque quis ante tincidunt condimentum a sed purus'),
(5, 'lorem', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac tellus convallis, facilisis ligula eget, hendrerit elit. Nulla eget neque quis ante tincidunt condimentum a sed purus');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `results`
--
ALTER TABLE `results`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `words`
--
ALTER TABLE `words`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `results`
--
ALTER TABLE `results`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `words`
--
ALTER TABLE `words`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
