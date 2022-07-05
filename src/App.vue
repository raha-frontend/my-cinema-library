<template>
	<router-view />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const value = ref('');
    return { value };
  }
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
