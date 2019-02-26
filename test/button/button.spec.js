import { renderToString } from '@vue/server-test-utils';
import { mount } from '@vue/test-utils';
import Demo from './demo.vue';
import sinon from 'sinon';

describe('Button', () => {
  it('renders correctly', () => {
    const render_to_string = renderToString(Demo);
    expect(render_to_string).toMatchSnapshot();
  });
  it('click correctly', () => {
    const spy = sinon.spy();
    const wrapper = mount(Demo, {
      propsData: {
        button_click: spy
      }
    });
    wrapper.find('button.normal').trigger('click');
    wrapper.find('button.outline').trigger('click');
    wrapper.find('button.icon').trigger('click');
    wrapper.find('button.inline').trigger('click');
    wrapper.find('button.disabled').trigger('click');
    expect(spy.calledWith('normal')).toBeTruthy();
    expect(spy.calledWith('outline')).toBeTruthy();
    expect(spy.calledWith('icon')).toBeTruthy();
    expect(spy.calledWith('inline')).toBeTruthy();
    expect(spy.calledWith('disabled')).toBeFalsy();
  });
});