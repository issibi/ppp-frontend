<template>
  <div>
    <div class="grid">
      <NuxtLink
        :to="localePath({ name: 'kanzlei', params: { slug: kanzlei } })"
      >
        <span class="logo"></span>
        <p v-html="$t('ppp')"></p>
      </NuxtLink>
      <NuxtLink
        :to="localePath({ name: 'kanzlei', params: { slug: kanzlei } })"
        class="kanzlei"
      >
        <h2>{{ $t("the_firm") }}</h2>
        <p v-html="$t('kanzlei')"></p>
      </NuxtLink>
      <NuxtLink
        v-if="windowWidth"
        :to="localePath({ name: 'team', params: { slug: team } })"
        class="team"
      >
        <h2>{{ $t("the_team") }}</h2>
        <p v-html="$t('team')"></p>
      </NuxtLink>

      <NuxtLink
        v-if="!windowWidth"
        :to="localePath(lang == 'en' ? '/en/team-en' : '/team')"
        class="team"
      >
        <h2>{{ $t("the_team") }}</h2>
        <p v-html="$t('team')"></p>
      </NuxtLink>

      <NuxtLink
        :to="
          localePath({ name: 'rechtsgebiete', params: { slug: rechtsgebiete } })
        "
        class="rechtsgebiete"
      >
        <h2 v-html="$t('the_areas')"></h2>
        <p v-html="$t('rechtsgebiete')"></p>
      </NuxtLink>
      <!-- <NuxtLink to="/karriere/haltung" class="karriere"> -->
      <NuxtLink
        :to="localePath({ name: 'karriere', params: { slug: karriere } })"
        class="karriere"
      >
        <h2>{{ $t("the_career") }}</h2>
        <p v-html="$t('karriere')"></p>
      </NuxtLink>
      <!-- <NuxtLink to="/news/" class="news"> -->
      <NuxtLink :to="localePath({ name: 'news' })" class="news">
        <h2>{{ $t("the_news") }}</h2>
        <p>
          <span
            class="news-item"
            v-for="(article, index) in sortedNews"
            :key="index"
          >
            <NuxtLink :to="localePath('/news/' + article.attributes.Slug)">
              <span v-html="formatTitle(article.attributes.Title)"></span>
              <span
                class="dropdown-divider"
                v-if="index !== sortedNews.length - 1"
              >
                |
              </span>
            </NuxtLink>
          </span>
        </p>
      </NuxtLink>
    </div>
    <span class="ranking-text-mobile">international Rankings 2024 x</span>
    <div class="ranking-logos-container">
      <!-- <span class="ranking-text">international <br>Rankings 2024</span> -->
     
      <div class="logos">
        <span class="ranking-text">international <br />Rankings 2024</span>
        <!-- <img src="/assets/img/ranking/Ranking.png" width="200" height="100" alt="Logo 1"> -->
        <a
          href="https://chambers.com/law-firm/legalink-global-2:349671"
          target="_blank"
        >
          <img
            src="/assets/img/ranking/Global1.png"
            alt="Logo 2"
        /></a>
        <a
          href="https://chambers.com/law-firm/lawyers-associated-worldwide-law-global-2:349643"
          target="_blank"
        >
          <img
            src="/assets/img/ranking/Global2.png"
            alt="Logo 3"
        /></a>
        <a
          href="https://chambers.com/department/association-of-european-energy-and-climate-lawyers-projects-energy-global-2:996:80:4:22609781 "
          target="_blank"
        >
          <img src="/assets/img/ranking/Global3.png" width="200" alt="Logo 4"
        /></a>
        <a
          href="https://www.lawyersworldwide.com/"
          target="_blank"
        >
          <img src="/assets/img/ranking/Law.png" width="200" alt="Logo 5"
        /></a>
        <a
          href="https://energylawgroup.eu/"
          target="_blank"
        >
          <img src="/assets/img/ranking/Energy.png" width="200" alt="Logo 6"
        /></a>
        <a
          href="https://www.legalink.ch/"
          target="_blank"
        >
          <img src="/assets/img/ranking/Legalink.png" width="200" alt="Logo 7"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "IndexPage",
  layout: "start",

  data() {
    return {
      lang: "de",
      windowWidth: window.innerWidth > 768,
      title: "",
      show: false,
      news: null,
    };
  },

  computed: {
    kanzlei() {
      const { locale } = this.$i18n;
      return locale === "de" ? "ueber-uns" : "about-us";
    },

    team() {
      const { locale } = this.$i18n;
      return locale === "de"
        ? "dr-peter-m-polak-ll-m"
        : "dr-peter-m-polak-ll-m-en";
    },

    rechtsgebiete() {
      const { locale } = this.$i18n;
      return locale === "de"
        ? "gesellschaftsrecht-mergers-and-acquisitions"
        : "corporate-law-n-mergers-and-acquisitions";
    },

    karriere() {
      const { locale } = this.$i18n;
      return locale === "de" ? "haltung" : "holding";
    },

    sortedNews: function () {
      if (this.news) {
        var sorted_list = this.news.sort(
          (b, a) => new Date(a.attributes.Datum) - new Date(b.attributes.Datum)
        );
        return sorted_list.slice(0, 3);
      }
    },
  },

  methods: {
    async fetchContents() {
      const getNews = await axios.get(
        "https://api.ppp.co.at/api/news?populate=*&locale=" + this.$i18n.locale
      );
      this.news = getNews.data.data;
    },

    formatTitle(str) {
      if (str !== null && str !== undefined) {
        var titel_str = str.replace(/\/n/g, "<br />");
        // https://stackoverflow.com/questions/5454235/shorten-string-without-cutting-words-in-javascript
        return titel_str.replace(/^(.{40}[^\s]*).*/, "$1") + " ...";
      } else {
        return "";
      }
    },
  },
  async mounted() {
    await this.fetchContents();
    this.lang = this.$i18n.locale;
    this.show = true;
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth > 768;
    });
  },
};
</script>
