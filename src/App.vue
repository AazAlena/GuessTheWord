<script>

// Компоненты
import AppHeader from './components/AppHeader.vue';
import { RouterView } from 'vue-router'

// Главная страница
export default {
	components: {
		AppHeader,
		RouterView
	}
};


</script>

<template>
	
	<!-- Шапка -->
	<app-header></app-header>

	<!-- Меняющаяся часть -->
	<router-view></router-view>

</template>

<style></style>
