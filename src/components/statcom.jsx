import axios from "axios";
import React from "react";
import { Chart } from "./Chart";


function AfficheData1() {
  const [tabData1, setTabData1] = React.useState([])

  async function datastat1() {
    let donnee = await axios.get("http://127.0.0.1:8000/api/bath");
    setTabData1(donnee.data.data)
    console.log(donnee.data.data)
  }

  React.useEffect(() => {
    datastat1()
  }, [])

  return (
    <div>
      <div>
        {tabData1.length !== 0 && <Chart data={tabData1}/>}
      </div>
    </div>
  )
  ;
}
export default AfficheData1;
