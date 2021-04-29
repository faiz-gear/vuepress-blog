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
      <div class="nav-wrapper">
        <ul class="nav">
          <li><a class="borderFade" @click="$router.back()" v-if="!isHome">返回首页</a></li>
          <li><a class="borderFade" href="https://github.com/luyao514/vuepress-blog">GitHub</a></li>
          <li><a class="borderFade" href="https://blog.csdn.net/qq_48093489?spm=1000.2115.3001.5343">CSDN</a></li>
        </ul>
        <SearchBox />
      </div>
      <div style="clear: both" />
      <nav-bar />
    </header>
    <home-page v-if="isHome" />
    <post-page v-else />
    <footer-bar />
  </div>
</template>

<script>
import HomePage from "../components/Home";
import PostPage from "../components/Post";
import FooterBar from '../components/FooterBar';
import NavBar from '../components/NavBar';
import SearchBox from '@SearchBox'

export default {
  components: {
    HomePage,
    PostPage,
    FooterBar,
    NavBar,
    SearchBox 
  },
  computed: {
    isHome() {
      return this.$page.path === '/';
    }
  }
};
</script>

<style scoped>
.nav-wrapper {
  flex: 1;
  display: flex;
  justify-content:flex-end;
  align-items: center;
  padding-right: 32px;
}
.nav {
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 0 0 auto;
  display: flex;
  margin: 0;
  align-items: end;
}
.nav li {
  padding: 0 10px 0;
}
/* .nav li:hover a{
  color: #32ff7e
}
.nav li a {
  font-family: PT Serif,Serif;
  font-size: 20px;
  text-decoration: none;
  transition: color .3s;
  color: #000;
} */
.borderFade {
    padding-bottom: 1px;
    color: hsl(222, 25%, 14%);
    position: relative;
}

.borderFade::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    left: 0;
    bottom: 0;
    opacity: 0;
    transform: translateY(3px);
    background: hsl(243, 80%, 62%);
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.borderFade:hover::after {
    opacity: 1;
    transform: translateY(0);
}

</style>