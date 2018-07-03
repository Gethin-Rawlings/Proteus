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

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
});

test('Login component should render as expected', () => {
    const component = mount(<Login />)
    expect(component.find(Login).length).toBe(1)
})
