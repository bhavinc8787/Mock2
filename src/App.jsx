import React from "react"
import Classcomp from "./classcomp"
import data from "./bhavin.json"
class App extends React.Component{
 render(){
      let bhav="bhavin"
  return (
    <>
    <div>
      <h1>he App.js</h1>
      <Classcomp name={data}/>
    </div>
     
    </>
  )
}
}

export default App
