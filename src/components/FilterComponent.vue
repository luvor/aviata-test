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
      <div v-if="selected.length > 0" class="group relative ml-auto py-2 px-3">
        <button class="hover:text-secondary" @click="handleOptionsClear">
          <IcRoundFilterListOff size="1.4em" />
        </button>
        <div class="opacity-0 absolute bottom-[120%] -left-full z-3 duration-300 group-hover:opacity-100 shadow-md whitespace-nowrap rounded-md bg-white border-1 p-2">
          Сбросить выбор
        </div>
        <div
          class="opacity-0 absolute bottom-[70%] left-1/4 z-4 duration-300 group-hover:opacity-100 w-0 h-0 border-12 border-solid border-transparent border-t-white"
        />
      </div>
    </div>
    <div v-if="props.options" class="flex flex-col items-start w-full mb-2 max-h-[320px] overflow-scroll scroll-thin">
      <div v-for="opt in options" :key="opt.key" class="flex items-center select-none w-full hover:bg-[#ebebeb] px-3" @click="handleSelect">
        <input :id="opt.key" class="primary-checkbox" type="checkbox" :checked="selected.includes(opt.key)" :value="opt.key">
        <label class="w-full ml-2 h-full text-start py-2 pr-6" :for="opt.key">{{ opt.value }}</label>
      </div>
    </div>
  </div>
</template>
