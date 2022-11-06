<script lang="ts" setup>
const emits = defineEmits(['clicked'])

const handleClick = (e: any) => {
  e.preventDefault()
  emits('clicked')
}
</script>

<template>
  <button class="bg-primary hover:bg-primary/70 text-white py-2 px-10 font-bold rounded-md text-xl" @click="handleClick">
    <slot />
  </button>
</template>
