<template>
  <nav>
    <ul>
      <li v-for="(category, index) in data.mains" :key="index">
        <NuxtLink :to="'/p/' + category.attributes.Slug">
          {{ category.attributes.Title }}
        </NuxtLink>
        <ul>
          <li v-for="(page, index) in pages(category.id)" :key="index">
            <NuxtLink :to="'/p/' + page.attributes.Slug">
              {{ page.attributes.Title }}
            </NuxtLink>
          </li>
          <li v-for="(sub, index) in subs(category.id)" :key="index">
            <NuxtLink :to="'/p/' + sub.attributes.Slug">
              {{ sub.attributes.Title }}
            </NuxtLink>
            <ul>
              <li v-for="(profiles, index) in profiles(sub.id)" :key="index">
                <NuxtLink :to="'/p/' + profiles.attributes.Slug">
                  {{ profiles.attributes.Profile_title }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
import axios from "axios";
export default {
  name: "Navigation",
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
      this.data.mains = getMains.data.data;
      this.data.subs = getSubs.data.data;
      this.data.pages = getPages.data.data;
      this.data.profiles = getProfiles.data.data;
    },
    pages(id) {
      let filtered_pages = this.data.pages;
      return filtered_pages.filter((e) => {
        return e.attributes.main_category.data.id === id;
      });
    },
    subs(id) {
      let filtered_subs = this.data.subs;
      return filtered_subs.filter((e) => {
        return e.attributes.main_category.data.id === id;
      });
    },
    profiles(id) {
      let filtered_profiles = this.data.profiles;
      return filtered_profiles.filter((e) => {
        return e.attributes.sub_category.data.id === id;
      });
    },
  },
  async mounted() {
    await this.fetchContents();
  },
};
</script>
