import React from 'react'
import Board from './components/Board/Board'
import './App.css'

function App() {

    //идея: 
    //8 ферзей должны стоять на разных столбцах, в противном случае 
    //они будут бить друг друга. Следовательно нам нужно рассмотреть расстоновки 
    //строк. getCombinations() генерирует нам все возможные перестановки.
    //в функции ok() проверяем подходит ли нам определенная перестановка.
    //если ферзь бьет другого по диагонали, значит разность координат столбцов 
    //и разность координат строк равна, это мы и проверяем в ok(), если это так 
    //данная перестановка нам не подходит. в solve() проходимся по всем возможным 
    //перестановкам и кладем в result только нужные. а далее просто рисуем их в Board

    //решение базого уровня является частным случаем расширенного уровня 

    const solve = () => {
        let rowPosition = [0, 1, 2, 3, 4, 5, 6, 7]
        let result = []

        let combinations = getCombinations(rowPosition)

        for (let i = 0; i < combinations.length; i++) {
            if (ok(combinations[i])) {
                result.push(combinations[i])
            }
        }

        return result

    }

    const ok = rowPosition => {
        for (let i = 1; i < 8; i++) {
            for (let j = 0; j < i; j++) {
                if (i - j === Math.abs(rowPosition[i] - rowPosition[j]))
                    return false
            }
        }

        return true
    }


    const getCombinations = initialCombination => {
        let result = []

        const combination = (inputArr, tempArr = []) => {
            if (inputArr.length === 0) {
                result.push(tempArr)
            } else {
                for (let i = 0; i < inputArr.length; i++) {
                    let copiedArr = inputArr.slice()
                    let value = copiedArr.splice(i, 1)
                    combination(copiedArr.slice(), tempArr.concat(value))
                }
            }
        }

        combination(initialCombination)

        return result
    }

    return (
        <div className='container'>
            <div className="app-wrapper">
                {
                    solve().map(item => <Board key={item} rowCoordinates={item} />)
                }

            </div>
        </div>
    );
}

export default App;
