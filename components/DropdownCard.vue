<script setup>
import userChoices from "@/data/user-choices";
const proteinCal = proteinCalStore();
</script>

<template>
  <div class="config">
    <v-combobox
      v-model="proteinCal.userType"
      clearable
      label="คุณคือ..."
      :items="userChoices"
      variant="outlined"
    />
  </div>
</template>
