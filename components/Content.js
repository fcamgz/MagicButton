import React from "react"

function Content(props){    
    return(
        <div className="contentDiv">
            <h3>This is button number: {props.item.id}</h3>
            <button onClick={props.item.functionality}>Click here for a surprise</button>
        </div>
    )
}
export default Content