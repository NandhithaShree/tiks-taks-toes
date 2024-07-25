import React from 'react';
import "./thex.css"
import { Helmet } from 'react-helmet';
import { useState } from 'react';


export default function Xfn() {
    return (
        <div>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
            </Helmet>
            <button id="x">
            </button>
        </div>
    );
}
