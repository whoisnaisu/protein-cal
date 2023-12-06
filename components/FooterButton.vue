<script setup lang="ts">
import data from "@/data/footer-data";

function openLink(path: Array<string> | string) {
  if (typeof path === "string") {
    window.open(path, "_blank");
  } else if (Array.isArray(path)) {
    for (const link of path) {
      window.open(link, "_blank");
    }
  }
}
</script>

<template>
  <v-bottom-navigation>
    <v-btn value="author" @click="openLink(data.credit)">
      <v-icon>mdi-grease-pencil</v-icon>
      <span>Original content</span>
    </v-btn>
    <v-btn value="made-with" @click="openLink(data.repository)">
      <v-icon>mdi-code-tags</v-icon>
      <span>Made with Nuxt 3</span>
    </v-btn>
  </v-bottom-navigation>
</template>
