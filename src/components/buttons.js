import React from 'react';
import './buttons.css'
import { useNavigate } from 'react-router-dom';



export default function ButtonFn() {
    const navigate = useNavigate();

    const goToNttk = () => {
        navigate('/normal_tiktaktoe');
    };
    return (
        <div>
            <div id="top-div">
                <h1>Welcome to tiks-taks-toes</h1>
                <p id="below-h1">A place that lets you play multiple variations of tik-tak-toe</p>
            </div>
            <div id="but-div">
                <button onClick={goToNttk} class="start-page-but right bot" id="one-p">
                </button>
                <button class="start-page-but left right bot" id="two-p">
                </button>
                <button class="start-page-but left bot" id="three-p">
                </button>
                <button class="start-page-but right top bot" id="four-p">
                </button>
                <button class="start-page-but left right top bot" id="five-p">
                </button>
                <button class="start-page-but left top bot" id="six-p">
                </button>
                <button class="start-page-but right top" id="seven-p">
                </button>
                <button class="start-page-but left right top" id="eight-p">
                </button>
                <button class="start-page-but left top" id="nine-p">
                </button>
            </div>
        </div>
    )
}

