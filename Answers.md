1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

`.filter()`, `.concat()`, and `.map()`. `Object.assign()` is a method that creates a brand new object, copies another objects properties and values into it, and updates whichever values we want to update in our new object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`Actions` are packets of information that contain an action type and data we want associated with that action type. Actions are object with 2 properties, type (which is required) and payload.
`Reducers` are pure functions. When an action is dispatched, it goes through a reducer. They also take 2 arguments, the current state from the store, and the action object that is sent to it. Reducers never update state directly, but they always return a new object.
`Store` is where the state for the whole application is contained. Everything that changes within your application will be represented by the store. It is the single source of truth because that is the one and only place state is managed.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, and component state is local. A good time to use application state is when the same state needs to be shared between mulitple components or when the number of props that need to pass through multiple components increases.

1.  What is middleware?

Middleware adds functionality to Redux. It intercepts a process before it flows through a reducer, runs a function at the intercept point, then continues the process.

2.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to handle asynchronous operations inside of our Action Creators. When an action creator is called, thunk intercepts and looks at what is returned. If it is an action, thunk will forward the action through to the reducer. If it is a function, it will invoke that function and pass in the dispatch function as an argument.

3.  Which `react-redux` method links up our `components` with our `redux store`?

connect()


