<template>
    <main class="main-page" id="">
        <template v-if="pageReady">
            <template v-if="showHeader">
                <section class="page-section q-pa-md" >
                    <div class="container">
                        <div class="row items-center q-col-gutter-md">
                            <div  v-if="!isSubPage"  class="col-auto " >
                                <q-btn @click="$router.go(-1)"      flat :rounded="false"  size=""  color="primary"  no-caps  unelevated   class="" >
                                    <q-icon name="arrow_back"></q-icon>                             
                                </q-btn>
                            </div>
                            <div  class="col col-md-auto " >
                                <div class=" text-h6 text-primary" >
                                    Editar Municipe
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </template>
            <section class="page-section " >
                <div class="container">
                    <div class="row q-col-gutter-x-md">
                        <div  class="col-md-9 col-12 comp-grid" >
                            <div >
                                <q-card  :flat="isSubPage" class="q-pa-md nice-shadow-16">
                                    <q-form ref="observer"  @submit.prevent="submitForm()">
                                    <!--[form-content-start]-->
                                    <div class="row q-col-gutter-x-md">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nome Completo *
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlnome" v-model.trim="formData.nome"  label="Nome Completo" type="text" placeholder="Conforme consta no documento"      
                                                    class="" :error="isFieldValid('nome')" :error-message="getFieldError('nome')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nome do Pai 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlpai" v-model.trim="formData.pai"  label="Nome do Pai" type="text" placeholder="Entrar Nome do Pai"      
                                                    class="" :error="isFieldValid('pai')" :error-message="getFieldError('pai')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Nome da Mãe 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlmae" v-model.trim="formData.mae"  label="Nome da Mãe" type="text" placeholder="Entrar Nome da Mãe"      
                                                    class="" :error="isFieldValid('mae')" :error-message="getFieldError('mae')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Telefone/Celular 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrltelefone" v-model.trim="formData.telefone"  label="Telefone/Celular" type="text" placeholder="Entrar Telefone/Celular"      
                                                    class="" :error="isFieldValid('telefone')" :error-message="getFieldError('telefone')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Email 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlemail" v-model.trim="formData.email"  label="Email" type="email" placeholder="Entrar Email"      
                                                    class="" :error="isFieldValid('email')" :error-message="getFieldError('email')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Data Nasc 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrldata_nasc" v-model="formData.data_nasc" label="Data Nasc"    :error="isFieldValid('data_nasc')" :error-message="getFieldError('data_nasc')">
                                                    <template v-slot:append>
                                                        <q-icon name="date_range" class="cursor-pointer">
                                                        <q-popup-proxy ref="ctrldata_nasc" transition-show="scale" transition-hide="scale">
                                                        <q-date    mask="YYYY-MM-DD" v-model="formData.data_nasc" @input="$refs.ctrldata_nasc.hide()" />
                                                        </q-popup-proxy>
                                                        </q-icon>
                                                    </template>
                                                    </q-input>      
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Endereço Completo 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlendereco_completo" v-model.trim="formData.endereco_completo"  label="Endereço Completo" type="text" placeholder="Rua X, 999"      
                                                    class="" :error="isFieldValid('endereco_completo')" :error-message="getFieldError('endereco_completo')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    CPF 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlcpf" v-model.trim="formData.cpf"  label="CPF" type="text" placeholder="Entrar CPF"      
                                                    class="" :error="isFieldValid('cpf')" :error-message="getFieldError('cpf')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    RG 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input   ref="ctrlrg" v-model.trim="formData.rg"  label="RG" type="text" placeholder="Entrar RG"      
                                                    class="" :error="isFieldValid('rg')" :error-message="getFieldError('rg')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-sm-3 col-12">
                                                    Observações Internas 
                                                </div>
                                                <div class="col-sm-9 col-12">
                                                    <q-input  ref="ctrlobservacoes" rows="5"  v-model="formData.observacoes" placeholder="Entrar Observações Internas"    type="textarea" :error="isFieldValid('observacoes')" :error-message="getFieldError('observacoes')">
                                                    </q-input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--[form-content-end]-->
                                    <div v-if="showSubmitButton" class="text-center q-my-md">
                                        <q-btn    :rounded="false"  color="primary"  no-caps  unelevated   type="submit" icon-right="send" :loading="saving">
                                            {{ submitButtonLabel }}
                                            <template v-slot:loading>
                                                <q-spinner-oval />
                                            </template>
                                        </q-btn>
                                    </div>
                                    </q-form>
                                    <slot :submit="submitForm" :saving="saving"></slot>
                                </q-card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
        <template v-if="loading">
            <div style="min-height:200px" class="q-pa-sm text-center relative-position">
                <q-inner-loading color="primary" label="Carregando..." showing></q-inner-loading>
            </div>
        </template>
    </main>
</template>
<script setup>
	import {  computed, ref, reactive, toRefs } from 'vue';
	import { required, email, } from 'src/services/validators';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useEditPage } from 'src/composables/editpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		pageName: {
			type: String,
			default: 'municipes',
		},
		pageStoreKey: {
			type: String,
			default: 'MUNICIPES',
		},
		routeName: {
			type: String,
			default: 'municipesedit',
		},
		pagePath: {
			type : String,
			default : 'municipes/edit',
		},
		apiPath: {
			type: String,
			default: 'municipes/edit',
		},
		submitButtonLabel: {
			type: String,
			default: "Atualizar",
		},
		msgTitle: {
			type: String,
			default: "Atualizar registro",
		},
		msgBeforeSave: {
			type: String,
			default: "",
		},
		msgAfterSave: {
			type: String,
			default: "Registro atualizado com sucesso",
		},
		formValidationError: {
			type: String,
			default: "O formulário é inválido",
		},
		formValidationMsg: {
			type: String,
			default: "Por favor, preencha o formulário",
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showSubmitButton: {
			type: Boolean,
			default: true,
		},
		redirect: {
			type : Boolean,
			default : true,
		},
		isSubPage: {
			type : Boolean,
			default : false,
		},
	});
	
	const store = usePageStore(props.pageStoreKey);
	const app = useApp();
	
	const formDefaultValues = Object.assign({
		nome: "", 
		pai: "", 
		mae: "", 
		telefone: "", 
		email: "", 
		data_nasc: new Date(), 
		endereco_completo: "", 
		cpf: "", 
		rg: "", 
		observacoes: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/municipes`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			nome: { required },
		email: { email }
		}
	});
	
	const page = useEditPage({ store, props, formData, rules, afterSubmit });
	
	const {  saving, loading, pageReady,   } = toRefs(page.state);
	
	const {  currentRecord: editRecord } = toRefs(store.state);
	
	const { load, submitForm, isFieldValid, getFieldError,  } = page.methods;
	
	useMeta(() => {
		return {
			//set browser title
			title: "Editar Municipe"
		}
	});
</script>
<style scoped>
</style>
