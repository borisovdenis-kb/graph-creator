<template>
  <div class="app-info-dialog">
    <app-base-dialog v-bind:options="options"
                     @dialogOk="onOkClick()"
                     @dialogCancel="onCancelClick()">
      <template slot="content">
        <div class="app-info-dialog__content">{{ inData.text }}</div>
      </template>
    </app-base-dialog>
  </div>
</template>

<script>
  import './app-info-dialog.css';
  import AppBaseDialog from "../AppBaseDialog/AppBaseDialog";

  export default {
    name: "AppInfoDialog",
    components: {AppBaseDialog},
    props: ['inData', 'options'],
    methods: {
      onOkClick() {
        this.options.onResolveClose();
      },
      onCancelClick() {
        this.options.onRejectClose();
      }
    }
  }
</script>

<style scoped>

</style>
