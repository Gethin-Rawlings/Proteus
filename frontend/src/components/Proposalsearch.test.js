import React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Proposalsearch from './Proposalsearch'

describe('storage', () => [localStorage, sessionStorage].map(storage => {
    beforeEach(() => {
      storage.clear();
      jest.clearAllMocks();
    });
  
    Enzyme.configure({ adapter: new ReactSixteenAdapter() });
  
    const history = ['/Proposalsearch'];
  
    test('Proposalsearch component should render as expected', () => {
      const KEY = 'loggedIn',
        VALUE = true;
      sessionStorage.setItem(KEY, VALUE);
      const component = shallow(<Proposalsearch history={history} />);
      const tree = component;
      expect(tree).toMatchSnapshot();
    })
  }));