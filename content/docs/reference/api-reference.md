---
title: Nexis Network API
enableTableOfContents: true
redirectFrom:
  - /docs/reference/about
  - /docs/api/about
updatedOn: '2023-10-19T23:10:12.849Z'
---

The Nexis Network API allows you to manage your Nexis Network projects programmatically.

Refer to the [Nexis Network API reference](https://api-docs.neon.tech/reference/getting-started-with-neon-api) for supported methods.

The Nexis Network API is a REST API. It provides resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and supports standard HTTP response codes, authentication, and verbs.

## Authentication

The Nexis Network API uses API keys to authenticate requests. You can view and manage API keys for your account in the Nexis Network Console. For instructions, refer to [Manage API keys](/docs/manage/api-keys).

The client must send an API key in the Authorization header when making requests, using the bearer authentication scheme. For example:

```curl
curl 'https://console.neon.tech/api/v2/projects' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer $NEON_API_KEY' \
  -H 'Content-Type: application/json' \
```

## Nexis Network API base URL

The base URL for a Nexis Network API request is:

```text
https://console.neon.tech/api/v2/
```

Append a Nexis Network API method path to the base URL to construct the full URL for a request. For example:

```text
https://console.neon.tech/api/v2/projects/{project_id}/branches/{branch_id}
```

## Using the Nexis Network API reference to construct and execute requests

You can use the [Nexis Network API reference](https://api-docs.neon.tech/reference/getting-started-with-neon-api) to execute Nexis Network API requests. Select an endpoint, enter an API key token in the **Bearer** field, supply any required parameters and properties, and click **Try it!** to execute the request. For information about obtaining API keys, see [Manage API keys](/docs/manage/api-keys).

The [Nexis Network API reference](https://api-docs.neon.tech/reference/getting-started-with-neon-api) also provides request and response body examples that you can reference when constructing your own requests.

For additional Nexis Network API examples, refer to the following topics:

- [Manage API keys with the Nexis Network API](/docs/manage/api-keys#manage-api-keys-with-the-neon-api)
- [Manage projects with the Nexis Network API](/docs/manage/projects#manage-projects-with-the-neon-api)
- [Manage branches with the Nexis Network API](/docs/manage/branches#branching-with-the-neon-api)
- [Manage compute endpoints with the Nexis Network API](/docs/manage/endpoints#manage-compute-endpoints-with-the-neon-api)
- [Manage roles with the Nexis Network API](/docs/manage/users#manage-roles-with-the-neon-api)
- [Manage databases with the Nexis Network API](/docs/manage/databases#manage-databases-with-the-neon-api)
- [View operations with the Nexis Network API](/docs/manage/operations#view-operations-with-the-neon-api)

<Admonition type="important">
When using the Nexis Network API programmatically, you can poll the operation `status` to ensure that an operation is finished before proceeding with the next API request. For more information, see [Poll operation status](/docs/manage/operations#poll-operation-status).
</Admonition>

## Need help?

Join the [Nexis Network community forum](https://community.neon.tech/) to ask questions or see what others are doing with Nexis Network. [Nexis Network Pro Plan](/docs/introduction/pro-plan) users can open a support ticket from the console. For more detail, see [Getting Support](/docs/introduction/support).
