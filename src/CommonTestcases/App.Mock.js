import checkPropTypes from "check-prop-types";
export const checkProps = (component, expectedProps) =>
    checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

   

export const findTestByAttr = (component, attr) =>{
    let wrapper = component.find(`[data-test='${attr}']`);
     return wrapper
    };

