<template>
  <section class="profile e-content h-card">
    <v-avatar size="200">
      <v-img
        class="profile-image u-photo"
        src="https://media.licdn.com/dms/image/D4D03AQHet1Vutm4voQ/profile-displayphoto-shrink_400_400/0/1672851650608?e=1678320000&v=beta&t=T0lwIQk3YPP_UhUCA3jNoYE9DrKUELb37u15IGeXrx4"
        alt="@cloudlessv portrait"
      />
    </v-avatar>

    <div class="profile-content">
      <h2 class="profile-name" v-text="'Cloudless Lourenço'" />
      <p
        v-text="
          'Mid Web Developer Vue.js, Storybook, Desenvolvedor Front-end @COMEIA'
        "
      />
      <p v-text="'QA Automation Cypress, Jest, Analista de Testes'" />
    </div>
    <div class="profile-footer">
      <a
        class="u-url linkedin"
        href="https://www.linkedin.com/in/cloudlessv/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-img
          v-ripple
          src="https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white"
          alt="Linkedin"
          width="75"
          height="20"
        />
      </a>
      <a
        class="u-url github"
        href="https://github.com/nklowns/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-img
          v-ripple
          src="https://img.shields.io/badge/-Github-blue?style=flat-square&logo=github&logoColor=white"
          alt="Github"
          width="75"
          height="20"
        />
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.profile {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;

  &-image {
    border-radius: 50%;
    border: 0.25rem solid;
    border-color: rgba(
      var(--v-theme-on-background),
      var(--v-high-emphasis-opacity)
    );
  }

  &-content {
    text-align: center;
  }

  &-footer {
    display: flex;
    gap: 1rem;
  }
}
</style>
