import React from "react";



const HelloWorld01 = (props) => {
    const currentTime = new Date();
    return <h2>Hello {props.name} {currentTime.toLocaleString()}</h2>
}

export default HelloWorld01;