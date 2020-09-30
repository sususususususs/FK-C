/*
 * @Author: suwanqing
 * @Date: 2020-09-30 16:31:21
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-09-30 17:53:56
 * @Description: file content
 */

import Layout from '@/layout'

const settingRouter = {
  path: '/accountSetting',
  component: Layout,
  redirect: '/accountSetting/accountinfo/index',
  name: 'AccountSetting',
  meta: {
    title: '账号设置',
    icon: 'el-icon-setting'
  },
  children: [
    {
      path: 'accountinfo',
      name: 'accountinfo',
      component: () => import('@/views/accountSetting/accountinfo/index'),
      meta: { title: '账号信息' }
    },
    {
      path: 'membersManagement',
      name: 'MembersManagement',
      component: () => import('@/views/accountSetting/membersManagement/index'),
      meta: { title: '成员管理' }
    },
    {
      path: 'security',
      name: 'Security',
      component: () => import('@/views/accountSetting/security/index'),
      meta: { title: '账号安全' }
    }
  ]
}

export default settingRouter
