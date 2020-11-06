<!--
 * @Author: suwanqing
 * @Date: 2020-11-03 14:58:09
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-11-03 17:29:19
 * @Description: file content
-->
<template>
  <suwqDialog ref="formComDia" :data="form">
    <template v-slot:formItem>
      <el-form-item v-for="v in itemList" :key="v.label" :label="v.label">
        <template v-if="v.type">
          <el-checkbox-group v-if="v.type === 'checkbox'" v-model="form.role">
            <el-checkbox v-for="role in roleList" :key="role" :label="role" />
          </el-checkbox-group>
          <el-input v-else-if="v.type === 'password'" v-model="form.password" placeholder="请输入密码" show-password />
          <el-switch v-else-if="v.type === 'switch'" v-model="form.status" active-color="#0157ff" />
          <el-radio-group v-else-if="v.type === 'radio'" v-model="form.gender">
            <el-radio v-for="(item, i) in genderList" :key="item" :label="i">{{ item }}</el-radio>
          </el-radio-group>
          <el-date-picker v-else-if="v.type === 'datePicker'" v-model="form.birth" type="date" placeholder="选择日期" />
          <el-input v-else-if="v.type === 'text'" v-model="form.detail" placeholder="备注" maxlength="200" type="text" />
        </template>
        <template v-else>
          <el-input v-model="form[v.field]" />
        </template>
      </el-form-item>
    </template>
    <template v-slot:footerButton>
      <div class="flex-spacebet-center">
        <div class="submit-btn">保存</div>
        <div class="cancel-btn" @click="$refs.formComDia.close()">取消</div>
      </div>
    </template>
  </suwqDialog>
</template>

<script>
import suwqDialog from '@/components/FormDialog'
export default {
  components: { suwqDialog },
  data() {
    return {
      genderList: ['男', '女'],
      roleList: ['admin', 'visitor', 'editor'],
      form: {
        account: '',
        name: '',
        role: [],
        password: '',
        mobile: '',
        email: '',
        status: '',
        gender: '',
        birth: '',
        detail: ''
      },
      itemList: [
        {
          label: '账号',
          field: 'account'
        },
        {
          label: '昵称',
          field: 'name'
        },
        {
          label: '角色',
          field: 'role',
          type: 'checkbox'
        },
        {
          label: '密码',
          field: 'password',
          type: 'password'
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
          label: '状态',
          field: 'status',
          type: 'switch'
        },
        {
          label: '性别',
          field: 'gender',
          type: 'radio'
        },
        {
          label: '生日',
          field: 'birth',
          type: 'datePicker'
        },
        {
          label: '其他',
          field: 'detail',
          type: 'text'
        }
      ],
      dialogVisible: false
    }
  },
  methods: {
    visible() {
      this.$refs.formComDia.open()
    }
  }

}
</script>
