import React from "react";


export const Counter = (props) => {
    return (
        <div>
            <div className="counter">
                {props.digito}
            </div>
        </div>
    )
}