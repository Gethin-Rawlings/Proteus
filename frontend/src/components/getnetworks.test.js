import React from 'react';
import {shallow, mount} from 'enzyme';
import Getnetworks from './Getnetworks'

 test('getnetworks renders as expected' ,() => {
    const component = shallow(<Getnetworks />);
    const tree = component;
    expect(tree).toMatchSnapshot();
 })

 jest.mock("./apiCalls")
    it('should respond to change event and change the state of the networks drop down', done => {
      const spy = jest.spyOn(Getnetworks.prototype, 'handleChange')        
      const wrapper = mount(<Getnetworks />);
      
      setTimeout(()=>{
      wrapper.update();
      wrapper.find('.network').simulate('change', { target: { Getnetworks: 'data', value: 'blah@gmail.com' } });
      expect(wrapper.state('data')).toEqual('blah@gmail.com');
      expect(Getnetworks.prototype.data).toHaveBeenCalledTimes(1)
    } , done())
})
/*
const spy = jest.spyOn(Component.prototype, 'getData');
    mount(<Component />);
    expect(Component.prototype.getData).toHaveBeenCalledTimes(1)
*/