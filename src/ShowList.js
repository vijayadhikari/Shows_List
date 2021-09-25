import React, { useState } from "react";
import './App.css'
import ShowSummary from "./ShowSummary";


const ShowList = (data) => {

  const {name, summary} = data.show;

  const [buttonPopup, setButtonPopUp] = useState(false)

  const onClickHandle=()=>{
    setButtonPopUp(true);
  }

  return (
    <>
    <div className="show">
    <div className="show-info">
    <h4 >Show Name</h4> 
     <h3 style={{color:"yellow"}}> {name}</h3>
    </div>
    <button onClick={onClickHandle}>Go To Summery</button>

    <ShowSummary trigger={buttonPopup} setTrigger={setButtonPopUp}>
    <h3>{name}</h3>
    <p>{summary}</p>
    </ShowSummary>
    </div>
    </>
  );
};
export default ShowList;