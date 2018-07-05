URL Shortener.
Application for shortening the links. There are two input fields,  is inserted into the first one, which should be shortened, and in the second (optional field), the name can be specified. If the name already exists, you'll see a pop-up message that the name is already used. If an incorrect url address is entered, a pop-up window will also appear with the information that the address is incorrect. <br>
If there are data in the database, they will appear under the block for creating new links. In the block of short links, links to the original resource and a short link are displayed. Also there is the creation date and the number of transitions by reference. If necessary, you can delete the link by clicking on the picture with the basket. <br>

Installation:
Declare a project with github using HTTPS or SSH, go to the folder "shorten-url-client" and run the command "npm install". Dependency packages are installed. <br>

There is a possibility to start in two modes:
In the project directory, you can run:
### `npm start` - Runs the app in the development mode. <br>
Open [http: // localhost: 3000] (http: // localhost: 3000) to view it in the browser.

The page will reload if you make edits. <br>
You will also see any lint errors in the console.


### `npm run build` - Builds the app for production to the` build` folder. <br>
It correctly bundles React in the production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. <br>
Your app is ready to be deployed! <br>

The application uses third-party packages: <br>
"axios": "^ 0.18.0" - sending / receiving requests <br>
"bootstrap": "^ 4.1.1" - css styles <br>
"react": "^ 16.4.1" - the react <br>
"react-dom": "^ 16.4.1" - This package serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as react to npm. <br>
"react-notify-toast": "^ 0.5.0" - pop-up messages <br>
"react-scripts": "1.1.4" - This package includes scripts and configuration used by Create React App <br>
"reactstrap": "^ 6.2.0" - Stateless React Components for Bootstrap 4. <br>
<br>
Application settings:
At startup, the application uses the port: 3000. If you have this port busy with another application, modify scripts part of package.json from:
"start": "react-scripts start". <br>
The <br>
Linux and MacOS to: <br>
"start": "PORT = 3006 react-scripts start" <br>
or <br>
"start": "export PORT = 3006 react-scripts start" <br>
Windows solution to: <br>
"start": "set PORT = 3006 && react-scripts start" <br>
The <br>
To run the application, you should specify the server address. The configuration is done in the file "utils / config.js", by changing the server parameter = 'https://lovely-hawaii-volcanoes-56940.herokuapp.com/'. <br>