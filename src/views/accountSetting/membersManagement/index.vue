<!--
 * @Author: suwanqing
 * @Date: 2020-09-30 17:46:04
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-10-30 18:16:39
 * @Description: file content
-->
<template>
  <el-card>
    <div class="flex-spacebet-center p-0-40 h-80 bg">
      <div class="flex-start-center">
        <div class="font-md nowrap pr-50">
          <span class="content-4e pr-10">当前账号</span>
          <span class="content-blue">{{ '吃你家大米了？' }}</span>
        </div>
        <el-input v-model="search" placeholder="请输入账号" size="mini">
          <el-button slot="suffix" icon="el-icon-search" type="primary" circle />
        </el-input>
      </div>
      <el-button type="primary" icon="el-icon-edit" circle />
    </div>
    <div class="p-20-30">
      <el-table
        :data="data"
      >
        <!-- <el-table-column
          v-for="v in tableHeader"
          :key="v.label"
          :label="v.label"
          :prop="v.prop"
          align="center"
          :type="v.type"
        >
          <template v-if="v.render" slot-scope="props">
          </template>
          <template v-else-if="v[render-Header]" slot="header">操作</template>
        </el-table-column> -->
        <el-table-column
          v-for="v in tableHeader"
          :key="v.label"
          :label="v.label"
          :prop="v.prop"
          align="center"
        />
        <template slot-scope="scope">
          <i v-if="scope.status" class="el-icon-check" />
          <i v-else class="el-icon-close" />
        </template>
        <el-table-column type="expand">
          <template slot="header">操作</template>
          <!-- <template slot-scope="scope">
            <i class="el-icon-warning-outline" />
            <i class="el-icon-edit-outline" />
          </template> -->
          <template slot-scope="props">
            <div class="flex-spacebet-center">
              <div v-for="item in moreHeader" :key="item.label" class="content-F font-xs text-left h-50 line-h-50 ellipsis">
                <span>{{ item.label }}：</span>
                <span class="content-4e ellipsis">{{ props.row[item.prop] || '--' }}</span>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      tableHeader: [
        {
          label: '账号',
          prop: 'account'
        },
        {
          label: '昵称',
          prop: 'name'
        },
        {
          label: '角色',
          prop: 'role'
        },
        {
          label: '手机',
          prop: 'mobile'
        },
        {
          label: '邮箱',
          prop: 'email'
        },
        {
          label: '管理员',
          prop: 'admin'
        },
        {
          label: '状态',
          prop: 'status',
          render: {
            default: props => {
              if (props.row.status) {
                return (
                  <i class='el-icon-check' />
                )
              } else {
                return (
                  <i class='el-icon-close' />
                )
              }
            }
          }
        },
        {
          label: '操作',
          type: 'expand',
          'render-Header': (h) => (
            <div>操作</div>
          ),
          render: {
            default: props => (
              <div>
                <i class='el-icon-check' />
                <i class='el-icon-close' />
              </div>
            )
          }
        }
      ],
      moreHeader: [
        {
          label: '性别',
          prop: 'gender'
        },
        {
          label: '生日',
          prop: 'birth'
        },
        {
          label: '备注',
          prop: 'other'
        }
      ],
      data: [{
        account: 'boss',
        name: '',
        role: 'admin',
        mobile: '666666',
        email: '',
        admin: true,
        status: true,
        do: '',
        gender: 1,
        birth: '2020-10-29',
        other: '--'
      }, {
        account: '123',
        name: '二狗子',
        role: 'editor',
        mobile: '8888888',
        email: '',
        admin: false,
        status: true,
        do: '',
        gender: 0,
        birth: '2020-02-30',
        other: '雨女无瓜'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  background: #f6f9ff;
}
::v-deep .el-input {
  width: 320px;
}
::v-deep .el-input__inner {
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid #eaeaea;
  padding-left: 12px;
  color: #333;
}
::v-deep .el-input__suffix {
  line-height: 40px;
}
</style>
