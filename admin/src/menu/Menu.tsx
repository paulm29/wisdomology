import './Menu.css';
import React, { useState } from 'react';

const Menu = (props: any) => {
   // const [heading, setHeading] = useState('');
   // const [heading, setHeading] = useState(props.heading);
    const [userInput, setUserInput] = useState({
        heading: ''
    });
    const myval = "my value";

    const onCustomEvent = (data: any) => {

    };

    const inputChangeHandler = (identifier: string, value: any) => {
        if (identifier === "heading") {
            setUserInput((prevState) => {
                return {...prevState, heading: "clicked"}
            });
        }
    };

    const submitHandler = (event: any) => {
      event.preventDefault();

    };

    const clickHandler = (event: any) => {
        console.log("clicked", event.target.value);
        // setHeading('clicked');
        // setUserInput({
        //     ...userInput,
        //     heading: "clicked"
        // });
        setUserInput((prevState) => {
            return {...prevState, heading: "clicked"}
        });
    };

    return (
        <div className="menu">
            {/*<h1>{heading}</h1>*/}
            {/*<p><a href="#" onClick={clickHandler}>Categories</a></p>*/}
            <p><a href="#" onClick={(event) => inputChangeHandler('heading', event.target)}>Categories</a></p>
            <p>{props.children}</p>
            <input value={myval}></input>
        </div>
    );
}

export default Menu;
