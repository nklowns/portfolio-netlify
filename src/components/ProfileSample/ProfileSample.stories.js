import ProfileSample from '@/components/ProfileSample/ProfileSample.vue'
import cloudlessv from '@/assets/cloudlessv-profile.webp'

export default {
  title: 'Design System/ProfileSample',
  component: ProfileSample,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/vue/configure/story-layout
    layout: 'fullscreen',
  },
}

const ProfileSampleTemplate = {
  render: args => ({
    components: { ProfileSample },
    setup() {
      return { args }
    },
    template: '<ProfileSample v-bind="args" />',
  }),
}

export const Primary = {
  ...ProfileSampleTemplate,
  args: {
    profile: {
      image: cloudlessv,
      name: 'Cloudless Lourenço',
      details: {
        title:
          'Mid Web Developer Vue.js, Storybook, Desenvolvedor Front-end @COMEIA',
        subtitle: 'QA Automation Cypress, Jest, Analista de Testes',
      },
      socialmedia: [
        {
          id: 'linkedin',
          url: `#`,
          icon: 'https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white',
          target: '_self',
        },
        {
          id: 'github',
          url: '#',
          icon: 'https://img.shields.io/badge/-Github-blue?style=flat-square&logo=github&logoColor=white',
          target: '_self',
        },
        {
          id: 'storybook',
          url: '#',
          icon: 'https://img.shields.io/badge/-Storybook-blue?style=flat-square&logo=storybook&logoColor=white',
          target: '_self',
        },
      ],
    },
  },
}
