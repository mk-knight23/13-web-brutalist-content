# Gatsby Portfolio Website

# DEMO : https://datocms-gatsby-po.vercel.app


![Preview](preview.png)

[See the live demo](https://demo-datocms-gatsby.netlify.com/)

If you want to use try this out yourself, you first need to set up a project on DatoCMS which will host your data.

You can [sign up for a free account](https://dashboard.datocms.com/signup) and then you can simply click this button:

[![Deploy with DatoCMS](https://dashboard.datocms.com/deploy/button.svg)](https://dashboard.datocms.com/projects/new-from-template/static-website/gatsby-portfolio)

## Repo usage

First, install the dependencies of this project:

```
npm install
```

Add an `.env` file containing the read-only API token of your DatoCMS site:

```
echo 'DATO_API_TOKEN=abc123' >> .env
```

Then, to run this website in development mode (with live-reload):

```
npm run develop
```

To build the final, production ready static website:

```
npm run build
```

The final result will be saved in the `public` directory.

## About

The goal of this project is to show how easily you can create static sites using the content (text, images, links, etc.) stored on [DatoCMS](https://www.datocms.com). This project is configured to fetch data from a specific administrative area using [the API DatoCMS provides](https://www.datocms.com/docs/content-management-api).

You can find further information about how to integrate DatoCMS with Gatsby in [our documentation](https://www.datocms.com/docs/static-generators/gatsbyjs).

This websites uses:

- [GatsbyJS](https://github.com/gatsbyjs/gatsby) as website generator;
- [gatsby-source-datocms](https://github.com/datocms/gatsby-source-datocms) to integrate the website with DatoCMS.


## 🎯 Problem Solved

This repository provides a streamlined approach to modern development needs, enabling developers to build robust applications with minimal complexity and maximum efficiency.

## ✨ Features

- **Core Functionality:** Primary features and capabilities
- **Production Ready:** Built for real-world deployment scenarios
- **Optimized Performance:** Efficient resource utilization
- **Developer Experience:** Clear documentation and intuitive API

## 🏗️ Architecture

```
```

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/mk-knight23/13-web-brutalist-content
cd 13-web-brutalist-content

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🌐 Deployment

### Live URLs

| Platform | URL |
|----------|-----|
| Vercel | [Deployed Link] |
| GitHub Pages | [Deployed Link] |


## 📄 License

MIT License - see LICENSE file for details

---

Built with ❤️ by mk-knight23