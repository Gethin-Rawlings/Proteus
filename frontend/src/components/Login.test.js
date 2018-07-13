import React from 'react';
import * as Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Login from './Login'
import ReactDOM from 'react-dom';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

test('Login component should render as expected', () => {
    const component = shallow(<Login />)
    const tree = component;
    expect(tree).toMatchSnapshot();
})
describe('Login Component', () => {
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
        expect(shallow(<Login />).find('form.content').exists()).toBe(true)
    })
})
describe('user id input', () => {
    it('should respond to change event and change the state of the Login Component', () => {
        const wrapper = shallow(<Login />);
        wrapper.find('.username').simulate('change', { target: { name: 'username', value: 'blah@gmail.com' } });
        expect(wrapper.state('username')).toEqual('blah@gmail.com');
    })
})
describe('Password input', () => {
    it('should respond to change event and change the state of the Login Component', () => {
        const wrapper = shallow(<Login />);
        wrapper.find('.password').simulate('change', { target: { name: 'password', value: 'cats' } });
        expect(wrapper.state('password')).toEqual('cats');
    })
})
/*
const mockFn = jest.fn();
it('should call mock function when button is clicked', () => {
  const tree = shallow(
    <Login name='submit' handleClick={mockFn} />
  );
  tree.simulate('click');
  expect(mockFn).toHaveBeenCalled();
});
*/


describe('storage', () => [localStorage, sessionStorage].map(storage => {
    beforeEach(() => {
      storage.clear();
      jest.clearAllMocks();
      jest.mock("./apiCalls")
    });
    describe('User signin', () => {
        it('should fail if no credentials are provided', () => {
            
            const fakeEvent = { preventDefault: () => console.log('preventDefault') };
            const loginComponent = shallow(<Login />);
            expect(loginComponent.find('.content').length).toBe(1);
            loginComponent.find('.content').simulate('submit', fakeEvent);
            //expect(loginComponent.find(Notification).length).toBe(0);
        });
    });
    const td = wrapper.find('td').first();
    expect(
      td.text()
    ).toEqual('Brave New World');

   /* test('Login component should save state for token correctly', () => {
        const KEY = 'token',
          VALUE = '1234567890';
        sessionStorage.setItem(KEY, VALUE);
        expect(sessionStorage.setItem).toHaveBeenCalledTimes(1);
      });
      test('Login component should save state for loggedIn correctly', () => {
        const KEY = 'loggedIn',
          VALUE = '1234567890';
        sessionStorage.setItem(KEY, VALUE);
        expect(sessionStorage.setItem).toHaveBeenCalledTimes(1);
      });
      test('Login component should save state for supplier correctly', () => {
        const KEY = 'supplier',
          VALUE = '1234567890';
        sessionStorage.setItem(KEY, VALUE);
        expect(sessionStorage.setItem).toHaveBeenCalledTimes(1);
      });
      test('Login component should save state for network correctly', () => {
        const KEY = 'network',
          VALUE = '1234567890';
        sessionStorage.setItem(KEY, VALUE);
        expect(sessionStorage.setItem).toHaveBeenCalledTimes(1);
      });
      test('Login component should save state for admin correctly', () => {
        const KEY = 'admin',
          VALUE = '1234567890';
        sessionStorage.setItem(KEY, VALUE);
        expect(sessionStorage.setItem).toHaveBeenCalledTimes(1);
      });
      test('Login component should save state for finance correctly', () => {
        const KEY = 'finance',
          VALUE = '1234567890';
        sessionStorage.setItem(KEY, VALUE);
        expect(sessionStorage.setItem).toHaveBeenCalledTimes(1);
      });
      test('Login component should save state for commission correctly', () => {
        const KEY = 'commission',
          VALUE = '1234567890';
        sessionStorage.setItem(KEY, VALUE);
        expect(sessionStorage.setItem).toHaveBeenCalledTimes(1);
      }); */
  }));

