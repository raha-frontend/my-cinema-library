<template>
	<div class="line-chart">
		<button 
			type="button" 
			@click="handleSwitchBtnClick"
			class="line-chart__btn"
		>
				{{ isDark ? 'Светлая тема' : 'Темная тема' }}
		</button>

		<e-charts
			class="line-chart__chart"
			:theme="isDark ? 'dark' : 'light'"
			autoresize
			:option="options"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { LineChart } from 'echarts/charts';
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
	LineChart,
	GridComponent,
	TooltipComponent,
	LegendComponent
]);

export default defineComponent({
	name: 'LineChart',

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
			title: {
				text: 'Stacked Line'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			toolbox: {
				feature: {
					saveAsImage: {}
				}
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: [
					'2000',
					'2001',
					'2002', 
					'2003', 
					'2004', 
					'2005', 
					'2006',
					'2007',
					'2008',
					'2009',
					'2010',
					'2011',
					'2012',
					'2013',
					'2014',
					'2015',
					'2016',
					'2017',
					'2018',
					'2019',
					'2020',
					'2021',
					'2022']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					name: 'Бавария',
					type: 'line',
					stack: 'Total',
					data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132]
				},
				{
					name: 'Реал Мадрид',
					type: 'line',
					stack: 'Total',
					data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182]
				},
				{
					name: 'Барселона',
					type: 'line',
					stack: 'Total',
					data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330, 410, 150, 232]
				},
				{
					name: 'Ливерпуль',
					type: 'line',
					stack: 'Total',
					data: [420, 332, 501, 334, 390, 530, 420, 420, 332, 501, 334, 390, 530, 420, 420, 332, 501, 334, 390, 530, 420, 420, 332]
				},
				{
					name: 'Манчестер Сити',
					type: 'line',
					stack: 'Total',
					data: [310, 332, 401, 334, 290, 330, 320, 310, 332, 401, 334, 290, 330, 320, 310, 332, 401, 334, 290, 330, 320, 310, 332]
				},
				{
					name: 'Челси',
					type: 'line',
					stack: 'Total',
					data: [300, 232, 201, 434, 390, 370, 420, 300, 232, 201, 434, 390, 370, 420, 300, 232, 201, 434, 390, 370, 420, 300, 232]
				},
				{
					name: 'Интер',
					type: 'line',
					stack: 'Total',
					data: [370, 302, 400, 337, 470, 550, 500, 370, 302, 400, 337, 470, 550, 500, 370, 302, 400, 337, 470, 550, 500, 370, 302]
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
	.line-chart {
		padding: 12px;

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
			height: 324px;
		}
	}
</style>