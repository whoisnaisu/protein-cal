<script setup>
const proteinCal = proteinCalStore();
// counter.count++
// counter.$patch({ count: counter.count + 1 })
// counter.increment()
</script>

<template>
  <div class="config">
    <v-text-field
      v-model="proteinCal.userWeight"
      clearable
      label="ใส่น้ำหนักของคุณ (กิโลกรัม)"
      variant="outlined"
      type="number"
    />
  </div>
</template>
