import React from 'react';
import { shallow } from 'enzyme'
// import toJSON from 'enzyme-to-json'
// react-test-renderer
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
    // console.log(renderer.getRenderOutput())
    const wrapper = shallow(<Header />)
    // expect(wrapper.find('h1').text()).toBe('Expensify')
    expect(wrapper).toMatchSnapshot()
})

