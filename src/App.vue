<template>
  <section class="profile e-content h-card">
    <img
      class="profile-image u-photo"
      src="https://media.licdn.com/dms/image/D4D03AQHet1Vutm4voQ/profile-displayphoto-shrink_400_400/0/1672851650608?e=1678320000&v=beta&t=T0lwIQk3YPP_UhUCA3jNoYE9DrKUELb37u15IGeXrx4"
      alt="@cloudlessv portrait"
    />
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
        <img
          src="https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white"
          alt="Linkedin"
        />
      </a>
      <a
        class="u-url github"
        href="https://github.com/nklowns/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.shields.io/badge/-Github-blue?style=flat-square&logo=github&logoColor=white"
          alt="Github"
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
    max-width: calc(12.5rem + 0.25rem);
    max-height: calc(12.5rem + 0.25rem);
    width: 100%;
    border-radius: 50%;
    border: 0.25rem solid;
  }

  &-content {
    text-align: center;

    p {
      font-size: 1rem;
      line-height: 1.25rem;
    }

    h2 {
      font-size: 1.25rem;
      line-height: 1.5rem;
    }

    * {
      margin: 0;
    }
  }

  &-footer {
    display: flex;
    gap: 1rem;
  }
}
</style>
