---
title: scss中使用/deep/深度选择器报错
date: 2021-04-01
description: 在带有scoped属性的style中书写样式时，无法作用影响到子组件中的样式，此时我们会使用到deep深度选择器，来解决此问题，我们在使用less预处理器，能正常使用，但是在scss预处理器中会报错。
---
@[TOC](scss中使用/deep/深度选择器报错)


<hr style=" border:solid; width:100px; height:1px;" color=#000000 size=1">

# 前言

在带有scoped属性的style中书写样式时，无法作用影响到子组件中的样式，此时我们会使用到deep深度选择器，来解决此问题，我们在使用less预处理器，能正常使用，但是在scss预处理器中会报错。

# 一、代码


```javascript
<style lang="scss" scoped>
/deep/ .el-dialog__header {
  background-color: #81ecec !important;
}
</style>
```
# 二、报错

```javascript
SassError: expected selector.
    ╷
211 │ /deep/ .el-dialog__header{
    │ ^
```

# 三、解决办法
使用::v-deep深度选择器，能够解决在scss中无法解析/deep/选择器的问题

```javascript
<style lang="scss" scoped>
::v-deep .el-dialog__header {
  background-color: #81ecec !important;
}
::v-deep .el-button--primary {
  background-color: #81ecec;
  border-color: #81ecec;
}
</style>
```
# 四、总结
在vue中，>>>是深度选择器，可以作用到子组件中的样式，/deep/和::v-deep都是>>>的别名，在scss中不识别/deep/, 可以使用::v-deep