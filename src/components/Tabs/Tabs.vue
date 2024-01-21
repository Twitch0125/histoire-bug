<template>
  <div v-for="(tab, i) of props.tabs" :ref="tabsController.tabs.getRef(i)" :key="i">
    <slot :name="tab.value" />
  </div>
</template>

<script lang="ts" setup>
import type { ListItem } from '@/composables/useListItem.js'
import { useTablist } from '@baleada/vue-features'
const props = defineProps<{
  tabs: ListItem[]
}>()
const tabsController = useTablist()
</script>
