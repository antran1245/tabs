import React, { useState } from 'react';

export default function Tabs(props) {
    return(
        <div style={{display:'inline-block', margin: '5px'}}>
            <button style={{...tab, backgroundColor:props.color}} onClick={() => props.setShow(props.item)}>Tab {props.count}</button>
        </div>
    )
}

const tab = {
    padding: '10px',
    border: 'none'
}

const active = {
    color: 'white', 
    backgroundColor: 'black'
}