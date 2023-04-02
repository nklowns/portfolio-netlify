<script>
import ProfileSample from '@/components/ProfileSample/ProfileSample.vue'
import cloudlessv from '@/assets/cloudlessv-profile.webp'

export default {
  name: 'DashboardPage',
  components: {
    ProfileSample,
  },
  data() {
    return {
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
