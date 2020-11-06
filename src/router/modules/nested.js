/*
 * @Author: suwanqing
 * @Date: 2020-09-30 16:31:21
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-11-05 18:18:19
 * @Description: file content
 */
/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/nested',
  component: Layout,
  redirect: '/nested/purchasedPro/index',
  name: 'Nested',
  meta: {
    title: '商品管理',
    icon: 'el-icon-goods'
  },
  children: [
    {
      path: 'purchasedPro',
      name: 'purchasedPro',
      component: () => import('@/views/nested/purchasedPro/index'),
      meta: { title: '已购产品' }
    },
    {
      path: 'cashCoupon',
      name: 'cashCoupon',
      component: () => import('@/views/nested/cashCoupon/index'),
      meta: { title: '现金券' }
    }
  ]
}

export default nestedRouter
