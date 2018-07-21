import React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import ProgrammeSearch from './ProgrammeSearch';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter } from "react-router-dom";


describe('storage', () => [localStorage, sessionStorage].map(storage => {
  beforeEach(() => {
    storage.clear();
    jest.clearAllMocks();
  });

  Enzyme.configure({ adapter: new ReactSixteenAdapter() });

  const history = ['/ProgrammeSearch'];

  test('ProgrammeSearch component should render as expected', () => {
    const KEY = 'loggedIn',
      VALUE = true;
    sessionStorage.setItem(KEY, VALUE);
    const component = shallow(<ProgrammeSearch history={history} />);
    const tree = component;
    expect(tree).toMatchSnapshot();
  })

  it('Renders a text box for username entry', () => {
    const KEY = 'loggedIn',
      VALUE = true;
    sessionStorage.setItem(KEY, VALUE);
    const textBox = shallow(<ProgrammeSearch history={history} />);
    expect(textBox.find('.main')).toHaveLength(1);
  });
}));

describe('ProgrammeSearch Component', () => {
  // make our assertion and what we expect to happen 
  it('should render without throwing an error', () => {
    expect(shallow(<ProgrammeSearch />).find('form.programmeForm').exists()).toBe(true)
  })
})

describe('user id input', () => {
  it('should respond to change event and change the state of the Login Component', () => {
    const wrapper = shallow(<ProgrammeSearch />);
    wrapper.find('.usersearch').simulate('change', { target: { name: 'username', value: 'blah@gmail.com' } });
    expect(wrapper.state('username')).toEqual('blah@gmail.com');
  })
})


jest.mock("./apiCalls")

test('Form submitted and search function called', () => {
  const history = ['/ProgrammeSearch'];
  var rendered = TestUtils.renderIntoDocument(<BrowserRouter><ProgrammeSearch /></BrowserRouter>);
  var form = TestUtils.findRenderedDOMComponentWithClass(rendered, 'programmeForm');
})


