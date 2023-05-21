import React from "react";
import { Value } from "./value";

export const SecondsCounter = (props) => {
    return (
        <div className="big">
            <div className="counter">
                <div className="six"><Value number={Math.floor(props.counter /100000) % 10}/></div>
                <div className="five"><Value number={Math.floor(props.counter /10000) % 10}/></div>
                <div className="four"><Value number={Math.floor(props.counter /1000) % 10}/></div>
                <div className="three"><Value number={Math.floor(props.counter /100) % 10}/></div>
                <div className="two"><Value number={Math.floor(props.counter /10) % 10}/></div>
                <div className="one"><Value number={Math.floor(props.counter) % 10}/></div>
            </div>
        </div>
    )
}