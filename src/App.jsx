import React from 'react';
import './App.css';
import FCC from 'fcc-react-modules';
console.log(FCC.Gcd(2, 4));
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      react: { display: "none" },
      rails: { display: "none" },
      style: { display: "block" }
    }
  }
  render()
  {
    const links = {
      react: [
        {
          url: "sleep",
          text: "sleep",
          explanation: <div>
            <p>sleep関数は第一引数で渡された時間処理を待ちます</p>
            <p>第二引数に待ったあとの処理をコールバック関数で渡してください</p>
            <div>
              <p className="tag">引数</p>
              <p>1 待ちたい時間 2 コルバック関数で待ったあとの処理</p>
            </div>
            <div className="padding">
              <p className="tag">例</p>
              <p>1秒待った後にconsoleにHelloと出力する場合</p>
              <p>{`FCC.sleep(1000, () => { console.log('Hello') })`}</p>
            </div>
          </div>
        },
        {
          url: "mathclass",
          text: "math",
          explanation: <div>
            <div>
              <p>数学を扱うクラスです</p>
              <p>定数Mathsでインスタンスを宣言しています</p>
            </div>
            <p>関連関数</p>
            <a href="#mathnew">Mathsnew</a>
          </div>
        },
        {
          url: "math",
          text: "Maths",
          explanation: <div>
            <div>
              <p>mathのインスタンスです</p>
              <p>数学を扱います</p>
              <p>Javascript標準のMathでは出来ない処理を行えます</p>
            </div>
            <p>関連関数</p>
            <a href="#mathnew">Mathsnew</a>
          </div>
        }, {
          url: "mathnew",
          text: "Mathsnew",
          explanation: <div>
            <p>mathのインスタンスを返します</p>
          </div>
        }, {
          url: "ranbom",
          text: "Random",
          explanation: <div>
            <p>0~渡された値-1の</p>
            <p>乱数を生成します</p>
            <p className="tag">引数</p>
            <p>1 乱数を生成したい値</p>
            <p className="tag">例</p>
            <p>0 ~ 3の乱数を生成する場合</p>
            <p>{`FCC.Random(4)`}</p>
          </div>
        }, {
          url: "ncr",
          text: "nCr",
          explanation: <div>
            <p></p>
          </div>
        }, {
          url: "npr",
          text: "nPr",
          explanation: <div>
            <p></p>
          </div>
        }, {
          url: "pow",
          text: "Pow",
          explanation: <div>
            <p></p>
          </div>
        }
      ],
      rails: [{

      }]
    }
    return (
      <React.Fragment>
        <div style={this.state.style}>
          <h1>使っているフレームワークを選択してください</h1>
          <button onClick={() => { this.setState({ style: { display: "none" }, react: { display: "block" } }) }}>React</button>
          <button onClick={() => { this.setState({ style: { display: "none" }, rails: { display: "block" } }) }}>Rails</button>
        </div>
        <div style={this.state.react}>
          <div>
            <p>基本的な使い方</p>
            <p>まずFCC.jsxを読み込みます</p>
            <p>FCCと言う定数が全ての関数、コンポーネントを継承してます</p>
            <p>長いので目次</p>
          </div>
          <div>
            <p className="btn">関数</p>
          </div>
          {
            links.react.map((link) =>
            {
              return (
                <div className="link">
                  <a href={`#${link.url}`}><button>{link.text}</button></a>
                </div>
              )
            })
          }
          {
            links.react.map((link) =>
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
        </div>
        <div style={this.state.rails}>
          <div>
            <p>基本的な使い方</p>
            <p>まずFCC.jsxを読み込みます</p>
            <p>FCCと言う定数が全ての関数、コンポーネントを継承してます</p>
            <p>長いので目次</p>
          </div>
          <div>
            <p className="btn">関数</p>
          </div>
          {
            links.rails.map((link) =>
            {
              return (
                <div className="link">
                  <a href={`#${link.url}`}><button>{link.text}</button></a>
                </div>
              )
            })
          }
          {
            links.rails.map((link) =>
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
        </div>
      </React.Fragment >
    );
  }

}

export default App;
