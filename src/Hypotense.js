import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
//import { button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Hypotense() {
  const [msg, setmsg] = useState("");
  function check(e) {
    e.preventDefault();
    var a1 = parseInt(document.querySelector("#a1").value);
    var a2 = parseInt(document.querySelector("#a2").value);

    let base = a1 * a1;
    let height = a2 * a2;
    var hypotenuse = Math.sqrt(base + height);
    setmsg("The length of hypotenuse is " + hypotenuse);
  }
  return (
    <div>
        <Navbar/>
      <form>
        <h1>Calculate Hypotenuse of a triangle</h1>
        <br />
        <h3>Enter base value (a) = </h3>
        <input id="a1" type="number" required></input>
        <br />
        <br />
        <h3> Enter height value (b) =</h3>
        <input id="a2" type="number" required></input>
        <br />
        <br />
        <br />
        {/* <button onClick={check} type="button" class="btn btn-primary">
          Calculate
        </button> */}
        <input
          type="submit"
          value="Calculate Hypotenuse"
          onClick={check}
          class="btn btn-primary"
        />
        <br />
        <br />
        <b>Hypotenuse formula √(base² + height²)</b>
        <br />
        <br />
        <h4> {msg} </h4>
      </form>
    </div>
  );
}

//export default Triangle;
