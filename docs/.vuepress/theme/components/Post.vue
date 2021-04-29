<template>
  <section class="post-view">
    <div class="post-head">
      <h1 class="post-title">
        {{ $page.title }}
      </h1>
      <time-ago
        :last-updated="$page.frontmatter.date || $page.lastUpdated"
        class="post-date"
      />
    </div>
    <Content />
    <div ref="comment"></div>
  </section>
</template>

<script>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import TimeAgo from "./TimeAgo";

export default {
  components: {
    TimeAgo,
  },
  mounted() {
    const gitalk = new Gitalk({
      clientID: "fecf4c0a62e139596c8e", // 申请的OAuth App的Client ID
      clientSecret: "30f9570344a74288f0cfd07a180b63911db672ce", // 申请的OAuth App的Client Secret
      repo: "vuepress-blog", // The repository of store comments, // github上的仓库名字，用于存放Gitalk评论
      owner: "luyao514", // github仓库的所有者的名字
      admin: ["luyao514"],
      id: location.pathname, //类型：字符串，选填，页面的唯一标识。长度必须小于50。此参数用于评论和页面对应的标识，如果想让两个页面用一个评论，可设置两个页面的id一样。默认值：location.href(页面URL)
      distractionFreeMode: false, // Facebook-like distraction free mode
      title: 'blog',
      number: 1
    });

    gitalk.render(this.$refs.comment);
  },
};
</script>
