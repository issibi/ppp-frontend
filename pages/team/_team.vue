<template>
  <article>
    <main>
      <div
        v-for="(sub, index) in subsFilter(lang == 'en' ? 2 : 8)"
        :key="index"
      >
        <h3>
          {{ sub.attributes.Title }}
        </h3>
        <ul>
          <li v-for="(profiles, index) in profilesFilter(sub.id)" :key="index">
            <NuxtLink
              :to="(lang == 'en' ? '/en/team-en/' : 'team/') + profiles.Slug"
            >
              {{ profiles.Profile_title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </main>
  </article>
</template>

<script>
import axios from "axios";

export default {
  name: "team",
  layout: "team",
  data() {
    return {
      lang: "de",
      title: "",
      show: false,
      subs: [],
      profiles: [],
    };
  },
  methods: {
    async fetchContents() {
      const getSubs = await axios.get(
        "https://api.ppp.co.at//api/subs?populate=*&locale=" + this.$i18n.locale
      );
      const getProfiles = await axios.get(
        "https://api.ppp.co.at/api/profiles?populate=*&locale=" +
          this.$i18n.locale
      );
      this.subs = getSubs.data.data;
      this.profiles = getProfiles.data.data;
    },
    subsFilter(id) {
      let filtered_subs = this.subs;
      return filtered_subs.filter((e) => {
        if (e.attributes.main_category.data !== null) {
          return e.attributes.main_category.data.id === id;
        } else {
          return false;
        }
      });
    },
    thisSlug() {},
    profilesFilter(id) {
      let filtered_profiles = this.profiles;
      // filter items
      let temp = filtered_profiles.filter((e) => {
        if (e.attributes.sub_category.data !== null) {
          return e.attributes.sub_category.data.id === id;
        }
      });
      // map and sort by ordernumber
      return temp
        .map((item) => {
          const container = {};
          container.Slug = item.attributes.Slug;
          container.Profile_title = item.attributes.Profile_title;
          container.order = item.attributes.order;
          return container;
        })
        .sort((a, b) => a.order > b.order);
    },
    formatTitle(str) {
      if (str !== null && str !== undefined) {
        return str.replace(/\/n/g, "<br />");
      } else {
        return "";
      }
    },
  },
  async mounted() {
    this.lang = this.$i18n.locale;
    await this.fetchContents();
    document.body.removeAttribute("class");
    document.body.classList.add("page-team-list");
    this.show = true;
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.title,
        },
      ],
    };
  },
};
</script>
