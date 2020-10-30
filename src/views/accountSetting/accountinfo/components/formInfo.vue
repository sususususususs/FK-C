<!--
 * @Author: suwanqing
 * @Date: 2020-10-09 17:35:38
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-10-29 15:21:23
 * @Description: file content
-->
<template>
  <el-card shadow="always" class="p-0-20 min-h-406">
    <div class="flex-spacebet-center h-50 line-h-50 border-b">
      <span class="content-T font-md">{{ title }}</span>
      <span class="font-sm edit" @click="$refs.editDialog.visible(title)"><i class="el-icon-edit" />修改</span>
    </div>
    <div class="p-20-40-30 flex align-center flex-dir-col">
      <el-avatar icon="el-icon-user-solid" />
      <el-row v-for="v in label" :key="v.label" class="mt-28 w100">
        <el-col class="content-F font-md" :span="8">{{ v.label }}</el-col>
        <el-col class="content-T font-md" :span="16">{{ '--' }}</el-col>
      </el-row>
    </div>
    <editDialog ref="editDialog" />
  </el-card>
</template>

<script>
import editDialog from './editDialog.vue'
export default {
  components: { editDialog },
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    },
    label: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.border-b {
  border-bottom: 1px solid #f1f1f1;
}
.p-20-40-30 {
  padding: 20px 40px 30px;
}
.min-h-406 {
  min-height: 406px;
}
</style>
