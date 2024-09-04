import React, { useContext, useState, useEffect } from 'react';
import './buttons.css'
import { useNavigate } from 'react-router-dom';
import { MyContext } from './mycontext';
import { Helmet } from 'react-helmet';


export var bigTurn = 1;  //1 is x, -1 is 0
export default function ButtonFn() {
     const { winner, setwinner } = useContext(MyContext);
     const [bigbut, setbigbut] = useState({
        a1: null, a2: null, a3: null,
        b1: null, b2: null, b3: null,
        c1: null, c2: null, c3: null
    });
    useEffect(() => {
        const newBigbut = { ...bigbut };

        // Update the state based on the winner
        if (winner === 1) {
            newBigbut.a1 = 'X';
        } else if (winner === -1) {
            newBigbut.a1 = 'O';
        } else if(winner === -2) {
            newBigbut.a1 = 'N';
        }

        setbigbut(newBigbut);
    }, [winner]);
  
    const navigate = useNavigate();
    const goToNttk = () => {
        navigate('/normal_tiktaktoe');
    };
    const goTo4by4 = () => {
        navigate('/4by4');
    };
    return (
        <div>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
            </Helmet>
            <div id="top-div">
                <h1>Welcome to tiks-taks-toes</h1>
                <p id="below-h1">A place that lets you play multiple variations of tik-tak-toe</p>
                <p id="below-h1">Click one of the tik-tak-toes below to start playing on this giant tik-tak-toe grid</p>
            </div>
            <div id="all-buts">
                <div id="but-div">
                    <button onClick={goToNttk} class="start-page-but right bot" id="one-p">
                        {bigbut.a1}
                    </button>
                    <button onClick={goTo4by4} class="start-page-but left right bot" id="two-p">
                    </button>
                    <button class="start-page-but left bot" id="three-p">
                    </button>
                </div>
                <div id="but-div">
                    <button class="start-page-but right top bot" id="four-p">
                    </button>
                    <button class="start-page-but left right top bot" id="five-p">
                    </button>
                    <button class="start-page-but left top bot" id="six-p">
                    </button>
                </div>
                <div id="but-div">
                    <button class="start-page-but right top" id="seven-p">
                    </button>
                    <button class="start-page-but left right top" id="eight-p">
                    </button>
                    <button class="start-page-but left top" id="nine-p">
                    </button>
                </div>
            </div>
        </div>
    )
}

