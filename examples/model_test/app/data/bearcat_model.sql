-- MySQL dump 10.13  Distrib 5.7.19, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: bearcat_model
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `create_at` int(11) DEFAULT NULL,
  `update_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,'justin',NULL,NULL),(2,'chow',NULL,NULL),(3,'water',NULL,NULL),(4,'swift',NULL,NULL);
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aid` int(11) DEFAULT NULL,
  `title` varchar(128) NOT NULL,
  `content` varchar(2048) DEFAULT NULL,
  `create_at` int(11) DEFAULT NULL,
  `update_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `aid_idx` (`aid`),
  CONSTRAINT `baid` FOREIGN KEY (`aid`) REFERENCES `author` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (1,1,'那些年的幸福日子糟透了','幸福的日子总是计较的少, 忽略了雾霾, 忽略了铅超标...',NULL,NULL),(2,1,'中医六病的原理解说','六病:风湿热暑寒燥',NULL,NULL),(3,2,'Bearcat的文档翻译','地址: http://bearcatjs.cn',NULL,NULL),(4,2,'Nodejs的AOP实现','参考Bearcat熊猫框架',NULL,NULL),(5,2,'未来发展方向NodeJS,Python还是Golang','对比Golang,Python和NodeJS都能做什么, 各自擅长的领域, 各大公司的使用情况',NULL,NULL),(6,3,'金融领域的发展前景','你适合进入金融行业么?',NULL,NULL),(7,3,'银行,证券还是保险行业?','三大金融行业, 互联网金融将如何进入娱乐场?',NULL,NULL),(8,4,'30几岁的你如何进入会计行业','四大准入标准是什么, 为什么要招一个30岁转行的而不是二十几岁的新人?',NULL,NULL);
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aid` int(11) DEFAULT NULL,
  `bid` int(11) DEFAULT NULL,
  `content` varchar(45) DEFAULT NULL,
  `create_at` int(11) DEFAULT NULL,
  `update_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `aid_idx` (`aid`),
  KEY `bid_idx` (`bid`),
  CONSTRAINT `caid` FOREIGN KEY (`aid`) REFERENCES `author` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `cbid` FOREIGN KEY (`bid`) REFERENCES `blog` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,4,1,'最喜欢医疗行业,但是无缘进入了...',NULL,NULL),(2,3,2,'沙发',NULL,NULL),(3,4,2,'板凳,顶起',NULL,NULL),(4,4,3,'好东西, 学习计算机技术中',NULL,NULL),(5,1,3,'学习, 顶起',NULL,NULL),(6,1,4,'学习顶起',NULL,NULL),(7,3,5,'学习顶起来啦!!',NULL,NULL),(8,2,6,'金融行业在每个行业都能插一脚',NULL,NULL),(9,4,6,'金融行业与会计行业有很多共通之处',NULL,NULL),(10,1,7,'在医疗行业能不能投资?',NULL,NULL),(11,2,8,'好文章, 学习了, 正要转行',NULL,NULL),(12,3,8,'金融与会计确实有共同之处',NULL,NULL);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-04  1:49:47
