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
            <li><a title="" target="" href="/angebots/edit/1" class="btn btn-info" data-toggle="tooltip" data-html="true" data-placement="top" data-title="&quot;1000 &quot; bearbeiten" data-original-title=""><i class="ace-icon fa fa-pencil"></i></a>
            </li>
            <li><a title="" target="" href="/angebots/delete/1" class="btn btn-danger confirmation-box-link" data-toggle="tooltip" data-html="true" data-placement="top" data-title="&quot;1000 &quot; löschen"
                data-confirmation="Soll Angebot &quot;1000 &quot; wirklich gelöscht werden?" data-confirmation-ok="Ok" data-confirmation-cancel="Abbrechen" data-original-title=""><i class="ace-icon fa fa-trash"></i></a></li>
            <li><a title="" target="" href="/angebots/activity/1" class="btn btn-secondary" data-toggle="tooltip" data-html="true" data-placement="top" data-title="Aktivität zu &quot;1000 &quot; anzeigen" data-original-title=""><i
                  class="ace-icon fa fa-history"></i></a></li>
            <li><a title="" target="" href="/angebots/itemaction/41/1" class="btn btn-success" data-toggle="tooltip" data-html="true" data-placement="top" data-title="Copy" data-original-title=""><i class="ace-icon fa fa-copy"></i></a></li>
            <li>
              <b-dropdown id="dropdown-right" right variant="success">
                <template #button-content>
                  <i class="ace-icon fa fa-plus"></i>
                </template>
                <b-dropdown-item href="#"><i class="ace-icon fa fa-file-pdf-o"></i> Angebotsdateien erstellen</b-dropdown-item>
                <b-dropdown-item href="#"><i class="ace-icon fa fa-align-right"></i> Angebotsposition Dienstleistung erstellen</b-dropdown-item>
                <b-dropdown-item href="#"><i class="ace-icon fa fa-align-right"></i> Angebotsposition Artikel erstellen</b-dropdown-item>
                <b-dropdown-item href="#"><i class="ace-icon fa fa-cut"></i> Artikelposition Schnittware erstellen</b-dropdown-item>
              </b-dropdown>
            </li>
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
            <span class="tabLinkIcon"><i class="fa fa-align-right"></i></span> <span class="tabLinkText">Angebotspositionen</span>
            <b-badge variant="dark">2</b-badge>
          </template>
          <p class="p-3">Tab contents 2</p>
        </b-tab>
        <b-tab>
          <template #title>
            <span class="tabLinkIcon"><i class="fa fa-file-pdf-o"></i></span> <span class="tabLinkText">Angebotsdateiens</span>
            <b-badge variant="dark">0</b-badge>
          </template>
          <p class="p-3">Tab contents 3</p>
        </b-tab>
        <b-tab>
          <template #title>
            <span class="tabLinkIcon"><i class="fa fa-archive"></i></span> <span class="tabLinkText">Angebotshistories</span>
            <b-badge variant="dark">2</b-badge>
          </template>
          <p class="p-3">Tab contents 5</p>
        </b-tab>
        <b-tab>
          <template #title>
            <span class="tabLinkIcon"><i class="fa fa-align-right"></i></span> <span class="tabLinkText">Angebotsposition Dienstleistungs</span>
            <b-badge variant="dark">0</b-badge>
          </template>
          <p class="p-3">Tab contents 4</p>
        </b-tab>
        <b-tab>
          <template #title>
            <span class="tabLinkIcon"><i class="fa fa-align-right"></i></span> <span class="tabLinkText">Angebotsposition Artikels</span>
            <b-badge variant="dark">0</b-badge>
          </template>
          <p class="p-3">Tab contents 6</p>
        </b-tab>
        <b-tab>
          <template #title>
            <span class="tabLinkIcon"><i class="fa fa-cut"></i></span> <span class="tabLinkText">Artikelposition Schnittwares</span>
            <b-badge variant="dark">0</b-badge>
          </template>
          <p class="p-3">Tab contents 7</p>
        </b-tab>
        <b-tab active>
          <template #title>
            <span class="tabLinkIcon"><i class="fa fa-file-o"></i></span> <span class="tabLinkText">Angebot</span>
          </template>
          <div class="tabContentBody">
            <div class="formStyle">
              <b-form>
                <h3 class="mdTitle">Stammdaten</h3>
                <div class="py-2">
                  <h4 class="smTitle">Kontakatinformationen</h4>
                  <b-row>
                    <b-col cols="6">
                      <b-form-group id="input-group-1" label="Kunde" label-for="Kunde">
                        <b-form-input id="Kunde" placeholder="Herr Testkunde für Classic"></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col cols="6">
                      <b-form-group id="input-group-3" label="Lieferadresse" label-for="Lieferadresse">
                        <b-form-select id="Lieferadresse" v-model="form.Lieferadresse" :options="deliveryaddress"></b-form-select>
                      </b-form-group>
                    </b-col>
                    <b-col cols="6">
                      <b-form-group id="input-group-3" label="Postadresse" label-for="Postadresse">
                        <b-form-select id="Postadresse" v-model="form.Postadresse" :options="Postaladdress"></b-form-select>
                      </b-form-group>
                    </b-col>
                    <b-col cols="6">
                      <b-form-group id="input-group-3" label="Rechnungsadresse" label-for="Rechnungsadresse">
                        <b-form-select id="Rechnungsadresse" v-model="form.Rechnungsadresse" :options="Billingaddress"></b-form-select>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </div>

                <!-- <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                  <b-form-checkbox-group id="checkboxes-4" :aria-describedby="ariaDescribedby">
                    <b-form-checkbox value="Manuell geändert">Manuell geändert</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group> -->
                <div class="py-2">
                  <h4 class="smTitle">Info</h4>
                  <b-row>
                    <b-col cols="6">
                      <b-form-group id="input-group-1" label="Titel" label-for="Titel">
                        <b-form-input id="Titel"></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col cols="6">
                      <b-form-group id="input-group-1" label="Angebotsnummer" label-for="Angebotsnummer">
                        <b-form-input id="Angebotsnummer" placeholder="1000"></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col cols="6">
                      <b-form-group id="input-group-1" label="Datum" label-for="Datum">
                        <b-form-input id="Datum" placeholder="15.10.2019" disabled></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col cols="6">
                      <b-form-group id="input-group-3" label="Mitarbeiter" label-for="Mitarbeiter">
                        <b-form-select id="Mitarbeiter" v-model="form.Mitarbeiter" :options="Employee"></b-form-select>
                      </b-form-group>
                    </b-col>
                    <b-col cols="6">
                      <b-form-group id="input-group-3" label="Status" label-for="Status">
                        <b-form-select id="Status" v-model="form.Status" :options="status"></b-form-select>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </div>
                <div class="py-2">
                  <h3 class="mdTitle">Kopfzeile</h3>
                  <b-row>
                    <b-col cols="12">
                      <b-form-textarea id="textarea" v-model="text" placeholder="" rows="8"></b-form-textarea>
                    </b-col>
                  </b-row>
                </div>
              </b-form>
              <div class="my-4">
                <b-table-simple hover small caption-top responsive>
                  <b-thead head-variant="dark">
                    <b-tr>
                      <b-th>POSITION</b-th>
                      <b-th>NAME</b-th>
                      <b-th>MENGE</b-th>
                      <b-th>EINZELPREIS</b-th>
                      <b-th>RABATT</b-th>
                      <b-th>UST.</b-th>
                      <b-th>GESAMTPREIS</b-th>
                    </b-tr>
                  </b-thead>
                  <b-tbody>
                    <b-tr>
                      <b-th rowspan="3">Belgium</b-th>
                      <b-th class="text-right">Antwerp</b-th>
                      <b-td>56</b-td>
                      <b-td>22</b-td>
                      <b-td>43</b-td>
                      <b-td variant="success">72</b-td>
                      <b-td>23</b-td>
                    </b-tr>
                    <b-tr>
                      <b-th class="text-right">Gent</b-th>
                      <b-td>46</b-td>
                      <b-td variant="warning">18</b-td>
                      <b-td>50</b-td>
                      <b-td>61</b-td>
                      <b-td variant="danger">15</b-td>
                    </b-tr>
                    <b-tr>
                      <b-th class="text-right">Brussels</b-th>
                      <b-td>51</b-td>
                      <b-td>27</b-td>
                      <b-td>38</b-td>
                      <b-td>69</b-td>
                      <b-td>28</b-td>
                    </b-tr>
                    <b-tr>
                      <b-th rowspan="2">The Netherlands</b-th>
                      <b-th class="text-right">Amsterdam</b-th>
                      <b-td variant="success">89</b-td>
                      <b-td>34</b-td>
                      <b-td>69</b-td>
                      <b-td>85</b-td>
                      <b-td>38</b-td>
                    </b-tr>
                    <b-tr>
                      <b-th class="text-right">Utrecht</b-th>
                      <b-td>80</b-td>
                      <b-td variant="danger">12</b-td>
                      <b-td>43</b-td>
                      <b-td>36</b-td>
                      <b-td variant="warning">19</b-td>
                    </b-tr>
                  </b-tbody>
                  <b-tfoot>
                    <b-tr>
                      <b-td colspan="7" variant="secondary" class="text-right">
                        Total Rows: <b>5</b>
                      </b-td>
                    </b-tr>
                  </b-tfoot>
                </b-table-simple>
              </div>
              <b-button type="button" variant="primary">Speichern</b-button>
              <b-button type="button" variant="primary">Angebot versenden</b-button>
              <b-button type="reset" variant="danger" disabled>Auftrag Erstellen</b-button>
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
        items: [{
            text: 'Angebotverwaltung',
            href: '#/angebote'
          },
          {
            text: ' Angebot "1000 " ansehen ',
            active: true
          }
        ],
        form: {
          name: '',
          Lieferadresse: null,
          Postadresse: null,
          Rechnungsadresse: null,
          Mitarbeiter: null,
          Status: null,
          checked: []
        },
        deliveryaddress: [{
          text: 'Select One',
          value: null
        }, 'Baustraße Salzburg', 'Universalstraße Salzburg', 'Stromberger Straße 61 Weiler/Bingen'],
        Postaladdress: [{
          text: 'Select One',
          value: null
        }, 'Mozartstraße Salzburg', 'Universalstraße Salzburg'],
        Billingaddress: [{
          text: 'Select One',
          value: null
        }, 'Geldstraße Salzburg', 'Universalstraße Salzburg'],
        Employee: [{
          text: 'Select One',
          value: null
        }, 'Herr Torben Daudistel', 'Herr Oliver Kreusel', 'Herr Daniel Muntaniol', 'Herr Dr. Lars Nungesser', 'Herr Julian Kling', 'Herr Thorsten Winternheimer', 'Herr Admin Zaunzar', 'Herr Test Kundennummer'],
        status: [{
          text: 'Select One',
          value: null
        }, 'Entwurf', 'versandt', 'PDFerstellt'],
        show: true
      }
    }
  }
</script>
