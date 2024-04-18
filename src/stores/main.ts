import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const digits = ref([1, 2, 3, 0, 4, 5, 6, 0, 7, 8, 9, 0, 0, 0, 0])
  const gameDigits = ref([1, 2, 3, 0, 4, 5, 6, 0, 7, 8, 9, 0, 0, 0, 0])
  const pause_game = ref(false)
  const isOpenModalWin = ref(false)
  const isOpenModalInfo = ref(false)
  // Timer
  const stopstatus = ref(0);
  const seconds = ref(0);
  const minutes = ref(0);



  function onClickDigitBtn(index: number) {
    if (pause_game.value) return
    if (gameDigits.value[index] == 9) {
      gameDigits.value[index] = 1
    } else {
      gameDigits.value[index] += 1
    }

    checkWin()

  }


  function generateUniqueRandomArray() {

    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array.sort(function () {
      return 0.5 - Math.random();
    });
    convertDigits(array)
    pause_game.value = false

  }

  function checkWin() {
    debugger
    if (isResult1.value && isResult2.value && isResult3.value && isResult4.value && isResult5.value && isResult6.value) {
      if (!hasDuplicates()) {
        pause_game.value = true
        setTimeout(function () {
          isOpenModalWin.value = true
        }, 1000);
      }
    }
  }


  function hasDuplicates() {
    const seen = {};
    for (let i = 0; i < gameDigits.value.length; i++) {
      const element = gameDigits.value[i];
      if (element < 9) {
        if (seen[element]) {
          return true;
        } else {
          seen[element] = true;
        }
      }
    }
    return false;
  }

  const isResult1 = computed(() => digits.value[3] == (gameDigits.value[0] + gameDigits.value[1] + gameDigits.value[2]))
  const isResult2 = computed(() => digits.value[7] == (gameDigits.value[4] + gameDigits.value[5] + gameDigits.value[6]))
  const isResult3 = computed(() => digits.value[11] == (gameDigits.value[8] + gameDigits.value[9] + gameDigits.value[10]))
  const isResult4 = computed(() => digits.value[12] == (gameDigits.value[0] + gameDigits.value[4] + gameDigits.value[8]))
  const isResult5 = computed(() => digits.value[13] == (gameDigits.value[1] + gameDigits.value[5] + gameDigits.value[9]))
  const isResult6 = computed(() => digits.value[14] == (gameDigits.value[2] + gameDigits.value[6] + gameDigits.value[10]))





  function convertDigits(array: number[]) {
    digits.value[0] = array[0]
    digits.value[1] = array[1]
    digits.value[2] = array[2]
    // 
    digits.value[3] = array[0] + array[1] + array[2]
    gameDigits.value[3] = array[0] + array[1] + array[2]
    // 
    digits.value[4] = array[3]
    digits.value[5] = array[4]
    digits.value[6] = array[5]
    // 
    digits.value[7] = array[3] + array[4] + array[5]
    gameDigits.value[7] = array[3] + array[4] + array[5]
    //     
    digits.value[8] = array[6]
    digits.value[9] = array[7]
    digits.value[10] = array[8]
    // 
    digits.value[11] = array[6] + array[7] + array[8]
    digits.value[12] = array[0] + array[3] + array[6]
    digits.value[13] = array[1] + array[4] + array[7]
    digits.value[14] = array[2] + array[5] + array[8]
    gameDigits.value[11] = array[6] + array[7] + array[8]
    gameDigits.value[12] = array[0] + array[3] + array[6]
    gameDigits.value[13] = array[1] + array[4] + array[7]
    gameDigits.value[14] = array[2] + array[5] + array[8]

  }




  return { seconds, minutes, hasDuplicates, isOpenModalWin, isOpenModalInfo, stopstatus, gameDigits, digits, onClickDigitBtn, generateUniqueRandomArray }
})
