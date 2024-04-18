<template>
  <main>
    <div class="min-h-[100dvh] bg-[url('/bg-board.jpg')] bg-center bg-cover bg-no-repeat">
      <div class="w-full h-[100dvh] relative  max-w-2xl mx-auto">
        <Logo />
        <Timer />
        <GameBoard />
        <Footer />

      </div>

    </div>

    <TransitionRoot appear :show="store.isOpenModalWin" as="template">
      <Dialog as="div" static="true" @close="closeModal" class="relative z-10">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-purple-400 p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" class="text-3xl font-bold text-center leading-6 text-purple-800">
                  You Win :)
                </DialogTitle>
                <!-- <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div> -->

                <div class="mt-8 w-full flex justify-center">
                  <button @click="new_game" href="https://github.com/hamiidnaserii" target="_blank"
                    class="btn-main min-h-7 !bg-purple-950  !text-white">
                    New Game
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>



    <TransitionRoot appear :show="store.isOpenModalInfo" as="template">
      <Dialog as="div" static="true" @close="closeModalInfo" class="relative z-10">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-purple-400 p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                  How to play?
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-black">
                    You must select the numbers 1 to 9 so that the sum of the numbers in each row is equal to the number
                    in front of that row and also the sum of the numbers in each column is equal to the number in front
                    of that column.
                    <br>
                    <span class="text-red-700">Note: You should not use duplicate numbers</span>
                    
                  </p>
                </div>

                <div class="mt-3">
                  <img src="/info.jpg" class="w-full rounded-xl" alt="info">
                </div>

                
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </main>
</template>

<script setup>
import GameBoard from '@/components/GameBoard.vue'
import Logo from '@/components/Logo.vue'
import Footer from '@/components/Footer.vue'
import Timer from '@/components/Timer.vue'
import { useMainStore } from '@/stores/main';
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'


const store = useMainStore()

store.generateUniqueRandomArray()

function startTimer() {
  if (store.stopstatus !== 0) {
    clearInterval(store.stopstatus);
  }
  setInterval(() => {
    store.seconds += 1;
    if (store.seconds === 60) {
      store.seconds = 0;
      store.minutes++;
    }
  }, 1000);
}
function pauseTimer() {

}
function resetTimer() {

}


function new_game() {
  store.generateUniqueRandomArray()
  store.isOpenModalWin = false
}




function closeModal() {
  store.isOpenModalWin = false
}
function closeModalInfo() {
  store.isOpenModalInfo = false
}
function openModal() {
  store.isOpenModalWin = true
}
</script>