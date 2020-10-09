<!--
 * @Author: suwanqing
 * @Date: 2020-10-09 13:59:45
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-10-09 15:58:15
 * @Description: file content
-->
<template>
  <el-card shadow="always">
    <div class="flex-center box-card-top-padding">
      <div>left pic</div>
      <div>
        <p class="text-title mb-5">{{ title }}</p>
        <p class="text-detail">{{ detail }}</p>
      </div>
    </div>
    <div class="flex-spacebet border-top">
      <el-link :underline="false" class="border-right p-15 width-50">升级</el-link>
      <el-link :underline="false" class="p-15 width-50">Enter</el-link>
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
.width-50 {
  width: 50%;
}
.box-card-top-padding {
  padding: 24px 30px;
}
.text-title {
  color: #333;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}
.text-detail {
  color: #888;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
