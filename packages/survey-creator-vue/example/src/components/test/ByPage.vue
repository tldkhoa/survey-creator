<template>
    <Common :options="{ expandCollapseButtonVisibility: 'never',  showLogicTab: true, showTranslationTab: true, pageEditMode: 'bypage' }" :use-slk="true"></Common>
</template>
<script lang="ts" setup>
import Common from './Common.vue';
</script>