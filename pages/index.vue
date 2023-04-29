<template>
  <div>
    <pre>
      {{ mains }}
    </pre>
    <hr />
    <pre>
      {{ subs }}
    </pre>
    <hr />
    <pre>
    {{ pages }}
    </pre>
    <hr />
    <pre>
    {{ profiles }}
    </pre>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "IndexPage",
  data() {
    return {
      mains: [],
      subs: [],
      pages: [],
      profiles: [],
    };
  },
  methods: {
    async fetchContents() {
      const getMains = await axios.get(
        "https://strapi-g0fi.onrender.com/api/mains?populate=*"
      );
      const getSubs = await axios.get(
        "https://strapi-g0fi.onrender.com/api/subs?populate=*"
      );
      const getPages = await axios.get(
        "https://strapi-g0fi.onrender.com/api/pages?populate=*"
      );
      const getProfiles = await axios.get(
        "https://strapi-g0fi.onrender.com/api/profiles?populate=*"
      );
      this.mains = getMains.data;
      this.subs = getSubs.data;
      this.pages = getPages.data;
      this.profiles = getProfiles.data;
    },
    navigate(page) {
      this.active = page;
    },
  },
  async mounted() {
    await this.fetchContents();
  },
};
</script>
