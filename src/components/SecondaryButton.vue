<script lang="ts" setup>
const emits = defineEmits(['clicked'])

const handleClick = (e: any) => {
  e.preventDefault()
  emits('clicked')
}
</script>

<template>
  <button class="px-2 py-1 flex items-center rounded bg-[#eaf0fa] hover:bg-[#eaf0fa]/70 text-secondary hover:text-secondary/70 whitespace-nowrap" @click="handleClick">
    <slot />
  </button>
</template>
