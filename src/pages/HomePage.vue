<template>
	<div class="wrapper">
		<the-sidebar />

		<div class="page-content">
			<post-form 
				@create="createPost"
			/>
			<post-list 
				:posts="posts"
				@remove="removePost"
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
			posts: []
		}
	},

	methods: {
		createPost(post) {
			this.posts.push(post);
		},

		removePost(post) {
			this.posts = this.posts.filter(p => p.id !== post.id)
		}
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
