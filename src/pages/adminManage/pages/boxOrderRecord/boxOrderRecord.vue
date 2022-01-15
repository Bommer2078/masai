<template>
	<div>
		<table-header></table-header>
		<table-container></table-container>
	</div>
</template>

<script>
import tableHeader from './components/table_header.vue'
import tableContainer from './components/table_container.vue'
export default {
	components: {
		tableHeader,
		tableContainer
	}
}
</script>
