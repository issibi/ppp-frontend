<template>
  <div>
    <Navigation :data="data" />
    <pre>
      {{ data.mains }}
    </pre>
    <hr />
    <pre>
      {{ data.subs }}
    </pre>
    <hr />
    <pre>
      {{ data.pages }}
    </pre>
    <hr />
    <pre>
      {{ data.profiles }}
    </pre>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "IndexPage",
  data() {
    return {
      data: {
        mains: [],
        subs: [],
        pages: [],
        profiles: [],
      },
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
      this.data.mains = getMains.data;
      this.data.subs = getSubs.data;
      this.data.pages = getPages.data;
      this.data.profiles = getProfiles.data;
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
