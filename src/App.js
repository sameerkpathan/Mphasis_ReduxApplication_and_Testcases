
import React  from "react";
import './App.css'
import MainFile from "./Component/MainFile";


class App extends React.Component{
  

   render(){
     return(
       <div className="App" data-test="App_Component">
      
       <MainFile/>
       </div>
     );
   }
};


export default App;