<!--
 * @Author: suwanqing
 * @Date: 2020-10-09 17:35:38
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-10-09 18:19:31
 * @Description: file content
-->
<template>
  <el-card shadow="always">
    <div slot="header" class="flex-spacebet">
      <span class="content-T font-md">{{ title }}</span>
      <el-link class="content-E font-sm" :underline="false"><i class="el-icon-edit" />修改</el-link>
    </div>
    <el-avatar icon="el-icon-user-solid" />
    <el-row class="mt-30">
      <el-col class="content-T font-md" :span="8">联系电话</el-col>
      <el-col class="content-F font-md" :span="16">66666666666</el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

::v-deep .el-card__header {
  border-bottom-color: #f1f1f1;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
}

::v-deep .el-card__body {
  padding: 30px 40px;
}

</style>
