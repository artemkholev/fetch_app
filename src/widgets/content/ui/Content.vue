<template>
  <sidebar-elem>
    <div :class="sidebarClasses">
      <h1 :style="{ color: 'greenyellow' }">Menu</h1>
      <ul class="sidebar-panel-nav" @click="changeSidebarPanel">
        <li class="m-4">
          <router-link
            to="/"
            :style="{ color: 'greenyellow', textDecoration: 'none' }"
          >
            Главная
          </router-link>
        </li>
        <li class="m-4">
          <router-link
            to="/posts"
            :style="{ color: 'greenyellow', textDecoration: 'none' }"
          >
            Посты
          </router-link>
        </li>
      </ul>
    </div>
  </sidebar-elem>

  <main :class="contentClasses">
    <breadcrumb-elem />
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/shered/store/theme";
import { useSidebarStore } from "@/shered/store/sidebar";

const themeStore = useThemeStore();
const { isDarkTheme } = storeToRefs(themeStore);

const contentClasses = computed(() => {
  return { content: true, ["dark-content"]: isDarkTheme.value };
});

const sidebarClasses = computed(() => {
  return { sidebar: true, ["dark-sidebar"]: isDarkTheme.value };
});

const sidebarStore = useSidebarStore();
const { changeSidebarPanel } = sidebarStore;
</script>
