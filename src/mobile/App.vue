<script setup lang="ts">
import { container } from 'tsyringe';
import Button from '@/shared/components/Button.vue';

import SetButtonNameDispatcher from '@/shared/adapter/SetButtonNameDispatcher';

const setButtonNameDispatcher = container.resolve(SetButtonNameDispatcher);
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <Button :value="setButtonNameDispatcher.dispatch('Mobile')" />
  </div>
</template>
