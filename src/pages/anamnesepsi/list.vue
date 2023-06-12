<template>
    <main class="main-page" id="">
        <template v-if="showHeader">
            <section class="page-section q-pa-md" >
                <div class="container-fluid">
                    <div class="row justify-between items-center q-col-gutter-md">
                        <div  class="col col-md-auto " >
                            <div class=" text-h6 text-primary" >
                                Fichas de Anamnese
                            </div>
                        </div>
                        <div  class="col-md-auto col-12 " >
                            <q-btn       :rounded="false"  size=""  color="primary" no-caps  unelevated   :to="`/anamnesepsi/add`" class="full-width" >
                                <q-icon name="add"></q-icon>                                
                                Adicionar novo 
                            </q-btn>
                        </div>
                        <div  class="col-md-auto col-12 " >
                            <q-input debounce="1000"  placeholder="Pesquisa" v-model="filters.search.value" >
                            <template v-slot:append>
                                <q-icon name="search"></q-icon>
                            </template>
                            </q-input>
                        </div>
                    </div>
                </div>
            </section>
        </template>
        <section class="page-section " >
            <div class="container-fluid">
                <div class="row q-col-gutter-x-md">
                    <div  class="col-3 comp-grid" >
                        <q-card  :flat="isSubPage" class="q-mb-sm q-pa-sm nice-shadow-16">
                            <div class="q-mb-sm text-bold text-primary" >
                                Filtrar por Escola
                            </div>
                            <div class="">
                                <q-option-group v-model="filters.escola.value"  type="checkbox"  :options="filters.escola.options" ></q-option-group>
                            </div>
                        </q-card>
                        <q-card  :flat="isSubPage" class="q-mb-sm q-pa-sm nice-shadow-16">
                            <api-data-source @loaded="(response)=> filters.ano.options=response"  api-path="components_data/ano_option_list"  v-slot="req">
                                <div class="q-mb-sm text-bold text-primary" >
                                    Filtrar por Ano
                                </div>
                                <div class="">
                                    <q-option-group v-model="filters.ano.value"  type="checkbox"  :options="filters.ano.options" ></q-option-group>
                                </div>
                            </api-data-source>
                        </q-card>
                        <q-card  :flat="isSubPage" class="q-mb-sm q-pa-sm nice-shadow-16">
                            <div class="q-mb-sm text-bold text-primary" >
                                Filtrar por Realização
                            </div>
                            <div class="">
                                <q-input label="Clique no calendário e defina um intervalo" dense outlined  :value="page.filterController.getFilterLabel(filters.data_hora)">
                                <template v-slot:append>
                                    <q-icon name="date_range" class="cursor-pointer">
                                    <q-popup-proxy>
                                    <q-date v-model="filters.data_hora.value" mask="YYYY-MM-DD" range />
                                    </q-popup-proxy>
                                    </q-icon>
                                </template>
                                </q-input>
                            </div>
                        </q-card>
                    </div>
                    <div  class="col-9 comp-grid" >
                        <div class="row q-gutter-sm">
                            <filter-tags :controller="page.filterController" />
                        </div>
                        <div >
                            <template v-if="showBreadcrumbs && pageBreadCrumb.fieldName">
                                <q-card class="q-pa-md q-mb-sm text-bold nice-shadow-16">
                                    <q-breadcrumbs>
                                    <q-breadcrumbs-el icon="arrow_back" class="text-capitalize" :label="pageBreadCrumb.fieldName" to="/anamnesepsi"></q-breadcrumbs-el>
                                    <q-breadcrumbs-el :label="pageBreadCrumb.fieldValue" ></q-breadcrumbs-el>
                                </q-breadcrumbs>
                            </q-card>
                        </template>
                        <!-- Master Page Start -->
                        <!-- page records template -->
                        <div >
                            <q-table 
                            grid
                            table-header-class="text-h4"
                            card-container-class="q-col-gutter-md justify-start"
                            :bordered="false"
                            :columns="app.menus.anamnesepsilistheader" 
                            :rows="records"
                            binary-state-sort
                            v-model:selected="selectedItems"
                            selection="multiple"
                            row-key="id" 
                            v-model:pagination="pagination"
                            hide-bottom
                            @request="setPagination"
                            :loading="loading">
                            <template v-slot:item="props">
                                <div class="col-12 col-md-4">
                                    <div :class="{selected: isCurrentRecord(props.row)}" class="grid-style-transition" :style="props.selected ? 'transform: scale(0.95);' : ''">
                                        <q-card  class="q-pa-md nice-shadow-16">
                                            <q-list >
                                                <q-item>
                                                    <q-item-section  class="">
                                                        <q-item-label caption>
                                                            Paciente
                                                        </q-item-label>
                                                        <q-item-label class="text-bold">
                                                            {{ props.row.municipes_nome }}
                                                        </q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section  class="">
                                                        <q-item-label caption>
                                                            Sala
                                                        </q-item-label>
                                                        <q-item-label class="text-bold">
                                                            <strong> {{props.row.ano }} ({{ props.row.escola }}) </strong>
                                                        </q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                                <q-item>
                                                    <q-item-section  class="">
                                                        <q-item-label caption>
                                                            Realização da ficha
                                                        </q-item-label>
                                                        <q-item-label class="text-bold">
                                                            <div v-if="props.row.data_hora">
                                                                {{$utils.relativeDate(props.row.data_hora)}}
                                                                <q-tooltip>
                                                                {{ $utils.humanDatetime(props.row.data_hora) }}
                                                                </q-tooltip>
                                                            </div>
                                                        </q-item-label>
                                                    </q-item-section>
                                                </q-item>
                                                <q-separator></q-separator>
                                            </q-list>
                                            <q-separator></q-separator>
                                            <div class="row justify-between">
                                                <div class="q-pa-sm"><q-checkbox dense v-model="props.selected"></q-checkbox></div>
                                                <q-card-actions class="row q-col-gutter-xs justify-end">
                                                    <q-btn icon="menu" padding="xs" round flat color="grey">
                                                        <q-menu auto-close transition-show="flip-right"  transition-hide="flip-left" self="center middle" anchor="center middle">
                                                            <q-list dense rounded nav>
                                                                <q-item link clickable v-ripple :to="`/anamnesepsi/view/${props.row.id}`">
                                                                    <q-item-section>
                                                                        <q-icon color="primary" size="sm" name="visibility"></q-icon>
                                                                    </q-item-section>
                                                                    <q-item-section>Ver</q-item-section>
                                                                </q-item>
                                                                <q-item link clickable v-ripple :to="`/anamnesepsi/edit/${props.row.id}`">
                                                                    <q-item-section>
                                                                        <q-icon color="positive" size="sm" name="edit"></q-icon>
                                                                    </q-item-section>
                                                                    <q-item-section>Editar</q-item-section>
                                                                </q-item>
                                                                <q-item link clickable v-ripple @click="deleteItem(props.row.id)">
                                                                    <q-item-section>
                                                                        <q-icon color="negative" size="sm" name="delete_sweep"></q-icon>
                                                                    </q-item-section>
                                                                    <q-item-section>Apagar</q-item-section>
                                                                </q-item>
                                                            </q-list>
                                                        </q-menu>
                                                    </q-btn>
                                                </q-card-actions>
                                            </div>
                                        </q-card>
                                    </div>
                                </div>
                            </template>
                            </q-table>
                            <div class="row justify-center">
                                <q-td></q-td>
                            </div>
                        </div>
                        <!-- page loading indicator template -->
                        <template v-if="loading">
                            <q-inner-loading :showing="loading">
                                <q-spinner color="primary" size="30px"> 
                                </q-spinner>
                            </q-inner-loading>
                        </template>
                        <!-- page empty record template -->
                        <template v-if="pageReady && !records.length">
                            <q-card :flat="$q.screen.gt.md">
                                <q-card-section>
                                    <div class="text-grey text-h6 text-center">
                                        Nenhum Registro Encontrado
                                    </div>
                                </q-card-section>
                            </q-card>
                        </template>
                        <!-- page footer template-->
                        <template v-if="showFooter">
                            <div class="">
                                <q-separator />
                                <div class="q-pa-md" v-show="pageReady">
                                    <div class="row items-center justify-between">
                                        <div class="row items-center q-col-gutter-md">
                                            <div>
                                                <q-btn round flat   no-caps  unelevated   color="negative" @click="deleteItem(selectedItems)" v-if="selectedItems.length" icon="delete_sweep" class="q-my-xs" title="Excluir selecionado">
                                                    <q-tooltip>Delete Selected Items</q-tooltip>
                                                </q-btn>
                                            </div>
                                        </div>
                                        <div v-if="paginate && totalRecords > 0" class="row  items-center justify-between">
                                            <div class="col-auto">
                                                <q-chip square>Registros {{recordsPosition}} do {{totalRecords}}</q-chip>
                                            </div>
                                            <div v-if="totalPages > 1">
                                                <q-pagination  color="primary"  v-model="pagination.page" :direction-links="true" :boundary-links="true" :max-pages="5" :boundary-numbers="true" :max="totalPages"></q-pagination>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
