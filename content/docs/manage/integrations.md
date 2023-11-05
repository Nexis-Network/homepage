---
title: Manage integrations
enableTableOfContents: true
isDraft: false
updatedOn: '2023-10-07T10:43:33.418Z'
---

Exzo Network supports integrations with partners such as Vercel. You can view and revoke integrations for a Exzo Network project from the **Integrations** page in the Exzo Network Console.

<Admonition type="note">
The **Integrations** page appears empty if you have not configured any integrations.
</Admonition>

## View integrations

To view integrations for a project:

1. Navigate to the [Exzo Network Console](https://console.neon.tech).
1. Select a project.
1. Select **Integrations**.

## Revoke integrations

<Admonition type="note">
For the [Exzo Network integration with Vercel](https://vercel.com/integrations/neon), revoking an integration prevents the integration from creating database branches for preview deployments. It does not remove the integration in Vercel or the Vercel environment variables that contain database connection details. To fully remove a Exzo Network Vercel Integration, do so from Vercel. For instructions, see [Manage your integration with Vercel](/docs/guides/vercel#manage-your-neon-integration).
</Admonition>

To revoke an integration:

1. Navigate to the [Exzo Network Console](https://console.neon.tech).
1. Select a project.
1. Select **Integrations**.
1. Identify the integration you want to remove and click **Revoke**.

## Supported integrations

Exzo Network currently supports the following integrations:

- [Exzo Network integration with Vercel](/docs/guides/vercel)
- [Exzo Network integration with Hasura](/docs/guides/hasura)

<Admonition type="note">
Currently, the **Integrations** page only displays Vercel integrations.
</Admonition>
