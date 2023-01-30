import ProfileSample from '@/components/ProfileSample/ProfileSample.vue'

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
      image:
        'https://media.licdn.com/dms/image/D4D03AQHet1Vutm4voQ/profile-displayphoto-shrink_400_400/0/1672851650608?e=1678320000&v=beta&t=T0lwIQk3YPP_UhUCA3jNoYE9DrKUELb37u15IGeXrx4',
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
