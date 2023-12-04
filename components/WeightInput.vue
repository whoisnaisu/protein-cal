<script setup>
const proteinCal = proteinCalStore();
// counter.count++
// counter.$patch({ count: counter.count + 1 })
// counter.increment()
</script>

<template>
  <div class="config">
    <v-text-field
      clearable
      label="ใส่น้ำหนักของคุณ (กิโลกรัม)"
      variant="outlined"
      type="number"
      v-model="proteinCal.userWeight"
    ></v-text-field>
  </div>
</template>
