import React from 'react';
import './Blog.css'
import Marquee from 'react-fast-marquee';

const Blog = () => {
    return (
        <div>
            <div className='my-5 fs-4 px-5'>
                <Marquee>
                    Welcome Blog Page!!!
                </Marquee>
            </div>
            {/* question 1 section */}
            <section className='qna'>
                <div className='question' >Tell us the differences between uncontrolled and controlled components?</div>
                <div className='answer text-secondary'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.</div>
            </section>
            {/* question 2 section */}
            <section className='qna'>
                <div className='question'>How to validate React props using PropTypes?</div>
                <div className='answer text-secondary'>
                    React is a JavaScript library used for building interactive web frontend applications. It is one of the most popular libraries due to its easy-to-use API.
                    We combine components into an app by passing data from parent components to child components. To do this, we pass data along with props. Props are similar to HTML attributes, but can contain dynamic data.
                    A parent element passes props down to the child element. And the child elements receive them. We can pass any data as props. Therefore, we need a way to validate their data type so that the child element gets what it expects.
                </div>
            </section>
            {/* question 3 section */}
            <section className='qna'>
                <div className='question'>Tell us the difference between nodejs and express js.</div>
                <div>
                    <span style={{ color: 'rgba(15, 184, 139, 0.82)', textDecoration: 'underline', fontSize: '20px' }}>Node.js:</span>
                    <br />
                    Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. Most of the people are confused and understand it’s a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on.
                    <br />
                    <br />
                    <span style={{ color: 'rgba(15, 184, 139, 0.82)', textDecoration: 'underline', fontSize: '20px' }}>Express.js:</span>
                    <br />
                    Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.</div>
            </section>
            <section className='qna'>
                <div className='question'>What is a custom hook, and why will you create a custom hook?</div>
                <div className='answer'>
                    React Hooks allow you to hook into the state and lifecycle of a component in functional components. In previous versions of React, you could only have access to state and lifecycle in a class component. Hooks make it possible in functional components.
                    React has built-in hooks like useEffect, useState, and many more, which provide a lot of use cases. However, sometimes, you want a Custom Hook.
                    A custom hook allows you to create shared component logic that can be used in many components. These custom hooks will also use the built-in hooks but in one place. They're like functions, prefixed with "use" (because they use in-built hooks and also follow the Rules of Hooks), which can accept any number of arguments and expose values and methods that can be used by a component.
                </div>
            </section>
        </div>
    );
};

export default Blog;