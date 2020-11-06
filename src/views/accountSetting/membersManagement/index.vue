<!--
 * @Author: suwanqing
 * @Date: 2020-09-30 17:46:04
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-11-03 17:08:32
 * @Description: file content
-->

<script>
import formDialog from './components/newForm'
import searchComponents from '@/components/SearchInput'
export default {
  name: 'MembersManagement',
  components: { formDialog, searchComponents },
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
          prop: 'admin',
          render: {
            default: props => {
              return props.row.admin ? <i class='content-blue el-icon-check' /> : <i class='el-icon-close' />
            }
          }
        },
        {
          label: '状态',
          prop: 'status',
          render: {
            default: props => {
              return props.row.status ? <i class='content-blue el-icon-check' /> : <i class='el-icon-close' />
            }
          }
        },
        {
          label: '操作',
          render: {
            default: props => {
              return <i onClick={this.visible} class='pointer el-icon-edit-outline' />
            }
          }
        },
        {
          type: 'expand',
          render: {
            default: props => {
              const inner = this.moreHeader.map(item => {
                return (
                  <el-col span={8} class='content-F font-xs text-left h-50 line-h-50 ellipsis'>
                    <span>{item.label}：</span>
                    <span class='content-4e ellipsis'>{props.row[item.prop] || '--'}</span>
                  </el-col>
                )
              })
              return (
                <el-row gutter={10}>{inner}</el-row>
              )
            }
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
  },
  methods: {
    visible() {
      this.$refs.formDialog.visible()
    },
    formInput(params) {
      this.search = params
    }
  },
  render() {
    return (
      <el-card>
        <div class='flex-spacebet-center p-0-40 h-80 bg'>
          <div class='flex-start-center'>
            <div class='font-md nowrap pr-50'>
              <span class='content-4e pr-10'>当前账号</span>
              <span class='content-blue'>{ '吃你家大米了？？？要你寡！' }</span>
            </div>
            <searchComponents onInput={this.formInput} />
          </div>
          <el-button type='primary' icon='el-icon-edit' circle onClick={this.visible} />
        </div>
        <div class='p-20-30'>
          <el-table
            data={this.data}
            size='mini'
          >
            {
              this.tableHeader.map((item) => {
                return (<el-table-column
                  key={item.key}
                  label={item.label}
                  prop={item.prop}
                  align='center'
                  type={item.type}
                  {...{ scopedSlots: item.render }}
                  // {
                  //   ...{
                  //     scopedSlots: {
                  //       default: props => {
                  //         console.log(props)
                  //         return props.row.status ? <i class='el-icon-check' /> : <i class='el-icon-close' />
                  //       }
                  //     }
                  //   }
                  // }
                />)
              })
            }
          </el-table>
        </div>
        <formDialog ref='formDialog' />
      </el-card>
    )
  }
}
</script>

<style lang="scss" scoped>
.bg {
  background: #f6f9ff;
}
::v-deep .el-input--suffix {
  width: 320px;
}
</style>
