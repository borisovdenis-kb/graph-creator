<template>
  <div class="app-command-history">
    <div class="app-command-history__toolbar">

      <div class="app-command-history__toolbar-title">History</div>

      <div class="app-command-history__toolbar-buttons">
        <div class="app-command-history__buttons">
          <app-button v-on:click="undoAction()"
                      v-bind:is-disabled="isUndoEmpty"
                      title="Undo command"
                      icon="undo">
          </app-button>
        </div>

        <div class="app-command-history__buttons">
          <app-button v-on:click="redoAction()"
                      v-bind:is-disabled="isRedoEmpty"
                      title="Redo command"
                      icon="redo">
          </app-button>
        </div>
      </div>
    </div>

    <div class="app-command-history__command-list">
      <template v-if="!isUndoEmpty || !isRedoEmpty">
        <div class="app-command-history__row app-command-history__row--executed" v-for="command in undoCommandList">
          <div class="app-command-history__label app-command-history__label--left">
            <div class="app-command-history__label-name">{{ command.text }}</div>
          </div>
          <div class="app-command-history__label app-command-history__label--right">{{ command.date }}</div>
        </div>

        <div class="app-command-history__row app-command-history__row--canceled" v-for="command in redoCommandsList">
          <div class="app-command-history__label app-command-history__label--left">
            <div class="app-command-history__label-icon">✕</div>
            <div class="app-command-history__label-name app-command-history__label-name--canceled">
              {{ command.text }}
            </div>
          </div>
          <div class="app-command-history__label app-command-history__label--right">{{ command.date }}</div>
        </div>
      </template>
      <template v-else>
        <div class="app-command-history__empty-message">Empty</div>
      </template>
    </div>

  </div>
</template>

<script>
  import  './app-command-history.css';

  import AppButton from "../AppButton/AppButton";
  import {CH_UNDO_COMMAND, CH_REDO_COMMAND} from "../../store/commandHistory/commandHistory.actions";
  import {mapState, mapGetters} from 'vuex';

  export default {
    name: "app-command-history",
    components: {
      AppButton
    },
    methods: {
      undoAction() {
        this.$store.dispatch(`commandHistory/${CH_UNDO_COMMAND}`);
      },
      redoAction() {
        this.$store.dispatch(`commandHistory/${CH_REDO_COMMAND}`);
      }
    },
    computed: {
      ...mapState('commandHistory', {
        undoCommandList: 'undo',
        redoCommandsList: state => state.redo.slice().reverse()
      }),
      ...mapGetters('commandHistory', [
        'isUndoEmpty',
        'isRedoEmpty'
      ])
    }
  }
</script>
