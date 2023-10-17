# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

First ensure you have [node.js](https://nodejs.org/en) installed.
In the project directory, first run:

### `npm install react-scripts`

Then run:

### `npm install react-router-dom`
``
Then run:

### `npm install -g yarn`

Then run:

### `yarn`

From this point forward, you should be able to run any available scripts below.

## Known Vulnerability Fix

`nth-check` has a known false positive on `react-scripts@5.0.1` due to a dependency leaving `nth-check` on version `1.0.2`.
After running `yarn` simply check `yarn.lock` and remove the package instance of `nth-check@^1.0.2` and replace any reference occurrence of `1.0.2` to `2.0.1`.
To check that this was done successfully, run `yarn audit`.

This vulnerability is only being shown on audit on developer side for the unsafe regex issue, but not on production side, as running `npm audit --omit=dev` will show since `react-scripts` is only in `devDependencies` in the `package.json`.

## Available Scripts

In command line terminal, you can run command:

### `lsof -i :3000` for mac/linux, `netstat -ano | findstr :3000` for windows

This command determines if there are any active apps using port 3000.

To stop any apps on this port before running this project, run command:

### `kill -9 <PID>` for mac/linux, `taskkill /F /PID <PID>` for windows

Replace `<PID>` with the given <PID> from the previous line command.

Now you should be able to run the start scripts below.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will automatically update to reflect code changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
