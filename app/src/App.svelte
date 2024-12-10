<script lang="ts">
  import Window from "./lib/components/Window.svelte";
  import Button from "./lib/components/Button.svelte";
  import { currentTheme } from "./lib/stores/theme";
  import schizodio_title from "./assets/images/schizodio.png";
  import CopyButton from "./lib/components/CopyButton.svelte";
  import AudioPlayer from "./lib/components/AudioPlayer.svelte";
  import ContractAddress from "./lib/contractaddress.svelte";
  import HeroWindow from "./lib/herowindow.svelte";
  import GlitchEffect from "./lib/components/GlitchEffect.svelte";

  let wildValue = 1;
  let wildMode = false;

  const menuItems = [
    { label: "New" },
    { label: "Open..." },
    { label: "Save", disabled: true },
    { label: "Exit" },
  ];

  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  $: ({
    colors: { background, window, text, highlight, highlightText },
  } = $currentTheme);
</script>

<main
  class="static h-full sm:h-screen w-full p-5 font-windows p-5 font-windows"
  style="--win95-bg: {background}; --win95-window: {window}; --win95-text: {text}; --win95-highlight: {highlight}; --win95-highlight-text: {highlightText}; -webkit-font-smoothing: none || antialiased || subpixel-antialiased -moz-osx-font-smoothing: auto || inherit || unset || grayscale font-smoothing: auto || inherit || unset || grayscale"
>
  <div class="fixed inset-0 z-0">
    <GlitchEffect />
  </div>
  <!-- MAIN COLUMN -->
  <div
    class="gap-2 flex flex-col justify-center items-center h-full w-full relative z-10"
  >
    <div class="container flex w-full justify-center">
      <img src={schizodio_title} alt="Schizodio" width="400px" />
    </div>

    <!-- FIRST ROW -->
    <div
      class="container flex flex-col max-sm:items-center sm:flex-row gap-2 w-full justify-center"
    >
      <HeroWindow bind:wildMode />
    </div>

    <!-- CONTRACT ADDRESS -->
    <ContractAddress />
  </div>
</main>

<style>
  main {
    background-color: var(--win95-bg);
    width: 100%;
    height: 100%;
    position: relative;
  }
  :global(.win95-border) {
    border-color: var(--win95-window) var(--win95-text) var(--win95-text)
      var(--win95-window) !important;
  }

  :global(.win95-border-inset) {
    border-color: var(--win95-text) var(--win95-window) var(--win95-window)
      var(--win95-text) !important;
    background-color: var(--win95-window) !important;
  }

  :global(.bg-win95-blue) {
    background-color: var(--win95-highlight) !important;
  }

  :global(.text-win95-light) {
    color: var(--win95-highlight-text) !important;
  }

  :global(.bg-win95-gray) {
    background-color: var(--win95-window) !important;
  }

  :global(.text-win95-text) {
    color: var(--win95-text) !important;
  }
</style>
