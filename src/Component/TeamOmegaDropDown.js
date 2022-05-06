import React from "react";
import Data from './Mockfile.json'
import PropTypes from 'prop-types'

class RegionData extends React.Component{

    

    render(){
        const{Regionchange}=this.props
        return(
            <select aria-label="State" data-test="TeamOmegaDropDown" className="DropDown2"  onChange={(event)=>{Regionchange(event.target.value)}}>
             {
                 Data.map(val=>{
                     return(
                         <option  key={val.id}>{val.name}</option>
                     )
                 })
             }
            </select>
        )
    }
};

RegionData.propTypes={
    Regionchange:PropTypes.func.isRequired,
}

export default RegionData;