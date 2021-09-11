<template>
  <div :class="className">
    Works!
  </div>
</template>

<script>
import { className } from './index.css'

export default {
  data () {
    return {
      className
    }
  }
}
</script>
