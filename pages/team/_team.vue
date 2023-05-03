<template>
  <article>
    <main>
      <div v-if="!showCV && !showPub && currentRouteName">
        <div
          v-html="formatRte(currentRouteName[0].attributes.Basic_info)"
        ></div>
        <br />
        {{ currentRouteName[0].attributes.Telephone }}<br />
        {{ currentRouteName[0].attributes.Email }}<br />
        <br />
      </div>
      <img
        v-if="
          currentRouteName &&
          currentRouteName[0].attributes.Profile_image.data !== null
        "
        class="profile"
        :src="
          'https://api.ppp.co.at/' +
          currentRouteName[0].attributes.Profile_image.data.attributes.url
        "
        alt=""
      />
      <div v-if="!showCV && !showPub && currentRouteName">
        <div
          v-html="formatRte(currentRouteName[0].attributes.Introduction)"
        ></div>
      </div>
      <a
        v-if="showCV || showPub"
        class="close"
        @click="(showCV = false), (showPub = false)"
      >
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_0_1"
            style="mask-type: luminance"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="24"
            height="24"
          >
            <path
              d="M25.1437 2.14453H2.1543V25.1339H25.1437V2.14453Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_0_1)">
            <path
              d="M25.1437 2.14453H2.1543V25.1339H25.1437V2.14453Z"
              fill="#B1AA8D"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.883832 28.9307L28.9362 0.878295L26.4095 -1.64844L-1.6429 26.4039L0.883832 28.9307Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.9392 26.4055L0.886779 -1.64685L-1.63995 0.879883L26.4124 28.9323L28.9392 26.4055Z"
              fill="white"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.420959 0.412598H26.877V26.8686H0.420959V0.412598ZM3.88763 3.87927V23.402H23.4103V3.87927H3.88763Z"
            fill="#B1AA8D"
          />
        </svg>
      </a>
      <div v-if="showCV">
        <h1>WERDEGANG</h1>
        <div v-html="formatRte(currentRouteName[0].attributes.CV)"></div>
      </div>
      <div v-if="showPub">
        <h1>PUBLIKATIONEN</h1>
        <div
          v-html="formatRte(currentRouteName[0].attributes.Publications)"
        ></div>
      </div>
    </main>
    <aside>
      <div v-if="(showCV || showPub) && currentRouteName">
        <div
          v-html="formatRte(currentRouteName[0].attributes.Basic_info)"
        ></div>
        <br />
        {{ currentRouteName[0].attributes.Telephone }}<br />
        {{ currentRouteName[0].attributes.Email }}<br />
      </div>
      <div v-else>
        <br />
        <a
          class="switch"
          v-if="currentRouteName && currentRouteName[0].attributes.CV"
          @click="showCV = !showCV"
          >WERDEGANG ></a
        ><br />
        <br />
        <a
          class="switch"
          v-if="currentRouteName && currentRouteName[0].attributes.Publications"
          @click="showPub = !showPub"
          >PUBLIKATIONEN ></a
        >
      </div>
    </aside>
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
  layout: "team",
  data() {
    return {
      showCV: false,
      showPub: false,
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
