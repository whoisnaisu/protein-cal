<script setup>
import userChoices from "@/data/user-choices";
const proteinCal = proteinCalStore();
</script>

<template>
  <div class="combo-config">
    <v-combobox
      clearable
      label="คุณคือ..."
      :items="userChoices"
      v-model="proteinCal.userType"
      variant="outlined"
    ></v-combobox>
  </div>
</template>

<style lang="scss" scoped>
.combo-config {
  margin-top: 10rem;
  width: 40%;
}
</style>
