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
                                    Editar Anamnesepsi
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
                                            Paciente 
                                            <div id="ctrl-municipe_id-holder"> 
                                                <api-data-source @loaded="response => mapOptionField(response, 'municipe_id')"  api-path="components_data/municipe_id_option_list"  v-slot="req">
                                                    <nice-select :use-input="true" @update:model-value="(val)=>municipeIdAutofill(val)"   :loading="req.loading"   ref="ctrlmunicipe_id" v-model="formData.municipe_id" :options="req.response" label="Paciente"  :error="isFieldValid('municipe_id')" :error-message="getFieldError('municipe_id')">
                                                    </nice-select>  
                                                </api-data-source>
                                            </div>
                                        </div>
                                        <div class="col-md-5 col-12">
                                            Escola 
                                            <div id="ctrl-escola-holder"> 
                                                <nice-select        ref="ctrlescola" v-model="formData.escola" :options="app.menus.escola" label="Escola"  :error="isFieldValid('escola')" :error-message="getFieldError('escola')">
                                                </nice-select>  
                                            </div>
                                        </div>
                                        <div class="col-md-7 col-12">
                                            Ano 
                                            <div id="ctrl-ano-holder"> 
                                                <q-input   ref="ctrlano" v-model.trim="formData.ano"  label="Ano" type="text" placeholder="Entrar Ano"      
                                                class="" :error="isFieldValid('ano')" :error-message="getFieldError('ano')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            Apelido 
                                            <div id="ctrl-apelido-holder"> 
                                                <q-input   ref="ctrlapelido" v-model.trim="formData.apelido"  label="Apelido" type="text" placeholder="Entrar Apelido"      
                                                class="" :error="isFieldValid('apelido')" :error-message="getFieldError('apelido')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            Gosta Apelido 
                                            <div id="ctrl-gosta_apelido-holder"> 
                                                <q-field  borderless   :error="isFieldValid('gosta_apelido')" :error-message="getFieldError('gosta_apelido')">
                                                <q-option-group  ref="ctrlgosta_apelido" v-model="formData.gosta_apelido" :options="app.menus.gostaApelido"  inline size="md" ></q-option-group>
                                                </q-field>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Por que tem esse apelido? 
                                            <div id="ctrl-pq_apelido-holder"> 
                                                <q-input   ref="ctrlpq_apelido" v-model.trim="formData.pq_apelido"  label="Por que tem esse apelido?" type="text" placeholder="Entrar Por que tem esse apelido?"      
                                                class="" :error="isFieldValid('pq_apelido')" :error-message="getFieldError('pq_apelido')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Você prefere ficar sozinho(a) ou com amigos?  
                                            <div id="ctrl-prefere_sozinho-holder"> 
                                                <q-input   ref="ctrlprefere_sozinho" v-model.trim="formData.prefere_sozinho"  label="Você prefere ficar sozinho(a) ou com amigos? " type="text" placeholder="Entrar Você prefere ficar sozinho(a) ou com amigos? "      
                                                class="" :error="isFieldValid('prefere_sozinho')" :error-message="getFieldError('prefere_sozinho')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Você tem muitos amigos na sala?  
                                            <div id="ctrl-muitos_amigos-holder"> 
                                                <q-input   ref="ctrlmuitos_amigos" v-model.trim="formData.muitos_amigos"  label="Você tem muitos amigos na sala? " type="text" placeholder="Entrar Você tem muitos amigos na sala? "      
                                                class="" :error="isFieldValid('muitos_amigos')" :error-message="getFieldError('muitos_amigos')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Quem são seus amigos?  
                                            <div id="ctrl-quem_amigos-holder"> 
                                                <q-input   ref="ctrlquem_amigos" v-model.trim="formData.quem_amigos"  label="Quem são seus amigos? " type="text" placeholder="Entrar Quem são seus amigos? "      
                                                class="" :error="isFieldValid('quem_amigos')" :error-message="getFieldError('quem_amigos')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Quem é seu melhor amigo?  
                                            <div id="ctrl-quem_melhor_amigo-holder"> 
                                                <q-input   ref="ctrlquem_melhor_amigo" v-model.trim="formData.quem_melhor_amigo"  label="Quem é seu melhor amigo? " type="text" placeholder="Entrar Quem é seu melhor amigo? "      
                                                class="" :error="isFieldValid('quem_melhor_amigo')" :error-message="getFieldError('quem_melhor_amigo')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            O que você mais gosta no (melhor amigo)?  
                                            <div id="ctrl-oq_gosta_melhor_amigo-holder"> 
                                                <q-input   ref="ctrloq_gosta_melhor_amigo" v-model.trim="formData.oq_gosta_melhor_amigo"  label="O que você mais gosta no (melhor amigo)? " type="text" placeholder="Entrar O que você mais gosta no (melhor amigo)? "      
                                                class="" :error="isFieldValid('oq_gosta_melhor_amigo')" :error-message="getFieldError('oq_gosta_melhor_amigo')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            Seus pais são casados?  
                                            <div id="ctrl-pais_casados-holder"> 
                                                <q-field  borderless   :error="isFieldValid('pais_casados')" :error-message="getFieldError('pais_casados')">
                                                <q-option-group  ref="ctrlpais_casados" v-model="formData.pais_casados" :options="app.menus.gostaApelido"  inline size="md" ></q-option-group>
                                                </q-field>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            Moram juntos?  
                                            <div id="ctrl-pais_moram_juntos-holder"> 
                                                <q-field  borderless   :error="isFieldValid('pais_moram_juntos')" :error-message="getFieldError('pais_moram_juntos')">
                                                <q-option-group  ref="ctrlpais_moram_juntos" v-model="formData.pais_moram_juntos" :options="app.menus.gostaApelido"  inline size="md" ></q-option-group>
                                                </q-field>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Como chama seu pai?  
                                            <div id="ctrl-nome_pai-holder"> 
                                                <q-input   ref="ctrlnome_pai" v-model.trim="formData.nome_pai"  label="Como chama seu pai? " type="text" placeholder="Entrar Como chama seu pai? "      
                                                class="" :error="isFieldValid('nome_pai')" :error-message="getFieldError('nome_pai')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            O que ele faz?  
                                            <div id="ctrl-oq_pai_faz-holder"> 
                                                <q-input   ref="ctrloq_pai_faz" v-model.trim="formData.oq_pai_faz"  label="O que ele faz? " type="text" placeholder="Entrar O que ele faz? "      
                                                class="" :error="isFieldValid('oq_pai_faz')" :error-message="getFieldError('oq_pai_faz')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Vocês são amigos/se dão bem? Você conversa com ele?  
                                            <div id="ctrl-da_bem_pai-holder"> 
                                                <q-input   ref="ctrlda_bem_pai" v-model.trim="formData.da_bem_pai"  label="Vocês são amigos/se dão bem? Você conversa com ele? " type="text" placeholder="Entrar Vocês são amigos/se dão bem? Você conversa com ele? "      
                                                class="" :error="isFieldValid('da_bem_pai')" :error-message="getFieldError('da_bem_pai')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Como chama sua mãe?  
                                            <div id="ctrl-nome_mae-holder"> 
                                                <q-input   ref="ctrlnome_mae" v-model.trim="formData.nome_mae"  label="Como chama sua mãe? " type="text" placeholder="Entrar Como chama sua mãe? "      
                                                class="" :error="isFieldValid('nome_mae')" :error-message="getFieldError('nome_mae')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            O que ela faz? 
                                            <div id="ctrl-oq_mae_faz-holder"> 
                                                <q-input   ref="ctrloq_mae_faz" v-model.trim="formData.oq_mae_faz"  label="O que ela faz?" type="text" placeholder="Entrar O que ela faz?"      
                                                class="" :error="isFieldValid('oq_mae_faz')" :error-message="getFieldError('oq_mae_faz')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Vocês são amigos/se dão bem? Você conversa com ela?  
                                            <div id="ctrl-da_bem_mae-holder"> 
                                                <q-input   ref="ctrlda_bem_mae" v-model.trim="formData.da_bem_mae"  label="Vocês são amigos/se dão bem? Você conversa com ela? " type="text" placeholder="Entrar Vocês são amigos/se dão bem? Você conversa com ela? "      
                                                class="" :error="isFieldValid('da_bem_mae')" :error-message="getFieldError('da_bem_mae')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            Você tem irmãos?  
                                            <div id="ctrl-tem_irmaos-holder"> 
                                                <q-field  borderless   :error="isFieldValid('tem_irmaos')" :error-message="getFieldError('tem_irmaos')">
                                                <q-option-group  ref="ctrltem_irmaos" v-model="formData.tem_irmaos" :options="app.menus.gostaApelido"  inline size="md" ></q-option-group>
                                                </q-field>
                                            </div>
                                        </div>
                                        <div class="col-md-8 col-12">
                                            Qual nome deles?  
                                            <div id="ctrl-nome_irmaos-holder"> 
                                                <q-input   ref="ctrlnome_irmaos" v-model.trim="formData.nome_irmaos"  label="Qual nome deles? " type="text" placeholder="Entrar Qual nome deles? "      
                                                class="" :error="isFieldValid('nome_irmaos')" :error-message="getFieldError('nome_irmaos')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Quanto anos ele(s) tem?  
                                            <div id="ctrl-idade_irmaos-holder"> 
                                                <q-input   ref="ctrlidade_irmaos" v-model.trim="formData.idade_irmaos"  label="Quanto anos ele(s) tem? " type="text" placeholder="Entrar Quanto anos ele(s) tem? "      
                                                class="" :error="isFieldValid('idade_irmaos')" :error-message="getFieldError('idade_irmaos')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            O que ele(s) faz(em)?  
                                            <div id="ctrl-oq_irmaos_fazem-holder"> 
                                                <q-input   ref="ctrloq_irmaos_fazem" v-model.trim="formData.oq_irmaos_fazem"  label="O que ele(s) faz(em)? " type="text" placeholder="Entrar O que ele(s) faz(em)? "      
                                                class="" :error="isFieldValid('oq_irmaos_fazem')" :error-message="getFieldError('oq_irmaos_fazem')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Vocês são amigos/se dão bem? Você conversa com ele(s)?  
                                            <div id="ctrl-da_bem_irmaos-holder"> 
                                                <q-input   ref="ctrlda_bem_irmaos" v-model.trim="formData.da_bem_irmaos"  label="Vocês são amigos/se dão bem? Você conversa com ele(s)? " type="text" placeholder="Entrar Vocês são amigos/se dão bem? Você conversa com ele(s)? "      
                                                class="" :error="isFieldValid('da_bem_irmaos')" :error-message="getFieldError('da_bem_irmaos')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Qual seu irmão preferido/mais próximo?  
                                            <div id="ctrl-irmao_preferido-holder"> 
                                                <q-input   ref="ctrlirmao_preferido" v-model.trim="formData.irmao_preferido"  label="Qual seu irmão preferido/mais próximo? " type="text" placeholder="Entrar Qual seu irmão preferido/mais próximo? "      
                                                class="" :error="isFieldValid('irmao_preferido')" :error-message="getFieldError('irmao_preferido')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            Você gosta da escola?  
                                            <div id="ctrl-gosta_escola-holder"> 
                                                <q-field  borderless   :error="isFieldValid('gosta_escola')" :error-message="getFieldError('gosta_escola')">
                                                <q-option-group  ref="ctrlgosta_escola" v-model="formData.gosta_escola" :options="app.menus.gostaApelido"  inline size="md" ></q-option-group>
                                                </q-field>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            Por quê? 
                                            <div id="ctrl-pq_gosta_escola-holder"> 
                                                <q-input   ref="ctrlpq_gosta_escola" v-model.trim="formData.pq_gosta_escola"  label="Por quê?" type="text" placeholder="Entrar Por quê?"      
                                                class="" :error="isFieldValid('pq_gosta_escola')" :error-message="getFieldError('pq_gosta_escola')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            O que mais gosta da escola?  
                                            <div id="ctrl-oq_mais_gosta_escola-holder"> 
                                                <q-input   ref="ctrloq_mais_gosta_escola" v-model.trim="formData.oq_mais_gosta_escola"  label="O que mais gosta da escola? " type="text" placeholder="Entrar O que mais gosta da escola? "      
                                                class="" :error="isFieldValid('oq_mais_gosta_escola')" :error-message="getFieldError('oq_mais_gosta_escola')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            O que você menos gosta da escola?  
                                            <div id="ctrl-oq_menos_gosta_escola-holder"> 
                                                <q-input   ref="ctrloq_menos_gosta_escola" v-model.trim="formData.oq_menos_gosta_escola"  label="O que você menos gosta da escola? " type="text" placeholder="Entrar O que você menos gosta da escola? "      
                                                class="" :error="isFieldValid('oq_menos_gosta_escola')" :error-message="getFieldError('oq_menos_gosta_escola')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            Você já repetiu de ano?  
                                            <div id="ctrl-repetiu_ano-holder"> 
                                                <q-field  borderless   :error="isFieldValid('repetiu_ano')" :error-message="getFieldError('repetiu_ano')">
                                                <q-option-group  ref="ctrlrepetiu_ano" v-model="formData.repetiu_ano" :options="app.menus.gostaApelido"  inline size="md" ></q-option-group>
                                                </q-field>
                                            </div>
                                        </div>
                                        <div class="col-md-8 col-12">
                                            Qual e por quê? 
                                            <div id="ctrl-qual_ano_pq-holder"> 
                                                <q-input   ref="ctrlqual_ano_pq" v-model.trim="formData.qual_ano_pq"  label="Qual e por quê?" type="text" placeholder="Entrar Qual e por quê?"      
                                                class="" :error="isFieldValid('qual_ano_pq')" :error-message="getFieldError('qual_ano_pq')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Você gosta do seu(s) professor(es)/tia? 
                                            <div id="ctrl-gosta_professores-holder"> 
                                                <q-input   ref="ctrlgosta_professores" v-model.trim="formData.gosta_professores"  label="Você gosta do seu(s) professor(es)/tia?" type="text" placeholder="Entrar Você gosta do seu(s) professor(es)/tia?"      
                                                class="" :error="isFieldValid('gosta_professores')" :error-message="getFieldError('gosta_professores')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            De quem você mais gosta?  
                                            <div id="ctrl-professor_mais_gosta-holder"> 
                                                <q-input   ref="ctrlprofessor_mais_gosta" v-model.trim="formData.professor_mais_gosta"  label="De quem você mais gosta? " type="text" placeholder="Entrar De quem você mais gosta? "      
                                                class="" :error="isFieldValid('professor_mais_gosta')" :error-message="getFieldError('professor_mais_gosta')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Que matéria ela dá?  
                                            <div id="ctrl-qual_materia-holder"> 
                                                <q-input   ref="ctrlqual_materia" v-model.trim="formData.qual_materia"  label="Que matéria ela dá? " type="text" placeholder="Entrar Que matéria ela dá? "      
                                                class="" :error="isFieldValid('qual_materia')" :error-message="getFieldError('qual_materia')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Qual é sua matéria preferida?  
                                            <div id="ctrl-materia_preferida-holder"> 
                                                <q-input   ref="ctrlmateria_preferida" v-model.trim="formData.materia_preferida"  label="Qual é sua matéria preferida? " type="text" placeholder="Entrar Qual é sua matéria preferida? "      
                                                class="" :error="isFieldValid('materia_preferida')" :error-message="getFieldError('materia_preferida')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Qual matéria você menos gosta?  
                                            <div id="ctrl-materia_menos_gosta-holder"> 
                                                <q-input   ref="ctrlmateria_menos_gosta" v-model.trim="formData.materia_menos_gosta"  label="Qual matéria você menos gosta? " type="text" placeholder="Entrar Qual matéria você menos gosta? "      
                                                class="" :error="isFieldValid('materia_menos_gosta')" :error-message="getFieldError('materia_menos_gosta')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Você faz suas tarefas?  
                                            <div id="ctrl-faz_tarefas-holder"> 
                                                <q-input   ref="ctrlfaz_tarefas" v-model.trim="formData.faz_tarefas"  label="Você faz suas tarefas? " type="text" placeholder="Entrar Você faz suas tarefas? "      
                                                class="" :error="isFieldValid('faz_tarefas')" :error-message="getFieldError('faz_tarefas')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Sua mãe/Seu pai te ajuda nas tarefas?  
                                            <div id="ctrl-pais_ajudam_tarefa-holder"> 
                                                <q-input   ref="ctrlpais_ajudam_tarefa" v-model.trim="formData.pais_ajudam_tarefa"  label="Sua mãe/Seu pai te ajuda nas tarefas? " type="text" placeholder="Entrar Sua mãe/Seu pai te ajuda nas tarefas? "      
                                                class="" :error="isFieldValid('pais_ajudam_tarefa')" :error-message="getFieldError('pais_ajudam_tarefa')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            Seus pais acompanham suas notas?  
                                            <div id="ctrl-pais_acompanham_nota-holder"> 
                                                <q-field  borderless   :error="isFieldValid('pais_acompanham_nota')" :error-message="getFieldError('pais_acompanham_nota')">
                                                <q-option-group  ref="ctrlpais_acompanham_nota" v-model="formData.pais_acompanham_nota" :options="app.menus.gostaApelido"  inline size="md" ></q-option-group>
                                                </q-field>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            Eles ficam bravos quando você tira nota ruim/baixa?  
                                            <div id="ctrl-bravos_nota_baixa-holder"> 
                                                <q-field  borderless   :error="isFieldValid('bravos_nota_baixa')" :error-message="getFieldError('bravos_nota_baixa')">
                                                <q-option-group  ref="ctrlbravos_nota_baixa" v-model="formData.bravos_nota_baixa" :options="app.menus.gostaApelido"  inline size="md" ></q-option-group>
                                                </q-field>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            E quando tira notas boas/altas, como eles ficam?  
                                            <div id="ctrl-notas_boas_como-holder"> 
                                                <q-input   ref="ctrlnotas_boas_como" v-model.trim="formData.notas_boas_como"  label="E quando tira notas boas/altas, como eles ficam? " type="text" placeholder="Entrar E quando tira notas boas/altas, como eles ficam? "      
                                                class="" :error="isFieldValid('notas_boas_como')" :error-message="getFieldError('notas_boas_como')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Você presta atenção na aula?  
                                            <div id="ctrl-presta_atencao-holder"> 
                                                <q-input   ref="ctrlpresta_atencao" v-model.trim="formData.presta_atencao"  label="Você presta atenção na aula? " type="text" placeholder="Entrar Você presta atenção na aula? "      
                                                class="" :error="isFieldValid('presta_atencao')" :error-message="getFieldError('presta_atencao')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Você é muito arteiro?  
                                            <div id="ctrl-muito_arteiro-holder"> 
                                                <q-input   ref="ctrlmuito_arteiro" v-model.trim="formData.muito_arteiro"  label="Você é muito arteiro? " type="text" placeholder="Entrar Você é muito arteiro? "      
                                                class="" :error="isFieldValid('muito_arteiro')" :error-message="getFieldError('muito_arteiro')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            Você se considera um bom aluno? Por quê? 
                                            <div id="ctrl-considera_bom_aluno-holder"> 
                                                <q-input   ref="ctrlconsidera_bom_aluno" v-model.trim="formData.considera_bom_aluno"  label="Você se considera um bom aluno? Por quê?" type="text" placeholder="Entrar Você se considera um bom aluno? Por quê?"      
                                                class="" :error="isFieldValid('considera_bom_aluno')" :error-message="getFieldError('considera_bom_aluno')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            O que você quer ser quando crescer?  
                                            <div id="ctrl-oq_quer_ser-holder"> 
                                                <q-input   ref="ctrloq_quer_ser" v-model.trim="formData.oq_quer_ser"  label="O que você quer ser quando crescer? " type="text" placeholder="Entrar O que você quer ser quando crescer? "      
                                                class="" :error="isFieldValid('oq_quer_ser')" :error-message="getFieldError('oq_quer_ser')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            Você assiste muita TV?  
                                            <div id="ctrl-assiste_mt_tv-holder"> 
                                                <q-field  borderless   :error="isFieldValid('assiste_mt_tv')" :error-message="getFieldError('assiste_mt_tv')">
                                                <q-option-group  ref="ctrlassiste_mt_tv" v-model="formData.assiste_mt_tv" :options="app.menus.gostaApelido"  inline size="md" ></q-option-group>
                                                </q-field>
                                            </div>
                                        </div>
                                        <div class="col-md-8 col-12">
                                            O que você mais gosta de assistir?  
                                            <div id="ctrl-oq_gosta_assistir-holder"> 
                                                <q-input   ref="ctrloq_gosta_assistir" v-model.trim="formData.oq_gosta_assistir"  label="O que você mais gosta de assistir? " type="text" placeholder="Entrar O que você mais gosta de assistir? "      
                                                class="" :error="isFieldValid('oq_gosta_assistir')" :error-message="getFieldError('oq_gosta_assistir')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            Usa muito celular/computador? 
                                            <div id="ctrl-usa_celular_pc-holder"> 
                                                <q-field  borderless   :error="isFieldValid('usa_celular_pc')" :error-message="getFieldError('usa_celular_pc')">
                                                <q-option-group  ref="ctrlusa_celular_pc" v-model="formData.usa_celular_pc" :options="app.menus.gostaApelido"  inline size="md" ></q-option-group>
                                                </q-field>
                                            </div>
                                        </div>
                                        <div class="col-md-8 col-12">
                                            O que você mais gosta de fazer no celular/computador?  
                                            <div id="ctrl-oq_gosta_fazer_pc_celular-holder"> 
                                                <q-input   ref="ctrloq_gosta_fazer_pc_celular" v-model.trim="formData.oq_gosta_fazer_pc_celular"  label="O que você mais gosta de fazer no celular/computador? " type="text" placeholder="Entrar O que você mais gosta de fazer no celular/computador? "      
                                                class="" :error="isFieldValid('oq_gosta_fazer_pc_celular')" :error-message="getFieldError('oq_gosta_fazer_pc_celular')">
                                                </q-input>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-12">
                                            Gosta de sair de casa?  
                                            <div id="ctrl-gosta_sair_casa-holder"> 
                                                <q-field  borderless   :error="isFieldValid('gosta_sair_casa')" :error-message="getFieldError('gosta_sair_casa')">
                                                <q-option-group  ref="ctrlgosta_sair_casa" v-model="formData.gosta_sair_casa" :options="app.menus.gostaApelido"  inline size="md" ></q-option-group>
                                                </q-field>
                                            </div>
                                        </div>
                                        <div class="col-md-8 col-12">
                                            O que você mais gosta de fazer fora de casa?  
                                            <div id="ctrl-oq_gosta_fora_casa-holder"> 
                                                <q-input   ref="ctrloq_gosta_fora_casa" v-model.trim="formData.oq_gosta_fora_casa"  label="O que você mais gosta de fazer fora de casa? " type="text" placeholder="Entrar O que você mais gosta de fazer fora de casa? "      
                                                class="" :error="isFieldValid('oq_gosta_fora_casa')" :error-message="getFieldError('oq_gosta_fora_casa')">
                                                </q-input>
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
	import { required, numeric, } from 'src/services/validators';
	import { useMeta } from 'quasar';
	import { useApp } from 'src/composables/app';
	import { useEditPage } from 'src/composables/editpage';
	import { usePageStore } from 'src/stores/page';
	
	const props = defineProps({
		id: [String, Number],
		pageName: {
			type: String,
			default: 'anamnesepsi',
		},
		pageStoreKey: {
			type: String,
			default: 'ANAMNESEPSI',
		},
		routeName: {
			type: String,
			default: 'anamnesepsiedit',
		},
		pagePath: {
			type : String,
			default : 'anamnesepsi/edit',
		},
		apiPath: {
			type: String,
			default: 'anamnesepsi/edit',
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
		municipe_id: "", 
		escola: "", 
		ano: "", 
		apelido: "", 
		gosta_apelido: "", 
		pq_apelido: "", 
		prefere_sozinho: "", 
		muitos_amigos: "", 
		quem_amigos: "", 
		quem_melhor_amigo: "", 
		oq_gosta_melhor_amigo: "", 
		pais_casados: "", 
		pais_moram_juntos: "", 
		nome_pai: "", 
		oq_pai_faz: "", 
		da_bem_pai: "", 
		nome_mae: "", 
		oq_mae_faz: "", 
		da_bem_mae: "", 
		tem_irmaos: "", 
		nome_irmaos: "", 
		idade_irmaos: "", 
		oq_irmaos_fazem: "", 
		da_bem_irmaos: "", 
		irmao_preferido: "", 
		gosta_escola: "", 
		pq_gosta_escola: "", 
		oq_mais_gosta_escola: "", 
		oq_menos_gosta_escola: "", 
		repetiu_ano: "", 
		qual_ano_pq: "", 
		gosta_professores: "", 
		professor_mais_gosta: "", 
		qual_materia: "", 
		materia_preferida: "", 
		materia_menos_gosta: "", 
		faz_tarefas: "", 
		pais_ajudam_tarefa: "", 
		pais_acompanham_nota: "", 
		bravos_nota_baixa: "", 
		notas_boas_como: "", 
		presta_atencao: "", 
		muito_arteiro: "", 
		considera_bom_aluno: "", 
		oq_quer_ser: "", 
		assiste_mt_tv: "", 
		oq_gosta_assistir: "", 
		usa_celular_pc: "", 
		oq_gosta_fazer_pc_celular: "", 
		gosta_sair_casa: "", 
		oq_gosta_fora_casa: "", 
	}, props.pageData);
	
	const formData = reactive({ ...formDefaultValues });
	
	//event raised after form submit
	function afterSubmit(response) {
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		if(app.isDialogOpen()){
			app.closeDialogs(); // if page is open as dialog, close dialog
		}
		else if(props.redirect){
			app.navigateTo(`/anamnesepsi`);
		}
	}
	
	//vuelidate form validation rules
	const rules = computed(() => {
		return {
			municipe_id: { numeric }
		}
	});
	
	const page = useEditPage({ store, props, formData, rules, afterSubmit });
	
	const {  saving, loading, pageReady,   } = toRefs(page.state);
	
	const {  currentRecord: editRecord } = toRefs(store.state);
	
	const { load, submitForm, isFieldValid, getFieldError, mapOptionField, } = page.methods;
	
	useMeta(() => {
		return {
			//set browser title
			title: "Editar Anamnesepsi"
		}
	});
</script>
<style scoped>
</style>
