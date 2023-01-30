<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <section class="profile e-content h-card">
    <v-avatar size="200">
      <v-img
        class="profile-image u-photo"
        :src="profile.image"
        alt="@cloudlessv portrait"
      />
    </v-avatar>

    <div class="profile-content">
      <h2 class="profile-name" v-text="profile.name" />
      <p v-text="profile.details.title" />
      <p v-text="profile.details.subtitle" />
    </div>
    <div class="profile-footer">
      <template v-for="social of profile.socialmedia" :key="social.id">
        <a
          class="u-url"
          :class="social.id"
          :href="social.url"
          :target="social.target ?? '_blank'"
          rel="noopener noreferrer"
        >
          <v-img
            v-ripple
            :src="social.icon"
            :alt="social.id"
            width="auto"
            height="20"
          />
        </a>
      </template>
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
