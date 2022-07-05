<template>
	<div class="wrapper">
		<the-sidebar />

		<div class="page-content">
			<post-form 
				@create="createPost"
			/>
			<post-list 
				:posts="posts"
			/>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

import TheSidebar from '../components/TheSidebar.vue';
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';

export default defineComponent({
	name: 'HomePage',

	components: {
		TheSidebar,
		PostForm,
		PostList
	},

	data() {
		return {
			posts: [
				{id: 1, title: 'JavaScript', body: 'Описание поста'},
				{id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
				{id: 3, title: 'JavaScript 3', body: 'Описание поста 3'},
			]
		}
	},

	methods: {
		createPost(post) {
			this.posts.push(post);
		},
	}
})
</script>

<style lang="scss" scoped>
.wrapper {
	display: grid;
	grid-template-columns: 248px 1fr;
}

.page-content {
	padding: 24px;
}
</style>
