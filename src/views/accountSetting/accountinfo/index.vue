<!--
 * @Author: suwanqing
 * @Date: 2020-09-30 17:45:37
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-10-09 17:38:58
 * @Description: file content
-->
<template>
  <el-row :gutter="20">
    <el-col v-for="v in cardList" :key="v.title" :span="12">
      <formInfo :title="v.title" />
    </el-col>
  </el-row>
</template>

<script>
import formInfo from './components/formInfo'
export default {
  components: { formInfo },
  data() {
    return {
      cardList: [
        {
          title: 'V字仇杀队'
        },
        {
          'title': '我的信息'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
