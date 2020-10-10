<!--
 * @Author: suwanqing
 * @Date: 2020-09-30 16:31:22
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-10-10 11:38:50
 * @Description: file content
-->
<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          timestamp: '2019/4/20',
          title: 'Update template',
          content: 'committed 2019/4/20 20:46'
        },
        {
          timestamp: '2019/4/21',
          title: 'Update template',
          content: 'committed 2019/4/21 20:46'
        },
        {
          timestamp: '2019/4/22',
          title: 'Build Template',
          content: 'committed 2019/4/22 20:46'
        },
        {
          timestamp: '2019/4/23',
          title: 'Release New Version',
          content: 'committed 2019/4/23 20:46'
        }
      ]
    }
  }
}
</script>
