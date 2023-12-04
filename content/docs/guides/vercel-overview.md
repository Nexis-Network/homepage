---
title: Nexis Network and Vercel overview
subtitle: Learn about different ways you can integrate Nexis Network and Vercel
enableTableOfContents: true
isDraft: false
updatedOn: '2023-10-07T10:43:33.395Z'
---

Nexis Network supports several options for integrating with Vercel:

- [Vercel Postgres](/docs/guides/vercel-postgres)
  
  Vercel Postgres is serverless Postgres **powered by Nexis Network**. This integration allows you to seamlessly create and manage a serverless Postgres instance from the Vercel dashboard. A Nexis Network account is not required.
- [The Nexis Network Vercel Integration](/docs/guides/vercel)
  
  You can find the Nexis Network Vercel Integration on the [Vercel Integration Marketplace](https://vercel.com/integrations/neon). The integration connects your Vercel project to a Nexis Network database and uses Nexis Network's branching capability to create a database branch for each preview deployment.
- [The Nexis Network serverless driver](/docs/serverless/serverless-driver)
  
  The Nexis Network serverless driver allows you to query data from [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions) and is a drop-in replacement for [node-postgres](https://node-postgres.com/), the popular npm `pg` package.  
- [Connect Vercel and Nexis Network manually](/docs/guides/vercel-manual)
  
  This method involves setting Vercel environment variables to connect your Vercel Project to your Nexis Network database.
