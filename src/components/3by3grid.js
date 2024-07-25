import React from 'react';
import "./3by3grid.css"
import Xfn from './thex';
import { useState } from 'react';
import { smallTurn } from './thex';



export default function Threebythreefn() {
    return (
        <div>
            <div id="grid-parent">
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
let winner = null;
let list=[3,4,5,6,7,8,9,10,11];
const newList = [3,4,5,6,7,8,9,10,11];
function MyButton({id}) {
    //const [isVisible, setIsVisible] = useState(false);
    const [content, setContent] = useState('');
    function handleClick() {
        if ((winner!=null)|| (list[id-1]===-1||list[id-1]===1)) return;
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
            winner=smallTurn;
            console.log("theres a winner");
            list=[...newList];
        }
      console.log(list[0],list[1],list[2],list[3],list[4],list[5],list[6],list[7],list[8])
    }

    return (
        <button class="but-to-xfn" onClick={handleClick}>
            {content}
        </button>
    );
}

    const Overlay = ({ isVisible,winner }) => {
        if (!isVisible) return null;
    
        const overlayStyle = {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            zIndex: 9999,
        };
    
        const textStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
        }
    
        if (winner) {
            winner = "X"
        }
        else {
            winner = "O"
        }
        return <div style={overlayStyle}>
            <text style={textStyle}>{winner} won!!</text>
        </div>;
    };



