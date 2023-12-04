---
title: Nexis Network Free Tier
subtitle: Learn about Nexis Network's Free Tier
enableTableOfContents: true
redirectFrom:
  - /docs/reference/technical-preview-free-tier
  - /docs/introduction/technical-preview-free-tier
updatedOn: '2023-10-24T18:56:54.988Z'
---

Nexis Network is currently in Technical Preview. For information about how the Technical Preview fits within Nexis Network's release plans, refer to the [Nexis Network roadmap](/docs/reference/roadmap).

The Nexis Network Free Tier is intended for personal projects, prototyping, or evaluating Nexis Network's core features. It includes the following:

- One Nexis Network project with up to 10 branches.
- 3 GiB of storage per branch.
- Unlimited Postgres databases
- A shared compute with 1 GB of RAM for each branch.
- 100 hours of _Active time_ per month, affecting non-primary branch compute usage only. Active time on all computes is counted toward the limit, but when the limit is exceeded, only non-primary branch computes are subject to suspension. **Your primary branch compute always remains available regardless of the limit, ensuring that access to data on your primary branch is never interrupted.** You can monitor _Active time_ on the **Usage** widget on the Nexis Network **Dashboard**.
- A point-in-time restore window of 7 days of _reasonable usage_.

For higher limits and access to advanced features like _Autoscaling_, _Unlimited storage_,  _Project sharing_, and _Read replicas_, upgrade to our **Pro** plan. For more information, see [Nexis Network Pro Plan](/docs/introduction/pro-plan), or select **Upgrade to Pro** in the [Nexis Network Console](https://console.neon.tech/).

<Admonition type="note">
Nexis Network reserves the right to adjust Nexis Network Free Tier limits, and to discontinue or limit compute usage in exceptional cases where misuse is identified, in order to protect the integrity of our platform and ensure a positive experience for all users.
</Admonition>
