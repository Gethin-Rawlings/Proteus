import React from 'react';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';

import GetNetworks from './GetNetworks'


it('calls componentDidMount() lifecycle method', () => {
    const componentDidMountSpy = await spy(GetNetworks.prototype, 'componentDidMount');
    const wrapper = mount(<GetNetworks />);

    expect(GetNetworks.prototype.componentDidMount).toHaveBeenCalled();

    componentDidMountSpy.restore();
});