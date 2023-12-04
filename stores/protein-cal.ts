import { defineStore, acceptHMRUpdate } from "pinia";
import userData from "@/data/user-data";

export const proteinCalStore = defineStore("proteinCal", () => {
  let userType = ref("");
  let userWeight = ref(0);
  let proteinGram = ref("");

  function updateUserWeight(val: number) {
    userWeight.value = val;
  }

  function calculateProteinGrams(userType: string, userWeight: number) {
    for (let item of userData) {
      if (userType === item.type) {
        return `${item.minGram * userWeight} - ${item.maxGram * userWeight}`;
      }
    }
  }

  return {
    userType,
    updateUserWeight,
    userWeight,
    calculateProteinGrams,
    proteinGram,
  };
});
