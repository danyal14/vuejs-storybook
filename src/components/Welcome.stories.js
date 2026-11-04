import Welcome from './Welcome.vue'

export default {
  title: 'Components/Welcome',
  component: Welcome,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'The main welcome heading.' },
    description: { control: 'text', description: 'The introductory message below the heading.' },
  },
  render: (args) => ({
    components: { Welcome },
    setup() {
      return { args }
    },
    template: '<Welcome v-bind="args" />',
  }),
}

export const Default = {}

export const CustomMessage = {
  args: {
    title: 'Hello, builders.',
    description: 'Your components, your ideas, your next project. This is where it all starts.',
  },
}

export const Mobile = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
}