<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer">
			<span class="custom-text-color-blue">hello world from Custom Layout</span>
			<v-divider></v-divider>
			<span class="custom-text-color-blue">Just a Text</span>
			<v-divider></v-divider>
			<NuxtLink to="/">home</NuxtLink>
		</v-navigation-drawer>

		<v-app-bar>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-toolbar-title>Application <span class="custom-text-color-red">Hello World Custom Layout Title</span></v-toolbar-title>
		</v-app-bar>

		<v-main>
			<div class="custom-text-color-red">Hello World Custom Layout Main Section</div>
			<slot></slot>
		</v-main>
	</v-app>
</template>

<script setup lang="ts">
const drawer = ref<boolean>(false);

const pp = ref<number>(0);
</script>
