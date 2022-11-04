<script setup lang="ts">
import { ref } from 'vue'

import type { Ref } from 'vue'

import DataService from '~/services/DataService'
import { normalizeAirlines } from '~/utils/airlines-serializer'

const airlines: Ref<any> = ref([])
const flights: Ref<any> = ref([])

const rateOptions = [
  { key: 'straightOnly', value: 'Только прямые' },
  { key: 'baggageOnly', value: 'Только с багажом' },
  { key: 'returnableOnly', value: 'Только с возратом' },
]

const airlinesSelected: Ref<string[]> = ref([])
const rateOptionsSelected: Ref<string[]> = ref([])

const handleSelectedAirlines = (selected: string[]) => {
  airlinesSelected.value = selected
}

const handleRateOptions = (selected: string[]) => {
  rateOptionsSelected.value = selected
}

const handleClearAllFilters = () => {
  airlinesSelected.value = []
  rateOptionsSelected.value = []
}

onMounted(async () => {
  DataService.getAirlines().then((response: any) => {
    airlines.value = [{ key: 'all', value: 'Все' }, ...normalizeAirlines(response.data)]
  })
  DataService.getFlights().then((response: any) => {
    flights.value = response.data
  })
})
</script>

<template>
  <div v-if="airlines">
    {{ rateOptionsSelected }}
    {{ airlinesSelected }}
    <div class="flex flex-col">
      <FilterComponent title="Опции тарифа" :options="rateOptions" @selected="handleRateOptions" />
      <FilterComponent title="Авиакомпании" :options="airlines" @selected="handleSelectedAirlines" />
      <button class="text-secondary w-fit px-6 py-2 border-none decoration-underline decoration-dashed" @click="handleClearAllFilters">
        Сбросить все фильтры
      </button>
    </div>
    <div v-if="flights" class="flex flex-col">
      <ResultCard v-for="flight in flights" :key="flight.id" :flight="flight" />
    </div>

    <!-- {{ airlines.data }} -->
  </div>
</template>
