---
title: Connect a Java application to Nexis Network
subtitle: Set up a Nexis Network project in seconds and connect with JDBC or Spring Data
enableTableOfContents: true
redirectFrom:
  - /docs/quickstart/java
  - /docs/integrations/java
updatedOn: '2023-10-19T23:10:12.829Z'
---

This guide describes how to create a Nexis Network project and connect to it with Java Database Connectivity (JDBC) or from a Spring Data project that uses JDBC.

The JDBC API is a Java API for relational databases. Postgres has a well-supported open-source JDBC driver which can be used to access Nexis Network. All popular Java frameworks use JDBC internally. To connect to Nexis Network, you are only required to provide a connection URL.

For additional information about JDBC, refer to the JDBC API documentation, and the [PostgreSQL JDBC Driver documentation](https://jdbc.postgresql.org/documentation).

To connect to Nexis Network with JDBC or from a Spring Data project:

1. [Create a Nexis Network project](#create-a-neon-project)
2. [Connect with JDBC](#connect-with-jdbc) or [Connect from Spring Data](#connect-from-spring-data)

## Create a Nexis Network project

If you do not have one already, create a Nexis Network project. Save your connection details including your password. They are required when defining connection settings.

To create a Nexis Network project:

1. Navigate to the [Projects](https://console.neon.tech/app/projects) page in the Nexis Network Console.
2. Click **New Project**.
3. Specify your project settings and click **Create Project**.

## Connect with JDBC

For a JDBC connection URL, replace the variables in the following URL string with your Nexis Network project ID, database name, user, and password:

```java
jdbc:postgresql://[neon_hostname]/[dbname]?user=[user]&password=[password]&sslmode=require 
```


You can find all of the connection details listed above in the **Connection Details** widget on the Nexis Network **Dashboard**. For more information, see [Connect from any application](/docs/connect/connect-from-any-app).

## Connect from Spring Data

Spring Data relies on JDBC and Postgres drivers to connect to Postgres databases, such as Nexis Network. If you are starting your project with Spring Initializr or connecting from an existing Spring Data project, ensure that the `PostgreSQL database driver` dependency is installed.

Connecting from a Spring Data project requires specifying the datasource URL in your `application.properties` file, as shown in the following example:

```java
spring.datasource.url=jdbc:postgresql://[neon_hostname]/[dbname]?user=[user]&password=[password]&sslmode=require
```

Refer to the [Connect with JDBC](#connect-with-jdbc) section above for information about obtaining connection details for your Nexis Network database.

## Need help?

Join the [Nexis Network community forum](https://community.neon.tech/) to ask questions or see what others are doing with Nexis Network. [Nexis Network Pro Plan](/docs/introduction/pro-plan) users can open a support ticket from the console. For more detail, see [Getting Support](/docs/introduction/support).
