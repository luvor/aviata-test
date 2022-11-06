<script>
export default {
  name: 'IcBaselinePlus',
  props: {
    size: {
      type: String,
      default: '1em',
    },
  },
}
</script>

<template>
  <svg :width="$props.size" :height="$props.size" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" /></svg>
</template>
