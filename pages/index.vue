<template>
  <div class="grid">
    <NuxtLink to="/kanzlei/ueber-uns" class="">
      <span class="logo"></span>
      <p>
        Als Wirtschaftsanwälte haben wir vieles erreicht. Jetzt wollen wir
        weitergeben, was uns erfolgreich gemacht hat.
      </p>
    </NuxtLink>
    <NuxtLink to="/kanzlei/ueber-uns" class="kanzlei">
      <h2>KANZLEI</h2>
      <p>
        Wer wir sind, sieht man an denen, die uns ihr Vertrauen schenken über
        viele Jahre und Jahrzehnte.
      </p>
    </NuxtLink>
    <NuxtLink to="/team/dr-peter-m-polak-ll-m" class="team">
      <h2>TEAM</h2>
      <p>
        Es teamworkt. Horizontal wie vertikal: wir hieven einander höher. Die
        Gedankenbälle fliegen wie beim Vierertischtennis.
      </p>
    </NuxtLink>
    <NuxtLink
      to="/rechtsgebiete/gesellschaftsrecht-mergers-and-acquisitions"
      class="rechtsgebiete"
    >
      <h2>RECHTSGEBIETE</h2>
      <p>
        Spezialistentum beginnt aus Zufall, wächst durch Erfahrung und endet in
        nicht immer nachvollziehbarer Begeisterung.
      </p>
    </NuxtLink>
    <NuxtLink to="/karriere/haltung" class="karriere">
      <h2>KARRIERE</h2>
      <p>
        Egal wo Sie „einmal hin wollen“ – wir sind die Kaderschmiede für die
        Top- Wirtschaftsanwält*innen von Morgen.
      </p>
    </NuxtLink>
    <NuxtLink to="/news/" class="news">
      <h2>NEWS</h2>
      <p>
        <span
          class="news-item"
          v-for="(article, index) in sortedNews"
          :key="index"
        >
          <NuxtLink :to="'/news/' + article.attributes.Slug">
            <span v-html="formatTitle(article.attributes.Title)"></span> /
          </NuxtLink>
        </span>
      </p>
      <!-- 3 Veranstaltungen im Mai / VWGH Entscheidung / 2 neue Mitarbeiter*innen /
      7. Energy Law Event in Paris -->
    </NuxtLink>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "IndexPage",
  layout: "start",
  data() {
    return {
      title: "",
      show: false,
      news: null,
    };
  },
  computed: {
    sortedNews: function () {
      if (this.news) {
        return this.news.sort(
          (a, b) =>
            new Date(a.attributes.createdAt) - new Date(b.attributes.createdAt)
        );
      }
    },
  },

  methods: {
    async fetchContents() {
      const getNews = await axios.get(
        "https://api.ppp.co.at/api/news?populate=*"
      );
      this.news = getNews.data.data;
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
    this.show = true;
  },
};
</script>
