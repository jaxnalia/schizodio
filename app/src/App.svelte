<script lang="ts">
  import Window from './lib/components/Window.svelte';
  import Button from './lib/components/Button.svelte';
  import { currentTheme } from './lib/stores/theme';
  import schizodio_title from "./assets/images/schizodio.png";
  import schizodio_sq from "./assets/images/schizodio_sq.jpg";
  import danceGif from "./assets/images/dance-schizo.gif";
  import CopyButton from './lib/components/CopyButton.svelte';
  // import Bliss from "./assets/images/bliss.jpg"
  import AudioPlayer from './lib/components/AudioPlayer.svelte';
  import VolumeSlider from './lib/components/VolumeSlider.svelte';

  let volumeValue = 1;

  const menuItems = [
    { label: 'New' },
    { label: 'Open...' },
    { label: 'Save', disabled: true },
    { label: 'Exit' }
  ];

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  $: ({
    colors: { background, window, text, highlight, highlightText }
  } = $currentTheme);
</script>

<main 
  class="static h-full sm:h-screen w-full p-5 font-windows"
  style="--win95-bg: {background}; --win95-window: {window}; --win95-text: {text}; --win95-highlight: {highlight}; --win95-highlight-text: {highlightText}; -webkit-font-smoothing: none || antialiased || subpixel-antialiased -moz-osx-font-smoothing: auto || inherit || unset || grayscale font-smoothing: auto || inherit || unset || grayscale"
>
<!-- MAIN COLUMN -->
<div class="gap-2 flex flex-col justify-center items-center h-full w-full">
  <div class="container flex w-full justify-center ">
    <img src={schizodio_title} alt="Schizodio" width=400px>
  </div>

  <!-- FIRST ROW -->

  <div class="container flex flex-col max-sm:items-center sm:flex-row gap-2 w-full justify-center">
    <!-- FIRST WINDOW -->
    <Window title="✨Schizodio✨" width="full">
      <style>
        .bliss {
          background-image: URL("https://upload.wikimedia.org/wikipedia/en/2/27/Bliss_%28Windows_XP%29.png");
          background-size: cover; 
          background-position: center;
        }
      </style>
      <div class="bliss w-full sm:w-96">
        <img src={danceGif} alt="SCHIZODIO" width="auto">
      </div>
      <div class="flex gap-1 w-full mt-1.5">
          <a class="w-full" href="https://x.com/schizodio"><Button>Twitter</Button></a>
          <a class="w-full" href="https://t.me/schizodio"><Button>Telegram</Button></a>
          <a class="w-full" href="https://app.avnu.fi/en?mode=simple&tokenFrom=0x4718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d&tokenTo=0xacc2fa3bb7f6a6726c14d9e142d51fe3984dbfa32b5907e1e76425177875e2&amount=0.001"><Button>Dex</Button></a>
          <a class="w-full" href="https://dexscreener.com/starknet/0x00acc2fa3bb7f6a6726c14d9e142d51fe3984dbfa32b5907e1e76425177875e2-0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d-2347948331754475397897284791279200659-5982-0x0"><Button>Chart</Button></a>
      </div>
    </Window>
    <div class="flex flex-col gap-2 max-w-96 w-full sm:w-64">
      <Window title="😵schizodio.exe" width="full">
        <div class="relative">
          <label class="text-xs block mb-1">How schizo you are?</label>
          <div class="flex text-xs gap-2">
            <span>Low</span>
            <VolumeSlider bind:value={volumeValue} steps={10} />
            <span>High</span>
          </div>
          
        </div>
      </Window>
      <Window title="💿schizo.mp3" width="full">
        <AudioPlayer audioSrc="./canttakemyeyesoffyou.mp3"/>
      </Window>
      <img src={schizodio_sq} alt="SCHIZODIO" width="auto" class="">
      <!-- <img src={danceGif} alt="SCHIZODIO" width="auto"> -->
  
    </div>
  </div>

  <!-- CONTRACT ADDRESS -->

  <div class="container flex mb-3 flex-col max-sm:items-center sm:flex-row gap-2 w-full justify-center">
    <!-- <img src={schizsphere} alt="SCHIZODIO" width="100"> -->
    <Window title="📄Contract Address" width="full">
      <div class="max-sm:flex-col flex justify-center gap-2">
        <CopyButton />
        <p class="text-xxs sm:text-lg text-center">0x00acc2fa3bb7f6a6726c14d9e142d51fe3984dbfa32b5907e1e76425177875e2</p>
        
      </div>
      
    </Window>
  
    
  </div>
</div>

</main>

<style>
  main {
    background-color: var(--win95-bg);
  }

  :global(.win95-border) {
    border-color: var(--win95-window) var(--win95-text) var(--win95-text) var(--win95-window) !important;
  }

  :global(.win95-border-inset) {
    border-color: var(--win95-text) var(--win95-window) var(--win95-window) var(--win95-text) !important;
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