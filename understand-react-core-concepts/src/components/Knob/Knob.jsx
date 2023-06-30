import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border:'2px solid Salmon',margin:'20px', padding:'10px'}}>
            <h5>This is Knob components</h5>
            <p>Steps here is: {props.steps}</p>
        </div>
    );
};

export default Knob;