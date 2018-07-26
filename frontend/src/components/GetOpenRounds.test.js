import React from 'react';
import {shallow, mount} from 'enzyme';


import GetOpenRounds from './GetOpenRounds'

jest.mock("./apiCalls")
 test('GetOpenRounds renders as expected' ,() => {
    const component = shallow(<GetOpenRounds />);
    const tree = component;
    expect(tree).toMatchSnapshot();
 })


 jest.mock("./apiCalls")
    it('should respond to change event and change the state of the networks drop down', done => {        
      const wrapper = mount(<GetOpenRounds />);
      const data =  jest.fn()
      setTimeout(()=>{
      wrapper.update();
      console.log(wrapper.debug());
      wrapper.find('.network').simulate('change', { target: { Getnetworks: 'data', value: 'blah@gmail.com' } });
      expect(wrapper.state('data')).toEqual('blah@gmail.com');
    } , done())
})