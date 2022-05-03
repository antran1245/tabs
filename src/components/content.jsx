import React from "react";

export default function Content(props) {
    return(
        <div style={{...box, display:props.show}}>{props.content}</div>
    );
}

const box = {
    border: '1px solid black',
    padding: '5px',
    width: '200px',
    height: '200px',
    margin: 'auto'
}