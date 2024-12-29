# Projet_node_CDOF5_Yannis_Guilherme_Dany_Noufel

### Members of the project
Dany MOURAD
Guilherme MIRANDA MARTINS
Yanis ANDRE 
Noufel BOUCHENEB
[github](https://github.com/yannisandre/Projet_node_CDOF5_Yannis_Guilherme_Dany_Noufel)

#### Our project
We created a todolist website implementing different technologies seen in class :

Express: To create a RESTful API that handles HTTP requests for creating, reading, updating, and deleting todo items.

TypeScript: To create the interactive user interface of our Todo application in the web browser (frontend). To manage server-side logic to process requests, interact with the database, and send back responses (backend).

Node.js: To run our server-side TypeScript code and manage the backend of our application.

Swagger : To document and test our API endpoints efficiently, we implemented Swagger, providing a clear interface for API exploration and interaction.

Then we integrated some other technologies to make it work:

React: To build a dynamic and responsive user interface for our todo application on the frontend.

MongoDB: To store our todo items and their associated data in a flexible, document-based format.

We tried implementing ag-grid but for an unknown reason (no compiling errors) the frontend wasn't loading.

We used highcharts to display the distribution of each category.

As an advanced feature we uploaded the website on the web to make a first step in real web development. We used netlify for frontend and render for backend.

There is a presentation video that is running on netlify (video_presentation.mov)

#### Individual work

Dany
1. Adapt and reword the td's to have a good foundation for the website
2. React implementation
3. upload website on netlify

Guilherme 
1. Implented todo categories and highcharts
2. Helped Noufel and Yannis with mongodb
3. Readme

Noufel 
1. Tried using PostgreSQL for our database but it didn't work
2. mongodb with Guilherme and Yannis

Yannis
1. Mongodb with Guilherme and Noufel
2. Helped switching from js to ts
3. Swagger



### To run locally :

in frontend / backend

```bash
npm install
```

backend folder : 

to use the project you have to connect your mongodb account
create an account and then add the file .env to the backend folder

```
MONGODB_URL=mongodb+srv://db_username:db_password@cluster0.opyyv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=5000

```

```bash
npx nodemon --exec ts-node Server.ts
```

frontend folder :

```bash
npm start
```

### To run online

We managed to deploy the website using Render for the backend and Netlify for the frontend. 

Both being used with their free version, it automatically shuts down due to inactivity. 

So in order to use the website, first click on the backend link [Render](https://todo-app-backend-67og.onrender.com/) then wait for a few minutes until it loads and you see all the database in JSON format.

Then you can run the frontend [Netlify](https://teal-genie-09261e.netlify.app/) and everything will work.

If you then want to access Swagger just go to [Swagger](https://todo-app-backend-67og.onrender.com/api-docs/)

#### Site
![image site](images/site.png)

#### Swagger
![image swagger](images/swagger.png)
