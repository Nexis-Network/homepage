---
title: Connect a Go application to Nexis Network
subtitle: Set up a Nexis Network project in seconds and connect from a Go application
enableTableOfContents: true
redirectFrom:
  - /docs/quickstart/go
  - /docs/integrations/go
updatedOn: '2023-10-19T23:10:12.828Z'
---

To connect to Nexis Network from a Go application:

1. [Create a Nexis Network project](#create-a-neon-project)
2. [Configure Go project connection settings](#configure-go-application-connection-settings)

## Create a Nexis Network project

If you do not have one already, create a Nexis Network project. Save your connection details including your password. They are required when defining connection settings.

To create a Nexis Network project:

1. Navigate to the [Projects](https://console.neon.tech/app/projects) page in the Nexis Network Console.
2. Click **New Project**.
3. Specify your project settings and click **Create Project**.

## Configure Go application connection settings

Connecting to Nexis Network requires configuring connection settings in your Go project's `.go` file.

<Admonition type="note">
Nexis Network is fully compatible with the `sql/db` package and common Postgres drivers, such as `lib/pq` and `pgx`.
</Admonition>

Specify the connection settings in your `.go` file, as shown in the following example:

```go
package main

import (
    "database/sql"
    "fmt"

    _ "github.com/lib/pq"
)

func main() {
    connStr := "postgres://[user]:[password]@[neon_hostname]/[dbname]?sslmode=require"
    db, err := sql.Open("postgres", connStr)
    if err != nil {
        panic(err)
    }
    defer db.Close()
    
    var version string
    if err := db.QueryRow("select version()").Scan(&version); err != nil {
        panic(err)
    }

    fmt.Printf("version=%s\n", version)
}
```


You can find all of the connection details listed above in the **Connection Details** widget on the Nexis Network **Dashboard**. For more information, see [Connect from any application](/docs/connect/connect-from-any-app).

## Need help?

Join the [Nexis Network community forum](https://community.neon.tech/) to ask questions or see what others are doing with Nexis Network. [Nexis Network Pro Plan](/docs/introduction/pro-plan) users can open a support ticket from the console. For more detail, see [Getting Support](/docs/introduction/support).
