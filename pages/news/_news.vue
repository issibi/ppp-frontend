<template>
  <article :class="'show-' + show">
    <main v-if="show">
      <time>
        {{ new Date(newsDetail.attributes.createdAt).getFullYear() }}-{{
          new Date(newsDetail.attributes.createdAt).getMonth() + 1
        }}-{{ new Date(newsDetail.attributes.createdAt).getDate() }}
      </time>
      <h1 v-html="formatTitle(newsDetail.attributes.Title)"></h1>
      <div v-html="formatRte(newsDetail.attributes.Text)"></div>
      <p>
        <br />
        <NuxtLink to="/news/">&lt; Zurück</NuxtLink>
      </p>
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
  name: "news",
  layout: "news",
  data() {
    return {
      show: false,
      news: null,
    };
  },
  methods: {
    async fetchContents() {
      const getNews = await axios.get(
        "https://api.ppp.co.at/api/news?populate=*"
      );
      this.news = getNews.data.data;
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
    document.body.classList.add("page-news");
    this.show = true;
  },
  computed: {
    newsDetail() {
      if (this.news == null) return false;
      let filtered_news = this.news;
      let article = filtered_news.filter((e) => {
        return e.attributes.Slug === this.$route.params.news;
      });
      return article[0];
    },
  },
};
</script>
