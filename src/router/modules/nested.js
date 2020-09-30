/*
 * @Author: suwanqing
 * @Date: 2020-09-30 16:31:21
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-09-30 17:37:20
 * @Description: file content
 */
/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/nested',
  component: Layout,
  redirect: '/nested/orderManagement/index',
  name: 'Nested',
  meta: {
    title: '我的订单',
    icon: 'el-icon-document-checked'
  },
  children: [
    {
      path: 'orderManagement',
      name: 'orderManagement',
      component: () => import('@/views/nested/orderManagement/index'),
      meta: { title: '订单管理' }
    },
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
