import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    // let a = 1

    //a - состояние - коробка, в которой находится initial state, setA - ф-я, в которая меняет состояние

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickHandler1 = () => {
        setA(0)
        console.log(a)
    }

    //если остается прежний адрес ячейки, то виртуальный DOM не срабатывает

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler1}>0</button>
        </div>
    );
}

export default App;
