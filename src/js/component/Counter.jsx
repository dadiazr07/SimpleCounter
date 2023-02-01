import React from "react";


export const Counter = (props) => {
    console.log(props)
    return (
    
            <div className="counter col bg-dark m-1 rounded-5">
                {props.index}
            </div>
    )
}