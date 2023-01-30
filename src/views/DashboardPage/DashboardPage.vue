<script>
import ProfileSample from '@/components/ProfileSample/ProfileSample.vue'

export default {
  name: 'DashboardPage',
  components: {
    ProfileSample,
  },
  data() {
    return {
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
            url: `https://www.linkedin.com/in/cloudlessv/`,
            icon: 'https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white',
          },
          {
            id: 'github',
            url: 'https://github.com/nklowns/',
            icon: 'https://img.shields.io/badge/-Github-blue?style=flat-square&logo=github&logoColor=white',
          },
          {
            id: 'storybook',
            url: '/storybook/',
            icon: 'https://img.shields.io/badge/-Storybook-blue?style=flat-square&logo=storybook&logoColor=white',
          },
        ],
      },
    }
  },
}
</script>

<template>
  <ProfileSample :profile="profile" />
</template>
