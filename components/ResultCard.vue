<script setup>
import { ref, watch } from "vue";
const proteinCal = proteinCalStore();
const userWeight = ref(proteinCal.userWeight);

watch(userWeight, (newVal) => {
  console.log(newVal);
});
</script>

<template>
  <div>
    จำนวนโปรตีนที่ควรได้รับคือ
    {{
      proteinCal.calculateProteinGrams(
        proteinCal.userType,
        proteinCal.userWeight
      )
    }}
    กรัมต่อวัน
  </div>
</template>
