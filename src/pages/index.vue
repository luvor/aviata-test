<script setup lang="ts">
import { ref } from 'vue'

import type { Ref } from 'vue'
import type { Flight } from '~/types'

import DataService from '~/services/DataService'
import { normalizeAirlines } from '~/utils'

const airlines: Ref<any> = ref([])
const flights: Ref<any> = ref([])

const filteredFlights: Ref<any> = ref([])

const rateOptions = [
  { key: 'straightOnly', value: 'Только прямые' },
  { key: 'baggageOnly', value: 'Только с багажом' },
  { key: 'returnableOnly', value: 'Только с возратом' },
]

const airlinesSelected: Ref<string[]> = ref([])
const rateOptionsSelected: Ref<string[]> = ref([])

const handleClearAllFilters = () => {
  airlinesSelected.value = []
  rateOptionsSelected.value = []
}

const handleFiltering = () => {
  filteredFlights.value = flights.value.filter((flight: Flight) => {
    const isAirlinesSelected = airlinesSelected.value.includes(flight.itineraries[0][0].carrier)
    const isBaggageIncluded = Object.keys(flight.services).find((service: string) => service === '0PC') === undefined

    if (rateOptionsSelected.value.includes('baggageOnly'))
      return isAirlinesSelected && isBaggageIncluded

    else
      return isAirlinesSelected
  })
}

watch(airlinesSelected, handleFiltering)
watch(rateOptionsSelected, handleFiltering)

onMounted(async () => {
  DataService.getAirlines().then((response: any) => {
    airlines.value = [{ key: 'all', value: 'Все' }, ...normalizeAirlines(response.data)]
    airlinesSelected.value = airlines.value.map((airline: any) => airline.key)
  })
  DataService.getFlights().then((response: any) => {
    flights.value = response.data
    filteredFlights.value = flights.value
  })
})
</script>

<template>
  <div class="bg-[#e1e1e1] min-h-screen flex flex-col items-center font-sans py-10">
    <div v-if="airlines" class="max-w-screen-2xl flex flex-col md:flex-row px-10">
      <div class="flex flex-col">
        <FilterComponent v-model:selected="rateOptionsSelected" title="Опции тарифа" :options="rateOptions" />
        <FilterComponent v-model:selected="airlinesSelected" title="Авиакомпании" :options="airlines" />
        <DashedLink @clicked="handleClearAllFilters">
          Сбросить все фильтры
        </DashedLink>
      </div>
      <div v-if="filteredFlights.length > 0" class="flex flex-col mt-4 md:m-4 md:ml-8 grow-2">
        <ResultCard v-for="flight in filteredFlights" :key="flight.id" :flight="flight" />
      </div>
      <div v-else class="flex mt-4 md:m-4 w-[90vw] md:w-[70vw] md:ml-8 grow-2 bg-white p-10 rounded-md">
        <div class="flex flex-col w-full">
          <h3 class="text-6xl font-bold text-gray-500">
            404
          </h3>
          <p class="text-2xl text-gray-500 mt-4">
            По вашему запросу ничего не найдено
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
