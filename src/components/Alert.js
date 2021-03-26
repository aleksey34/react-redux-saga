import React from "react";


export const Alert = ({alert})=>{
    return (
        <div className={`alert alert-${alert.type} mt-3`} role="alert">
            {alert.content }
        </div>
    )
}