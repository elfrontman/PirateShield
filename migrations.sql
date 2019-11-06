-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pirateshield
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2019-09-19 17:57:58.691650'),(2,'contenttypes','0002_remove_content_type_name','2019-09-19 17:57:58.850824'),(3,'auth','0001_initial','2019-09-19 17:57:58.963359'),(4,'auth','0002_alter_permission_name_max_length','2019-09-19 17:57:59.220166'),(5,'auth','0003_alter_user_email_max_length','2019-09-19 17:57:59.230142'),(6,'auth','0004_alter_user_username_opts','2019-09-19 17:57:59.238410'),(7,'auth','0005_alter_user_last_login_null','2019-09-19 17:57:59.246687'),(8,'auth','0006_require_contenttypes_0002','2019-09-19 17:57:59.250773'),(9,'auth','0007_alter_validators_add_error_messages','2019-09-19 17:57:59.258552'),(10,'auth','0008_alter_user_username_max_length','2019-09-19 17:57:59.266535'),(11,'auth','0009_alter_user_last_name_max_length','2019-09-19 17:57:59.273916'),(12,'auth','0010_alter_group_name_max_length','2019-09-19 17:57:59.294050'),(13,'auth','0011_update_proxy_permissions','2019-09-19 17:57:59.305050'),(14,'backend','0001_initial','2019-09-19 17:57:59.770138'),(15,'admin','0001_initial','2019-09-19 17:58:00.932989'),(16,'admin','0002_logentry_remove_auto_add','2019-09-19 17:58:01.094883'),(17,'admin','0003_logentry_add_action_flag_choices','2019-09-19 17:58:01.107209'),(18,'backend','0002_auto_20190729_1945','2019-09-19 17:58:01.283047'),(19,'backend','0003_user_image','2019-09-19 17:58:01.357375'),(20,'backend','0004_auto_20190729_2044','2019-09-19 17:58:01.369847'),(21,'backend','0005_auto_20190819_2229','2019-09-19 17:58:01.470875'),(22,'backend','0006_auto_20190819_2315','2019-09-19 17:58:01.705322'),(23,'backend','0007_auto_20190820_0029','2019-09-19 17:58:01.812380'),(24,'backend','0008_operativo_is_active','2019-09-19 17:58:01.880799'),(25,'backend','0009_brand_banner','2019-09-19 17:58:01.951826'),(26,'sessions','0001_initial','2019-09-19 17:58:01.992506'),(27,'backend','0010_imagedetailcompare','2019-10-10 02:11:30.574788'),(28,'backend','0011_imagedetailcompare_detail_image','2019-10-10 02:11:30.722721'),(29,'backend','0012_auto_20191007_1640','2019-10-10 02:11:31.073976'),(30,'backend','0013_operativo_activation','2019-10-10 02:11:31.224066'),(31,'backend','0014_auto_20191009_2150','2019-10-10 02:11:31.255628'),(32,'backend','0015_auto_20191009_2150','2019-10-10 02:11:31.285858'),(33,'backend','0016_auto_20191009_2150','2019-10-10 02:51:05.800212'),(34,'backend','0017_operativobrand','2019-10-10 03:17:54.387321'),(35,'backend','0018_auto_20191009_2249','2019-10-10 03:49:14.370433'),(36,'backend','0019_operativo_created_at','2019-10-11 03:18:40.729774'),(37,'backend','0020_imagedetailcompare_image_fail','2019-11-05 22:36:25.504602'),(38,'backend','0021_auto_20191105_1744','2019-11-05 22:44:59.312810'),(39,'backend','0022_remove_imagedetailcompare_type_image','2019-11-05 22:52:39.876096'),(40,'backend','0023_operativo_token_chat','2019-11-06 02:40:21.736781');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-05 23:32:00
