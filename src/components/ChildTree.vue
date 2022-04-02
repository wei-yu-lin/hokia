<script setup>
const props = defineProps({
  item: Object,
  ind: Number,
});
const isLink = (url) => (url.length == 0 ? false : true);
</script>

<template>
  <ul>
    <li>
      <template v-if="item.child">
        <input type="checkbox" :id="`${item.prog_id}_${ind}`" />
        <label class="tree_label" :for="`${item.prog_id}_${ind}`" />
        <router-link :to="item.app_url">
          {{ item.prog_name }}
        </router-link>
      </template>

      <template v-else>
        <span class="tree_label">
          <router-link :to="item.app_url">
            {{ item.prog_name }}
          </router-link>
        </span>
      </template>

      <ChildTree
        v-for="(child, childIndex) in item.child"
        :key="`child_${childIndex}`"
        :ind="childIndex"
        :item="child"
      />
    </li>
  </ul>
</template>
