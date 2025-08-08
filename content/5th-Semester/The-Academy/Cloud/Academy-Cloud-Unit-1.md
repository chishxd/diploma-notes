## Table Of Contents
[[#1.1 - Introduction to Cloud Computing]]

# 1.1 - Introduction to Cloud Computing
Definition, Evolution of Cloud computing (from Mainframes to Clouds), Service – Oriented Architecture, Web Services, Grid Computing, Utility Computing.

---
## **Definition of Cloud Computing**

==Cloud computing is a model for enabling [^1]ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction.== 

This cloud model is composed of **five essential characteristics, three service models, and four deployment models**.

**Essential Characteristics:**
- *On-demand self-service*. A consumer can unilaterally provision computing capabilities, such as server time and network storage, as needed automatically without requiring human interaction with each service provider.

- *Broad network access*. Capabilities are available over the network and accessed through standard mechanisms that promote use by heterogeneous thin or thick client platforms (e.g., mobile phones, tablets, laptops, and workstations).

- *Resource pooling*. The provider’s computing resources are pooled to serve multiple consumers using a multi-tenant model, with different physical and virtual resources dynamically assigned and reassigned according to consumer demand. There is a sense of location independence in that the customer generally has no control or knowledge over the exact location of the provided resources but may be able to specify location at a higher level of abstraction (e.g., country, state, or datacenter). Examples of resources include storage, processing, memory, and network bandwidth.

- *Rapid elasticity*. Capabilities can be elastically provisioned and released, in some cases automatically, to scale rapidly outward and inward commensurate with demand. To the consumer, the capabilities available for provisioning often appear to be unlimited and can be appropriated in any quantity at any time.

- *Measured service*. Cloud systems automatically control and optimize resource use by leveraging a metering capability at some level of abstraction appropriate to the type of service (e.g.,storage, processing, bandwidth, and active user accounts). Resource usage can be monitored, controlled, and reported, providing transparency for both the provider and consumer of the utilized service.

**Service Models:**
- *Software as a Service (SaaS).* The capability provided to the consumer is to use the provider’s applications running on a cloud infrastructure. The applications are accessible from various client devices through either a thin client interface, such as a web browser (e.g., web-based email), or a program interface. The consumer does not manage or control the underlying cloud infrastructure including network, servers, operating systems, storage, or even individual application capabilities, with the possible exception of limited user- specific application configuration settings.

- *Platform as a Service (PaaS)*. The capability provided to the consumer is to deploy onto the cloud infrastructure consumer-created or acquired applications created using programming languages, libraries, services, and tools supported by the provider. The consumer does not manage or control the underlying cloud infrastructure including network, servers, operating systems, or storage, but has control over the deployed applications and possibly configuration settings for the application-hosting environment. Infrastructure as a Service (IaaS). The capability provided to the consumer is to provision processing, storage, networks, and other fundamental computing resources where the consumer is able to deploy and run arbitrary software, which can include operating systems and applications. The consumer does not manage or control the underlying cloud infrastructure but has control over operating systems, storage, and deployed applications; and possibly limited control of select networking components (e.g., host firewalls).

**Deployment Models:**
- *Private cloud*. The cloud infrastructure is provisioned for exclusive use by a single organization comprising multiple consumers (e.g., business units). It may be owned, managed, and operated by the organization, a third party, or some combination of them, and it may exist on or off premises.

- *Community cloud.* The cloud infrastructure is provisioned for exclusive use by a specific community of consumers from organizations that have shared concerns (e.g., mission, security requirements, policy, and compliance considerations). It may be owned, managed, and operated by one or more of the organizations in the community, a third party, or some combination of them, and it may exist on or off premises.

- *Public cloud*. The cloud infrastructure is provisioned for open use by the general public. It may be owned, managed, and operated by a business, academic, or government organization, or some combination of them. It exists on the premises of the cloud provider.

- *Hybrid cloud*. The cloud infrastructure is a composition of two or more distinct cloud infrastructures (private, community, or public) that remain unique entities, but are bound together by standardized or proprietary technology that enables data and application portability (e.g., cloud bursting for load balancing between clouds).

---
## Evolution of Cloud Computing

Before evolution of Cloud Computing, there existed a centralized storage which stored all the software apps, data, and services as a part of Client/Server computing on Server side.  So whenever somebody wanted some data... They would need to access the server and get the resources they need.Then the concept of distributed computing came into existence which finally evolved to cloud computing .

Cloud Computing came into existence in 1950s when mainframe computers were accessed via dummy terminals into a central computer. It was done by users to gain access. The need for the idea of sharing resources was felt as the excessive costs of mainframes were not economically feasible. Hence, there was an urgent need to reduce costs

In the 1970s, IBM introduced an operating system called VM and the concurrent operation of more than one OS was made possible. VM’s can allow Guest Operating Systems to run on it, having their own infrastructure and memory and resource sharing also made possible. This made the concept of virtualization quite popular. In the 1990s, the telecom companies began providing virtualized private network connections,  with better service and quality than point-to-point services at less cost. This made companies to offer shared access to users in a single infrastructure. The evolution of cloud computing can be diverted into three main phases:

- The Idea Phase: This started in the early 1960s with the rise of
service and grid computing and continued until the pre-internet era.
- The Pre-cloud Phase: This stage initiated in the year 1999 and
continued till 2006. In this, the internet was used as the machinery to
provide applications as a service.
-  The Cloud Phase: The concept of IaaS, PaaS, and SaaS was clearly
identified and became practical in the year 2007. Since then the cloud
computing has continuously evolved changing the face of world via
resource sharing and transforming end-user computing.

---
### Footnotes
[^1]: Ubiqutous : To be available everywhere at the same time.
