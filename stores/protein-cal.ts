import { defineStore, acceptHMRUpdate } from "pinia";
import userData from "@/data/user-data";

export const proteinCalStore = defineStore("proteinCal", () => {
  let userType = ref("");
  let userWeight = ref(0);

  function updateUserWeight(val: number) {
    userWeight.value = val;
  }

  function calculateTheProteinGrams(userType: string, userWeight: number) {
    for (let item of userData) {
      if (userType === item.type) {
        return item.gram * userWeight;
      }
    }
  }

  return { userType, updateUserWeight, userWeight, calculateTheProteinGrams };
});
