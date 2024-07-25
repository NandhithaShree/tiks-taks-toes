import React from 'react';
import "./thex.css"
import { Helmet } from 'react-helmet';
//import { useState } from 'react';
import { bigTurn } from './buttons';

export var smallTurn = bigTurn;

var content = 'O';
function setsmallTurn() {
    if (smallTurn == -1) {
        smallTurn = 1;
        content = "X"
    }
    else {
        smallTurn = -1;
        content = "O"
    }
}

export default function Xfn() {
    setsmallTurn();
    return (
        <div>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
            </Helmet>
            <button id="x">
                {content}
            </button>
        </div>
    );
}
