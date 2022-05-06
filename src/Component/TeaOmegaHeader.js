import React from "react";
import PropTypes from 'prop-types'

class HeaderFile extends React.Component {

    render() {
        const{className,text}=this.props;
        return (
            <header>
                <div className="mainHeaderfile">

                <div className={className}>
                <h1 data-test="TeamOmegaHeader">{text}</h1>
                </div>
                </div>
            </header>
        );
    }
};

HeaderFile.propTypes={
    className:PropTypes.string,
    text:PropTypes.string
}

export default HeaderFile;