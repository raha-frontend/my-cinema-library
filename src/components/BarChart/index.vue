<template>
	<div class="bar-chart">
		<div class="bar-chart__title"> {{ title }} </div>
		<div class="bar-chart__subtitle"> {{ subtitle }} </div>

		<button 
			type="button" 
			@click="handleSwitchBtnClick"
			class="bar-chart__btn"
		>
				{{ isDark ? 'Светлая тема' : 'Темная тема' }}
		</button>

		<e-charts
			class="bar-chart__chart"
			:theme="isDark ? 'dark' : 'light'"
			autoresize
			:option="options"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { BarChart } from 'echarts/charts';
import {
	GridComponent,
	TooltipComponent,
	LegendComponent
} from 'echarts/components';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import ECharts from 'vue-echarts';

use([
	CanvasRenderer,
	BarChart,
	GridComponent,
	TooltipComponent,
	LegendComponent
]);

export default defineComponent({
	name: 'BarChart',

	components: {
		ECharts
	},

	props: {
		title: {
			type: String,
			default: ''
		},
		subtitle: {
			type: String,
			default: ''
		}
	},

	setup() {
		const isDark = ref(false);

		const options = {
			grid: {
				top: 20,
				right: 60,
				bottom: 30,
				left: 60
			},
			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					data: [120, 200, 150, 80, 70, 110, 130],
					type: 'bar'
				}
			]
		};

		const handleSwitchBtnClick = () => {
			isDark.value = !isDark.value;
		}

		return {
			isDark,
			options,
			handleSwitchBtnClick
		}
	},
})
</script>

<style lang="scss" scoped>
.bar-chart {
	padding: 12px;

	&__title {
		font-size: 24px;
		margin-bottom: 20px;
	}

	&__subtitle {
		font-size: 20px;
		margin-bottom: 16px;
	}

	&__btn {
		display: block;
		background-color: #fff;
		border: none;
		padding: 12px 24px;
		border-radius: 4px;
		box-shadow: 0 0 8px rgb(0 0 0 / 10%);
		text-transform: uppercase;
		text-align: center;
		margin-left: auto;
		margin-bottom: 24px;
	}

	&__btn:hover {
		background-image: linear-gradient(90deg, #83bff6, #188df0, #188df0);
		color: #fff;
		transition: all 0.3s;
	}

	&__chart {
		height: 224px;
	}
}
</style>
