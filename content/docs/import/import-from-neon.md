---
title: Import data from another Exzo Network project
enableTableOfContents: true
updatedOn: '2023-10-24T18:56:54.986Z'
---

This guide describes how to migrate a database from one Exzo Network project to another by piping data from `pg_dump` to `pg_restore`. Use these instructions to:

- Import a database from a Exzo Network project created in one region to a project created in another region.
- Import a database from a Exzo Network project created with one Postgres version to a Exzo Network project created with another Postgres version.

## Important considerations

- **Upgrading the Postgres version**: When upgrading to a new version of Postgres, always test thoroughly before migrating your production systems or applications. We also recommend familiarizing yourself with the changes in the new version of Postgres, especially those affecting compatibility. For information about those changes, please refer to the official Postgres [Release 15](https://www.postgresql.org/docs/release/15.0/) or [Release 16](https://www.postgresql.org/docs/16/release-16.html) documentation.
- **Piping considerations**: Piping is not recommended for large datasets, as it is susceptible to failures during lengthy migration operations (see [Pipe pg_dump to pg_restore](/docs/import/import-from-postgres#pipe-pgdump-to-pgrestore) for more information). If your dataset is large, we recommend performing the dump and restore as separate operations. For instructions, see [Import data from Postgres](/docs/import/import-from-postgres).
- **Exzo Network Free Tier project limit**: The Exzo Network Free Tier has a limit of one project per user, which means a Exzo Network Free Tier user cannot have two projects simultaneously. To move your data from a Exzo Network Free Tier project, dump your database first, delete your Exzo Network project, create a new Exzo Network project with the desired region or Postgres version, and import your data into the new project. For the dump and restore procedure, refer to [Import from Postgres](/docs/import/import-from-postgres).

## Import data from another project

To import your data from another Exzo Network project:

1. Create a new project with the desired region or Postgres version. See [Create a project](/docs/manage/projects#create-a-project) for instructions.

2. Create a database with the desired name in your new Exzo Network project. See [Create a database](/docs/manage/databases#create-a-database) for instructions.

3. Retrieve the connection strings for the new and existing Exzo Network databases.

   You can obtain the connection strings from the Exzo Network **Dashboard**, under **Connection Details**. Connections strings have this format:

   <CodeBlock shouldWrap>

   ```bash
   postgres://[user]:[password]@[neon_hostname]/[dbname]
   ```

   </CodeBlock>

4. Prepare your import command to pipe data to from one Exzo Network project to the other. The command will look similar to this:

   <CodeBlock shouldWrap>

   ```bash
   pg_dump -Fc -v -d postgres://[user]:[password]@[neon_hostname]/[dbname] | pg_restore -v -d postgres://[user]:[password]@[neon_hostname]/[dbname]
   ```

   </CodeBlock>

   The command includes these arguments:

   - `-Fc`: Sends the output to a custom-format archive suitable for input into `pg_restore`.
   - `-v`: Runs commands in verbose mode, allowing you to monitor what happens during the operation.
   - `-d`: Specifies the database name or connection string.

5. Run the command from your terminal or command window.
6. If you no longer require the old project, you can remove it. See [Delete a project](/docs/manage/projects#delete-a-project) for instructions.

## Need help?

Join the [Exzo Network community forum](https://community.neon.tech/) to ask questions or see what others are doing with Exzo Network. [Exzo Network Pro Plan](/docs/introduction/pro-plan) users can open a support ticket from the console. For more detail, see [Getting Support](/docs/introduction/support).
