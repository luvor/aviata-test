<script setup lang="ts">
import { ref } from 'vue'
import DataService from '~/services/DataService'

const airlines = ref([])

onMounted(async () => {
  DataService.getAirlines().then((response: any) => {
    airlines.value = response
  })
})
</script>

<template>
  <div>
    {{ airlines }}
  </div>
</template>
