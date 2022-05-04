
# Beela Backend

This is the codebase for the backed of Beela's website and BeelaHive. It's built with Strapi.

Strapi is an open-source headless CMS that gives developers the freedom to choose their favorite tools and frameworks and allows editors to manage and distribute their content using their application's admin panel. Based on a plugin system, Strapi is a flexible CMS whose admin panel and API are extensible - and which every part is customizable to match any use case.

The frontend codebase can be found [here](https://github.com/marcelala/beela-web).

## Overview

### Beela

At Beela we are committed to decreasing the evident gap in the unemployment rate between foreign-born women, particularly those from non-European countries, and women and men born in Sweden.

Making a career transition is hard. We help immigrant women and non-binary people define their path, get unblocked, and meet their learning goals. Passion brought us here, and we are empowering the next generation of talented immigrant women and non-binary people.

### BeelaHive

BeelaHive delivers resources to immigrant women and non-binary people aspiring to start or boost their careers in tech. Our content ranges from Web development, UI/UX design, Project Management, Backend and Frontend Software Engineering and more. Join our hive today!

Click [here](https://beela-be.herokuapp.com/) to visit.


## How to run the project


Download or clone the repository in your computer:


```
$ git clone https://github.com/marcelala/beela-web.git
```

In the repository folder:

- install project dependencies with

```
yarn install
```

### `development environment`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
yarn develop
```

### `staging environment`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
yarn start
```

### `build`

Build your admin panel.

```
yarn build
```


## Useful links

<br/>

- [Strapi](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html)
- [PostgresSQL database](https://www.postgresql.org/)
- [GraphQL @Strapi](https://docs.strapi.io/developer-docs/latest/plugins/graphql.html)
- [Heroku](https://www.heroku.com/platform) is a platform as a service based on a managed container system, with integrated data services and a powerful ecosystem, for deploying and running modern apps. The Heroku developer experience is an app-centric approach for software delivery. We use services such as: database (Postgres), deployment(integration with Github)
