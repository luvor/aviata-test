<script lang="ts" setup>
const emits = defineEmits(['clicked'])

const handleClick = (e: any) => {
  e.preventDefault()
  emits('clicked')
}
</script>

<template>
  <a class="cursor-pointer leading-3 text-secondary w-fit px-[1px] py-[3px] border-b-2 border-dashed border-secondary hover:text-secondary/70 hover:border-secondary/70 whitespace-nowrap" @click="handleClick">
    <slot />
  </a>
</template>
