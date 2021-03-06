
import React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import UserAdmin from './UserAdmin'

describe('storage', () => [localStorage, sessionStorage].map(storage => {
    beforeEach(() => {
      storage.clear();
      jest.clearAllMocks();
    });
  
    Enzyme.configure({ adapter: new ReactSixteenAdapter() });
  
    const history = ['/UserAdmin'];
  
    test('UserAdmin component should render as expected', () => {
      const KEY = 'loggedIn',
        VALUE = true;
      sessionStorage.setItem(KEY, VALUE);
      const component = shallow(<UserAdmin history={history} />);
      const tree = component;
      expect(tree).toMatchSnapshot();
    })
  }));
  
  
  
  
//const history = ['/Main'];
//const spy = jest.spyOn(Main.prototype, 'componentDidMount');
//const wrapper = mount(<BrowserRouter><Main history={history} /></BrowserRouter>);
//console.log( wrapper.debug() )
//wrapper.instance().methodName();
//expect(spy).toHaveBeenCalled();