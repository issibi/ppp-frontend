<template>
  <nav>
    <ul>
      <li v-for="(page, index) in data" :key="page.id">
        <a
          :href="'#' + convert(page.attributes.Title)"
          :title="page.attributes.Title"
          @click="navigateRoot(page.attributes.Title, index)"
          :class="{ active: activeRoot === index }"
        >
          {{ page.attributes.Title }}
        </a>
        <ul v-if="page.attributes.content_pages.data.length > 0">
          <li
            v-for="(subpage, index) in page.attributes.content_pages.data"
            :key="index"
          >
            <a
              :href="
                '#' +
                convert(page.attributes.Title) +
                '/' +
                convert(subpage.attributes.Title)
              "
              @click="navigate(subpage.attributes.Title, index)"
              :class="{ active: activeIndex === index }"
            >
              {{ subpage.attributes.Title }}
            </a>
          </li>
        </ul>
        <ul v-if="page.attributes.profile_pages.data.length > 0">
          <li
            v-for="(profilepage, index) in page.attributes.profile_pages.data"
            :key="index"
          >
            <a
              :href="
                '#' +
                convert(page.attributes.Title) +
                '/' +
                convert(profilepage.attributes.Name)
              "
            >
              {{ profilepage.attributes.Name }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>
