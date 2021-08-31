import React from 'react';
import './Chessboard.css';

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horoinzontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]

export default function chessboard() {
    let board = [];

    for (let j = verticalAxis.length - 1; j >= 0; j--){
        for (let i = 0; i < horoinzontalAxis.length; i++){
            const number = j + i + 2; 
            if(number % 2 === 0){
                board.push(
                    <div className="tile white-tile">{horoinzontalAxis[i]} {verticalAxis[j]}</div>
                );
            } else {
                board.push(
                    <div className="tile black-tile"></div>
                );
            }
           
        }
    }
    return <div id='chessboard'>{board}</div>
}  