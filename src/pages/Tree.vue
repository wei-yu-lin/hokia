<script setup>
import ChildTree from "@/components/ChildTree.vue";
import { useData } from "@/api";
const { root } = useData();

</script>

<template>
<div class="container">
  <ul class="tree">
    <li>
      <ChildTree v-for="(first, index) in root" :key="`first_${index}`" :ind="index" :item="first"/>
    </li>
  </ul>
  <router-view/>

</div>
</template>

<style>
@import url(@/assets/tree.css);
.container{
  display: flex;
  align-items: center;
}

</style>
