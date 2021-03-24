<template>
  <div class="sidebar">
    <div class="logoCol">
      <router-link to="/dashboard">ZAUNZAR ERP</router-link>
    </div>
    <div class="menuCol">
      <ul>
        <li>
            <router-link to="/dashboard" title="Dashboard">
              <i class="menuIcon fa fa fa-dashboard"></i>
              <span class="menuText">
                Dashboard
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/bereite-Bauschritte" title="Bereite Bauschritte">
              <i class="menuIcon fa fa fa-bell-o"></i>
              <span class="menuText">
                Bereite Bauschritte
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/benutzer" title="Benutzer">
              <i class="menuIcon fa fa fa-users"></i>
              <span class="menuText">
                Benutzer
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/organisation" title="Organisation">
              <i class="menuIcon fa fa fa-university"></i>
              <span class="menuText">
                Organisation
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/angebote" title="Angebote">
              <i class="menuIcon fa fa fa-file-o"></i>
              <span class="menuText">
                Angebote
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/aufträge" title="Aufträge">
              <i class="menuIcon fa fa fa-file-text-o"></i>
              <span class="menuText">
                Aufträge
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/erwartete-wareneingänge" title="Erwartete Wareneingänge">
              <i class="menuIcon fa fa fa-shopping-cart"></i>
              <span class="menuText">
                Erwartete Wareneingänge
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/lieferant" title="Lieferant">
              <i class="menuIcon fa fa fa-shopping-cart"></i>
              <span class="menuText">
                Lieferant
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/bilder" title="Bilder">
              <i class="menuIcon fa fa fa-file-picture-o"></i>
              <span class="menuText">
                Bilder
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/elemente" title="Elemente">
              <i class="menuIcon fa fa fa-circle-thin"></i>
              <span class="menuText">
                Elemente
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/formelsammlung" title="Formelsammlung">
              <i class="menuIcon fa fa fa-code"></i>
              <span class="menuText">
                Formelsammlung
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/materialien" title="Materialien">
              <i class="menuIcon fa fa fa-cube"></i>
              <span class="menuText">
                Materialien
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/artikel" title="Artikel">
              <i class="menuIcon fa fa fa-rocket"></i>
              <span class="menuText">
                Artikel
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/einsatzplanung" title="Einsatzplanung">
              <i class="menuIcon fa fa fa-calendar"></i>
              <span class="menuText">
                Einsatzplanung
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/attribute" title="Attribute">
              <i class="menuIcon fa fa fa-circle-thin"></i>
              <span class="menuText">
                Attribute
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/einheiten" title="Einheiten">
              <i class="menuIcon fa fa fa-circle-thin"></i>
              <span class="menuText">
                Einheiten
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/preiskategorien" title="Preiskategorien">
              <i class="menuIcon fa fa fa-tags"></i>
              <span class="menuText">
                Preiskategorien
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/farbe" title="Farbe">
              <i class="menuIcon fa fa fa-tint"></i>
              <span class="menuText">
                Farbe
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/farbpalette" title="Farbpalette">
              <i class="menuIcon fa fa fa-tint"></i>
              <span class="menuText">
                Farbpalette
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/farbpalette-zu-farbe" title="Farbpalette zu Farbe">
              <i class="menuIcon fa fa fa-arrows-alt"></i>
              <span class="menuText">
                Farbpalette zu Farbe
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/austauschfarben" title="Austauschfarben">
              <i class="menuIcon fa fa fa-arrows-h"></i>
              <span class="menuText">
                Austauschfarben
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/attribut-zu-material" title="Attribut zu Material">
              <i class="menuIcon fa fa fa-circle-thin"></i>
              <span class="menuText">
                Attribut zu Material
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="umsatzsteuer" title="Umsatzsteuer">
              <i class="menuIcon fa fa fa-magnet"></i>
              <span class="menuText">
                Umsatzsteuer
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="material-zu-konfigurator" title="Material zu Konfigurator">
              <i class="menuIcon fa fa fa-arrows-h"></i>
              <span class="menuText">
                Material zu Konfigurator
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="montagearbeiten" title="Montagearbeiten">
              <i class="menuIcon fa fa fa-wrench"></i>
              <span class="menuText">
                Montagearbeiten
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/benoetigte-attribute" title="Benoetigte Attribute">
              <i class="menuIcon fa fa fa-language"></i>
              <span class="menuText">
                Benoetigte Attribute
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/einstellungen" title="Einstellungen">
              <i class="menuIcon fa fa fa-anchor"></i>
              <span class="menuText">
                Einstellungen
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/bauschritt" title="Bauschritt">
              <i class="menuIcon fa fa fa-compress"></i>
              <span class="menuText">
                Bauschritt
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/zahlungsart" title="Zahlungsart">
              <i class="menuIcon fa fa fa-dollar"></i>
              <span class="menuText">
                Zahlungsart
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/kontoname" title="Kontoname">
              <i class="menuIcon fa fa fa-cny"></i>
              <span class="menuText">
                Kontoname
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/auftrag-status" title="Auftrag Status">
              <i class="menuIcon fa fa fa-file-text"></i>
              <span class="menuText">
                Auftrag Status
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/fahigkeiten" title="Fähigkeiten">
              <i class="menuIcon fa fa fa-android"></i>
              <span class="menuText">
                Fähigkeiten
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/tag" title="Tag">
              <i class="menuIcon fa fa fa-tag"></i>
              <span class="menuText">
                Tag
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/bauschrittbearbeitung-text" title="Bauschrittbearbeitung Text">
              <i class="menuIcon fa fa fa-clock-o"></i>
              <span class="menuText">
                Bauschrittbearbeitung Text
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/bauschrittbearbeitung" title="Bauschrittbearbeitung">
              <i class="menuIcon fa fa fa-clock-o"></i>
              <span class="menuText">
                Bauschrittbearbeitung
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/lieferbedingungen" title="Lieferbedingungen">
              <i class="menuIcon fa fa fa-paper-plane-o"></i>
              <span class="menuText">
                Lieferbedingungen
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/lager" title="Lager">
              <i class="menuIcon fa fa fa-building-o"></i>
              <span class="menuText">
                Lager
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/lagerplatz" title="Lagerplatz">
              <i class="menuIcon fa fa fa-building-o"></i>
              <span class="menuText">
                Lagerplatz
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/lagerbewegung" title="Lagerbewegung">
              <i class="menuIcon fa fa fa-pied-piper-alt"></i>
              <span class="menuText">
                Lagerbewegung
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/bauschritt-zu-element-zu-auftrag" title="Bauschritt zu Element zu Auftrag">
              <i class="menuIcon fa fa fa-magic"></i>
              <span class="menuText">
                Bauschritt zu Element zu Auftrag
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/bestand-im-lager" title="Bestand im Lager">
              <i class="menuIcon fa fa fa-cubes"></i>
              <span class="menuText">
                Bestand im Lager
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/lagerbestand" title="Lagerbestand">
              <i class="menuIcon fa fa fa-clipboard"></i>
              <span class="menuText">
                Lagerbestand
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/kontakt-status" title="Kontakt Status">
              <i class="menuIcon fa fa fa-circle-thin"></i>
              <span class="menuText">
                Kontakt Status
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/konfigurierbarer-parameter" title="Konfigurierbarer Parameter">
              <i class="menuIcon fa fa fa-circle-thin"></i>
              <span class="menuText">
                Konfigurierbarer Parameter
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/konfigurierbarer-parameter-kategorie" title="Konfigurierbarer Parameter Kategorie">
              <i class="menuIcon fa fa fa-circle-thin"></i>
              <span class="menuText">
                Konfigurierbarer Parameter Kategorie
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/angebotsposition" title="Angebotsposition">
              <i class="menuIcon fa fa fa-circle-thin"></i>
              <span class="menuText">
                Angebotsposition
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/pickauftrag" title="Pickauftrag">
              <i class="menuIcon fa fa fa-angle-double-up"></i>
              <span class="menuText">
                Pickauftrag
              </span>
            </router-link>
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
