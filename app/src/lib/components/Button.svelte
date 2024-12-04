<script lang="ts">
  export let disabled = false;
</script>

<button class="win95-button font-windows px-2" {disabled} on:click>
  <slot></slot>
</button>