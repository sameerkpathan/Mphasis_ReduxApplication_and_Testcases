import React from "react";
import { getusers } from "../Action/Action";
import { connect } from "react-redux";

class CountryDropDown extends React.Component {
    dropdownhandler=(e)=>{ return;}
    render() {
        const { country, error } = this.props

        

        return (
            <div data-test="TeamOmegaCountryDropDown" className="countrydropdown">
                {
                    error!== "" && alert("Sorry could not fetch data...",error)
                }{
                 country.length > 0 &&
                 <select aria-label="State"  className="DropDown1" >
                 {
                     country.map(val => {
                         return (
                             <option key={val.name.official}>{val.name.common}</option>
                         )
                     })
                 }
             </select>
                }
               
            </div>
        );
    }
};



const mapStateToProps = (state) => ({
    country: state.users.country,
    error: state.users.error
});



export default connect(mapStateToProps, { getusers })(CountryDropDown);