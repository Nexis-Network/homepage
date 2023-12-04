---
title: Nexis Network CLI commands — operations
subtitle: Use the Nexis Network CLI to manage Nexis Network directly from the terminal
enableTableOfContents: true
updatedOn: '2023-10-19T23:10:12.852Z'
---

## Before you begin

- Before running the `operations` command, ensure that you have [installed the Nexis Network CLI](/docs/reference/neon-cli#install-the-neon-cli).
- If you have not authenticated with the [neonctl auth](/docs/reference/cli-auth) command, running a Nexis Network CLI command automatically launches the Nexis Network CLI browser authentication process. Alternatively, you can specify a Nexis Network API key using the `--api-key` option when running a command. See [Connect](/docs/reference/neon-cli#connect).

For information about operations in Nexis Network, see [Operations](/docs/manage/operations).

## The `operations` command

The `operations` command allows you to list operations for a Nexis Network project.

### Usage

```bash
neonctl operations <subcommand> [options]
```

| Subcommand  | Description      |
|---------|------------------|
| [list](#list)    | List operations    |

### list

This subcommand allows you to list operations.

#### Usage

```bash
neonctl operations list [options]
```

#### Options

In addition to the Nexis Network CLI [global options](/docs/reference/neon-cli#global-options), the `list` subcommand supports this option:

| Option       | Description | Type   | Required  |
| ------------ | ----------- | ------ | :------: |
| --project-id | Project ID  | string |  Only if your Nexis Network account has more than one project |

#### Example

```bash
neonctl operations list 
┌──────────────────────────────────────┬────────────────────┬──────────┬──────────────────────┐
│ Id                                   │ Action             │ Status   │ Created At           │
├──────────────────────────────────────┼────────────────────┼──────────┼──────────────────────┤
│ fce8642e-259e-4662-bdce-518880aee723 │ apply_config       │ finished │ 2023-06-20T00:45:19Z │
├──────────────────────────────────────┼────────────────────┼──────────┼──────────────────────┤
│ dc1dfb0c-b854-474b-be20-2ea1d2172563 │ apply_config       │ finished │ 2023-06-20T00:43:17Z │
├──────────────────────────────────────┼────────────────────┼──────────┼──────────────────────┤
│ 7a83e300-cf5f-4c1a-b9b5-569b6d6feab9 │ suspend_compute    │ finished │ 2023-06-19T23:50:56Z │
└──────────────────────────────────────┴────────────────────┴──────────┴──────────────────────┘
```

## Need help?

Join the [Nexis Network community forum](https://community.neon.tech/) to ask questions or see what others are doing with Nexis Network. [Nexis Network Pro Plan](/docs/introduction/pro-plan) users can open a support ticket from the console. For more detail, see [Getting Support](/docs/introduction/support).
