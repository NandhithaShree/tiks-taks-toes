import React from 'react';
import "./3by3grid.css"
import Xfn from './thex';
import { useState } from 'react';
import { smallTurn } from './thex';
import { Helmet } from 'react-helmet';


export default function Threebythreefn() {
    const [winner, setwinner] = useState(null);
    let list = [3, 4, 5, 6, 7, 8, 9, 10, 11];
    const newList = [3, 4, 5, 6, 7, 8, 9, 10, 11];
    const [isVisible, setIsVisible] = useState(false);
    const Overlay = () => {
        if (!isVisible) return null;

        const overlayStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(71, 11, 43, 0.8)',
            zIndex: 9999,
        };

        const textStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
        }
        let Owinner;
        if (winner == 1) {
            Owinner = "Player 2"
        }
        else if(winner == -1){
            Owinner = "Player 1"
        }
        else{
            Owinner = "Nobody";
        }
        return <div style={overlayStyle}>
            <text className='wintext'>{Owinner} won!</text>
            <Reloadbutfn/>
        </div>;
    };
    function MyButton({ id }) {
        const [content, setContent] = useState('');
        function handleClick() {
            if ((winner != null) || (list[id - 1] === -1 || list[id - 1] === 1)) return;
            const result = Xfn();
            setContent(result);
            list[id - 1] = smallTurn;
            console.log(id + "=" + smallTurn);
            if (
                (list[0] === list[1] && list[1] === list[2]) || // Horizontal row 1
                (list[3] === list[4] && list[4] === list[5]) || // Horizontal row 2
                (list[6] === list[7] && list[7] === list[8]) || // Horizontal row 3
                (list[0] === list[3] && list[3] === list[6]) || // Vertical column 1
                (list[1] === list[4] && list[4] === list[7]) || // Vertical column 2
                (list[2] === list[5] && list[5] === list[8]) || // Vertical column 3
                (list[2] === list[4] && list[4] === list[6]) || // Diagonal from top-right to bottom-left
                (list[0] === list[4] && list[4] === list[8])    // Diagonal from top-left to bottom-right
            ) {
                setwinner(smallTurn);
                console.log("theres a winner");
                setIsVisible(true);
            }
            else if (IsDraw(list)){
                setwinner(-2);
                setIsVisible(true);
            }
            console.log(list[0], list[1], list[2], list[3], list[4], list[5], list[6], list[7], list[8])
        }

        return (
            <button class="but-to-xfn" onClick={handleClick}>
                {content}
            </button>
        );
    }
    return (
        <div>
            <Overlay></Overlay>
            <div id="grid-parent">
                <Helmet>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
                </Helmet>
                <div className="row">
                    <div className='kid right bottom'><MyButton id="1" /></div>
                    <div className='kid left right bottom'><MyButton id="2" /></div>
                    <div className='kid left bottom'><MyButton id="3" /></div>
                </div>
                <div className="row">
                    <div className='kid top right bottom'><MyButton id="4" /></div>
                    <div className='kid left top right bottom'><MyButton id="5" /></div>
                    <div className='kid left top bottom'><MyButton id="6" /></div>
                </div>
                <div className="row">
                    <div className='kid top right'><MyButton id="7" /></div>
                    <div className='kid left top right'><MyButton id="8" /></div>
                    <div className='kid left top'><MyButton id="9" /></div>
                </div>
            </div>
        </div>

    );
}

export function Reloadbutfn(){
    return(
        <div>
            <button id="gohome-but" onClick={() => window.history.back()}>
                HOME
            </button>
        </div>
    )
}

function IsDraw(list){
    for(let i = 0; i < 9; i++){
        if(list[i] != 1 && list[i] != -1){
            return false;
        }
    }
    return true;
}






