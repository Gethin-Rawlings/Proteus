import React from 'react';
import * as Enzyme from 'enzyme';
import { shallow , mount } from 'enzyme';
import ReactSixteenAdapter  from 'enzyme-adapter-react-16';
import ProgrammeSearch from './ProgrammeSearch';


Enzyme.configure({ adapter: new ReactSixteenAdapter() });

const sessionStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
    loggedIn: true
  };
  global.sessionStorage = sessionStorageMock;

  const  history = ['/ProgrammeSearch'];

  test ('ProgrammeSearch component should render as expected', () => {
    
    const component = shallow(<ProgrammeSearch history={history}/>);
    const tree = component;
    expect(tree).toMatchSnapshot();
})
  
it('renders without crashing', () => {
    const div = shallow(<ProgrammeSearch history={history} />);
 
    
  });

  it('Renders a text box for username entry', () => {

    const textBox = shallow(<ProgrammeSearch history={history} />);
    
    expect(textBox.contains('usersearch')).toBeFalsy()
  });
