import { defineStore } from "pinia"
import userData from "@/data/user-data"

export const proteinCalStore = defineStore("proteinCal", () => {
  const userType: Ref<string> = ref("")
  const userWeight: Ref<number> = ref(0)
  const proteinGram: Ref<string> = ref("")

  function updateUserWeight(val: number) {
    userWeight.value = val
  }

  function calculateProteinGrams(userType: string, userWeight: number) {
    for (const item of userData) {
      if (userType === item.type) {
        return `${(item.minGram * userWeight).toFixed(2)} - ${(
          item.maxGram * userWeight
        ).toFixed(2)}`
      }
    }
  }

  return {
    userType,
    updateUserWeight,
    userWeight,
    calculateProteinGrams,
    proteinGram,
  }
})
