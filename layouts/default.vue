<template>
  <div class="page">
    <Header />
    <Navigation />
    <div>
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {};
  },
  methods: {
    toggleMenu() {
      document.body.classList.toggle("open");
    },
  },
}
</script>
