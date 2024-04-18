<template>
    <div class="absolute top-6 right-6">
        <div class="flex">
            <button @click="store.isOpenModalInfo=true" class="btn-main !bg-purple-950 aspect-square !p-2 !text-white"> 
                <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
            </button>
        </div>
        <!-- <button href="https://github.com/hamiidnaserii" target="_blank"
            class="btn-main rounded-xl min-h-7  !text-white">
            {{ ` ${minutes < 10 ? ("0" + minutes) : minutes} : ${seconds < 10 ? ("0" + seconds) : seconds}` }} </button> -->
    </div>
</template>
<script setup>
import { useMainStore } from '@/stores/main';
const { minutes, seconds } = useMainStore()
const store = useMainStore()
</script>