<template>
    <div class="fixed inset-0 flex items-center justify-center">
      <button
        type="button"
        @click="openModal"
        class="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        Open dialog
      </button>
    </div>

  </template>
  
  <script setup>
  import { ref } from 'vue'
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'
  
  const isOpen = ref(true)
  
  function closeModal() {
    isOpen.value = false
  }
  function openModal() {
    isOpen.value = true
  }
  </script>
  