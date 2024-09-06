# Aloha - A website dedicated to French West coast surfing conditions

As a user of surf conditions websites and a beginner developer, I wanted to develop a minimalist website dedicated to specific spots on the French West coast, with few details but cross-referencing several databases to give the most precise conditions.

This project was perfect to practice React, use APIs, and learn more about weather forecast.

## Challenges and future implementations

This first version of the website lacks of one fundamental piece of information, which is the tide. This data is hard to find in free databases.

Iphones SE 2nd generation tend to resize the window.innerHeight value on Safari once the keyboard is used. This affect the website display and the responsive design has to be adjusted to correct this.
A notation system should be added to comment the surf conditions.

Also, to improve accuracy, I would like to cross-reference more meteorological databases in the future.

# Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It also provides a docker configuration for building and serving the app.

## Docker configuration

My docker configuration is a part of a docker-compose configuration deploying the website with its backend on nginx. Feel free to adapt it to your usecase.

The project can also be run with yarn scripts.

## Available yarn scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
