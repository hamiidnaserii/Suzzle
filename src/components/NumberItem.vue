<template>
    <div class="aspect-[1/1] cursor-pointer col-span-1  flex justify-center items-center ">


        <button v-if="(index + 1) % 4 == 0 || (index + 1) > 12" class="pushable w-14 aspect-[1/1]">

            <span :class="{ 'active': state_result }"
                class="btn-main cursor-default !p-0 !translate-y-0 w-14 aspect-[1/1] flex justify-center items-center !text-3xl bg-gradient-to-b from-gray-400 to-gray-600">
                {{ digits[index] }}
            </span>
        </button>
        <button v-else class="pushable w-14 aspect-[1/1]" @click="onClickDigitBtn(index)" ref="disableZoom"
           >
            <span class="shadow w-14 aspect-[1/1] bg-purple-600"></span>
            <span class="edge w-14 aspect-[1/1] bg-purple-900"></span>
            <span
                class="front  w-14 aspect-[1/1] flex justify-center items-center !text-4xl bg-gradient-to-tr from-purple-400 to-purple-800">
                {{ gameDigits[index] }}
            </span>
        </button>

    </div>

</template>


<script lang="ts" setup>
import { useMainStore } from '@/stores/main';
import { computed, ref } from 'vue';

const colors = ref(['#ebd5ff', '#dbb4fe', '#c384fc', '#aa55f7', '#aa55f7', '#9333ea', '#7c22ce', '#6821a8', '#541c87', '#380764'])
const props = defineProps(['index'])
const { digits, gameDigits, onClickDigitBtn } = useMainStore()


const state_result = computed(() => {
    if (props.index < 12) {
        return (gameDigits[props.index - 1] + gameDigits[props.index - 2] + gameDigits[props.index - 3]) == digits[props.index]
    } else {
        return (gameDigits[props.index - 4] + gameDigits[props.index - 8] + gameDigits[props.index - 12]) == digits[props.index]
    }
})



</script>


<style>
/* .item-color{
    background-color: v-bind(colors[gameDigits[index]]);
} */
</style>