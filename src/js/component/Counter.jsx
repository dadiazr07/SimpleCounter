import React from "react";


export const Counter = (props) => {
    return (
        <div>
            <div className="counter col bg-dark m-1 rounded-5">
                {props.digito}
            </div>
        </div>
    )
}