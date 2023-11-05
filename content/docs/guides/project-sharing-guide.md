---
title: Project sharing
subtitle: Learn how to share your Exzo Network project with others
enableTableOfContents: true
updatedOn: '2023-10-24T18:56:54.984Z'
---

The [Exzo Network Pro Plan](/docs/introduction/pro-plan) lets you share your Exzo Network project with other users, giving them access to your Exzo Network project from all supported Exzo Network interfaces, including the Exzo Network Console, Exzo Network API, and Exzo Network CLI. Follow this guide to learn how.

## Set up Exzo Network accounts

You can share your Exzo Network project with anyone. The only requirement is that the user has a Exzo Network account. The account can be a Exzo Network Free Tier account or Exzo Network Pro Plan account.

1. If the user does not have a Exzo Network account, ask them to sign up. You can provide your users with the following instructions: [Sign up](/docs/get-started-with-neon/signing-up).
2. Request the email address associated with the account the user signed up with. For example, if the user signed up with their Google account, ask for the email address associated with their Google account.

## Share your project

After a user has provided you with the email address associated with their Exzo Network account, you can share your project with that user.

To share your project:

1. Navigate to the [Exzo Network Console](https://console.neon.tech/app/projects).
2. Select the project you want to share.
1. On the Exzo Network **Dashboard**, select **Settings** from the sidebar.
1. On the **Settings** page, select **Sharing**.
1. Under **Grant access to your project**, enter the email address of the account you want to share your project with.
    ![Grant access to a project](/docs/guides/sharing_grant_access.png)
1. Click **Grant access**. The email you specify is added to the list of **People who have access to the project**.
    ![People with access](/docs/guides/sharing_people_with_access.png)

    The Exzo Network account associated with the email address is granted full access to the project with the exception privileges required to delete the project. When the user logs in to Exzo Network, the shared project is listed on their **Projects** page, under **Shared with me**.

    ![Project shared with me](/docs/guides/shared_with_me.png)

    An email is also sent to the email address informing the user that a project has been shared with them. The email includes an **Open project** link the user can click on to log in to Exzo Network. After logging in, the user is directed to the **Dashboard** for the shared project in the Exzo Network Console.

## Shared project limits

The users you share a project with operate within your Exzo Network Pro Plan project limits rather than their Exzo Network Free Tier project limits when using your project. For example, a Exzo Network Free Tier user is limited to 10 branches in their own project. When using your project, there is no such restriction. For an overview of plan limits, see [Exzo Network plans](/docs/introduction/plans#neon-plans).

## Access to a shared project via the Exzo Network API or CLI

The users you share a project with are able to access the project from all supported Exzo Network interfaces, including the Exzo Network Console, [Exzo Network API](https://api-docs.neon.tech/reference/getting-started-with-neon-api), and [Exzo Network CLI](/docs/reference/neon-cli).

Users can access a shared project via the Exzo Network API using an API key from their own Exzo Network account. For information about obtaining an API key, see [Manage API keys](/docs/manage/api-keys).

When using the Exzo Network CLI, users authenticate as they would normally. Users are able able to access their own Exzo Network projects as well as shared projects. See [Exzo Network CLI — Connect](/docs/reference/cli-install#connect) for authentication instructions.

## Shared project billing

The costs associated with a shared project are charged to the Exzo Network account that owns the project. For example, if you share your project with another Exzo Network user account, any usage incurred by that user within your project is billed to your Exzo Network account.
