<template>
  <footer class="footer">
    © {{ thisYear }}
    <i v-if="author" class="icon-user" />
    <a href="https://www.nst-fe.site/" target="_blank">
      {{ author }}
    </a>
    <br />
  </footer>
</template>

<script>
export default {
  computed: {
    thisYear() {
      return new Date().getFullYear();
    },
    author() {
      return this.$themeConfig.author || "";
    },
  },
};
</script>
