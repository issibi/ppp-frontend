<template>
  <article :class="'show-' + show">
    <main v-if="show && page">
      <h1 v-html="formatTitle(page.attributes.Title)"></h1>
      <div v-html="page.attributes.Content"></div>
    </main>
  </article>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    slug() {
    const parts = this.$route.fullPath.split("/").filter(part => part !== "");
    return parts.at(-1) || "agb"; // Default to "agb" if empty
  },
  },

  data() {
    return {
      title: "PPP ",
      show: false,
      restData: null,
      page: null, // Initialize page as null
    };
  },

  methods: {
    async fetchContents() {
      try {
        const getContact = await axios.get(
          "https://api.ppp.co.at/api/pages?filters[Slug][$eq]=" +
            this.slug +
            "&locale=" +
            this.$i18n.locale
        );
        if (getContact.data.data && getContact.data.data.length > 0) {
          this.page = getContact.data.data[0];
          this.title = "PPP - " + (this.page.attributes.Title ? this.page.attributes.Title.replace(/\/n/g, "") : "");
        } else {
          console.error("No data found for this slug");
        }
      } catch (error) {
        console.error("Error fetching page data:", error);
      }
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
    await this.fetchContents();
    document.body.removeAttribute("class");
    document.body.classList.add("page-kontakt");
    this.show = true;
  },

  head() {
    // Only return dynamic meta if page data is loaded
    return {
      title: this.page ? "PPP - " + (this.page.attributes.Title ? this.page.attributes.Title.replace(/\/n/g, "") : "") : "PPP",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page ? this.page.attributes.Title || "PPP" : "PPP",
        },
      ],
    };
  },
};
</script>