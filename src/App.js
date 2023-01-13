import React from 'react';

import './App.css';

import HelloWorld01 from './components/helloWorld01/HelloWorld01';
import HelloWorld02 from './components/helloWorld02/HelloWorld02';
import HelloWorld03 from './components/helloWorld03/HelloWorld03';
import HelloWorld09 from './components/helloWorld09/HelloWorld09';

const currentTime = new Date();



const HelloWorld04 = () => `Hello World ${currentTime.toLocaleString()}`;

const HelloWorld05 = () => <div>Hello, world {currentTime.toLocaleString()}</div>;

const HelloWorld06 = () => [
  <div key="1">Hello,</div>,
  <div key="2">world! {currentTime.toLocaleString()}</div>
];

const HelloWorld07 = () => (
  <React.Fragment>
    <div>Hello world {currentTime.toLocaleString()}</div>
  </React.Fragment>
);

const HelloWorld08 = () => (
  <>
    <div>Hello world {currentTime.toLocaleString()}</div>
  </>
);


function App() {
  return (
    <div className="App">
      <h1>Hello World {currentTime.toLocaleString()}</h1>
      <HelloWorld01 name="world"></HelloWorld01>
      <HelloWorld02 name="world"></HelloWorld02>
      <HelloWorld03></HelloWorld03>
      <HelloWorld04></HelloWorld04>
      <HelloWorld05></HelloWorld05>
      <HelloWorld06></HelloWorld06>
      <HelloWorld07></HelloWorld07>
      <HelloWorld08></HelloWorld08>
      <HelloWorld09></HelloWorld09>
    </div>
  );
}


export default App;
