This simple front end deployment of a Hospital Booking website uses React.js to combine various components:

1) Home
2) Login
3) Register
4) Dashboard
5) Staff Login
6) Staff Dashboard

The Home page has a button to book an appointment that redirects you to the login page. If you don't already have an account, you can click on the register here link to go to the registration page. For now, there is no neccessity to register as there is no database to verify password. 

However, unless you refresh, you are only allowed to enter the dashboard if you login, otherwise going to the "/dashboard" will redirect you back to the home page. And similarly, going to the "/" page will redirect you back to the dashboard. Since this app has no backend, there is no way of validation and authentication.

Nevertheless, the technologies used in this website are React Hooks such as useState, useEffect, useContext, and NO bootstrapping tools such as MaterialUI has been used.

//UPDATE: Backend server using express.js has been added. The site now accepts an email and password during registration and stores it in the server in the form of an array of objects. During login, the email and passwords and compared with the stored values and access is granted if successful. Additionally, a token is set as "email" in the local storage of the browser, which ideally should be stored in the form of a json web token (jwt), but for the purposes of demonstration, the email is fine. It demonstrates how a user can stay logged in even after exiting the site, and thus may be redirected to the dashboard if he/she attempts to open the login/registration/home page. Vice-versa, the user will be redirected to the home page if he/she is signed out and attempts to enter the dashboard.

For the purpose of demonstration, three sample time slots have been stored as booked in the server, and thus will show as disabled in the dashboard timing selection page. This can easily be changed by removing the stored values in the server and adding dynamically by booking it on the dashboard.

To use the application, download the whole folder, and open two terminals. In one terminal, cd into the client folder and in the other terminal, cd into the server folder. In the client terminal, run "npm start" to start the react app, and in the server terminal, run "node server" to run the back end express server.