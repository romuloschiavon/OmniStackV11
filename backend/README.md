# Backend
In this area I will show you how to execute and run the back-end server so you can view the frontend and mobile.

If you just want to see the system working go to:
- [Frontend](https://github.com/romuloschiavon/OmniStackV11/blob/master/frontend/README.md)
- [Mobile](https://github.com/romuloschiavon/OmniStackV11/blob/master/mobile/README.md)

## Server Set-up
For the project to run you should **have installed [Node and Node Package Manager(NPM)](https://nodejs.org/en/docs/guides/getting-started-guide/)**, checkout their getting started for more information about how to install them at your machine.

After cloning the repository (OmniStackV11) we will start by installing all the dependencies the server will require.

Go to the backend folder and **open a terminal inside it!**, *and if you dont know how to do that learn more [here](https://www.groovypost.com/howto/open-command-window-terminal-window-specific-folder-windows-mac-linux/).*
Then run **>```npm install```**.

![Just like this](https://i.imgur.com/gyT14Py.gif)

If all the instalations are succesfful you can run **>```npm start```**, and the backend should work.

![And This](https://i.imgur.com/nEihNJt.gif)

## **Testing**
For testing we're using the TDD method. Exceptionally this time (we developed before we created the tests because of the short period of time for dev), so **DO NOT** expect all the testing to be implemented, that is a WIP!

### Running tests:
Go to the backend folder and **open a terminal inside it**, then run **>```npm test```**. You should run all the tests and see if any of them PASS or FAIL.

![Like this](https://i.imgur.com/1Mlxw9a.gif)

For **creating new tests//changing variables for testing** go to 'backend/tests/':
- For *integration tests*: 'backend/tests/integration/'
- For *unit tests*: 'backend/tests/unit/

## **FAQ/Common Issues**
-	>Note that the backend server will listen to the port 3333 @ http://localhost:3333/. If that port is already in use you should change it inside ./backend/server.js.
-	>Note to restart the server you should type ```rs``` in the terminal
