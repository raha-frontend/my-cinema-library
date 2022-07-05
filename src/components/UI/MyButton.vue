<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'my-button'
})
</script>

<style scoped>
	.btn { 
		padding: 10px 15px;
		background-color: none;
		color: teal;
		border: 1px solid teal;
	} 
</style>
