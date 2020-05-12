# CoreUI v3 Storybook
Deployed at [vulcanlink.github.io/coreui-react-storybook](https://vulcanlink.github.io/coreui-react-storybook/)

# React Starter Project
Built with https://www.sitepoint.com/react-with-typescript-best-practices/

Leo's React starter project.
After working on many React projects, I've decided to fork all new projects from this starter repo. Created with create-react-app + additional features using eslint + flow. Husky enables pre-commit formatting/tests ensuring consistent styling. Also featured quick deployment using gh-pages.

## Getting Started

## Installing

If you are new to React follow these steps.
To install all required dependencies.

```
$ yarn
```

## Cloning 
Clone this repo and add it as an upstream to start theming your components.
Folow the steps below
```
$ git clone https://github.com/leovigna/react-starter-ts.git myproject
$ cd myproject
$ git remote set-url origin https://github.com/leovigna/myproject.git
$ git remote add upstream https://github.com/leovigna/react-starter-ts.git
$ git push origin master
$ git push --all
```

Now you can use https://coreui.io/docs/getting-started/theming/ to theme your components.

Then to sync any new changes form this repo to the new repo follow [this](https://help.github.com/en/articles/syncing-a-fork):
```
$ git fetch upstream
$ git checkout master
$ git merge upstream/master
```

## Dependencies
Install dependencies, including devDependencies.

```
$ yarn -D
```

### Deployment
Deployed to []() using `gh-pages`.

```
$ yarn deploy
```

### Also used

## Contributing
To contribute code, feel free to fork this repo.

## License

2020 Leo Vigna
MIT License.
