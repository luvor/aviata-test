<script lang="ts" setup>
import type { Ref } from 'vue'
import { defineProps, ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  options: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits(['selected'])

const selected: Ref<string[]> = ref([])

const handleSelect = (event: any) => {
  if (event.target.checked)
    selected.value.push(event.target.value)
  else
    selected.value = selected.value.filter((item: any) => item !== event.target.value)

  emits('selected', selected.value)
}
const handleOptionsClear = () => {
  selected.value = []
  emits('selected', selected.value)
}
</script>

<template>
  <div class="rounded-md bg-[#f5f5f5] flex flex-col my-4">
    <div class="flex items-center">
      <p class="text-xl font-bold p-3">
        {{ props.title }}
      </p>
      <button class="ml-auto p-3" @click="handleOptionsClear">
        <IcRoundFilterListOff size="1.4em" />
      </button>
    </div>
    <div v-if="props.options" class="flex flex-col items-start w-full mb-2">
      <div v-for="opt in options" :key="opt.key" class="flex items-stretch accent-primary select-none w-full hover:bg-[#ebebeb]" @click="handleSelect">
        <input :id="opt.key" class="ml-4 mr-4" type="checkbox" :checked="selected.includes(opt.key)" :value="opt.key">
        <label class="w-full h-full text-start py-2 pr-6" :for="opt.key">{{ opt.value }}</label>
      </div>
    </div>
  </div>
</template>