</template>
<script setup>
	import {  computed, ref, toRefs } from 'vue';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { utils } from 'src/utils';
	import { useListPage } from 'src/composables/listpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		primaryKey : {
			type : String,
			default : 'id',
		},
		pageStoreKey: {
			type: String,
			default: 'ANAMNESEPSI',
		},
		pageName : {
			type : String,
			default : 'anamnesepsi',
		},
		routeName : {
			type : String,
			default : 'anamnesepsilist',
		},
		apiPath : {
			type : String,
			default : 'anamnesepsi/index',
		},
		autoLoad: {
			type: Boolean,
			default: true,
		},
		paginate: {
			type: Boolean,
			default: true,
		},
		scrollIntoView: {
			type: Boolean,
			default: true,
		},
		isSubPage: {
			type: Boolean,
			default: false,
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showFooter: {
			type: Boolean,
			default: true,
		},
		showBreadcrumbs: {
			type: Boolean,
			default: true,
		},
		exportButton: {
			type: Boolean,
			default: true,
		},
		importButton: {
			type: Boolean,
			default: false,
		},
		multiCheckbox: {
			type: Boolean,
			default: true,
		},
		mergeRecords: {
			type: Boolean,
			default: false,
		},
		page: {
			type: Number,
			default: 1,
		},
		limit: {
			type: Number,
			default: 10,
		},
		search: {
			type: String,
			default: '',
		},
		fieldName: null,
		fieldValue: null,
		queryParams: { 
			type: Object,
			default: () => ({})
		},
		sortBy: {
			type: String,
			default: '',
		},
		sortType: {
			type: String,
			default: 'desc', //desc or asc
		},
		emptyRecordMsg: {
			type: String,
			default: "Nenhum Registro Encontrado",
		},
		titleBeforeDelete: {
			type: String,
			default: "Apagar registro",
		},
		msgBeforeDelete: {
			type: String,
			default: "Tem certeza de que deseja excluir este registro?",
		},
		msgAfterDelete: {
			type: String,
			default: "Registro excluído com sucesso",
		},
	});
	
	const app = useApp();
	
	const defaultStoreState = {
		filters: {
			search: {
				tag: "Search",
				value: '',
				valueType: 'single',
				options: [],
			},
			escola: {
				tag: "Escola",
				value: [],
				valueType: 'multiple',
				options: app.menus.escola2,
			},
			ano: {
				tag: "Ano",
				value: [],
				valueType: 'multiple',
				options: [],
			},
			data_hora: {
				tag: "Data Hora",
				value: {from: '',  to: ''},
				valueType: 'range-date',
				options: [],
			}
		},
		pagination: {
			page: props.page,
			rowsPerPage: props.limit,
			rowsNumber: 0,
			sortBy: props.sortBy,
			descending: props.sortType == 'desc'
		},
		primaryKey: props.primaryKey
	}
	const store = usePageStore(props.pageStoreKey,  defaultStoreState);
	
	// page hooks where logics resides
	const page = useListPage({ store, props });
	
	const {records, filters,  totalRecords,  selectedItems, expandedRows, pagination,} = toRefs(store.state);
	const { pageReady, loading, } = toRefs(page.state);
	
	const {  pageBreadCrumb,   totalPages, recordsPosition, } = page.computedProps;
	
	//page methods
	const { load,      setPagination, deleteItem,  isCurrentRecord,     } = page.methods;
	
	const pageTitle = computed({
		get: function () {
			return "Anamnesepsi"
		}
	});
	
	useMeta(() => {
		return {
			title: pageTitle.value //set browser title
		}
	});
</script>
<style scoped>
</style>
