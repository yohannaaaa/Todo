import React, { useState } from 'react';

const Greeting = ({Name}) => {
    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className='greet'>
            {isVisible && <p> Hello {Name}! </p>}
            <button onClick={toggleVisibility}>Toggle</button>

        </div>
    );
}
export default Greeting;