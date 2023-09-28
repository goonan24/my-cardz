import { html } from 'lit';
import '../src/my-cardz.js';

export default {
  title: 'MyCardz',
  component: 'my-cardz',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <my-cardz
      style="--my-cardz-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </my-cardz>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
