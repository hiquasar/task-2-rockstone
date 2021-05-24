import React from 'react'
import './Board.css'

function Board({ rowCoordinates }) {
    let matrix = []

    for (let i = 0; i < 8; i++) {
        matrix.push(['0', '1', '2', '3', '4', '5', '6', '7'])
    }

    return (
        <div className='wrapper'>
            {
                matrix.map((row, index) => (
                    row.map(col => (
                        <div
                            className={`cell ${Number(col) === rowCoordinates[index] ? 'painted-cell' : ''}`}
                            key={`${index}${col}`}
                        >
                        </div>
                    ))
                ))
            }

        </div>
    )
}

export default Board
