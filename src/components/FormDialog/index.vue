<!--
 * @Author: suwanqing
 * @Date: 2020-10-10 10:07:11
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-11-03 17:15:38
 * @Description: file content
-->
<template>
  <el-dialog :modal="false" :append-to-body="true" :visible.sync="dialogVisible">
    <el-form :model="data" size="mini" label-position="top">
      <slot name="formItem" />
    </el-form>
    <div slot="footer" class="dialog-footer text-center mt-30">
      <slot name="footerButton" />
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    open() {
      this.dialogVisible = true
    },
    close() {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
  padding: 30px 105px;
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
