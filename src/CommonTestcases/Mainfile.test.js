import MainFile from "../Component/MainFile";
import { shallow } from "enzyme";
import HeaderFile from "../Component/TeaOmegaHeader";
import RegionDropDown from '../Component/TeamOmegaDropDown'
import CountryDropDown from '../Component/TeamOmegaCountryDropDown'
import store from '../Store/store'

const setUp = shallow(<MainFile store={store} />).childAt(0).dive();

describe('Mainfile-test', () => {
  let component, wrapper;
  beforeAll(() => {
    component = setUp;
  });

  describe('Render All data', () => {

    it("Should render without errors", () => {
      let wrapper = component.find(`[data-test="Main_Component"]`);
      expect(wrapper.length).toBe(1);
    });

  });

  describe('Child Component -Header', () => {

    describe('Header-test', () => {
      beforeEach(() => {
        wrapper = component.find(HeaderFile);
      });

      it('Mainfile should contain Header', () => {
        expect(wrapper.exists()).toEqual(true);
      });

      it("Should render without Errors", () => {
        expect(wrapper.dive().find(`[data-test="TeamOmegaHeader"]`).length).toBe(1);
      })

      it('Should render the same text as passed', () => {
        expect(wrapper.dive().text()).toEqual(wrapper.props().text);
      })

    });


  });

  describe('RegionDropDown Component', () => {
    beforeEach(() => {
      wrapper = component.find(RegionDropDown)

    })
    it('APP should contain regiondata', () => {
      expect(wrapper.exists()).toEqual(true);
    });
  });

  describe('CountryDropDown Component', () => {
    beforeEach(() => {
      wrapper = component.find(CountryDropDown)

    })
    it('APP should contain countrydata', () => {
      expect(wrapper.exists()).toEqual(true);
    });
    
  });


});