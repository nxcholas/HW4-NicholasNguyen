import React, {useState} from "react";
import '../css/EXList.css';
import EX1 from "./EX1";
import EX2 from "./EX2";
import EX3 from "./EX3";
import EX4 from "./EX4";
import EX5 from "./EX5";
import EX6 from "./EX6";
import EX7 from "./EX7";
import EX8 from "./EX8";
import EX9 from "./EX9";

function List () {
  // store apps in array
  const apps = [
    {name: "EX1", component: <EX1></EX1>},
    {name: "EX2", component: <EX2></EX2>},
    {name: "EX3", component: <EX3></EX3>},
    {name: "EX4", component: <EX4></EX4>},
    {name: "EX5", component: <EX5></EX5>},
    {name: "EX6", component: <EX6></EX6>},
    {name: "EX7", component: <EX7></EX7>},
    {name: "EX8", component: <EX8></EX8>},
    {name: "EX9", component: <EX9></EX9>}
  ]
  // tracking active app
  const [currentApp, setCurrentApp] = useState(0);

  // switch apps
  const nextApp = () => {
    setCurrentApp((prevApp)=> (prevApp + 1) % apps.length);
  }

  const prevApp = () => {
    setCurrentApp((prevApp) => prevApp === 0 ? apps.length -1 : prevApp -1);
  }
  return (
    <>
      <div id="heading-container">
        <div id="heading-content-container">
          <button id="prev-button" onClick={prevApp}>◀</button>
          <span id="heading-title">{apps[currentApp].name}</span>
          <button id="next-button" onClick={nextApp}>▶</button>
        </div>
      </div>
      {apps[currentApp].component}
    </>
  )
}

export default List