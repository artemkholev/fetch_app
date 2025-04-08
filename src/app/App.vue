<template>
  <component :is="$route.meta.layout || 'div'" v-cloak>
    <router-view />
  </component>
</template>
