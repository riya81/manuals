import React from 'react';
import './App.css';
import FCC from './FCC.jsx'
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {}
  }
  render()
  {
    const links = [
      {
        url: "sleep",
        text: "sleep",
        explanation: <div>
          <p>sleep関数は第一引数で渡された時間処理を待ちます</p>
          <p>第二引数に待ったあとの処理をコールバック関数でかけます</p>
        </div>
      },
      {
        url: "math",
        text: "Maths",
        explanation: <div>
          <p>関連関数</p>
          <a href="#mathnew">Mathsnew</a>
        </div>
      }, {
        url: "mathnew",
        text: "Mathsnew",
        explanation: ""
      }, {
        url: "ranbom",
        text: "Random",
        explanation: ""
      }, {
        url: "ncr",
        text: "nCr",
        explanation: ""
      }, {
        url: "npr",
        text: "nPr",
        explanation: ""
      }, {
        url: "pow",
        text: "Pow",
        explanation: ""
      }
    ]
    return (
      <React.Fragment>
        <div>
          <p>基本的な使い方</p>
          <p>まずFCC.jsxを読み込みます</p>
          <p>FCCと言う定数が全ての関数、コンポーネントを継承してます</p>
          <p>長いので目次</p>
        </div>
        <div>
          <p class="btn">関数</p>
        </div>
        {
          links.map((link) =>
          {
            return (
              <div className="link">
                <a href={`#${link.url}`}><button>{link.text}</button></a>
              </div>
            )
          })
        }
        {
          links.map((link) =>
          {
            return (
              <div id={link.url}>
                <div>
                  <p className="btn">{link.text}</p>
                </div>
                {
                  link.explanation
                }
              </div>
            )
          })
        }
      </React.Fragment >
    );
  }
}

export default App;
