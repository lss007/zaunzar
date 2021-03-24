<template>
  <header class="siteHeader">
    <b-row class="align-items-center">
      <b-col>
        <div class="siteLogo">
          <router-link to="/"><img src="https://zz-erp.dev2.saas.do/custom/assets/images/logo.png" alt="..." width="100"></router-link>
        </div>
      </b-col>
      <b-col cols="auto">
        <b-dropdown id="dropdown-left" text="Thorsten Winternheimer" variant="light">
          <b-dropdown-item href="#">Einstellungen</b-dropdown-item>
          <b-dropdown-item href="#">API Token</b-dropdown-item>
          <b-dropdown-item href="#">Abmelden</b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>
  </header>
</template>
<script>
export default {
  name: 'Header',
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
