<template>
  <article :class="'show-' + show">
    <main v-if="show">
      <h1 v-html="formatTitle(contact.attributes.Title)"></h1>
      <div v-html="formatRte(contact.attributes.Content)"></div>
    </main>
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
  name: "kontakt",
  data() {
    return {
      show: false,
      contact: null,
    };
  },
  methods: {
    async fetchContents() {
      const getContact = await axios.get("https://api.ppp.co.at//api/pages/22");
      this.contact = getContact.data.data;
    },
    formatRte(str) {
      if (str !== null && str !== undefined) {
        return marked(str);
      } else {
        return "";
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
};
</script>
