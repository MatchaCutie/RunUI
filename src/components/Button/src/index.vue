<template>
  <div
    class="run-button"
    :class="{
      button: !text,
      ['run-button--' + type]: !text,
      ['run-button--' + size]: !text,
      ['run-button--text--' + type]: text,
      ['run-button--text--' + size]: text,
      'is-disabled': disabled,
      'is-plain': plain && !text,
      'is-round': round && !text,
      'is-circle': circle && !text
    }"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'RunButton'
})
/**
 * 接收传过来的值
 *
 * @param size 定义按钮的尺寸 可选值为 'large' | 'default' | 'small'
 * @param type 定义按钮的类型 可选值为 'primary' | 'success' | 'warning' | 'danger' | 'info'
 */
const props = defineProps({
  size: {
    type: String,
    default: 'default'
  },
  type: {
    type: String,
    default: 'primary'
  },
  color: {
    type: String,
    default: ''
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['click'])
const handleClick = () => {
  if (!props.disabled) {
    emit('click')
  }
}
</script>
<style lang="scss" scoped>
.run-button {
  font-size: 14px;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  & + & {
    margin-left: 10px;
  }
  &:hover,
  &:focus {
    color: #ffffff;
    border-color: mix(#ffffff, $primary-color, 70%);
    background-color: mix(#ffffff, $primary-color, 90%);
  }
  @include when(plain) {
    &:hover,
    &:focus {
      background: #ffffff;
      border-color: #ffffff;
      color: #ffffff;
    }
  }
  @include when(disabled) {
    &,
    &:hover,
    &:focus {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #ffffff;
      border-color: #ebeef5;
    }
    &.is-plain {
      &,
      &:hover,
      &:focus {
        background-color: #ffffff;
        border-color: #ebeef5;
        color: #c0c4cc;
      }
    }
  }
  @include m(primary) {
    @include button-variant(#fff, $primary-color, $primary-color);
  }
  @include m(success) {
    @include button-variant(#fff, $success-color, $success-color);
  }
  @include m(warning) {
    @include button-variant(#fff, $warning-color, $warning-color);
  }
  @include m(danger) {
    @include button-variant(#fff, $danger-color, $danger-color);
  }
  @include m(info) {
    @include button-variant(#fff, $info-color, $info-color);
  }
  @include m(large) {
    @include button-size(12px, 19px, 14px, 4px);
  }
  @include m(default) {
    @include button-size(8px, 15px, 14px, 4px);
  }
  @include m(small) {
    @include button-size(5px, 11px, 12px, 4px);
  }
  @include m(text--primary) {
    @include button-text($primary-color);
  }
  @include m(text--success) {
    @include button-text($success-color);
  }
  @include m(text--warning) {
    @include button-text($warning-color);
  }
  @include m(text--danger) {
    @include button-text($danger-color);
  }
  @include m(text--info) {
    @include button-text($info-color);
  }
  @include m(text--large) {
    @include button-size(0, 0, 16px, 0);
  }
  @include m(text--default) {
    @include button-size(0, 0, 14px, 0);
  }
  @include m(text--small) {
    @include button-size(0, 0, 12px, 0);
  }
}
</style>
