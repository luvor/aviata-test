<script lang="ts" setup>
const props = defineProps({
  stops: {
    type: Array as () => string[],
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  altLabel: {
    type: String,
  },
})
</script>

<template>
  <div class="p-2 flex flex-col items-center min-w-full md:min-w-[150px]">
    <p class="mb-1">
      {{ props.label }}
    </p>
    <div class="min-w-[300px] md:min-w-[150px] relative flex items-center justify-between">
      <div v-for="stop in props.stops" :key="stop" class="border-2 border-gray-300 rounded-full w-[8px] h-[8px] z-2 relative bg-white">
        <p v-if="stop === props.stops[0]" class="-mt-7 -ml-3 text-gray-300">
          {{ stop }}
        </p>
        <p v-if="stop === props.stops[props.stops.length - 1]" class="-mt-7 -ml-3 text-gray-300">
          {{ stop }}
        </p>
      </div>
      <div class="absolute z-1 w-full h-[2px] bg-gray-300" />
    </div>
    <p v-if="props.altLabel" class="whitespace-nowrap text-orange-400 mt-4 text-sm">
      {{ props.altLabel }}
    </p>
  </div>
</template>
