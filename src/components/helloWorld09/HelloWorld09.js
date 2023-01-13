import React from "react";

const Hello = () => <div>Hello,</div>;
const World = () => <div>world!</div>;

const currentTime = new Date();

const HelloWorld09 = () => (
    <div>
        <Hello />
        <World />
        {currentTime.toLocaleString()}
    </div>
);

export default HelloWorld09;