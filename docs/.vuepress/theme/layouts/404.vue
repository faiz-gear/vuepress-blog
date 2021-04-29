<template>
  <div class="theme-container vuepress-theme-simple">
    <header class="header">
      <router-link
        to="/"
        :title="$description"
        class="site-name"
      >
        {{ $site.title }}
      </router-link>
      <div style="clear: both" />
    </header>
    <div class="layout-404">
      <h1>404</h1>
      <p>找不到了😝</p>
      <router-link to="/">
        返回首页
      </router-link>
    </div>
    <footer-bar />
  </div>
</template>

<script>
import FooterBar from '../components/FooterBar';

export default {
  components: {
    FooterBar,
  },
};
</script>
