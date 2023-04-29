<template>
  <div>Some content {{ currentRouteName }}</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {
        pages: [],
        profiles: [],
      },
    };
  },
  methods: {
    async fetchContents() {
      const getPages = await axios.get(
        "https://strapi-g0fi.onrender.com/api/pages?populate=*"
      );
      const getProfiles = await axios.get(
        "https://strapi-g0fi.onrender.com/api/profiles?populate=*"
      );
      this.data.pages = getPages.data.data;
      this.data.profiles = getProfiles.data.data;
    },
  },
  async mounted() {
    await this.fetchContents();
  },
  computed: {
    currentRouteName() {
      let filtered_pages = this.data.pages.concat(this.data.profiles);
      return filtered_pages.filter((e) => {
        return e.attributes.Slug === this.$route.params.p;
      });
    },
  },
};
</script>
