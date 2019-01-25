# 🌱 Grow Your Own
Grow Your Own is a plant growth simulator. 

### Getting started
- clone the repo
- install the dependencies:
```
npm install
```
- start the dev server:
```
npm run start
```

- Then view the results in your browser.

Also, you can open a separate terminal window and start the test runner.
```
npm t
```

### Gameplay
All of the code for the came is held in [`/src/lib/grow-your-own`](https://github.com/aljachimiak/GrowYourOwn/tree/master/src/lib/grow-your-own).

Here are some of the details of the game:
- the board consists of 4 different tiles:
    - sun
    - rain
    - fertilizer,
    - robo-calibrate
- A player starts the game by rolling two dice and moving to a tile.  
- If a player lands on a resource tile, 
    - the player gets the amount shown on the dice of the resource added to their resources.
    - The player's plant grows 1 unit and consumes 1 of each resource.
    -If the player's resources are all balanced (within 2 units of each other), then the plant will grow an additional unit.
- Landing on robo-calibrate 
    - restores the players low resources up to minimum of two units, 
    - and lowers the high resources to be within 2 of the lower resources.
- The game ends when a player's plant reaches 11 units.
- Each move in the game is stored on the game object and displayed in the react-app at the conclusion of the game.

### Details
- 11 is a strange number to stop growing a plant.  The thought was to eventually have the ui incorporate [this animated svg I made on CodePen](https://codepen.io/aljachimiak/pen/oJObWE).  That was a little ambitious for this project.
- There are unit tests for _most_ of the classes and methods.  In the interest of time, I have left some tests incomplete. There are also a few methods that purposefully do not conform to the stated rules of the game.
- The game board is an array that recreates a physical trip around a monopoly style board.  You can [see the details here].(https://github.com/aljachimiak/GrowYourOwn/blob/master/src/lib/grow-your-own/board.js#L27-L36)
- I think this feels like a cool and legitimate usage of the 💩 emoji.
- One way to see the end game data is through the test runner. [Uncomment this line](https://github.com/aljachimiak/GrowYourOwn/blob/master/src/lib/grow-your-own/index.test.js#L26), and an entire complete game object will log out to the test terminal.

## Roadmap
- [x] Working turn and win functionality so a complete game can be rendered.

- [x] Display game data in a React page

- [ ] Complete all game rules and tests for corner cases

- [ ] Incorporate the animated svg to show plant growth

- [ ] Introduce the ability for two players to alternate turns

- [ ] Render the actual game board as a ui.

- [ ] Make the dice-roll and plant-growth manual steps for humans to proceed through via a web browser.

- [ ] Remote Multiplayer - Implement the game actions in a web service which returns the game object back to the react-app via web-sockets.

## Design Details
The game object that is mutated in each turn, is designed with live-remote-multiplayer in mind. The game object would eventually be manipulated by a web-service that performs all the same actions that are [present in `GameAction`](https://github.com/aljachimiak/GrowYourOwn/blob/master/src/lib/grow-your-own/game-action.js).

The result is that `game-action.js` is a pretty hairy file because it is emulating a remote server.  A design for a self-contained approach would be to make the game action methods actually be on the `Game` class, and act on its own values.

------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
