<script lang="ts" setup>
import { defineProps } from 'vue'
import type { Flight } from '~/types'

import { dayMonthWeekday } from '~/utils/datetime-formatter'

const props = defineProps({
  flight: {
    type: Object as () => Flight,
    required: true,
  },
})

console.log(props.flight)
</script>

<template>
  <div class="p-4 rounded-md bg-white mb-4 w-full flex items-center">
    <div class="flex items-center">
      <img class="w-10 h-10 mr-3" :src="`https://aviata.kz/static/airline-logos/80x80/${props.flight.itineraries[0][0].carrier}.png`" alt="">
      <h2 class="font-bold text-xl">
        {{ props.flight.itineraries[0][0].carrier_name }}
      </h2>
    </div>
    <div class="flex flex-col items-center px-6">
      <h2 class="text-md">
        {{ dayMonthWeekday(new Date(props.flight.itineraries[0][0].arr_date)) }}
      </h2>
      <h2 class="text-3xl font-bold">
        {{ props.flight.itineraries[0][0].arr_date.split(' ')[1] }}
      </h2>
    </div>
    <h2>
      {{ props.flight.itineraries[0][0].carrier }}
    </h2>
    <div class="flex flex-col items-center px-6">
      <h2 class="text-md">
        {{ dayMonthWeekday(new Date(props.flight.itineraries[0][0].dep_date)) }}
      </h2>
      <h2 class="text-3xl font-bold">
        {{ props.flight.itineraries[0][0].dep_date.split(' ')[1] }}
      </h2>
    </div>
  </div>
</template>
