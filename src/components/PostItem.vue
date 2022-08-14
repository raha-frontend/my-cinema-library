<template>
	<div class="post">
		<div>
			<div><strong>Название:</strong> {{ post.title }}</div>
			<div><strong>Описание:</strong> {{ post.body }}</div>
		</div>
		<div class="post__btns">
			<my-button
				@click="$emit('remove', post)"			
			>
				Удалить
			</my-button>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import MyButton from './UI/MyButton.vue'

export default defineComponent({
	components: {
		MyButton
	},

	props: {
		post: {
			type: Object,
			required: true,
		}
	}
})
</script>

<style scoped>
	.post {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px;
		border: 2px solid teal;
		margin-top: 15px;
	}
</style>
