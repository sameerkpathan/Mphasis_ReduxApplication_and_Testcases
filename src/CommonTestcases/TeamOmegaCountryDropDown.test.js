import { checkProps, findTestByAttr } from './app.mock';
import { mount, shallow } from 'enzyme'
import store from '../Store/store';
import CountryDropDown from '../Component/TeamOmegaCountryDropDown'
import Sinon from 'sinon';



let wrapper = (props = {}) => shallow(<CountryDropDown {...props} store={store} />).childAt(0).dive();

//console.log(wrapper.props());

describe("TeamOmegaDropdown2 check", () => {

     let component, props;

     describe("TeamOmegaDropDown2 Component", () => {

          beforeEach(() => {

               component = wrapper(props)
          });

          it('render data', () => {
               expect(findTestByAttr(component, 'TeamOmegaCountryDropDown').exists()).toEqual(true);
               console.log("wrapper", wrapper);

          })

          it(' check classname countrydropdown', () => {

               expect(component.find('.countrydropdown').exists()).toEqual(true);

          });


          it("Heading Class-test ", () => {
               expect(component.exists('.countrydropdown')).toEqual(true)
          })
     });
})
