import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
//import { button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Area() {
  const [msg, setmsg] = useState("");
  function check(e) {
    e.preventDefault();
    var a1 = parseInt(document.querySelector("#a1").value);
    var a2 = parseInt(document.querySelector("#a2").value);
    var a3 = parseInt(document.querySelector("#a3").value);

    var s = (a1 + a2 + a3) / 2;

    var area = Math.sqrt(s * (s - a1) * (s - a2) * (s - a3));
    setmsg("Area of a triangle using heron's formula is " + area + " units");
  }
  return (
    <div>
        <Navbar/>
      <form>
        <h1>Area of triangle</h1>
        <br />
        <h3>Enter first side of a triangle </h3>
        <input id="a1" type="number" required></input>
        <br />
        <br />
        <h3> Enter second side of a triangle </h3>
        <input id="a2" type="number" required></input>
        <br />
        <br />
        <h3>Enter third side of a triangle </h3>
        <input id="a3" type="number" required></input>
        <br />
        <br />
        {/* <button onClick={check} type="button" class="btn btn-primary">
          Calculate
        </button> */}
        <input
          type="submit"
          value="Calculate"
          onClick={check}
          class="btn btn-primary"
        />
        <br />
        <br />
        <h4> {msg} </h4>
      </form>
    </div>
  );
}

//export default Triangle;
