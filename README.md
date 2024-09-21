# Getting Started with Create React App

This project was bootstrapped with [Create React App]

## Available Steps ::--

### 01  Follow the Bahmni dev setup guide to set up Bahmni and OpenMRS on 
local machine ( Follow Docker setup ) 
(setup link:- https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32604585/Setting+up+Bahmni+Dev+Environment)

		**** follow Bash/gitBash instead of using powershell or terminal in windows machine****
		

### 02 You can clone patientmfe repository for a starting point after setting up the Bahmni dev setup.


### 03  Clone this Repository by :::: git clone https://github.com/KanakSo31/patientmfe.git

### 04 change to the project folder "cd patientmfe"

### 05 Run "npm install" if this command throws error run "npm install --f"

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests]

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment]

### `npm run eject`

#########  Micro Frontend Integration   ####

###### 01. Clone the bahmni-microfrontend-reference  (https://github.com/Bahmni/bahmni-microfrontend-reference) #####

   			#### use :- git clone https://github.com/Bahmni/bahmni-microfrontend-reference.git
	  
##### 02. change to the directory name "bahmni-microfrontend-reference" (***cd bahmni-microfrontend-reference)

##### 03. In  bahmni-microfrontend-reference folder go to the "/src/entries". then create one directory there with any name you want.

#### 04. Inside the directory you have created, create a file with any name with .jsx extension and inject the code from "./src/components/patientlist.js from patientmfe" 

#### 05. Install required dependencies ::: run :: --- " npm install "  if this refused to install enter " npm install --f "

#### 06. Install AXIOS With The Help Of  : "npm install react-router-dom axios"

#### 07. Install Bootstrap by following::- "npm i bootstrap" if refuse "npm i bootstrap --f"

#### 08. Install bootstrap icon with the help of "npm i bootstrap-icons" if refuse "npm i bootstrap-icons --f"

#### 09. If the above steps going well enter "npm run dev:sandbox"

*****### if throws error after installing bootstrap icon  #####****

			*****Add below codes to package.json file
   		{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]', 
            outputPath: 'fonts/', 
          },
        },
      },
## Important Key point to remember ::--

### 1. Focus on docker setup before start coding 
### 1. Before solving the errors and managing them Focus on understanding the file structure and data flow in very imporatnt task!!
### 3. Start docker before accesing the data.
