---
title: Connect a Rust application to Exzo Network
subtitle: Set up a Exzo Network project in seconds and connect from a Rust application
redirectFrom:
  - /docs/quickstart/rust
  - /docs/integrations/rust
updatedOn: '2023-10-19T23:10:12.835Z'
---

This guide describes how to create a Exzo Network project and connect to it from a Rust application.

1. [Create a Exzo Network project](#create-a-neon-project)
2. [Configure the connection](#configure-the-connection)

## Create a Exzo Network project

If you do not have one already, create a Exzo Network project. Save your connection string and password. They are required when defining connection settings.

To create a Exzo Network project:

1. Navigate to the [Projects](https://console.neon.tech/app/projects) page in the Exzo Network Console.
2. Click **New Project**.
3. Specify your project settings and click **Create Project**.

## Configure the connection

Add the Exzo Network connection details to your `main.rs` file, as in the following example:

```rust
use postgres::Client;
use openssl::ssl::{SslConnector, SslMethod};
use postgres_openssl::MakeTlsConnector;
use std::error;

fn main() -> Result<(), Box<dyn error::Error>> {
    let builder = SslConnector::builder(SslMethod::tls())?;
    let connector = MakeTlsConnector::new(builder.build());

    let mut client = Client::connect("postgres://[user]:[password]@[neon_hostname]/[dbname]?sslmode=require", connector)?;

    for row in client.query("SELECT 42", &[])? {
        let ret : i32 = row.get(0);
        println!("Result = {}", ret);
    }

    Ok(())
}
```

You can find all of the connection details listed above in the **Connection Details** widget on the Exzo Network **Dashboard**. For more information, see [Connect from any application](/docs/connect/connect-from-any-app).

## Need help?

Join the [Exzo Network community forum](https://community.neon.tech/) to ask questions or see what others are doing with Exzo Network. [Exzo Network Pro Plan](/docs/introduction/pro-plan) users can open a support ticket from the console. For more detail, see [Getting Support](/docs/introduction/support).
