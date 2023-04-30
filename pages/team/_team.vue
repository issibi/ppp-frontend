<template>
  <article>
    <main>
      <div v-if="currentRouteName">
        <div
          v-html="formatRte(currentRouteName[0].attributes.Basic_info)"
        ></div>
        <br />
        {{ currentRouteName[0].attributes.Telephone }}<br />
        {{ currentRouteName[0].attributes.Email }}<br />
        <br />
        <div
          v-html="formatRte(currentRouteName[0].attributes.Introduction)"
        ></div>
        <div v-html="formatRte(currentRouteName[0].attributes.CV)"></div>
        <div
          v-html="formatRte(currentRouteName[0].attributes.Publications)"
        ></div>
      </div>
    </main>
    <aside></aside>
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
  name: "team",
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
        "https://api.ppp.co.at//api/pages?populate=*"
      );
      const getProfiles = await axios.get(
        "https://api.ppp.co.at//api/profiles?populate=*"
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
      if (this.data.profiles == null) return false;
      let filtered_pages = this.data.profiles;
      return filtered_pages.filter((e) => {
        return e.attributes.Slug === this.$route.params.team;
      });
    },
  },
};
</script>
