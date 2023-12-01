<script setup>
import userChoices from "@/data/user-choices";
</script>

<template>
  <div class="combo-config">
    <v-combobox
      clearable
      label="คุณคือ..."
      :items="userChoices"
      variant="outlined"
    ></v-combobox>
  </div>
</template>

<style lang="scss">
.combo-config {
  margin-top: 10rem;
  width: 40%;
}
</style>
