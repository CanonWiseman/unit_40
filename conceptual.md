### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a front end javascript framework and libary that condenses front end code into managable components that are served to the browser. I would use React for any project that requires front end user interaction and/or any larger front end requirements. I would use React over just vanilla js or jquery because react allows the condensation of code. This is due to the fact that with re-usable components, I dont have to spend a large portion of my time writing and re-writing code. This also allows code to be a lot more readable and friendlier to come back too if I take a break from a portion of my project for a while.

- What is Babel?

    Babel is a tool that converts ECMAscript into vanilla js. The conversion is all done behind the scenes and allows the developer access to cleaner and faster to write code. 

- What is JSX?

    JSX is a tool that allows you to write html in javascript. JSX allows devs to use the full power of javascript while also creating what are essentially templates for serving html back to the browser.

- How is a Component created in React?

    A component is created in React is by declaring a function that is filled with all the internal parts(props, hooks, jsx) then returns all those parts back up through imports

- What are some difference between state and props?

    props are variables that are passed down from the parent or declared in default props within the component. Props are immutable in nature and can only be changed if passed into a different variable within the component. State is a part of the component itself and is a piece of memory that is consistent between re-renders. State is mutable through the setting function passed in with the declaration of state. 

- What does "downward data flow" refer to in React?

    Downward data flow is the idea that in React there is a hierarchy within the components. The data is created at the higher level components and passed down to the children via props or via passing down state functions. Data is passed down and then actions are passed back up. An example of this is a counter app. The data in this scenario is the counter value. The counter value state is passed down to the +1 button that interacts with the state then the new value is passed back up and the parent component handles all of the data going from there.

- What is a controlled component?

    a controlled component is a component that has logic within it ie. a component with state or useEffect.

- What is an uncontrolled component?

    an uncontrolled component is a also referred to as a "dummy" component. This is a component that has no logic and only returns simple html ie. if you had just a logo rendered in a component

- What is the purpose of the `key` prop when rendering a list of components?

    The key prop is what allows React to distinguish children in a list within jsx html. This is important because React can mess up if components are being deleted or rearranged without the proper identification.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

    Using an array index is a poor choice because often times arrays are being changed and the index for one child component at one point can change throughout the use of the app

- Describe useEffect.  What use cases is it used for in React components?

    useEffect defines a function that will be run after the first render and after every re-render within the component. The effect can be modified so it will only re-run after certain requirments are met, this is passed in through an array at the end called dependencies. An example of a use case would be fetching data. You might want data to only be fetched once and re fetched only when the data you want fetched is changed. This would allow the app to fetch the data only when needed and avoid making too many api calls.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

    useRef is a hook that allows a piece of data between renders. The data is mutable and can be mutated at any time. Mutating useRef data does not cause a re-render

- When would you use a ref? When wouldn't you use one?

    Use useRef whenever you need a piece of state that needs to stay persistent between renders. if this piece of data is never gonna change its better off passed down as a prop. If you want this change to cause a component re-render then it is better off created as a piece of state.

- What is a custom hook in React? When would you want to write one?

    A custom hook is a function that is passed into a component and used by that component. This function can be used to create a piece of state or call an axios request. You would want to write one when you have a function that is used by multiple different components, ie. Declaring state that changes the same way between components or axios calls.
