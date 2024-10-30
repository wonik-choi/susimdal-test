<script setup lang="ts">
defineProps<{
  value: string;
}>();
</script>

<template>
  <button class="bg-blue-500 text-white p-2 rounded-md">{{ value }}</button>
</template>
