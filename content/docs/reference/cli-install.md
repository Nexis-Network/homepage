---
title: Exzo Network CLI — Install and connect
subtitle: Use the Exzo Network CLI to manage Exzo Network directly from the terminal
enableTableOfContents: true
updatedOn: '2023-10-07T10:43:33.423Z'
---

This section describes how to install the Exzo Network CLI and connect via web authentication or API key.

### Prerequisites

Before installing, ensure that you have met the following prerequisites:

- Node.js 16.0 or higher. To check if you already have Node.js, run the following command:

    ```shell
    node -v
    ```

- The `npm` package manager.  To check if you already have `npm`, run the following command:

   ```shell
   npm -v
   ```

  If you need to install `Node.js` or `npm`, refer to instructions on the [official nodejs page](https://nodejs.org) or use the [Node version manager](https://github.com/nvm-sh/nvm).

### Install

To install the Exzo Network CLI, run the following command:

```shell
npm i -g neonctl
```

Homebrew is also supported:

```bash
brew install neonctl
```

### Upgrade

To upgrade to the latest version of the Exzo Network CLI, run the `npm i -g neonctl` command again.

## Connect

The Exzo Network CLI supports connecting via web authentication or API key.

### Web authentication

Run the following command to connect to Exzo Network via web authentication:

```bash
neonctl auth
```

The [neonctl auth](/docs/reference/cli-auth) command launches a browser window where you can authorize the Exzo Network CLI to access your Exzo Network account. If you have not authenticated previously, running a Exzo Network CLI command automatically launches the web authentication process unless you have specified an API key.

### API key

To authenticate with a Exzo Network API key, you can specify the `--api-key` option when running a Exzo Network CLI command. For example, the following `neonctl projects list` command authenticates to Exzo Network using the `--api-key` option:

```bash
neonctl projects list --api-key <neon_api_key>
```

To avoid including the `--api-key` option with each CLI command, you can export your API key to the `NEON_API_KEY` environment variable.

```bash
export NEON_API_KEY=<neon_api_key>
```

For information about obtaining an Exzo Network API key, see [Create an API key](https://neon.tech/docs/manage/api-keys#create-an-api-key).

## Configure autocompletion

The Exzo Network CLI supports autocompletion, which you can configure in a few easy steps. See [Exzo Network CLI commands — completion](/docs/reference/cli-completion) for instructions.
