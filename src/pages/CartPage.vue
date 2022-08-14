<template>
	<div class="wrapper">
		<the-sidebar />

		<div class="page-content">

			<bar-chart
				title="Заголовок"
				subtitle="Подзаголовок"
			/>

			<line-chart/>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

import TheSidebar from '../components/TheSidebar.vue';
import BarChart from '../components/BarChart/index.vue';
import LineChart from '../components/LineChart/index.vue';

export default defineComponent({
	name: 'CartPage',

	components: {
		TheSidebar,
		BarChart,
		LineChart
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
