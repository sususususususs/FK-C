<!--
 * @Author: suwanqing
 * @Date: 2020-10-10 10:07:11
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-11-02 14:09:11
 * @Description: file content
-->
<template>
  <el-dialog :modal="false" :append-to-body="true" :visible.sync="dialogFormVisible">
    <el-form :model="form" size="mini" label-position="top">
      <template v-if="title">
        <el-form-item v-for="v in itemList" :key="v.label" :label="v.label" class="mb-10">
          <el-input v-if="v.type === 'input'" v-model="form[v.field]" />
          <el-select v-else-if="v.type === 'select'" v-model="form[v.field]">
            <el-option v-for="item in roleList" :key="item" :label="item" :value="item" />
          </el-select>
          <el-tree
            v-else-if="v.type === 'tree'"
            :data="treeData"
            show-checkbox
            node-key="id"
            :indent="30"
            :default-expanded-keys="[1, 2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps"
          />
        </el-form-item>
      </template>
      <template v-else>
        <el-form-item v-for="v in rightFormList" :key="v.label" :label="v.label" class="mb-10">
          <el-select v-if="v.type === 'select'" v-model="form2.role" disabled>
            <el-option
              v-for="item in roleList"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
          <el-input v-else-if="v.type === 'input'" v-model="form2[v.field]" />
          <el-radio-group v-else-if="v.type === 'radio'" v-model="form2.gender">
            <el-radio v-for="(item, index) in genderList" :key="item" :label="index">{{ item }}</el-radio>
          </el-radio-group>
          <el-date-picker
            v-else-if="v.type === 'picker'"
            v-model="form2.birth"
            type="date"
            placeholder="选择日期"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            prefix-icon=" "
          />
        </el-form-item>
      </template>
    </el-form>
    <div slot="footer" class="dialog-footer text-center mt-30">
      <div class="formbtn" @click="dialogFormVisible = false">确定</div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      title: true,
      form: {
        name: '',
        region: '',
        account: '',
        role: '',
        admin: ''
      },
      form2: {
        role: 'admin',
        name: '',
        gender: 1,
        mobile: '',
        email: '',
        birth: ''
      },
      genderList: ['男', '女'],
      roleList: ['admin', 'visitor', 'editor'],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      treeData: [
        {
          label: '管理中心',
          id: 1,
          children: []
        },
        {
          label: '我的订单',
          id: 2,
          children: [{
            label: '订单管理',
            id: 4
          }, {
            label: '已购产品',
            id: 5
          }, {
            label: '现金券',
            id: 6
          }]
        },
        {
          label: '账号设置',
          id: 3,
          children: [{
            label: '账号信息',
            id: 7
          }, {
            label: '成员管理',
            id: 8
          }, {
            label: '账号安全',
            id: 9
          }]
        }
      ],
      itemList: [
        {
          label: '账号',
          type: 'input',
          field: 'account'
        },
        {
          label: '角色',
          type: 'select',
          field: 'role'
        },
        {
          label: '权限',
          type: 'tree',
          field: 'admin'
        }
      ],
      rightFormList: [
        {
          label: '角色',
          type: 'select',
          field: 'role'
        },
        {
          label: '用户名',
          type: 'input',
          field: 'name'
        },
        {
          label: '性别',
          type: 'radio',
          field: 'gender'
        },
        {
          label: '手机',
          type: 'input',
          field: 'mobile'
        },
        {
          label: '邮箱',
          type: 'input',
          field: 'email'
        },
        {
          label: '生日',
          type: 'picker',
          field: 'birth'
        }
      ]
    }
  },
  methods: {
    visible(title) {
      this.title = title === '角色信息'
      this.dialogFormVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
  padding: 30px 105px;
  // box-shadow: 0 0 7px 0 rgba(197,197,197, 0.34);
  box-shadow: 0 0 50px 0 rgba(1, 87, 255, .14);
}
::v-deep .el-input__inner {
  border-radius: 0;
  padding: 0;
  color: #0157ff;
  font-size: 14px;
  font-weight: 400;
  border: none;
  border-bottom: 1px solid #dadada;
  &:focus {
    border-bottom-color: #0157ff;
    transition: border-bottom-color .45s cubic-bezier(.23, 1, .23, 1);
  }
}

%background {
  background: #fff;
  border-color: #dadada;
}

::v-deep .el-select {
  .el-input__inner {
    color: #000000de;
    @extend %background;
  }
  .el-input.is-disabled .el-input__inner {
    color: #0157ff;
    @extend %background;
  }
}

::v-deep .el-date-editor {
  .el-input__inner {
    color: #000000de;
    padding: 0;
  }
}
</style>
