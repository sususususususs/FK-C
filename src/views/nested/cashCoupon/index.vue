<!--
 * @Author: suwanqing
 * @Date: 2020-09-30 17:30:31
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-10-10 15:42:55
 * @Description: file content
-->
<template>
  <el-card shadow="always">
    <el-form :inline="true" :model="formInline" size="mini" class="flex-spacebet form-bgc p0-30 height-70">
      <el-form-item prop="canUse">
        <el-select v-model="formInline.canUse" clearable placeholder="可用券">
          <el-option
            v-for="item in canUse"
            :key="item.label"
            :label="item.label"
            :value="item.prop"
          />
        </el-select>
      </el-form-item>
      <el-form-item prop="allType">
        <el-select v-model="formInline.allType" clearable placeholder="全部类型券">
          <el-option
            v-for="item in allType"
            :key="item.label"
            :label="item.label"
            :value="item.prop"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="即将到期（30天内）" prop="overDate">
        <el-switch v-model="formInline.overDate" />
      </el-form-item>
      <el-form-item prop="num">
        <el-input v-model="formInline.num" placeholder="请输入现金券激活码">
          <el-button slot="suffix" type="primary" round>激活</el-button>
        </el-input>
      </el-form-item>
    </el-form>
    <div>???</div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      canUse: [
        {
          label: '可用券',
          prop: 'use'
        },
        {
          label: '已使用',
          prop: 'used'
        },
        {
          label: '已失效',
          prop: 'failed'
        }
      ],
      allType: [
        {
          label: '全部类型券',
          prop: 'alls'
        },
        {
          label: '优惠券',
          prop: 'coupons'
        },
        {
          label: '兑换券',
          prop: 'vouchers'
        },
        {
          label: '其他券',
          prop: 'others'
        }
      ],
      formInline: {
        canUse: '',
        allType: '',
        overDate: false,
        num: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-form-item--mini.el-form-item {
  margin: 0;
}
.form-bgc {
  background: #f6f9ff;
}
.p0-30 {
  padding: 0 30px;
}
.height-70 {
  height: 70px;
}
</style>
