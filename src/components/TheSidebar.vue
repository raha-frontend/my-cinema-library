<template>
	<div class="the-sidebar">
		<div class="main-logo">
			<img src="../assets/images/symbol.svg" alt="logo" class="main__logo-img">
			<h1 class="main-title">M C L</h1>
		</div>

		<ul class="sidebar-menu">
			<li class="sidebar-item sidebar-item__line">
				<router-link to="/profile" class="sidebar__link sidebar__link-account">
					Профиль
					<span class="sidebar__link-span">ui_ux_group_user</span>
				</router-link>
			</li>

			<li class="sidebar-item sidebar-item__line">
				<router-link to="/" class="sidebar__link sidebar__link-palette">Главная</router-link>
			</li>
			<li class="sidebar-item">
				<router-link to="/cart" class="sidebar__link sidebar__link-cart">Корзина</router-link>
			</li>
			<li class="sidebar-item">
				<router-link to="/signin" class="sidebar__link sidebar__link-logout">Выход</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TheSidebar'
})
</script>

<style lang="scss" scoped>
	.the-sidebar {
		display: flex;
		flex-direction: column;
		background-color: blue;
		height: 100vh;
		padding: 32px 0;
		position: relative;
	}

	.the-sidebar::after {
		content: "";
		position: absolute;
		background-image: url(../assets/images/switch-form.svg);
		width: 60px;
		height: 60px;
		top: 50px;
		right: -30px;
		cursor: pointer;
	}

	.main-logo {
		display: flex;
		margin-bottom: 46px;
		padding-left: 34px;
	}

	.main__logo-img {
		display: block;
		margin-right: 20px;
	}

	.main-title {
		font-size: 30px;
		color: #fff;
	}

	.sidebar-menu {
		list-style-type: none;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.sidebar-item {
		position: relative;
		margin-bottom: 10px;
	}

	.sidebar-item__line::after {
		content: "";
		position: absolute;
		background-color: rgba(255, 255, 255, 0.16);
		width: 180px;
		height: 2px;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	.sidebar-item:last-child {
		margin-top: auto;
		padding-bottom: 0;
	}

	.sidebar__link {
		display: block;
		padding: 16px 0 16px 78px;
		font-size: 12px;
		line-height: 1.3;
		text-transform: uppercase;
		color: #fff;
		opacity: 0.5;
		position: relative;
	}

	.sidebar__link:hover {
		opacity: 1;
		background-color: #1ab1b1;
	}

	.sidebar__link-span {
		display: block;
		font-size: 10px;
		line-height: 1;
		text-transform: lowercase;
	}

	.router-link-exact-active {
		opacity: 1;
		background-color: teal;
	}

	.sidebar__link::before {
		content: "";
		position: absolute;
		background-repeat: no-repeat;
		width: 32px;
		height: 32px;
		left: 36px;
		top: 50%;
		transform: translateY(-50%);
	}

	.sidebar__link-account::before {
		background-image: url(../assets/images/q-icon-account.svg);
	}

	.sidebar__link-compass::before {
		background-image: url(../assets/images/q-icon-compass.svg);
	}

	.sidebar__link-palette::before {
		background-image: url(../assets/images/q-icon-palette.svg);
	}

	.sidebar__link-cart::before {
		background-image: url(../assets/images/q-icon-cart.svg);
	}

	.sidebar__link-logout::before{
		background-image: url(../assets/images/q-icon-logout.svg);
	}

</style>