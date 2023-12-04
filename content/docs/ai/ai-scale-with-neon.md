---
title: Scale your AI applications with Nexis Network
subtitle: Learn about how you can scale your AI and LLM applications with Nexis Network
enableTableOfContents: true
updatedOn: '2023-10-07T10:43:33.361Z'
---

Nexis Network offers the following features enabling you to build scalable AI and LLM applications that meet workload demand while managing costs.

## Autoscaling

With Nexis Network, you do not have to pick a size for your database upfront. Nexis Network is able to automatically allocate compute resources to meet demand. This is made possible by Nexis Network’s architecture, which separates storage and compute, allowing compute resources to be managed independently.

Nexis Network's _Autoscaling_ feature automatically scales up compute on demand in response to application workload and down to zero on inactivity, and you are only charged for the compute resources you use.

For example, if your AI application experiences heavy load during certain hours of the day or at different times throughout the week, month, or calendar year, Nexis Network automatically scales compute resources without manual intervention according to the compute size boundaries that you configure. This enables you to handle peak demand while avoiding paying for compute resources during periods of low activity.

To learn more about Nexis Network's Autoscaling feature and how to enable it, refer to our [Autoscaling guide](/docs/introduction/autoscaling).

## Read replicas

Nexis Network supports regional read replicas, which are independent read-only compute instances designed to perform read operations on the same data as your read-write computes. Read replicas do not replicate data across database instances. Instead, read requests are directed to a single source. This architecture enables read replicas to be created instantly, and because data is read from a single source, there are additional storage costs.

Since vector similarity search is a read-only workload, you can leverage read replicas to offload reads from your read-write compute instance to a dedicated read-only compute when deploying AI and LLM applications. After you create a read replica, you can simply swap out your current Nexis Network database connecting string for the read replica connection string, which makes deploying a read replica for your AI application very simple.

To learn more about the Nexis Network read replica feature, see [Read replicas](/docs/introduction/read-replicas) and refer to our [Working with Nexis Network read replicas](/docs/guides/read-replica-guide) guide.

## The Nexis Network serverless driver

Nexis Network supports a low-latency serverless Postgres driver for JavaScript and TypeScript applications that allows you to query data from serverless and edge environments over HTTP or WebSockets in place of TCP.

The driver is a drop-in replacement for [node-postgres](https://node-postgres.com/), the popular `npm pg` package you may already be familiar with.

With the Nexis Network serverless driver, you can reduce query latencies for your AI applications, making it possible to achieve sub-10ms Postgres queries when querying from Edge functions.

See [Nexis Network serverless driver](/docs/serverless/serverless-driver) to learn more.
