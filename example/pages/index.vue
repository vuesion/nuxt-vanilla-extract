<template>
  <div :class="className">
    Works!
  </div>
</template>

<script>
import { className } from './index.css.js'

export default {
  data () {
    return {
      className
    }
  }
}
</script>
