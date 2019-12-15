# Minature-Stackoverflow-API's [![HitCount](http://hits.dwyl.io/HrithikMittal/Minature-Stackoverflow-APIs.svg)](http://hits.dwyl.io/HrithikMittal/Minature-Stackoverflow-APIs) [![Gitter](https://badges.gitter.im/GDTC_Hack-In/P03.svg)](https://gitter.im/GDTC_Hack-In/P03?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# About The Project
This is the Project of Minature StackOverflow API which is an API's collection which can be used to make the Backend of any Fullstack Application. These are the folllowing features in the given API's
<ul>
<li>Create a User</li>
<li>Post a Question</li>
<li>Post a Answer to the existing question</li>
<li>Clap on the answer(upvote)</li>
<li>Auhtentication and Role based Access to the StackHolders</li>
</ul>

# TECHNOLOGY STACK: 
<ul>
   <li>NodeJS </li>
<li>ExpressJs</li>
<li>MongoDB</li>
<li>EJS/scripting language(optional for UI)</li>
<li>Heroku</li>
</ul>

# Tasks to be Done
## Day1
   Start with the installation
<ul>
<li>NodeJs ( https://nodejs.org/en/ )</li>
<li>MongoDB ( https://www.mongodb.com/what-is-mongodb ) <br/>
You can use the online Database ( Mongodb Atlas / m-lab) <br/>
For better UI/UX of database you can download ( mongoDB Atlas / Robo3T )</li>
<li>For editor you can use any IDE. (my fav. - Visual Code)</li>
<li>If you want the version control also then install git-bash or you can you Github
desktop</li>
 </ul>
 
 
 ## Day2
   <ul> 
   <li>Setup Your Node-Js Project</li>
   <li>Make a SignUp and Login Routes for the user</li>
   </ul>
      Read this blogs to take help<br>
     https://medium.com/code-to-express/starting-with-nodejs-b70679e8101f<br>https://medium.com/code-to-express/login-and-signup-page-4a65fec162f1


## Day3
So till now a User can SignUp and Login. Now the Next thing to is to make the Question Schema So that a User can Post a Question and also answer to that question. Along with this User can also Upvote the answer. So Please follow these steps:
<ul>
   <li>Make a Question Schema/Model(<i>Take help from Resources</i>)</li>
   <li>Make a route(private route) to post the Question.</li>
   <li>Make a get(public route) route to get all the Questions.</li>
</ul>  

## Day4
So till now a User can Post a Question after they login into the System.So for further Development please follow these steps:
<ul>
   <li>Make a private route to post the Answer only for the existing Questions.</li>
   <li>Make a public route to get all the Answers and it is better to get the complete Question Model.</li>
   <li><i>It is just advice to make the array-String in Model/Schema if you want to have more than one value for same entity. For example we want to save many answers of only one question.</i></li>
</ul>

## Day5
So till now a User Can Post a Answer after they login but anyone can read the anser and question without the login. So for the further Development Please follow these Steps:
<ul>
   <li>Make a route to increase upvote array and this is an private route.</li>
   <li>Also Make an Seperate route for the profile section where you take all the information and this is a private too.</li>
   <li><i>Again it is just advice to make the array-String in Model/Schema if you want to have more than one value for same entity. For example we want to save many upvote of only one question.</i></li>
</ul>

========================================================================================================================================

### Prerequisites

To work with the api you must have to install the following:

- [NodeJS](https://nodejs.org/en/download/) - Node.js® is a JavaScript runtime
  built on Chrome's V8 JavaScript engine.
- [MongoDB Server](https://docs.mongodb.com/manual/installation/) - NoSql
  Database and server
- [Postman](https://www.getpostman.com/downloads/) - API development environment

## Installation

Before doing anything you have to clone or download and unzip the project folder, open terminal and navigate to the project folder and run:

```bash
npm install
```

This will install all the dependencies required by the project.

## Getting Started

To start using this API, start your local database server, open terminal and
navigate to the project folder and run:

```bash
npm run start
```

If an error occur, check your database server or check if you have installed the
prerequisites correctly.

If there was no error, open Postman and create and send a new get request to:

```
http://localhost:3000/
```

Expected Output:

```
{
	message: "Welcome!"
}
```

### Authentication

I used express-session to manage sessions to authenticate. We have
isUserLoggedIn, isUserLoggedOut middleware function which checks if the user is
authenticated or not. The session token is stored in the database using
connect-mongo package and is deleted when the user logout<br>

```
async function isUserLoggedIn (req, res, next) {
  try {
    if (!(req.session && req.session.user)) {
      return res.status(401).send({
        error: "Unauthorized Access!"
      });
    }else {
      const user = await User.findOne({ _id : req.session.user._id })
      if(user) {
        next();
      } else {
        req.session.user = null;
        return res.status(401).send({
          error: "Unauthorized Access!"
        });
      }
    }
  } catch(e) {
    res.status(400).send({
      error: e
    })
  }
}


// Function to check whether the user is logged out
function isUserLoggedOut (req, res, next) {
  if (req.session && req.session.user) {
    return res.status(200).send({
      message: "User already Logged In!"
    });
  }
  next();
}

module.exports = {
  isUserLoggedIn,
  isUserLoggedOut
}
```

<i>Note: some of the APIs which are mentionted above are not authenticate so
please remember to add it. So it will help to proctect the private routes.</i>

## Routes

### Profile

<table>
	<tr>
		<th>S.No.</th>
		<th>Route</th>
		<th>Method</th>
		<th>Access</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>1.</td>
		<td>/</td>
		<td>GET</td>
		<td>Private</td>
		<td>to get personal profile</td>
	</tr>
	<tr>
		<td>2.</td>
		<td>/</td>
		<td>POST</td>
		<td>Private</td>
		<td>for UPDATING/SAVING personnal user profile</td>
	</tr>
	<tr>
		<td>3.</td>
		<td>/:username</td>
		<td>GET</td>
		<td>Public</td>
		<td>for getting user profile based on USERNAME.</td>
	</tr>
	<tr>
		<td>4.</td>
		<td>/find/everyone</td>
		<td>GET</td>
		<td>Public</td>
		<td>for getting user profile of EVERYONE.</td>
	</tr>
	<tr>
		<td>5.</td>
		<td>/</td>
		<td>DELETE</td>
		<td>Private</td>
		<td>for deleting user based on ID.</td>
	</tr>
	<tr>
		<td>6.</td>
		<td>/workrole</td>
		<td>POST</td>
		<td>Private</td>
		<td>for adding work profile of a person.</td>
	</tr>
	<tr>
		<td>7.</td>
		<td>/workrole/:w_id</td>
		<td>DELETE</td>
		<td>Private</td>
		<td>for deleting a specific workrole.</td>
	</tr>
	
</table>

### Question

<table>
	<tr>
		<th>S.No.</th>
		<th>Route</th>
		<th>Method</th>
		<th>Access</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>1.</td>
		<td>/</td>
		<td>GET</td>
		<td>PUBLIC</td>
		<td>for showing all questions.</td>
	</tr>
	<tr>
		<td>2.</td>
		<td>/</td>
		<td>POST</td>
		<td>Private</td>
		<td>for submitting questions.</td>
	</tr>
	<tr>
		<td>3.</td>
		<td>/answers/:id</td>
		<td>POST</td>
		<td>Private</td>
		<td>for submitting answers to questions.</td>
	</tr>
	<tr>
		<td>4.</td>
		<td>/upvote/:id</td>
		<td>POST</td>
		<td>Private</td>
		<td>for upvoting.</td>
	</tr>
	
</table>

## Deployment

This api can be hosted on platform like heroku, aws, and others. MongoDB Atlas
or Matlab can be used for remote database.<br /> For instance, the application
can be deployed on [Heroku](https://signup.heroku.com/login) by creating and
registering an account. Following, create a new app and choose a deployment
method (terminal or github) and follow the instruction there. Remote database
can be created using Mongodb Atlas or Matlab.<br /> For
[Mongodb Atlas](https://cloud.mongodb.com/user?_ga=2.185306281.1809166196.1559570784-2125252051.1557828824#/atlas/register/accountProfile),
you need to just to create your account and make a new cluster and link the
cluster to your application through a URL. Following the given steps, you would
have a remote application up and running.

## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)


If you are the helping and contributing one, your efforts and suggestion are always welcomed.

