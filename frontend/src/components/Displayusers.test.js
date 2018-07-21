import React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Displayusers from './Displayusers'

describe('storage', () => [localStorage, sessionStorage].map(storage => {
    beforeEach(() => {
      storage.clear();
      jest.clearAllMocks();
    });
  
    Enzyme.configure({ adapter: new ReactSixteenAdapter() });
  
    const history = ['/Displayusers'];
  
    test('Displayusers component should render as expected', () => {
      const KEY = 'loggedIn',
        VALUE = true;
      sessionStorage.setItem(KEY, VALUE);
      const component = shallow(<Displayusers history={history} />);
      const tree = component;
      expect(tree).toMatchSnapshot();
    })
  }));