# Minature-Stackoverflow-API's [![HitCount](http://hits.dwyl.io/HrithikMittal/Minature-Stackoverflow-APIs.svg)](http://hits.dwyl.io/HrithikMittal/Minature-Stackoverflow-APIs) [![Gitter](https://badges.gitter.im/GDTC_Hack-In/P03.svg)](https://gitter.im/GDTC_Hack-In/P03?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Minature StackOverflow API is an API's collection which can be used to make the
Backend of any Fullstack Application. These are the folllowing features in the
given API's

<ul>
  <li>Create a User</li>
  <li>Post a Question</li>
  <li>Post a Answer to the existing question</li>
  <li>Clap on the answer</li>
  <li>Auhtentication and Role based Access to the StackHolders</li>
</ul>

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

