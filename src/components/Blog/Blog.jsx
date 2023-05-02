import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            {/* question 1 section */}
            <section>
                <div className='question' >Tell us the differences between uncontrolled and controlled components?</div>
                <div className='answer text-secondary'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.</div>
            </section>
            <section>
                <div></div>
                <div></div>
            </section>
        </div>
    );
};

export default Blog;