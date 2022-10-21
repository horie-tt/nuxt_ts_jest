<template lang="pug">
.main
  p(data-cy="countCheck") Count is: {{ count }}
  button.inc(@click="increment") 増える
  button.dec(@click="decrement") 減る
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  count: number = 0
  increment() {
    this.count += 1
  }
  decrement() {
    this.count -= 1
  }
}
</script>
