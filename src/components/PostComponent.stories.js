import PostComponent from './PostComponent.vue'

export default {
  title: 'Components/PostComponent',
  component: PostComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    imageSrc: { control: 'text', description: 'The post image URL.' },
    imageAlt: { control: 'text', description: 'Alternative text describing the image.' },
    headline: { control: 'text', description: 'The linked post headline.' },
    href: { control: 'text', description: 'The destination of the image and headline link.' },
  },
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=960&q=80',
    imageAlt: 'A rugged mountain peak beneath a cloudy sky',
    headline: 'A fresh perspective from the mountains',
    href: 'https://en.wikipedia.org/wiki/Mountain',
  },
  render: (args) => ({
    components: { PostComponent },
    setup() {
      return { args }
    },
    template: '<PostComponent v-bind="args" />',
  }),
}

export const Default = {}

export const LongHeadline = {
  args: {
    headline: 'Finding a fresh perspective: a journey through the mountains and the landscapes that inspire us',
  },
}

export const Mobile = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
}