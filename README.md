# CoreUI v3 Storybook
Deployed at [vulcanlink.github.io/coreui-react-storybook](https://vulcanlink.github.io/coreui-react-storybook/)

CoreUI Storybook Welcome to CoreUI v3 Storybook! Fork the storybook to theme your own CoreUI components. If you're not familiar with CoreUI or Storybook, feel free to checkout the [CoreUI Docs](https://coreui.io/react/docs/)> and [Storybook Docs](https://storybook.js.org/docs/basics/introduction/).

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
$ git clone https://github.com/vulcanlink/coreui-react-storybook.git PROJECT_NAME
$ cd PROJECT_NAME
$ git remote set-url origin https://github.com/USERNAME/PROJECT_NAME.git
$ git remote add upstream https://github.com/vulcanlink/coreui-react-storybook.git
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
Deployed to [vulcanlink.github.io/coreui-react-storybook](https://vulcanlink.github.io/coreui-react-storybook) using `gh-pages`.

```
$ yarn deploy
```

### Also used

## Contributing
To contribute code, feel free to fork this repo.

## License

2020 Leo Vigna
MIT License.
