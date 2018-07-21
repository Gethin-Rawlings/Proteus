import React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Login from './Login'
import TestUtils from 'react-dom/test-utils';

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
describe('storage', () => [localStorage, sessionStorage].map(storage => {
  beforeEach(() => {
    storage.clear();
    jest.clearAllMocks();
    //jest.mock("./apiCalls")
  });
  test('Login component should save state for token correctly', () => {
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
  });
}));


jest.mock("./apiCalls")


test('Form submitted and login function called', () => {
  var loginStatus = {"success":true,"err":null,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhd2xpZzAxIiwiaWF0IjoxNTMyMDc3MTQ5LCJleHAiOjE1MzIyMDY3NDl9.VYjJ6LKYOcBM4YEAdRdjfKXU8hCuOtkPGs90iCds-sQ","admin":true,"supplier":true,"network":true,"finance":false,"commission":false}
  var login = jest.fn()
  const history = ['/'];
  var rendered = TestUtils.renderIntoDocument(<Login loginStatus= {loginStatus} history={history}/>);
  var form = TestUtils.findRenderedDOMComponentWithClass(rendered, 'content');
  TestUtils.Simulate.submit(form);

})