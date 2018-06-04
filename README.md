# Firebase Realtime Database, introduction

## Initial setup

### 1. Think about your data as a list of endpoints
like:
 - `users/`
 - `users/id`
 - `messages`
 - `messages/id`
 
Just like WP, but way more flexible. A tricky thing is that you can change the structure at any time, even by accident :)

### 2. Create a new project
https://console.firebase.google.com/u/0/

### 3. click Add Firebase to your web app
Copy the code to your html file

### 4. Click realtime database => Get started

### 5. Click Start in test mode => enable
Beware, this is not recommended for production, a database without authentication is a really bad idea

## CRUD - Create, Read, Update, Delete
In our JS file, get a reference to the database
`const database = firebase.database();`

### 1. Create - Inserting data
https://firebase.google.com/docs/database/web/read-and-write?authuser=0

`database.ref(path).push(obj)`

e.g.

`database.ref('users/').push({name:"Jonas", email: "jofh[at].kea.dk"})`

### 2. Update - Overwrite existing data
Using `.set()` overwrites data at the specified location, including any child nodes.
`database.ref(path).set(data);`

e.g.

`database.ref('users/someid').set({name: "Jonas Holbech", email:"jofh[at].kea.dk"});`

### 3. Read - Get data
### Play around with the endpoint path and mess it all up
https://firebase.google.com/docs/database/web/lists-of-data?authuser=0#listen_for_child_events


```javascript
database.ref(path).on(event, callback)
```

e.g.
```javascript
database.ref('users/').on('child_added', snapshot=>{
    const key = snapshot.key;
    const data = snapshot.val();
});
```

### 4. Delete - Remove content
Deletes an "endpoint" and all children

`database.ref(path).remove();`

e.g.

`database.ref('users/someid').remove()`

## Links: 
 - https://firebase.google.com/docs/web/setup
 - https://firebase.google.com/docs/database/web/start?authuser=0
