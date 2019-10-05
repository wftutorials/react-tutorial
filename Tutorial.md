# Getting Started with react
In this tutorial we look at working with the react javascript framework.
Learn more [here](https://reactjs.org/docs/forms.html)

# Installation

To get started you can use a starter repo. This will allow you to get all the libraries you need to begin.

> Comment - System requirements - In order to use this you need to have npm installed on your computer. 
This is the basic requirement to get started
with react.

Run the command below to clone the startup repo to your computer.

> We are using https://github.com/facebook/create-react-app to create the app via cli. It is much easier to do this way.

```bash
npx create-react-app react-tutorial
cd react-tutorial
npm start
```

[rt_fig_installation.png]

Once you finish install the application you can `cd` into the folder and run `npm start`.
The app should be started and runs on http://localhost:3000/. 
> Comment - Completed installation - This is what show when you finish installation the application.
[rt_fig_startup.png]

# Hello World

Now that our application is successfully installed lets edit it to create our default hello world app.
Head to the `src` folder and open `App.js`.

We are going to edit the line below
```html
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
```

Change this to
```html
<p>
  Hello world
</p>
```

Thats it. We have created our hello world app.

[rt_fig_helloworld.png]

# Creating a list

In our UI frameworks understanding how to render a list is an important part of understanding the framework.
Lets look at how we can render a list in react.

Lets make some changes to the `App.js` file. Your function should look like below.

```javascript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world</p>
      </header>
    </div>
  );
}
```

Now lets render a list. We can hardcode a `ul` with some items and render this.
The `App.js` file now looks like this

```javascript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world</p>
          <ul className="list-group">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
      </header>
    </div>
  );
}
```

To make this more dynamic we first create and array of list items

```javascript
var items  =  ['List Item 1','List Item 2', 'List Item 3'];
```

Then we use the `map` function to display `li` elements from the `items` array.

```javascript
<ul className="list-group">
  {items.map(listitem => (
      <li>{listitem}</li>
  ))}
</ul>
```

[rt_fig_lists.png]

### Things to note
We use the `map` function on `items`. For every `item` in the array we output and `li` element.
The content of the `li` element we use the `listitem` variable. We need to use `{}` curly braces
to make this work. The full code is shown below.

```javascript
function App() {

  var items  =  ['List Item 1','List Item 2', 'List Item 3'];

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world</p>
          <ul className="list-group">
              {items.map(listitem => (
                  <li>{listitem}</li>
              ))}
          </ul>
      </header>
    </div>
  );
}
```

# Class Components

Lets change our component `App.js` which is currently a function to a class.
This is pretty simple to do. We import `component` from react first in `App.js`.

```javascript
import React, {Component} from 'react';
```

Then we add a `render` function and the `return` is the same as before.

```javascript
 render(){
    return (
        <div className="App">
            <header className="App-header">
                <p>Hello world</p>
                <ul className="list-group">
                    {this.items.map(listitem => (
                        <li>{listitem}</li>
                    ))}
                </ul>
            </header>
        </div>
    );
  }
```

Note that now we need to use `this.items` because `items` is now a class variable.
```javascript
  items  =  ['List Item 1','List Item 2', 'List Item 3'];
```

You can check out the full code here.
```javascript
import React, {Component} from 'react';
import './App.css';

class App extends Component {

  items  =  ['List Item 1','List Item 2', 'List Item 3'];

  render(){
    return (
        <div className="App">
            <header className="App-header">
                <p>Hello world</p>
                <ul className="list-group">
                    {this.items.map(listitem => (
                        <li>{listitem}</li>
                    ))}
                </ul>
            </header>
        </div>
    );
  }
}

export default App;
```

# Click events

Lets add a button and capture a click event. We make modifications to the function as shown below

[rt_fig_button.png]

```javascript
  render(){
    return (
        <div className="App">
            <header className="App-header">
                <p>Hello world</p>
                <button onClick={this.createAlert}>Click me</button>
            </header>
        </div>
    );
  }
```

Notice in the `button` element we have an `onClick` function. We create this in the class.
```javascript
  createAlert = (e)=> {
      alert("click me") ;
  }
```

We call it using `this.createAlert`.  When we click an alert is shown.

[rt_fig_button_click.png]

We can also create a function to show click events some more.
The `showOnConsole` functions writes to the `console` we call it from the
`createAlert` function.

```javascript
createAlert = (e)=> {
      this.showOnConsole();
  }
  
 showOnConsole(){
    console.log("Button clicked");
  }
```

So when we run this the `console` should show `Button clicked` as many times as we press the 
button.

[rt_fig_console_output.png]

# Two way binding

This is where the `data` in an input element updates as the user makes changes. Lets add and input to our 
app. We add an `input` attached to an `onChange` handler.
```html
  <input type="text" onChange={this.queryUpdate}/>
```
So the full render function looks like
```javascript
  render(){
    return (
        <div className="App">
            <header className="App-header">
                <p>Hello world</p>
                <button onClick={this.createAlert}>Click me</button>
              <input type="text" onChange={this.queryUpdate}/>
            </header>
        </div>
    );
  }
```

Our `queryUpdate` function is shown below.

```javascript
  queryUpdate = (e)=>{
    this.query = e.target.value;
    console.log(e.target.value)
  }
```

It outputs the current value to the `console`. It also updates the class variable `query`.
We get the event from the function as `e`. And we use `e.target.value` to get the current value.

[rt_fig_input.png]

We can use the updated value. Lets change the `button` `onclick` function to show the updated value.

```javascript
 createAlert = (e)=> {
      alert(this.query);
  }

```

Whatever the new values of `query` is we should be able to see it. Notice we are getting this from the `class`
and not the `input`.

# The state object

Now I want to change `query` using the `button` `onClick` function. So I do
```javascript
  createAlert = (e)=> {
     this.query = "hello";
  }
```

However this does not update the ui. To update the ui we need to use a `state` object.
The **important** thing to know about `state` is that the ui updates when a change happens to the object.

Lets initialize the state object with a variable in it called `query`.

```javascript
 state = { query: "hello" };
```

Now our `createAlert` function will update the state using `setState` function.

```javascript
 createAlert = (e)=> {
     this.setState({ query: "hello" });
  }
```

The `queryUpdate` function attached to the `input` as an `onChange` handler also updates the
`setState` object.

```javascript
  queryUpdate = (e)=>{
    this.setState({query: e.target.value});
    console.log(e.target.value)
  }
```

Finally our input uses the `state.query` as a value.
```javascript
<input type="text" value={this.state.query} onChange={this.queryUpdate}/>
```

This will give us the effect we want. When we press the `click me` button the `state.query` updates with `hello` and 
the ui updates as well.

You view the full code here
```javascript
import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = { query: "hello" };
  items  =  ['List Item 1','List Item 2', 'List Item 3'];

  createAlert = (e)=> {
     this.setState({ query: "hello" });
  }

  showOnConsole(){
    console.log("Button clicked");
  }

  queryUpdate = (e)=>{
    this.setState({query: e.target.value});
    console.log(e.target.value)
  }

  render(){
    return (
        <div className="App">
            <header className="App-header">
                <p>Hello world</p>
                <button onClick={this.createAlert}>Click me</button>
              <input type="text" value={this.state.query} onChange={this.queryUpdate}/>
            </header>
        </div>
    );
  }
}

export default App;
```


# Conditionally Rendering HTML

Lets look at how we can conditionally render `html` elements. Lets create an variable we change change 
so we can modify the ui. Add `isVisible` as a `Component` variable.

```javascript
  isVisible = false;
```

Now when `isVisible` changes we want to change the `render` function. Lets modify
the `render` function 

```javascript
    render(){
        if(this.isVisible){
            return (
                <div className="App">
                    <header className="App-header">
                        <p>Hello world</p>
                        <p>Visible</p>
                    </header>
                </div>
            );
        }else{
            return (
                <div className="App">
                    <header className="App-header">
                        <p>Hello world</p>
                        <p>Not Visible</p>
                    </header>
                </div>
            );
        }
    }
```

Now we have two different views depending on the `state` of the `isVisible` variable.
We can add buttons to see this in live action but for now just update the `App.js` file
to see your changes take effect.

# Components and Props

Lets create another component and use it without our main component. We create a file called 
`message.js` and we add this inside it. Our component is called `Message`.

```javascript
import React, {Component} from 'react';

class Message extends Component {

    render(){
        return (
            <p>This is a message</p>
        )
    }
}


export default Message;
```

In the `App.js` we import this `component`.

```javascript
import Message from './message';
```

We then modify our `render` function to add our `Message` component. You can see it has an 
`html` element `<Message/>`. 

```javascript
  render(){
      return (
          <div className="App">
              <header className="App-header">
                  <p>Hello world</p>
                  <Message/>
              </header>
          </div>
      );
  }
```

This works fine as shown.

[rt_fig_message_component.png]

## Props

We can now send data to our component using `props`. First lets modify our `message.js` component to handle
data coming in

We modify the `render` function to check for the `props` object and display content as required.

```javascript
   render(){
        if(this.props.message){
            return (
                <p>{this.props.message}</p>
            )
        }else{
            return (
                <p>No message given</p>
            )
        }
    }
```

If there is `message` key in the `props` object it will display the message otherwise a default message is display.
In our `App.js` file we can send in the data like

```html
<Message message="This is my message"/>
```

So we add a `html` attribute to our `Message` tag. This is how `data` is passed to our `component`. If you are a bit confused
I change the attribute to `content`.

```html
<Message content="This is my message"/>
```

The `message.js` render function

```javascript
   render(){
        if(this.props.content){
            return (
                <p>{this.props.content}</p>
            )
        }else{
            return (
                <p>No message given</p>
            )
        }
    }
```

Works the same.

# Components as Functions

We can create `components` using functions and use `props`. Remember `App.js` was initally a function.
Lets create another `component` but this time use a function instead of a class.

Create a `file` called `users.js` and add this content in it

```javascript
import React from 'react';

const Users = (props) => {
    if(props.user){
        return (
            <p>Users is {props.user}</p>
        )
    }else{
        return <p>No Content</p>;
    }
};

export default Users;
```

We import it in `App.js`

```javascript
import Users from './users';
```

Then we modify the `App.js` render function

```javascript
render(){
      return (
          <div className="App">
              <header className="App-header">
                  <p>Hello world</p>
                  <Message message="This is my message"/>
                  <Users user="Wynton Franklin"/>
              </header>
          </div>
      );
  }
```

[rt_fig_users_component.png]


# Rendering Multiple Components

Say we want to pass a list of data over to a component and render that component multiple times.
What can we do. Well we need the `map` function to help us check out the code below.


```javascript
render(){
      return (
          <div className="App">
              <header className="App-header">
                  <p>Hello world</p>
                  {this.items.map((msg) =>
                    <Message message={msg}/>
                  )}
              </header>
          </div>
      );
  }
```

We use `this.items.map` to iterate through the array. We set each item as `msg`.
Within the `map` function we can use `msg`. We place the `Message` component and pass in the props
`message` so when the view is render we can see three messages. 

**Note** - The items array was defined in the component eariler on.

```javascript
  items  =  ['List Item 1','List Item 2', 'List Item 3'];
```

[rt_fig_multiple_components.png]


# Pulling data from and api

Lets look at how we can retrieve data from an api service. We are going to use
[https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/) to as our api service.

Lets create a component first. Create a file called `posts.js` in the `src` folder. Add the content below

```javascript
import React from 'react';

const Posts = (props) => {
    const divStyle = {
        border:"1px solid #ccc",
        padding: "5px",
        marginBottom: "3px",
        width: "80%"
    };

    if(props){
        return (
            <div style={divStyle}>
                <p>Users is id is 1</p>
                <p>Post Title: Test</p>
                <p>Post Body: Body</p>
            </div>
        );
    }else{
        return <p>No Content</p>;
    }
};

export default Posts;
```

To explain the code above we are creating the layout for the post items that we will pull from the `api`.
Note `divStyle` this is how you can do `inline` styles in react. It is suggested that `classes` is better though.

Import `posts.js` in the main `App.js`.

```javascript
import Posts from './posts';
```

And add it to our render function

```javascript
  render(){
      return (
          <div className="App">
              <header className="App-header">
                  <p>Hello world</p>
                  {this.items.map((msg) =>
                    <Posts post="test"/>
                  )}
              </header>
          </div>
      );
  }
```

The output is shown below.

[rt_fig_posts_template.png]

Lets create some functions to pull data from the api. In `App.js` the first is `componentDidMount` this
is called as the component is mounted as the name implies.

```javascript
componentDidMount(){
    this.getPosts();
  }
```

We call the `getPosts` function when the components mounts. Lets look at the `getPosts` function.

```javascript
 getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(rsp=>rsp.json())
        .then(response =>{
            this.setState({posts:response});
            console.log(response)
        })
  }
```

`getPosts` is responsible for get the data from the `api`. We use `fetch` to do that. We set the results
to the state object `posts`.

Some minor additions are made to our render function.

```javascript
 render(){
      return (
          <div className="App">
              <header className="App-header">
                  <p>Hello world</p>
                  {this.state.posts.map((post) =>
                    <Posts post={post}/>
                  )}
              </header>
          </div>
      );
  }
```

We get the `list` from the `state` object and use `map` to render multiple `posts` components. We need to make sure
the `this.state.posts` is not empty when the app starts so we initalize it at the top of `App.js` class with an empty
array.

```javascript
  state = { query: "hello", posts: [] };
```

[rt_fig_posts_view.png]

# Table rendering

So we are going to create a table and filter the results based on a query.
Lets create a table component first.

Create a new files called `table.js` and add the code below to it. We need the `tbStyle` to make our table show
correctly.

```javascript
import React from 'react';

const Table = (props) => {

    const tbStyle = {
        border:"1px solid #ccc",
        padding: "5px",
        marginBottom: "3px",
        width: "80%"
    };

    if(props){
        return (
            <table style={tbStyle}>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Website</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Wynton Franklin</td>
                    <td>wynton.franlin@gmail.com</td>
                    <td>www.wftutorials.com</td>
                </tr>
            </table>
        );
    }else{
        return <p>No Table</p>;
    }
};

export default Table;
```

In the `App.js` file we can import the table.

```javascript
import Table from './table';
```

We can use this in our `render` function as shown below.

```javascript
  render(){
      return (
          <div className="App">
              <header className="App-header">
                  <p>Hello world</p>
                  <Table users="users"/>
              </header>
          </div>
      );
  }
```

Now we have a nice sample table as shown below.

[rt_fig_table_sample.png]

Lets get data from and api now. In our `App.js` file we create a `getUser` function.

```javascript
getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(rsp=>rsp.json())
            .then(response =>{
                this.setState({users:response});
                console.log(response)
            })
    }
```

It is similar to our earlier `getPosts` function. When we initialize our `state` object we make sure to add
ann empty `users` array.

```javascript
  state = { query: "hello", posts: [], users:[] };
```

Now in our `table.js` our component we make some changes. We check that we have the correct object in `props`
so we are checking for `users`.

```javascript
  if(props.users){
    // jsx here
  }
```

We modify the `jsx` and render the `tr` using the `map` function on our list of `users` from the `props` object.

```javascript
return (
        <table style={tbStyle}>
            <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Website</th>
            </tr>
            {props.users.map( ( row )=>
                <tr>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.website}</td>
                </tr>
            )}
        </table>
    );
```

We `map` each item in the `array` as a `row` object. Our `td` elemnt get the `id`, `name`, `email` and `website` so we
can produce a table.

Lets look at the preview below.

[rt_fig_api_table.png]


# Table Filtering

Lets filter the table by the username. First we add a search input to our layout.

```html
<input value={this.state.query} onChange={this.queryUpdate} placeholder="search for name"/><br/>
```

We set the value to the `state` object `query` and the `onChange` function is `queryUpdate`. We change
the `state` intialization and we are using `filteredUsers` for our table data instead.

The `queryUpdate` function updates the `query` value and filters the `users` array

```javascript
queryUpdate = (e)=>{
  this.setState({query: e.target.value});
  this.filterUsers(e.target.value);
  console.log(e.target.value)
}
```

Lets look a the `filterUsers` function.

```javascript
filterUsers = (name) => {
    const filteredUsers = this.users.filter((u)=>u.name.toLowerCase().includes(name.toLowerCase()));
    if(name != "" && filteredUsers.length > 0){
        this.setState({filteredUsers:filteredUsers})
    }else{
        this.setState({filteredUsers:this.users})
    }
}
```

We use the function to filter the data in the table. The `this.users` is where the original `users` list
is stored. We use the `filter` function in javascript and we match is against the `query`.

```javascript
u.name.toLowerCase().includes(name.toLowerCase())
```

`u` is a `users` object. We get the `name` and make it lowercase and check to see if the `query` can be found in it.

The results is stored in a `const` called `filteredUsers`. We set this to the `state` object called `filteredUsers`
and this will update the entire table. Otherwise we set the value to the original `users` list.

```javascript
this.setState({filteredUsers:this.users})
```

Our `state` object initialization is show below.

```javascript
state = { query: "", posts: [], users:[], filteredUsers: [] };
```

We also set a `users` array to store all the users we pull from the api.

```javascript
users = [];
```

We change the `getUsers` function to update the new `filteredUsers` array in the `state` object.

```javascript
getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(rsp=>rsp.json())
        .then(response =>{
            this.setState({filteredUsers: response});
            this.users = response;
            console.log(response)
        })
}
```

We also set the `this.users` in our `getUsers` function. In our `render` function we set `filteredUsers` instead

```html
<Table users={this.state.filteredUsers}/>
```

In our `table.js` file we dont need to update anything. It all works the same.

The `App.js` file can be see here.

```javascript
import React, {Component} from 'react';
import Message from './message';
import Users from './users';
import Posts from './posts';
import Table from './table';
import './App.css';

class App extends Component {

  state = { query: "", posts: [], users:[], filteredUsers: [] };
  items  =  ['List Item 1','List Item 2', 'List Item 3'];
  isVisible = true;
  users = [];

  componentDidMount(){
    this.getUsers();
  }

  getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(rsp=>rsp.json())
        .then(response =>{
            this.setState({posts:response});
            console.log(response)
        })
  }

    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(rsp=>rsp.json())
            .then(response =>{
                this.setState({filteredUsers: response});
                this.users = response;
                console.log(response)
            })
    }

  createAlert = (e)=> {
    this.setState({ query: "hello" });
  }

  showOnConsole(){
    console.log("Button clicked");
  }

  queryUpdate = (e)=>{
      this.setState({query: e.target.value});
      this.filterUsers(e.target.value);
      console.log(e.target.value)
  }

    filterUsers = (name) => {
        const filteredUsers = this.users.filter((u)=>u.name.toLowerCase().includes(name.toLowerCase()));
        if(name != "" && filteredUsers.length > 0){
            this.setState({filteredUsers:filteredUsers})
        }else{
            this.setState({filteredUsers:this.users})
        }
    }

  render(){
      return (
          <div className="App">
              <header className="App-header">
                  <p>Hello world Users Table</p>
                  <input value={this.state.query} onChange={this.queryUpdate} placeholder="search for name"/><br/>
                  <Table users={this.state.filteredUsers}/>
              </header>
          </div>
      );
  }
}

export default App;
```

The `table.js` file can be seen here

```javascript
import React from 'react';

const Table = (props) => {

    const tbStyle = {
        border:"1px solid #ccc",
        padding: "5px",
        marginBottom: "3px",
        marginTop: "5px",
        width: "80%"
    };

    if(props.users){
        return (
            <table style={tbStyle}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                {props.users.map( ( row )=>
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.website}</td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }else{
        return <p>No Table</p>;
    }
};

export default Table;
```

[rt_fig_table_search.gif]

# Conclusion

React is a great framework and easy to use. We learn about from this tutorial. Check the resources section to 
learn more. You can also visit the react website to learn more.