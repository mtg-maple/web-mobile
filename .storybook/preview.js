import { addParameters } from '@storybook/react'; // <- or your storybook framework
import { themes } from '@storybook/theming';

addParameters({
  backgrounds: [
    { name: 'maple', value: '#1E1F20', default: true },
    { name: 'twitter', value: '#00aced'},
    { name: 'facebook', value: '#3b5998' },
  ],
  options: {
    theme: themes.dark,
  },
});