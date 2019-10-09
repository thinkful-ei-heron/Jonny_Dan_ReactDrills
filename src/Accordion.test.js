import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Accordion from './Accordion';

configure({ adapter: new Adapter() });

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!'
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?'
  }
];

describe('Accordion', () => {
  it('renders an empty li', () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders no sections', () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('opens a clicked section', () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('only opens last sections when multiple clicks', () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    wrapper
      .find('button')
      .at(2)
      .simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
