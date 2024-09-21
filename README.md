# Getting Started with Create React App
This React-based Micro Frontend (MFE) displays patient records fetched from the OpenMRS database. It is designed to be integrated into an Angular application as part of the Bahmni project. Below are the setup and running instructions for the MFE.

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
	  
##### 02. Change to the directory named "bahmni-microfrontend-reference" (***cd bahmni-microfrontend-reference)

##### 03. In  bahmni-microfrontend-reference folder go to the "/src/entries", then create one directory there with any name you want.

#### 04. Inside the directory you have created, create a file with any name "xyz.jsx"  and inject the code from "./src/components/patientlist.js from patientmfe" 

#### 05. Install required dependencies ::: run :: --- " npm install "  if this refused to install enter " npm install --f "

#### 06. Install AXIOS With The Help Of  : "npm install react-router-dom axios"

#### 07. Install Bootstrap by following::- "npm i bootstrap" if refuse "npm i bootstrap --f"

#### 08. Install bootstrap icon with the help of "npm i bootstrap-icons" if refuse "npm i bootstrap-icons --f"

#### 09. Run the Command "npm run dev:sandbox"

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
## Key Learnings and Challenges Faced During the Project ::

### 1. Docker Setup and Network Issues:
Initially, I faced network-related errors after setting up Docker. I had to reinstall Docker to resolve certain optimization errors. After reading documentation and articles on Medium, I was able to fix these issues, but this step took some time and effort.

### 2. Understanding the File Structure and Data Flow:
Before tackling the errors, I realized the importance of understanding the file structure and data flow in the project. It took me about 1-2 days to get a clear grasp of this, but once I did, it became much easier to solve the integration challenges for the micro frontend (MFE).

### 3. Starting Docker Before Accessing Data:
While fetching patient data, I encountered errors that were not well-documented online. These errors occurred because Docker wasn’t running when I tried accessing the OpenMRS API. Ensuring Docker is running is a crucial step before data access.

### 4. Database and API Errors Due to Lack of Familiarity with OpenMRS:
As I began developing the MFE with React, I encountered MySQL database errors and struggled to find the correct API and database tables. After thoroughly reviewing the OpenMRS documentation, I discovered that I had missed some file installations. Reinstalling the required dependencies solved this problem.

### 5. CORS Errors While Using Proxy and Port 8080:
I initially used a proxy with port 8080 in the API URL, which resulted in persistent CORS errors. Despite consulting with senior developers, friends, and various online resources like Medium and StackOverflow, the issue remained unresolved. Finally, after receiving feedback from you, I removed the proxy and port number from the API links, which successfully resolved the CORS issue.

### 6. Frontend Implementation for Fetching Patient Data:
Once the backend was stable, I implemented the frontend to fetch and display patient information.

### 7. Challenges in Integrating the MFE with the Angular Application:
Integrating the MFE into the existing Angular application posed several challenges. The older version of the package installer I was using caused issues during package installation, forcing me to update and install them manually.

### 8. Bootstrap Icons Installation Issues:
I encountered problems when trying to install Bootstrap icons via the package installer. Eventually, I had to manually add the required Bootstrap files.

### 9. Final Integration of the MFE:
Throughout the integration process, I faced various issues while trying to merge the MFE with the existing project I had cloned. After investing time in understanding the project’s file structure and data flow, I was able to follow the instructions properly, and the MFE worked seamlessly.
