<script lang="ts">
     import Window from './components/Window.svelte';
     import CopyButton from './components/CopyButton.svelte';
</script>

<div class="container flex mb-3 flex-col max-sm:items-center sm:flex-row gap-2 w-full justify-center">
    <Window title="📄Contract Address" width="full">
      <div class="max-sm:flex-col flex justify-center gap-2">
        <CopyButton />
        <p class="text-xxs sm:text-lg text-center">0x00acc2fa3bb7f6a6726c14d9e142d51fe3984dbfa32b5907e1e76425177875e2</p>
      </div>
    </Window>
  </div>
