import React from 'react';
import * as Enzyme from 'enzyme';
import { shallow , mount} from 'enzyme';
import ReactSixteenAdapter  from 'enzyme-adapter-react-16';
import ProgrammeSearch from './ProgrammeSearch';
import { MemoryRouter } from "react-router-dom";

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

const sessionStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  };
  global.sessionStorage = sessionStorageMock;

  const { history } = {push:jest.fn()}

  test ('ProgrammeSearch component should render as expected', () => {
    
    const component = shallow(<ProgrammeSearch history={history}/>);
    const tree = component;
    expect(tree).toMatchSnapshot();
})
  
it('renders without crashing', () => {
    const div = shallow(
        <MemoryRouter>
            <ProgrammeSearch history={history} />
        </MemoryRouter>
        );
    console.log(div)
    
  });

