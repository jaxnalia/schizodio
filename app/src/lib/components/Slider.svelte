<script lang="ts">
  export let value = 50;
  export let min = 0;
  export let max = 100;
  export let step = 1;
  export let disabled = false;

  let isDragging = false;
  let sliderTrack: HTMLDivElement;

  function handleMouseDown() {
    if (!disabled) {
      isDragging = true;
    }
  }

  function handleMouseUp() {
    isDragging = false;
  }

  function handleMouseMove(event: MouseEvent) {
    if (isDragging && sliderTrack) {
      const rect = sliderTrack.getBoundingClientRect();
      const percentage = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      value = Math.round((min + (max - min) * percentage) / step) * step;
    }
  }
</script>

<svelte:window 
  on:mouseup={handleMouseUp}
  on:mousemove={handleMouseMove}
/>

<div class="flex items-center gap-2 text-xs">
  Low
  <div
    bind:this={sliderTrack}
    class="win95-border-inset flex-1 h-5 relative cursor-pointer"
    class:cursor-not-allowed={disabled}
    on:mousedown={handleMouseDown}
  >
    <div 
      class="absolute top-0 bottom-0 left-0 bg-win95-dark"
      style="width: {((value - min) / (max - min)) * 100}%"
    />
    <div
      class="win95-button absolute w-3 h-full -ml-1.5 cursor-grab active:cursor-grabbing"
      class:cursor-not-allowed={disabled}
      style="left: {((value - min) / (max - min)) * 100}%"
    />
  </div>
  High
  <!-- <div class="win95-border-inset px-2 py-0.5 min-w-[50px] text-center font-ms-sans text-sm">
    {value}
  </div> -->
</div>