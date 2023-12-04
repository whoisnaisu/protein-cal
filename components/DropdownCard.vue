<script setup>
import userChoices from "@/data/user-choices";
const proteinCal = proteinCalStore();
</script>

<template>
  <div class="config">
    <v-combobox
      clearable
      label="คุณคือ..."
      :items="userChoices"
      v-model="proteinCal.userType"
      variant="outlined"
    ></v-combobox>
  </div>
</template>
