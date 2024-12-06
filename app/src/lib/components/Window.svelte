<script lang="ts">
  export let title: string;
  export let width = "100%";
  export let height = "auto";
</script>

<div class="bg-win95-gray win95-border" style="width: {width}; height: {height};">
  <div class="bg-win95-blue text-xs text-win95-light px-1 py-0.5 flex justify-between items-center font-windows font-bold">
    <div>{title}</div>
    <button class="win95-button flex items-center justify-center p-0 leading-none">×</button>
  </div>
  <div class="p-2">
    <slot></slot>
  </div>
</div>