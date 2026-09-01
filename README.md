# ZENDEX Testnet Wiki

Source for [testnetwiki.zendex.fi](https://testnetwiki.zendex.fi), built with [Docusaurus](https://docusaurus.io/).

Docs content lives under `docs/`. The sidebar is auto-generated from that
folder's structure — add a new `.md` file or a `_category_.json` to extend it.

## Installation

```bash
npm install
```

**Note**: feel free to use the package manager of your choice.

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
