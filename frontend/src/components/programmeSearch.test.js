import React from 'react';
import * as Enzyme from 'enzyme';
import { shallow , mount } from 'enzyme';
import ReactSixteenAdapter  from 'enzyme-adapter-react-16';
import ProgrammeSearch from './ProgrammeSearch';

describe('storage', () =>
  [localStorage, sessionStorage].map(storage => {
    beforeEach(() => {
      storage.clear();
      jest.clearAllMocks();
    });

Enzyme.configure({ adapter: new ReactSixteenAdapter() });


  const  history = ['/ProgrammeSearch'];

  test ('ProgrammeSearch component should render as expected', () => {
    const KEY = 'loggedIn',
    VALUE = true;
    sessionStorage.setItem(KEY, VALUE);
    const component = shallow(<ProgrammeSearch history={history}/>);
    const tree = component;
    expect(tree).toMatchSnapshot();
})
  
  it('Renders a text box for username entry', () => {
    const KEY = 'loggedIn',
        VALUE = true;
        sessionStorage.setItem(KEY, VALUE);
    const textBox = shallow(<ProgrammeSearch history={history} /> );
    expect(textBox.find('.main')).toHaveLength(1);
  });
}));

