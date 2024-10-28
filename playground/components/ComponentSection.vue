<script lang="ts" setup>
type Props = {
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <div class="box-border p-4 rounded border-2 border-gray-400 flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <h2 class="text-2xl font-bold">
        {{ title }}
      </h2>
      <div class="w-0.5 h-6 bg-black" />
      <span>
        {{ description }}
      </span>
    </div>
    <slot />
  </div>
</template>
