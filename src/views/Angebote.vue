<template>
  <div class="angebotePage">
    <b-row class="align-items-center no-gutters mb-4">
      <b-col>
        <h1 class="pageHeading">Angebot "1000 " ansehen</h1>
      </b-col>
      <b-col cols="auto">
        <b-breadcrumb :items="items" class="breadcrumbStyle"></b-breadcrumb>
      </b-col>
    </b-row>
    <div class="topRightOptions">
      <b-row class="justify-content-end mb-3">
        <b-col cols="auto">
          <ul class="optionLinks">
            <li><a title="" target="" href="/angebots/edit/1" class="btn btn-info" data-toggle="tooltip" data-html="true" data-placement="top" data-title="&quot;1000 &quot; bearbeiten" data-original-title=""><i class="ace-icon fa fa-pencil"></i></a></li>
            <li><a title="" target="" href="/angebots/delete/1" class="btn btn-danger confirmation-box-link" data-toggle="tooltip" data-html="true" data-placement="top" data-title="&quot;1000 &quot; löschen" data-confirmation="Soll Angebot &quot;1000 &quot; wirklich gelöscht werden?" data-confirmation-ok="Ok" data-confirmation-cancel="Abbrechen" data-original-title=""><i class="ace-icon fa fa-trash"></i></a></li>
            <li><a title="" target="" href="/angebots/activity/1" class="btn btn-secondary" data-toggle="tooltip" data-html="true" data-placement="top" data-title="Aktivität zu &quot;1000 &quot; anzeigen" data-original-title=""><i class="ace-icon fa fa-history"></i></a></li>
            <li><a title="" target="" href="/angebots/itemaction/41/1" class="btn btn-success" data-toggle="tooltip" data-html="true" data-placement="top" data-title="Copy" data-original-title=""><i class="ace-icon fa fa-copy"></i></a></li>
            <li><b-dropdown id="dropdown-right" right  variant="success">
              <template #button-content>
                <i class="ace-icon fa fa-plus"></i>
              </template>
              <b-dropdown-item href="#"><i class="ace-icon fa fa-file-pdf-o"></i> Angebotsdateien erstellen</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ace-icon fa fa-align-right"></i> Angebotsposition Dienstleistung erstellen</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ace-icon fa fa-align-right"></i> Angebotsposition Artikel erstellen</b-dropdown-item>
              <b-dropdown-item href="#"><i class="ace-icon fa fa-cut"></i> Artikelposition Schnittware erstellen</b-dropdown-item>
            </b-dropdown></li>
          </ul>
        </b-col>
      </b-row>
    </div>
    <div class="tabStyle1">
      <b-tabs>
        <b-tab>
          <template #title>
            <span class="tabLinkIcon"><i class="fa fa-info-circle"></i></span> <span class="tabLinkText">Details</span>
          </template>
          <p class="p-3">Tab contents 1</p>
        </b-tab>
        <b-tab>
          <template #title>
            <span class="tabLinkIcon"><i class="fa fa-align-right"></i></span> <span class="tabLinkText">Angebotspositionen</span> <b-badge variant="dark">2</b-badge>
          </template>
          <p class="p-3">Tab contents 2</p>
        </b-tab>
        <b-tab>
          <template #title>
            <span class="tabLinkIcon"><i class="fa fa-file-pdf-o"></i></span> <span class="tabLinkText">Angebotsdateiens</span> <b-badge variant="dark">0</b-badge>
          </template>
          <p class="p-3">Tab contents 3</p>
        </b-tab>
        <b-tab>
          <template #title>
            <span class="tabLinkIcon"><i class="fa fa-archive"></i></span> <span class="tabLinkText">Angebotshistories</span> <b-badge variant="dark">2</b-badge>
          </template>
          <p class="p-3">Tab contents 5</p>
        </b-tab>
        <b-tab>
          <template #title>
            <span class="tabLinkIcon"><i class="fa fa-align-right"></i></span> <span class="tabLinkText">Angebotsposition Dienstleistungs</span> <b-badge variant="dark">0</b-badge>
          </template>
          <p class="p-3">Tab contents 4</p>
        </b-tab>
        <b-tab>
          <template #title>
            <span class="tabLinkIcon"><i class="fa fa-align-right"></i></span> <span class="tabLinkText">Angebotsposition Artikels</span> <b-badge variant="dark">0</b-badge>
          </template>
          <p class="p-3">Tab contents 6</p>
        </b-tab>
        <b-tab>
          <template #title>
            <span class="tabLinkIcon"><i class="fa fa-cut"></i></span> <span class="tabLinkText">Artikelposition Schnittwares</span> <b-badge variant="dark">0</b-badge>
          </template>
          <p class="p-3">Tab contents 7</p>
        </b-tab>
        <b-tab active>
          <template #title>
            <span class="tabLinkIcon"><i class="fa fa-file-o"></i></span> <span class="tabLinkText">Angebot</span>
          </template>
          <div class="tabContentBody">
            <div class="formStyle">
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <h3 class="mdTitle">Stammdaten</h3>
              <b-row>
                <b-col>
                  <h4 class="smTitle">Kontakatinformationen</h4>
                  <div class="py-2">
                    <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
                      <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                      <b-form-input id="input-2" v-model="form.name" placeholder="Enter name"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                      <b-form-select id="input-3" v-model="form.food" :options="foods" ></b-form-select>
                    </b-form-group>

                    <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                      <b-form-checkbox-group v-model="form.checked" id="checkboxes-4" :aria-describedby="ariaDescribedby">
                        <b-form-checkbox value="Manuell geändert">Manuell geändert</b-form-checkbox>
                      </b-form-checkbox-group>
                    </b-form-group>
                  </div>
                </b-col>
                <b-col>
                  <h4 class="smTitle">Info</h4>
                </b-col>
              </b-row>
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Angebotverwaltung',
            href: '#/angebote'
          },
          {
            text: ' Angebot "1000 " ansehen ',
            active: true
          }
        ],
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    }
  }
</script>
