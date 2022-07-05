<template>
	<div>
		<h3>Список пользователей</h3>
		<post-item
			v-for="(post, index) in posts"
			:key="index"
			:post="post"
		/>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import PostItem from './PostItem.vue'

export default defineComponent({
	components: {PostItem},

	props: {
		posts: {
			type: Array,
			required: true,
			default: () => []
		}
	}
})
</script>

<style scoped>
	
</style>
