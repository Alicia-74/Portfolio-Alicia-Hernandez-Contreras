-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: portfolio_db
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `experience`
--

DROP TABLE IF EXISTS `experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experience` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `description` text,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `current_job` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experience`
--

LOCK TABLES `experience` WRITE;
/*!40000 ALTER TABLE `experience` DISABLE KEYS */;
INSERT INTO `experience` (`id`, `company`, `role`, `description`, `start_date`, `end_date`, `current_job`) VALUES (1,'Soltel Group','Desarrolladora Web Full Stack (Prácticas)','Participación en proyectos del sector agrícola para la administración pública. \n  Desarrollo de aplicaciones web full stack utilizando microservicios, Spring Boot, Java, Angular, GitLab y Oracle.\n  Integración de bases de datos y APIs, trabajando bajo supervisión.','2025-03-01','2025-06-30',0),(2,'Soltel Group','Desarrolladora Junior Full Stack','Continuación en proyectos del sector agrícola con mayor autonomía y responsabilidad. \n  Desarrollo, mantenimiento y optimización de aplicaciones web basadas en microservicios.\n  Colaboración con equipo de desarrollo en nuevas funcionalidades y optimización de sistemas usando Spring Boot, Angular, Jenkins, GitLab y Oracle.','2025-07-01',NULL,1);
/*!40000 ALTER TABLE `experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formacion`
--

DROP TABLE IF EXISTS `formacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formacion` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `escuela` varchar(255) NOT NULL,
  `titulacion` varchar(255) NOT NULL,
  `description` text,
  `start_date` int DEFAULT NULL,
  `end_date` int DEFAULT NULL,
  `current_job` tinyint(1) DEFAULT '0',
  `estudios` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formacion`
--

LOCK TABLES `formacion` WRITE;
/*!40000 ALTER TABLE `formacion` DISABLE KEYS */;
INSERT INTO `formacion` (`id`, `escuela`, `titulacion`, `description`, `start_date`, `end_date`, `current_job`, `estudios`) VALUES (1,'Escuela Profesional Vedruna, Sevilla','Grado Superior de Desarrollo de Aplicaciones Web','Desarrollo frontend utilizando HTML, CSS y JavaScript. Experiencia en React. Familiaridad con Figma y Astro. Otras herramientas: Storybook, Starlight, Bootstrap, Tailwind, Swagger, Spring Boot, PHP y Java. Gestión de bases de datos con MySQL.',2022,2025,0,NULL),(2,'IES San Blas, Aracena','Bachillerato de Ciencias Sociales',NULL,2019,2022,0,NULL);
/*!40000 ALTER TABLE `formacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `description` text NOT NULL,
  `tech` varchar(255) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skills` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` (`id`, `name`, `category`, `type`) VALUES (1,'Java','Backend','CORE'),(2,'Spring Boot','Backend','CORE'),(3,'Microservices','Architecture','CORE'),(4,'Angular','Frontend','CORE'),(5,'React','Frontend','OTHER'),(6,'JavaScript','Frontend','OTHER'),(7,'MySQL','Database','OTHER'),(8,'Oracle','Database','CORE'),(9,'Git','Tools','CORE'),(10,'Swagger','API Documentation','CORE'),(11,'Jenkins','CI/CD','CORE'),(12,'Astro','Frontend','OTHER'),(13,'Tailwind','Frontend','OTHER'),(14,'Bootstrap','Frontend','OTHER'),(15,'CSS','Frontend','OTHER'),(16,'HTML','Frontend','OTHER'),(17,'Storybook','Frontend Tools','OTHER'),(18,'Starlight','Documentation','OTHER'),(19,'Figma','Design','OTHER'),(20,'Express.js','Backend','OTHER'),(21,'PayPal Integration','Payments','OTHER'),(22,'PHP','Backend','OTHER'),(23,'Spring Security','Backend','OTHER'),(24,'Docker','DevOps','OTHER'),(25,'Sonar','Code Quality','OTHER'),(26,'Quarkus','Backend','OTHER');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-18 13:59:44
