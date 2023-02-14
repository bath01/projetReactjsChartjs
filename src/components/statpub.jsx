import axios from "axios";
import React from "react";
import { Chart } from "./Chartstatpub";


function AfficheData2() {
  const [tabData2, setTabData2] = React.useState([])

  async function datastat2() {
    let donnee = await axios.get("http://127.0.0.1:8000/api/bath2");
    setTabData2(donnee.data.data)
    console.log(donnee.data.data)
  }

  React.useEffect(() => {
    datastat2()
  }, [])

  return (
    <div>
      <h1>Le nombre de commentaire par date</h1>
      <div>
        {tabData2.length !== 0 && <Chart data={tabData2}/>}
      </div>
    </div>
  )
  ;
}
export default AfficheData2;
