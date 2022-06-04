import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
//import { button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function Triangle() {
  const [msg, setmsg] = useState("");
  function check() {
    var a1 = parseInt(document.querySelector("#a1").value);
    var a2 = parseInt(document.querySelector("#a2").value);
    var a3 = parseInt(document.querySelector("#a3").value);

    var ans = a1 + a2 + a3;

    if (ans === 180) {
      setmsg("Yay, the angles form a triangle!");
    } else {
      setmsg("Oh Oh! The angle doesn't form a triangle");
    }
  }
  return (
     
    <div>
         <Navbar/>
      <h1>Angles of triangle</h1>
      <h3>Angle1 </h3>
      <input id="a1" type="number" placeholder="Enter Angle 1"></input>
      <br />
      <br />
      <h3>Angle2 </h3>
      <input id="a2" type="number" placeholder="Enter Angle 2"></input>
      <br />
      <br />
      <h3>Angle3 </h3>
      <input id="a3" type="number" placeholder="Enter Angle 3"></input>
      <br />
      <br />
      <button onClick={check} type="button" class="btn btn-primary">
        Is Triangle?
      </button>
      <br />
      <br />
      <h4> {msg} </h4>
    </div>
  );
}

//export default Triangle;
