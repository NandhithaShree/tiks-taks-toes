import React from 'react';
import "./3by3grid.css"
import Xfn from './thex';



export default function threebythreefn() {
    return (
        gridfn()
    );
}


function gridfn() {
    return (
        <div id="grid-parent">
            <div className="row">
                <div className='kid right bottom'>
                </div>
                <div className='kid left right bottom'>{Xfn()}</div>
                <div className='kid left bottom'></div>
            </div>
            <div className="row"> 
                <div className='kid top right bottom'></div>
                <div className='kid left top right bottom'></div>
                <div className='kid left top bottom'></div>
            </div>
            <div className="row">
                <div className='kid top right'></div>
                <div className='kid left top right'></div>
                <div className='kid left top'></div>
            </div>
        </div>
    );
}

