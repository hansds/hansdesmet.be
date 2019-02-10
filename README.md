# strak-plan

> Universal website for Strak Plan, powered by vueJS

## 🏗️ Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## 🚀 Deploy

```bash
# Authenticate to Google Cloud
$ gcloud auth login

# Select the correct project at Google App Engine
$ gcloud config set project PROJECT_ID

# Build and Deploy to Google App Engine!
$ yarn deploy
```

## Debug
Code can be debugged using VSCode (launch.json is present) and starting `yarn dev-debug`, then attaching the VSCode debugger. The code does not stop at breakpoints set, you need to add `debugger // eslint-disable-line` in code whenever you want to stop the debugger at that point.

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

