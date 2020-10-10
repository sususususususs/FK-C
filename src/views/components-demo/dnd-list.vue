<!--
 * @Author: suwanqing
 * @Date: 2020-09-30 16:31:21
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-10-10 11:40:27
 * @Description: file content
-->
<template>
  <div class="components-container">
    <aside>drag-list base on
    </aside>
    <div class="editor-container">
      <dnd-list :list1="list1" :list2="list2" list1-title="List" list2-title="Article pool" />
    </div>
  </div>
</template>

<script>
import DndList from '@/components/DndList'
import { fetchList } from '@/api/article'

export default {
  name: 'DndListDemo',
  components: { DndList },
  data() {
    return {
      list1: [],
      list2: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.listLoading = true
      fetchList().then(response => {
        this.list1 = response.data.items.splice(0, 5)
        this.list2 = response.data.items
      })
    }
  }
}
</script>

