<!--
 * @Author: suwanqing
 * @Date: 2020-10-09 13:59:45
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-10-28 14:55:08
 * @Description: file content
-->
<template>
  <el-card shadow="always">
    <div class="flex-spacebet-center p-24-30">
      <div class="shrink">left pic</div>
      <div class="ellipsis">
        <p class="line-h-24 bold font-lg content-T mb-5">{{ title }}</p>
        <p class="content-8 font-sm ellipsis">{{ detail }}</p>
      </div>
    </div>
    <div class="flex-spacebet-center border-top">
      <el-link :underline="false" class="border-right p-15 w50">升级</el-link>
      <el-link :underline="false" class="p-15 w50">Enter</el-link>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    pic: {
      type: String,
      default() {
        return ''
      }
    },
    title: {
      type: String,
      default() {
        return ''
      }
    },
    detail: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
    }
  }

}
</script>

<style lang="scss" scoped>
.border-top {
  border-top: 1px solid #f2f2f2;
}
.border-right {
  border-right: 1px solid #f2f2f2;
}
.el-link.el-link--default:hover {
  color: #fff;
  background: #2882ff;
}

.el-link.border-right.el-link--default:hover {
  color: #472b06;
  background: linear-gradient(270deg, rgba(232, 195, 132, 1) 0, rgba(241, 211, 163, 1) 100%);
}
</style>
