<template>
	<div>Hello World from About Page</div>

	<div unocss-text-5xl unocss-color-red unocss-fw100 unocss-op80 unocss-animate-bounce-alt unocss-animate-count-infinite unocss-animate-duration-1s unocss-m-2>About Page - unocss attributes</div>
</template>

<script setup lang="ts">
// This will work in both `<script setup>` and `<script>`
definePageMeta({
	layout: "custom",
});
</script>
