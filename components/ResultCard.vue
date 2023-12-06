<script setup>
const proteinCal = proteinCalStore();
</script>

<template>
  <div v-if="proteinCal.userWeight !== 0">
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
