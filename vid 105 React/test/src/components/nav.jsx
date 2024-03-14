import React, {useEffect} from "react";
import "./nav.css";

function nav({Logo}) {
  // case 0: Run on evary render
  useEffect(() => {
    alert("Hey I am running on every render")
  });

  // case 1: Run on first render
  useEffect(() => {
    alert("Hey I am running on first render")
  },[]);

  // case 2: Run on logo changed
  useEffect(() => {
    alert("Hey I am running on first render and when Logo changes")
  },[Logo]);

  return (
    <nav>
        <span>{Logo}</span>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  );
}

export default nav;