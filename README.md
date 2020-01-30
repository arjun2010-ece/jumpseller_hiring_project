Jumpseller challenge::
=====================

Heroku link for the app ::
http://cryptic-meadow-38085.herokuapp.com/

If you clone the repo in the local then the below commands need to be executed::

npm install
npm start    // for running the project locally
npm test    //for running the tests 

npm build // for runing the build

Decisions made during development::
=================================

1. Bootstrap 4 was used to make the app responsive.
2. App is divided into 4 components: App component, Search component, Comments componment and Post Details components
3. The choice of breaking the app into different component was motivated by SOLID principle of software engineering of a single     component responsible for single responsibility and Reactjs own component concepts. 
4. Tests is written in __tests__ folder to give more confidence in the app.
5. Comments section I thought of putting below the Posts details components in a single column but then i put it just right beside the post details component in a bootstrap 2 column layout(out of 3) so that it looks good as well as i could use more area on view port.
6. I used bootstrap spinner for loading component whenever the api request is being made to the server.
7. Posts not found is handled elegantly by h2 element.
7. I kept all the api requests separately in an api folder so that things can be separated or compartmentalised.
8. I implemented search functionality as well as how many posts are there at any given point of time in terms of number.
9. I used bootstrap card to elegantly display Comments and post details components in less space.
