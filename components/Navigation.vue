<template>
  <nav>
    <ul>
      <li v-for="(page, index) in data.mains" :key="index">
        {{ page }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    data: null,
  },
  data() {
    return {};
  },
};
</script>
