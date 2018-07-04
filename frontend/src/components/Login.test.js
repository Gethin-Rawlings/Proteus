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

