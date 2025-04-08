<template>
  <footer :class="footerClasses">
    <div class="footer-info">
      <p>Posts</p>
    </div>
    
    <p class="footer__name-company">© NuslyAR, {{ new Date().getFullYear()  }}</p>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/shered/store/theme';

const themeStore = useThemeStore();
const { isDarkTheme } = storeToRefs(themeStore);

const footerClasses = computed(() => {
  return { footer: true, ['dark-footer']: isDarkTheme.value };
});
</script>
