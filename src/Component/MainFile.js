import React from "react"
import CountryDropDown from './TeamOmegaCountryDropDown'
import RegionDropDown from './TeamOmegaDropDown'
import HeaderFile from "./TeaOmegaHeader";
import { connect } from "react-redux";
import { getusers } from "../Action/Action";



class User extends React.Component {


    constructor(){
        super();
        this.state={
            region:"Africa"
        }
    }


    componentDidMount() {
        this.props.getusers(this.state.region)
        
    }
  
    changeRegion = (region) => {
        this.props.getusers(region)
       
    }
    

    render() {
        // const { country } = this.props.country
        // console.log("userdata" + this.props.country)
       


        return (
            <main data-test="Main_Component">
                <div>

                </div>
                <div>

                    <HeaderFile className="mainheader" text="Dynamic DropDown"/>
                </div>

                <div className="MainDiv" >
                    <div className="SubDiv1">

                        <span>Region Name : </span>
                        <RegionDropDown Regionchange={this.changeRegion} />
                    </div>
                    <div className="SubDiv2">

                        <span>  Country Name : </span>
                        <CountryDropDown />
                    </div>
                </div>

          


            </main>
        );
    }
};


const mapStateToProps = (state) => ({
    country: state.users,
    error:state.error
});

   


export default connect(mapStateToProps,{getusers})(User);

