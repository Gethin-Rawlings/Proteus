import React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Displayprogrammes from './Displayprogrammes'
import renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";

describe('storage', () => [localStorage, sessionStorage].map(storage => {
    beforeEach(() => {
      storage.clear();
      jest.clearAllMocks();
    });
  
    Enzyme.configure({ adapter: new ReactSixteenAdapter() });
  
    const history = ['/Displayprogrammes'];
  
    test('Displayprogrammes component should render as expected', () => {
      const KEY = 'loggedIn',
        VALUE = true;
      sessionStorage.setItem(KEY, VALUE);
      const component = shallow(<Displayprogrammes history={history} />);
      const tree = component;
      expect(tree).toMatchSnapshot();
    })
    /*
    test('It responds to a mouse click', () => {
      const wrapper = shallow(<Displayprogrammes />);
      wrapper.find('').simulate('click', { preventDefault() {} });

    })
    */
  }));