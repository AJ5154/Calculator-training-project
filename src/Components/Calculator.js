import React, { useState } from "react";
import "./Calculator.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Calculator() {
  const [inputValue, setInputValue] = useState("");

  const buttonClickHandler = (value) => {
    setInputValue((prev) => prev + value);
  };

  const clearInputHandler = () => {
    setInputValue("");
  };

  const submitAnsHandler = () => {
    try {
      const finalAnswer = eval(inputValue);
      setInputValue(finalAnswer.toString());
    } catch (err) {
      setInputValue(err.message);
    }
  };
  return (
    <div>
      <div class="container text-center" style={{ width: "500px" }}>
        <input
          type="text"
          className="form-control form-control-lg text-end"
          reqd
          placeholder="0"
          value={inputValue}
          style={{ width: "413px", margin: "15px 30px" }}
        />
        <div class="rows">
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => clearInputHandler()}
            >
              C
            </button>
          </div>
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler("(")}
            >
              (
            </button>
          </div>
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler(")")}
            >
              )
            </button>
          </div>
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => setInputValue((prev) => prev.slice(0, -1))}
            >
              <i className="bi bi-backspace"></i>
            </button>
          </div>
        </div>
        <div class="rows">
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler("7")}
            >
              7
            </button>
          </div>
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler("8")}
            >
              8
            </button>
          </div>
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler("9")}
            >
              9
            </button>
          </div>
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler("/")}
            >
              /
            </button>
          </div>
        </div>

        <div class="rows">
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler("4")}
            >
              4
            </button>
          </div>
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler("5")}
            >
              5
            </button>
          </div>
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler("6")}
            >
              6
            </button>
          </div>
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler("*")}
            >
              *
            </button>
          </div>
        </div>

        <div class="rows">
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler("1")}
            >
              1
            </button>
          </div>
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler("2")}
            >
              2
            </button>
          </div>
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler("3")}
            >
              3
            </button>
          </div>
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler("-")}
            >
              -
            </button>
          </div>
        </div>
        <div class="rows">
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler(".")}
            >
              .
            </button>
          </div>
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler("0")}
            >
              0
            </button>
          </div>
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => submitAnsHandler()}
            >
              =
            </button>
          </div>
          <div class="cols">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={() => buttonClickHandler("+")}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
