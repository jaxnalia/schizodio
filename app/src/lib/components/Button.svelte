<script lang="ts">
  export let disabled = false;
  export let width = "100%";
  export let height = "auto";
</script>

<button class="win95-button font-windows px-2" style="width: {width}; height: {height};" {disabled} on:click>
  <slot></slot>
</button>