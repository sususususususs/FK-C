<!--
 * @Author: suwanqing
 * @Date: 2020-11-03 16:12:19
 * @LastEditors: suwanqing
 * @LastEditTime: 2020-11-05 15:24:43
 * @Description: file content
-->

<template>
  <el-input
    v-model="scopeValue"
    size="mini"
    :placeholder="placeholder"
    :disabled="disabled"
    @focus="handleFocus"
    @input="handleInput"
    @change="handleChange"
    @blur="handleBlur"
  >
    <el-button v-if="icon" slot="suffix" type="primary" icon="el-icon-search" circle @click="handleSearchClick" />
    <el-button v-else slot="suffix" type="primary" round :disabled="disabled">激活</el-button>
  </el-input>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '请输入账号'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scopeValue: ''
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', this.scopeValue)
    },
    handleChange(e) {
      this.$emit('change', this.scopeValue)
    },
    handleFocus(e) {
      this.$emit('focus', this.scopeValue)
    },
    handleBlur(e) {
      this.$emit('blur', this.scopeValue)
    },
    handleSearchClick() {
      this.$emit('click', this.scopeValue)
    }
  }
}
</script>

<style lang="scss" scoped>
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
