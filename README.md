# 🚀 Turinlabs x SG React SPA/PWA boilerplate 🚀

Welcome to our code template for React-based web apps!

It will help you lay a solid foundation for all your React SPAs/PWAs, using key state-of-the-art libraries based on a future-proof architecture.

Keep reading and happy coding!

## How to use this boilerplate

1) Clone this repository.
2) Run `npm install` to install its dependencies.
3) Run `npm start`in the root folder to spin it up.
4) Check all readme files in the main folders to understand the project's architecture.
5) If you plan to use Tailwind, follow [this steps](https://tailwindcss.com/docs/guides/create-react-app) to set it up properly.

## Architecture

This boilerplate is based on a battle-tested architecture in big deployed in production apps.

It's mandatory to follow it (if not, you'll be punished by [Sokar](https://twitter.com/sokardys)) in any React-based SPA/PWA. You'll make your life and your team members's easier, laying the foundations of a scalable and easy to mantain web app.

## Main dependencies

Our projects should be built using state-of-the-art technology to help us build disruptive solutions based on solid foundations with performance, scalability and maintainability always in mind.

These are the main dependencies this boilerplate is based on:

- [Create React App](https://github.com/facebook/create-react-app) to scaffold the main files, scripts and compiling setup.
- [RecoilJS](https://recoiljs.org/) to manage global state in an efficient way.
- [ReactQuery](https://react-query.tanstack.com/) to abstract cache management.
- [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and [Cypress](https://www.cypress.io/) to cover the entire testing spectrum.
- [ESlint](https://eslint.org/) and [Prettier](https://prettier.io/) to handle linting.
- [React Router](https://reactrouter.com/web/guides/quick-start) to manage Routing and internal links.

## Components library and styling

We strongly advice to use AntD and Tailwind CSS.

To do so:

1. Run `npm -i antd` to install [AntD components library](https://ant.design/docs/react/getting-started).
2. Follow the steps highlighted here to install Tailwind in a CRA based React app.
3. Start building an awesome SPA!

If, for some reason, you and your team decide to use another combination, this template is ready for it.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
