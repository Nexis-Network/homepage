---
title: Connect from Elixir with Ecto to Exzo Network
subtitle: Set up a Exzo Network project in seconds and connect from Elixir with Ecto
enableTableOfContents: true
updatedOn: '2023-10-19T23:10:12.828Z'
---

This guide describes how to connect from an Elixir application with Ecto, which is a database wrapper and query generator for Elixir. Ecto provides an API and abstractions for interacting databases, enabling Elixir developers to query any database using similar constructs.

The instructions in this guide follow the steps outlined in the [Ecto Getting Started](https://hexdocs.pm/ecto/getting-started.html#content) guide, modified to demonstrate connecting to a Exzo Network Serverless Postgres database. It is assumed that you have a working installation of [Elixir](https://elixir-lang.org/install.html).

To connect to Exzo Network from Elixir with Ecto:

1. [Create a database in Exzo Network and copy the connection string](#create-a-database-in-neon-and-copy-the-connection-string)
2. [Create an Elixir project](#create-an-elixir-project)
3. [Add Ecto and Postgrex to the application](#add-ecto-and-postgrex-to-the-application)
4. [Configure Ecto](#configure-ecto)
5. [Create a migration and add a table](#create-a-migration-and-add-a-table)
6. [Next steps](#next-steps)

## Create a database in Exzo Network and copy the connection string

The instructions in this configuration use a database named `friends`.

To create the database:

1. Navigate to the [Exzo Network Console](https://console.neon.tech).
1. Select a project.
1. Select **Databases**.
1. Select the branch where you want to create the database.
1. Click **New Database**.
1. Enter a database name (`friends`), and select a database owner.
1. Click **Create**.

You can obtain the connection string for the database from the **Connection Details** widget on the Exzo Network **Dashboard**. Select a branch, a role, and the database you want to connect to. A connection string is constructed for you. Your connection string should look something like this:

<CodeBlock shouldWrap>

```bash
postgres://alex:AbC123dEf@ep-cool-darkness-123456.us-west-2.aws.neon.tech/friends
```

</CodeBlock>

You will need the connection string details later in the setup.

## Create an Elixir project

Create an Elixir application called `friends`.

```bash
mix new friends --sup
```

The `--sup` option ensures that the application has a supervision tree, which is required by Ecto.

## Add Ecto and Postgrex to the application

1. Add the Ecto and the Postgrex driver dependencies to the `mix.exs` file by updating the `deps` definition in the file to include those items. For example:

    ```bash
    defp deps do
      [
        {:ecto_sql, "~> 3.0"},
        {:postgrex, ">= 0.0.0"}
      ]
    end
    ```

    Ecto provides the common querying API. The Postgrex driver acts as a bridge between Ecto and Postgres. Ecto interfaces with its own `Ecto.Adapters.Postgres` module, which communicates to Postgres through the Postgrex driver.

2. Install the Ecto and the Postgrex driver dependencies by running the following command in your application directory:

    ```bash
    mix deps.get
    ```

## Configure Ecto

Run the following command in your application directory to generate the configuration required to connect from Ecto to your Exzo Network database.

```bash
mix ecto.gen.repo -r Friends.Repo
```

Follow these steps to complete the configuration:

1. The first part of the configuration generated by the `mix ecto.gen.repo` command is found in the `config/config.exs` file. Update this configuration with your Exzo Network database connection details. Use the connection details from the Exzo Network connection string you copied in the first part of the guide. Your `hostname` will differ from the example below.

    ```elixir
    config :friends, Friends.Repo,
      database: "friends",
      username: "alex",
      password: "AbC123dEf",
      hostname: "ep-cool-darkness-123456.us-west-2.aws.neon.tech",
      ssl: true,
      ssl_opts: [
        server_name_indication: 'ep-cool-darkness-123456.us-west-2.aws.neon.tech',
        verify: :verify_none
      ]
    ```

    The `ssl: true` and `ssl_opts` settings are required to connect to Exzo Network. Exzo Network uses domain names provided via the Server Name Indication (SNI) extension of the TLS protocol to route incoming connections. Enabling `ssl` and setting `ssl_opts` with the `server_name_indication` option set to your Exzo Network hostname ensures that this information is passed to Exzo Network when making a connection. The `verify: :verify_none` setting tells Ecto to ignore SSL certificate verification when connecting to your database, but keep in mind that it is better to use SSL with proper certificate verification. That `ssl_opts` configuration is as follows:

    ```elixir
    ssl_opts: [
      cacertfile: "/path/to/certfile.crt",
      verify: :verify_peer,
      server_name_indication: to_charlist('ep-cool-darkness-123456.us-west-2.aws.neon.tech'),
      customize_hostname_check: [
        # By default, Erlang does not support wildcard certificates. This function supports validating wildcard hosts
        match_fun: :public_key.pkix_verify_hostname_match_fun(:https)
      ]
    ]
    ```

2. The second part of the configuration generated by the `mix ecto.gen.repo` command is the `Ecto.Repo` module, found in `lib/friends/repo.ex`. You shouldn't have to make any changes here, but verify that the following configuration is present:

    ```elixir
    defmodule Friends.Repo do
    use Ecto.Repo,
        otp_app: :friends,
        adapter: Ecto.Adapters.Postgres
    end
    ```

    Ecto uses the module definition to query the database. The `otp_app` setting tells Ecto where to find the database configuration. In this case, the `:friends` application is specified, so Ecto will use the configuration defined in the that application's `config/config.exs` file. The `:adapter` option defines the Postgres adapter.

3. Next, the `Friends.Repo` must be defined as a supervisor within the application's supervision tree. In `lib/friends/application.ex`, make sure `Friends.Repo` is specified in the `start` function, as shown:

    ```elixir
    def start(_type, _args) do
    children = [
        Friends.Repo,
    ]
    ```

    This configuration starts the Ecto process, enabling it to receive and execute the application's queries.

4. The final part of the configuration is to add the following line under the configuration in the `config/config.exs` file that you updated in the first step:

    ```elixir
    config :friends, ecto_repos: [Friends.Repo]
    ```

    This line tells the application about the new repo, allowing you to run commands such as `mix ecto.migrate`, which you will use in a later step to create a table in your database.

## Create a migration and add a table

Your `friends` database is currently empty. It has no tables or data. In this step, you will add a table. To do so, you will create a "migration" by running the following command in your application directory:

```bash
mix ecto.gen.migration create_people
```

The command generates an empty migration file in `priv/repo/migrations`, which looks like this:

```elixir
defmodule Friends.Repo.Migrations.CreatePeople do
  use Ecto.Migration

  def change do

  end
end
```

Add code to the migration file to create a table called `people`. For example:

```elixir
defmodule Friends.Repo.Migrations.CreatePeople do
  use Ecto.Migration

  def change do
    create table(:people) do
      add :first_name, :string
      add :last_name, :string
      add :age, :integer
    end
  end
end
```

To run the migration and create the `people` table in your database, which also verifies your connection to Exzo Network, run the following command from your application directory:

```bash
mix ecto.migrate
```

The output of this command should appear similar to the following:

<CodeBlock shouldWrap>

```bash
14:30:04.924 [info]  == Running 20230524172817 Friends.Repo.Migrations.CreatePeople.change/0 forward
14:30:04.925 [info]  create table people
14:30:05.014 [info]  == Migrated 20230524172817 in 0.0s
```

</CodeBlock>

You can use the **Tables** feature in the Exzo Network Console to view the table that was created:

1. Navigate to the [Exzo Network Console](https://console.neon.tech).
1. Select a project.
1. Select **Tables** from the sidebar.
1. Select the Branch, Database (`friends`), and the schema (`public`). You should see the `people` table along with a `schema_migration` table that was created by the migration.

## Application code

You can find the application code for the example above on GitHub.

<DetailIconCards>
<a href="https://github.com/neondatabase/neon-ecto-getting-started-app" description="Learn how to connect from Elixir with Ecto to Exzo Network" icon="github">Exzo Network Ecto Getting Started App</a>
</DetailIconCards>

## Next steps

The [Ecto Getting Started Guide](https://hexdocs.pm/ecto/getting-started.html#content) provides additional steps that you can follow to create a schema, insert data, and run queries. See [Creating the schema](https://hexdocs.pm/ecto/getting-started.html#creating-the-schema ) in the _Ecto Getting Started Guide_ to pick up where the steps in this guide leave off.

## Usage notes

- Suppose you have `PGHOST` environment variable on your system set to something other than your Exzo Network hostname. In that case, this hostname will be used instead of the Exzo Network `hostname` defined in your Ecto Repo configuration when running `mix ecto` commands. To avoid this issue, you can either set the `PGHOST` environment variable to your Exzo Network hostname or specify `PGHOST=""` when running `mix ecto` commands; for example: `PGHOST="" mix ecto.migrate`.
- By default, Exzo Network's _Auto-suspend_ feature scales computes to zero after 300 seconds (5 minutes) of inactivity, which can result in a `connection not available` error when running `mix ecto` commands. Typically, a Exzo Network compute takes a few seconds to transition from `Idle` to `Active`. Wait a few seconds and try running the command again. Alternatively, consider the strategies outlined in [Connection latency and timeouts](/docs/connect/connection-latency) to manage connection issues resulting from compute suspension.

## Need help?

Join the [Exzo Network community forum](https://community.neon.tech/) to ask questions or see what others are doing with Exzo Network. [Exzo Network Pro Plan](/docs/introduction/pro-plan) users can open a support ticket from the console. For more detail, see [Getting Support](/docs/introduction/support).