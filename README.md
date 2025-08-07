Before following this project, I have previously cloned the GitHub repository for the Node.js RESTful API for contact management from the following repository:

https://github.com/ProgrammerZamanNow/belajar-nodejs-restful-api

After creating a new folder and cloning the Back-End project, which will be the API resource for the Contact Management System, here are the mandatory steps that must taking in order:
# Set Up Back-End
 #### 1. Install all dependencies needed with this command :
    npm install
 #### 2. After that, Running this command to use and generate prisma (an ORM in javascript that will be using in this project):
    npx prisma generate
 #### 3. Set up database with mysql (create a new database with name belajar_reactjs_contact_management)
 #### 4. Doing database migration by editing the .env configuration file to adjust the database settings
 <img width="700" height="450" alt="image" src="https://github.com/user-attachments/assets/6150a8f4-3869-4898-a0c2-f6d035e58351" />

 #### 5. Running database migration with command 
    npx prisma migrate dev
 #### 6. Set up CORS (https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) with added library cors, following this command :
    npm install cors
 #### 7. After installing library cors, you need to add some code to web.js, here are the guides :
 <img width="700" height="450" alt="image" src="https://github.com/user-attachments/assets/b27bf45e-7325-42d9-8a0f-cbf1771411a6" />

 #### 8. Finally, you can running the Backend project using command : 
    node src/main.js




# Set Up Front-End
#### 1. For creating new reactjs project, I could easily using this command :
    npm create vite@latest belajar-reactjs-contact-management -- --template react

#### 2. Don't forget to install all dependencies needed with command :
    npm install

#### 3. Next, install react router :
    npm install react-router

#### 4. In addition, this project uses a popular hooks library in ReactJS, namely “react-use” (https://github.com/streamich/react-use). We can directly install with command :
    npm install react-use

#### 5. Last, we will also use library sweetalert (https://sweetalert2.github.io/) to handle responses properly and more attractively. Following this command to install :
    npm install sweetalert2


## At the end of this project, there were some challenges that I had to complete to test my knowledge of Reactjs.
#### 1. Implement Index Path
        - Create a page for url "/"
        - Check if the user is not logged in, then redirect to the /login page.
        - If already logged in, then redirect to the /dashboard/contacts page.
        
#### 2. Session Validation in Dashboard
        - For all /dashboard page.
        - I have to validate the user again. If they are not logged in, redirect them to the /login page.

#### 3. Modify Tailwindcss Installation
        - Previously, this project only used tailwindcss using CDN.
        - Now, I have to change it by installing tailwindcss using vite.

#### 4. Using Reusable Component
        - I have to separate some code into reusable components, because there are many code with the same content that was repeated.
        - This must be done to clean up the code.

#### 5. Optional Deployment 
        - Deploy both of Back End and Front End applications so that can be accessed by public.

# ~~~ Let's have fun with code ~~~ 
