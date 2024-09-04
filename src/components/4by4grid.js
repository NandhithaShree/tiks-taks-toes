import React from 'react';
import "./4by4grid.css"
import Xfn from './thex';
import { useState, useContext } from 'react';
import { smallTurn } from './thex';
import { Helmet } from 'react-helmet';
import { MyContext } from './mycontext'




export default function Fourbyfourfn() {
    const { winner, setwinner } = useContext(MyContext);
    let list = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    const newList = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
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
        else if (winner == -1) {
            Owinner = "Player 1"
        }
        else {
            Owinner = "Nobody";
        }
        return <div style={overlayStyle}>
            <text className='wintext1'>{Owinner} won!</text>
            <Reloadbutfn />
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
                (list[0] === list[1] && list[1] === list[2] && list[2] === list[3]) || // Horizontal row 1
                (list[4] === list[5] && list[5] === list[6] && list[6] === list[7]) || // Horizontal row 2
                (list[8] === list[9] && list[9] === list[10] && list[10] === list[11]) || // Horizontal row 3
                (list[12] === list[13] && list[13] === list[14] && list[14] === list[15]) || // Horizontal row 4
                (list[0] === list[4] && list[4] === list[8] && list[8] === list[12]) || // Vertical column 1
                (list[1] === list[5] && list[5] === list[9] && list[9] === list[13]) || // Vertical column 2
                (list[2] === list[6] && list[6] === list[10] && list[10] === list[14]) || // Vertical column 3
                (list[3] === list[7] && list[7] === list[11] && list[11] === list[15]) || // Vertical column 4
                (list[0] === list[5] && list[5] === list[10] && list[10] === list[15]) || // Diagonal from top-left to bottom-right
                (list[3] === list[6] && list[6] === list[9] && list[9] === list[12])    // Diagonal from top-right to bottom-left
            ) {
                setwinner(smallTurn);
                console.log("theres a winner");
                setIsVisible(true);
            }
            else if (IsDraw(list)) {
                setwinner(-2);
                setIsVisible(true);
            }
            console.log(list[0], list[1], list[2], list[3], list[4], list[5], list[6], list[7], list[8])
        }

        return (
            <button class="but-to-xfn1" onClick={handleClick}>
                {content}
            </button>
        );
    }
    return (
        <div>
            <Overlay></Overlay>
            <div id="grid-parent1">
                <Helmet>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
                </Helmet>
                <div className="row1">
                    <div className='kid1 right1 bottom1'><MyButton id="1" /></div>
                    <div className='kid1 left1 right1 bottom1'><MyButton id="2" /></div>
                    <div className='kid1 left1 right1 bottom1'><MyButton id="3" /></div>
                    <div className='kid1 left1 bottom1'><MyButton id="4" /></div>
                </div>
                <div className="row1">
                    <div className='kid1 top1 right1 bottom1'><MyButton id="5" /></div>
                    <div className='kid1 left1 top1 right1 bottom1'><MyButton id="6" /></div>
                    <div className='kid1 left1 top1 right1 bottom1'><MyButton id="7" /></div>
                    <div className='kid1 left1 top1 bottom1'><MyButton id="8" /></div>
                </div>
                <div className="row1">
                    <div className='kid1 top1 right1 bottom1'><MyButton id="9" /></div>
                    <div className='kid1 left1 top1 right1 bottom1'><MyButton id="10" /></div>
                    <div className='kid1 left1 top1 right1 bottom1'><MyButton id="11" /></div>
                    <div className='kid1 left1 top1 bottom1'><MyButton id="12" /></div>
                </div>
                <div className="row1">
                    <div className='kid1 top1 right1'><MyButton id="13" /></div>
                    <div className='kid1 left1 top1 right1'><MyButton id="14" /></div>
                    <div className='kid1 left1 top1 right1'><MyButton id="15" /></div>
                    <div className='kid1 left1 top1'><MyButton id="16" /></div>
                </div>
            </div>
        </div>

    );
}

export function Reloadbutfn() {
    return (
        <div>
            <button id="gohome-but1" onClick={() => window.history.back()}>
                HOME
            </button>
        </div>
    )
}

function IsDraw(list) {
    for (let i = 0; i < 16; i++) {
        if (list[i] != 1 && list[i] != -1) {
            return false;
        }
    }
    return true;
}

