<script setup lang="ts">
import { container } from 'tsyringe';

import SetButtonNameDispatcher from '@/shared/adapter/SetButtonNameDispatcher';

import Button from '@/shared/components/Button.vue';

const setButtonNameDispatcher = container.resolve(SetButtonNameDispatcher);
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <h2>Desktop</h2>
    <Button :value="setButtonNameDispatcher.dispatch('Desktop')" />
  </div>
</template>
