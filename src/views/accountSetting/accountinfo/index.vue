<!--
 * @Author: suwanqing
 * @Date: 2020-09-30 17:45:37
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-10-28 17:45:11
 * @Description: file content
-->
<template>
  <el-row :gutter="20">
    <el-col v-for="v in cardList" :key="v.title" :span="12">
      <formInfo :title="v.title" :label="v.form" />
    </el-col>
  </el-row>
</template>

<script>
import formInfo from './components/formInfo'
export default {
  components: { formInfo },
  data() {
    return {
      cardList: [{
        title: '角色信息',
        form: [
          {
            label: '账号',
            field: 'oldCacct'
          },
          {
            label: '角色名',
            field: 'role'
          },
          {
            label: '权限信息',
            field: 'contactPhone'
          }
        ]
      }, {
        title: '我的信息',
        form: [
          {
            label: '角色',
            field: 'sacct'
          },
          {
            label: '姓名',
            field: 'name'
          },
          {
            label: '性别',
            field: 'gender'
          },
          {
            label: '手机',
            field: 'mobile'
          },
          {
            label: '邮箱',
            field: 'email'
          },
          {
            label: '生日',
            field: 'birthday'
          }
        ]
      }],
      length: {
        birthplace_maxlen: 10,
        home_phone_maxlen: 20,
        mobile_maxlen: 20,
        name_maxlen: 20
      }
    }
  }
}
</script>
