<script lang="ts" setup>
import { defineProps } from 'vue'
import type { Flight, FlightSegment } from '~/types'

import { currencyToSymbol, dayMonthWeekday, secondsToTime } from '~/utils'
import StopsTimeline from '~/components/StopsTimeline.vue'

const props = defineProps({
  flight: {
    type: Object as () => Flight,
    required: true,
  },
})

const formatBaggageOption = (value: string) => {
  if (value === '0 PC')
    return 'Без багажа'

  return value
}

const returnFlightStops = (segments: FlightSegment[]) => {
  const origin_stops = segments.map((segment: FlightSegment) => segment.origin_code)
  const dest_stops = segments.map((segment: FlightSegment) => segment.dest_code)
  const stops = new Set(origin_stops.concat(dest_stops))
  return Array.from(stops)
}

// console.log(props.flight)
</script>

<template>
  <div class="rounded-md bg-white mb-4 w-full grid grid-cols-1 lg:grid-cols-3">
    <div class="p-4 md:p-8 md:col-span-2 flex flex-col justify-center">
      <div class="flex flex-wrap justify-center items-center mt-auto">
        <div class="flex items-center justify-between w-full md:w-fit">
          <div class="flex items-center py-2 mb-8 md:mb-0 md:py-4">
            <img class="w-10 h-10 mr-3" :src="`https://aviata.kz/static/airline-logos/80x80/${props.flight.itineraries[0][0].carrier}.png`" alt="">
            <h2 class="font-bold text-xl">
              {{ props.flight.itineraries[0][0].carrier_name }}
            </h2>
          </div>
          <p class="ml-4 mb-8 md:mb-0 block md:hidden">
            {{ formatBaggageOption(Object.values(props.flight.services)[0].value) }}
          </p>
        </div>
        <div class="md:hidden mb-6 flex justify-between w-full">
          <div class="flex flex-col items-center px-6">
            <h2 class="text-md whitespace-nowrap">
              {{ dayMonthWeekday(new Date(props.flight.itineraries[0][0].arr_date)) }}
            </h2>
            <h2 class="text-3xl font-bold">
              {{ props.flight.itineraries[0][0].arr_date.split(' ')[1] }}
            </h2>
          </div>
          <div class="flex flex-col items-center px-6">
            <h2 class="text-md whitespace-nowrap">
              {{ dayMonthWeekday(new Date(props.flight.itineraries[0][0].dep_date)) }} <span class="text-red">+1</span>
            </h2>
            <h2 class="text-3xl font-bold">
              {{ props.flight.itineraries[0][0].dep_date.split(' ')[1] }}
            </h2>
          </div>
        </div>
        <div class="flex">
          <div class="hidden md:flex flex-col justify-center items-center px-6">
            <h2 class="text-md whitespace-nowrap">
              {{ dayMonthWeekday(new Date(props.flight.itineraries[0][0].arr_date)) }}
            </h2>
            <h2 class="text-3xl font-bold">
              {{ props.flight.itineraries[0][0].arr_date.split(' ')[1] }}
            </h2>
          </div>
          <div>
            <StopsTimeline alt-label="через Шымкент, 1 ч 50 м" :label="secondsToTime(props.flight.itineraries[0][0].traveltime)" :stops="returnFlightStops(props.flight.itineraries[0][0].segments)" />
          </div>
          <div class="hidden md:flex flex-col justify-center items-center px-6">
            <h2 class="text-md whitespace-nowrap">
              {{ dayMonthWeekday(new Date(props.flight.itineraries[0][0].dep_date)) }} <span class="text-red">+1</span>
            </h2>
            <h2 class="text-3xl font-bold">
              {{ props.flight.itineraries[0][0].dep_date.split(' ')[1] }}
            </h2>
          </div>
        </div>
      </div>
      <div class="hidden md:flex mt-auto items-center gap-6 pt-4">
        <DashedLink>Детали перелета</DashedLink>
        <DashedLink>Условия тарифа</DashedLink>
        <p v-if="!props.flight.itineraries[0][0].refundable" class="flex items-center indent-1 text-[#707276]">
          <MdiRestartOff size="1.4em" />невозвратный
        </p>
      </div>
    </div>
    <div class="w-full ml-auto rounded-b-md md:rounded-r-md md:rounded-l-0 bg-[#f5f5f5] whitespace-nowrap flex flex-col items-center p-6 gap-3">
      <h3 class="text-xl">
        <span class="text-3xl">{{ props.flight.price }}</span> {{ currencyToSymbol(props.flight.currency) }}
      </h3>
      <ActionButton>Выбрать</ActionButton>
      <p class="text-gray-400">
        Цена за всех пассажиров
      </p>
      <div class="hidden md:flex flex-wrap items-center justify-center gap-4">
        <p>{{ formatBaggageOption(Object.values(props.flight.services)[0].value) }}</p>
        <SecondaryButton>
          <IcBaselinePlus class="mr-1" size="1.2em" />Добавить багаж
        </SecondaryButton>
      </div>
    </div>
  </div>
</template>
