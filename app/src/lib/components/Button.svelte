<script lang="ts">
  export let disabled = false;
</script>

<button class="win95-button" {disabled} on:click>
  <slot></slot>
</button>