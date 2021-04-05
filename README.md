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
