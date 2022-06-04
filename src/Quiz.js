import React from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
export default function Quiz() {
  const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°"
  ];
  const [val, setVal] = useState("-1");
  var radio = document.querySelector(".quiz-form");

  const show = (e) => {
    setVal(0);
    e.preventDefault();
    var count = 0;
    var fians;
    for (var j = 1; j <= 8; j++) {
      var ans1 = document.getElementsByName("question" + j);
      for (var i = 0; i < ans1.length; i++) {
        if (ans1[i].checked) {
          fians = ans1[i].value;
        }
      }
      if (fians === correctAnswers[j - 1]) {
        count++;
      }
    }
    setVal(count);
  };

  return (
    <div>
        <Navbar/>
      <h1>Quiz on triangles</h1>
      <h3>For each correct answer you will get 1 point </h3>
      <br />
      <br />
      <form class="quiz-form">
        <div class="question-container">
          <p>
            What is the third angle for the triangle where angle1 = 45° and
            angle2 = 45°?
          </p>
          <label>
            <input id="1" type="radio" name="question1" value="45°" />
            45°
          </label>
          &nbsp;
          <label>
            <input id="1" type="radio" name="question1" value="90°" />
            90°
          </label>
          &nbsp;
          <label>
            <input id="1" type="radio" name="question1" value="60°" />
            60°
          </label>
        </div>
        <br />
        <br />
        <div class="question-container">
          <p>
            What is the third angle for the triangle where angle1 = 45° and
            angle2 = 45°?
          </p>
          <label>
            <input type="radio" name="question2" value="obtuse" />
            obtuse
          </label>
          &nbsp;
          <label>
            <input type="radio" name="question2" value="acute" />
            acute
          </label>
          &nbsp;
          <label>
            <input type="radio" name="question2" value="right angled" />
            right angled
          </label>
        </div>
        <br />
        <br />
        <div class="question-container">
          <p>A triangle can have</p>
          <label>
            <input type="radio" name="question3" value="one right angle" />
            one right angle
          </label>
          &nbsp;
          <label>
            <input type="radio" name="question3" value="two right angles" />
            two right angles
          </label>
        </div>
        <br />
        <br />
        <div class="question-container">
          <p>Which of the following can form a right angled triangle?</p>
          <label>
            <input type="radio" name="question4" value="14, 15, 26" />
            14, 15, 26
          </label>
          &nbsp;
          <label>
            <input type="radio" name="question4" value="12, 16, 20" />
            12, 16, 20
          </label>
        </div>
        <br />
        <br />
        <div class="question-container">
          <p>Which of the following triangles are always similar?</p>
          <label>
            <input type="radio" name="question5" value="Equilateral triangle" />
            Equilateral triangle
          </label>
          &nbsp;
          <label>
            <input type="radio" name="question5" value="Isosceles triangle" />
            Isosceles triangle
          </label>
          &nbsp;
        </div>
        <br />
        <br />
        <div class="question-container">
          <p>
            If one angle of a triangle is obtuse, then which one of the
            following is the possible measure of remaining angles?
          </p>
          <label>
            <input type="radio" name="question6" value="100°" />
            100°
          </label>
          &nbsp;
          <label>
            <input type="radio" name="question6" value="85°" />
            85°
          </label>
        </div>
        <br />
        <br />
        <div class="question-container">
          <p>
            If the largest angle in a triangle is 70°, what is the least
            possible value of the smallest angle of the triangle?
          </p>
          <label>
            <input type="radio" name="question7" value="30°" />
            30°
          </label>
          &nbsp;
          <label>
            <input type="radio" name="question7" value="10°" />
            10°
          </label>
        </div>
        <br />
        <br />
        <div class="question-container">
          <p>The perimeter of scalene triangle with sides a, b, c is</p>
          <label>
            <input type="radio" name="question8" value="a + b + c" />a + b + c
          </label>
          <label>
            &nbsp;
            <input type="radio" name="question8" value="2a" />
            2a
          </label>
          &nbsp;
          <label>
            <input type="radio" name="question8" value="None of these" />
            None of these
          </label>
        </div>
        <br />
        <br />
        <div class="question-container">
          <p>A scalene triangle has ___ lines of symmetry</p>
          <label>
            <input type="radio" name="question9" value="two" />
            two
          </label>
          &nbsp;
          <label>
            <input type="radio" name="question9" value="no" />
            no
          </label>
          &nbsp;
          <label>
            <input type="radio" name="question9" value="15" />
            15
          </label>
        </div>
        <br />
        <br />
        <div class="question-container">
          <p>
            There is a right triangle PQR where: angle Q = 90°; angle P = angle
            R. What is the measure of angles P and R?
          </p>
          <label>
            <input type="radio" name="question10" value="85°" />
            85°
          </label>
          &nbsp;
          <label>
            <input type="radio" name="question10" value="65°" />
            65°
          </label>
          &nbsp;
          <label>
            <input type="radio" name="question10" value="45°" />
            45°
          </label>
        </div>
        <br />
        <br />
        <input
          type="submit"
          class="btn btn-primary"
          value="Submit Answers"
          onClick={show}
        />
      </form>
      {val !== "-1" ? <h3> your score is {val} </h3> : ""}
    </div>
  );
}
