import React from "react";
import "./App.css";

const operators = ["/", "*", "-", "+"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class App extends React.Component {
  state = {
    result: "0",
    lastPressed: undefined,
  };

  handleClick = (e) => {
    const { result, lastPressed } = this.state;
    const { innerText } = e.target;
    switch (innerText) {
      case "AC": {
        this.setState({
          result: "0",
        });
        break;
      }
      case ".": {
        const splitted = result.split(/[\+\-\*\/]/);
        const sliced = splitted.slice(-1)[0];
        if (!sliced.includes(".")) {
          this.setState({
            result: result + ".",
          });
        }
        break;
      }
      case "=": {
        const evaluated = eval(result);
        this.setState({
          result: evaluated,
        });
        break;
      }

      default: {
        let x = undefined;
        if (operators.includes(innerText)) {
          if (operators.includes(lastPressed) && innerText !== "-") {
            // find last numbers index, slice after that number, connect.
            const reversed = result.split("").reverse();
            const lastNum = reversed.findIndex(
              (char) => char !== " " && numbers.includes(+char)
            );
            x = result.slice(0, result.length - lastNum) + ` ${innerText} `;
          } else {
            x = `${result} ${innerText} `;
          }
        } else {
          x = result === "0" ? innerText : result + innerText;
        }
        this.setState({
          result: x,
        });
      }
    }

    this.setState({
      lastPressed: innerText,
    });
  };

  render() {
    return (
      <div className="container">
        <div id="display" className="display">
          {this.state.result}
        </div>
        <div className="buttons">
          <button id="clear" onClick={this.handleClick}>
            AC
          </button>
          <button id="divide" onClick={this.handleClick}>
            /
          </button>
          <button id="multiply" onClick={this.handleClick}>
            *
          </button>
          <button id="seven" onClick={this.handleClick}>
            7
          </button>
          <button id="eight" onClick={this.handleClick}>
            8
          </button>
          <button id="nine" onClick={this.handleClick}>
            9
          </button>
          <button id="subtract" onClick={this.handleClick}>
            -
          </button>
          <button id="four" onClick={this.handleClick}>
            4
          </button>
          <button id="five" onClick={this.handleClick}>
            5
          </button>
          <button id="six" onClick={this.handleClick}>
            6
          </button>
          <button id="add" onClick={this.handleClick}>
            +
          </button>
          <button id="one" onClick={this.handleClick}>
            1
          </button>
          <button id="two" onClick={this.handleClick}>
            2
          </button>
          <button id="three" onClick={this.handleClick}>
            3
          </button>
          <button id="equals" onClick={this.handleClick}>
            =
          </button>
          <button id="zero" onClick={this.handleClick}>
            0
          </button>
          <button id="decimal" onClick={this.handleClick}>
            .
          </button>
        </div>
      </div>
    );
  }
}

export default App;
