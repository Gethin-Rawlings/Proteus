import React from 'react';
import * as Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Login from './Login'
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('Login Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Login />).exists(<form className='login'></form>)).toBe(true)
   })
  it('renders a username input', () => {
    expect(shallow(<Login />).exists(<input  name="username"></input>)).toBe(true)
   })
  it('renders a password input', () => {
    expect(shallow(<Login />).exists(<input  name="password"></input>)).toBe(true)
   })
   it('renders a password input', () => {
    expect(shallow(<Login />).exists(<button id="loginbutton"></button>)).toBe(true)
   })
})