<template>
	<div class="wrapper">
		<the-sidebar />

		<div class="page-content">
			Profile
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

import TheSidebar from '../components/TheSidebar.vue';

export default defineComponent({
	name: 'ProfilePage',

	components: {
		TheSidebar
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
