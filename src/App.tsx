import './App.scss'
import React from 'react'

interface State {
  squares: (string | null)[];
  count: number;
}

export default class App extends React.Component <{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
    };

    this.winerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  winerLine: number[][];

  clickHandler = (e: any) => {
    let dataIndex = parseInt(e.target.getAttribute('data-index'))
    let currencySquare = this.state.squares;
    console.log(currencySquare);
    if(currencySquare[dataIndex] === null){
      currencySquare[dataIndex] = this.state.count % 2 === 0 ? "X" : "O";
      this.setState({
        squares: currencySquare, 
        count: this.state.count + 1});
      }
  }
  
  render(){
  return (
    <div className="App">
      <div className="game-container"></div>
        <h1 className="game-name">Tic-Tac-Toe game</h1>
        <div className="game-container">     
          <div className="tic-tac-toe">
            <div data-index="0" className="ttt-gid" onClick={this.clickHandler}>{this.state.squares[0]}</div>
            <div data-index="1" className="ttt-gid" onClick={this.clickHandler}>{this.state.squares[1]}</div>
            <div data-index="2" className="ttt-gid" onClick={this.clickHandler}>{this.state.squares[2]}</div>
            <div data-index="3" className="ttt-gid" onClick={this.clickHandler}>{this.state.squares[3]}</div>
            <div data-index="4" className="ttt-gid" onClick={this.clickHandler}>{this.state.squares[4]}</div>
            <div data-index="5" className="ttt-gid" onClick={this.clickHandler}>{this.state.squares[5]}</div>
            <div data-index="6" className="ttt-gid" onClick={this.clickHandler}>{this.state.squares[6]}</div>
            <div data-index="7" className="ttt-gid" onClick={this.clickHandler}>{this.state.squares[7]}</div>
            <div data-index="8" className="ttt-gid" onClick={this.clickHandler}>{this.state.squares[8]}</div>
          </div>
      </div> 
      <h2>{this.state.count % 2 === 0 ? "X" : "O"}'s turn</h2>
    </div>
  )
  }
}

