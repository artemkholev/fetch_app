<template>
  <div class="page_wrapper">
    <Header />
    <Content>
      <slot></slot>
    </Content>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { Content } from "@/widgets/content";
</script>
