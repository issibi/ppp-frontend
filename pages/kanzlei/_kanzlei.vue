<template>
  <article v-if="currentRouteName">
    <main>
      <h1>{{ currentRouteName[0].attributes.Title }}</h1>
      <div v-html="formatRte(currentRouteName[0].attributes.Content)"></div>

      <div
        v-if="false"
        v-html="formatRte(currentRouteName[0].attributes.Examples)"
      ></div>
      <div
        v-if="false"
        v-html="formatRte(currentRouteName[0].attributes.Publications)"
      ></div>
    </main>
    <img
      v-if="currentRouteName[0].attributes.Image_desktop.data !== null"
      class="background"
      :src="
        'https://strapi-g0fi.onrender.com' +
        currentRouteName[0].attributes.Image_desktop.data.attributes.url
      "
      alt=""
    />
    <aside>
      <div v-html="formatRte(currentRouteName[0].attributes.Hashtags)"></div>
    </aside>
  </article>
</template>

<script>
import axios from "axios";
import { marked } from "marked";
marked.use({
  gfm: true,
  breaks: true,
});
export default {
  name: "kanzlei",
  data() {
    return {
      data: {
        pages: null,
        profiles: null,
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
    formatRte(str) {
      if (str !== null && str !== undefined) {
        return marked(str);
      } else {
        return "";
      }
    },
  },
  async mounted() {
    await this.fetchContents();
  },
  computed: {
    currentRouteName() {
      if (this.data.pages == null) return false;
      let filtered_pages = this.data.pages;
      return filtered_pages.filter((e) => {
        return e.attributes.Slug === this.$route.params.kanzlei;
      });
    },
  },
};
</script>
