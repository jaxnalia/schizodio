<script lang="ts">
  import Window from './lib/components/Window.svelte';
  import Button from './lib/components/Button.svelte';
  import TextField from './lib/components/TextField.svelte';
  import Slider from './lib/components/Slider.svelte';
  import Checkbox from './lib/components/Checkbox.svelte';
  import Radio from './lib/components/Radio.svelte';
  import Select from './lib/components/Select.svelte';
  import ProgressBar from './lib/components/ProgressBar.svelte';
  import Tabs from './lib/components/Tabs.svelte';
  import Menu from './lib/components/Menu.svelte';
  import ThemeSelector from './lib/components/ThemeSelector.svelte';
  import { currentTheme } from './lib/stores/theme';
  import schizodio_title from "./assets/images/schizodio.png";
  import schizodio_sq from "./assets/images/schizodio_sq.jpg";
  import schizsphere from "./assets/images/SchizoSphere.gif";
  import danceGif from "./assets/images/dance-schizo.gif";
  import CopyButton from './lib/components/CopyButton.svelte';
  import Bliss from "./assets/images/bliss.jpg"
  import AudioPlayerButton from './lib/components/AudioPlayerButton.svelte';
    import Apb from './lib/components/APB.svelte';

  let textValue = '';
  let sliderValue = 100;
  let volumeValue = 100;
  let isChecked = false;
  let selectedRadio = 'option1';
  let selectedOption = 'option1';
  let progress = 45;
  let activeTab = 'Tab 1';
  let isMenuOpen = false;

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
<div class="gap-8 flex flex-col justify-center items-center h-full w-full">
  <div class="container flex w-full justify-center ">
    <img src={schizodio_title} alt="Schizodio" width=400px>
  </div>

  <!-- FIRST ROW -->

  <div class="container flex mb-3 flex-col max-sm:items-center sm:flex-row gap-3 w-full justify-center">
    <!-- FIRST WINDOW -->
    <Window title="✨Schizodio✨">
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
      <div class="flex gap-1 w-full mt-1">
          <a class="w-full" href="https://x.com/schizodio"><Button>Twitter</Button></a>
          <a class="w-full" href="https://t.me/schizodio"><Button>Telegram</Button></a>
          <a class="w-full" href="https://app.avnu.fi/en?mode=simple&tokenFrom=0x4718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d&tokenTo=0xacc2fa3bb7f6a6726c14d9e142d51fe3984dbfa32b5907e1e76425177875e2&amount=0.001"><Button>Dex</Button></a>
          <a class="w-full" href="https://dexscreener.com/starknet/0x00acc2fa3bb7f6a6726c14d9e142d51fe3984dbfa32b5907e1e76425177875e2-0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d-2347948331754475397897284791279200659-5982-0x0"><Button>Chart</Button></a>
      </div>
    </Window>
    <div class="flex flex-col gap-3 max-w-96 w-full sm:w-64">
      <Window title="😵schizodio.exe" width="full">
        <div>
          <label class="text-xs block mb-1">How schizo you are?</label>
          <Slider bind:value={volumeValue} min={0} max={100} step={10} />
        </div>
      </Window>
      <Window title="💿schizo.mp3" width="full">
        <!-- <AudioPlayerButton audioSrc="./canttakemyeyesoffyou.mp3"/> -->
        <Apb audioSrc="./canttakemyeyesoffyou.mp3"/>
      </Window>
      <img src={schizodio_sq} alt="SCHIZODIO" width="auto" class="rounded-full">
      <!-- <img src={danceGif} alt="SCHIZODIO" width="auto"> -->
  
    </div>
  </div>

  <!-- CONTRACT ADDRESS -->

  <div class="container flex mb-3 flex-col max-sm:items-center sm:flex-row gap-3 w-full justify-center">
    <!-- <img src={schizsphere} alt="SCHIZODIO" width="100"> -->
    <Window title="📄Contract Address">
      <div class="max-sm:flex-col flex justify-center gap-2">
        <CopyButton />
        <p class="text-xxs sm:text-lg text-center">0x00acc2fa3bb7f6a6726c14d9e142d51fe3984dbfa32b5907e1e76425177875e2</p>
        
      </div>
      
    </Window>
  
    
  </div>
</div>



  
  <!-- <Window title="Windows 95 Components & Themes" width="500px">
    <div class="text-win95-text">
      <ThemeSelector />

      <div class="relative mb-4">
        <Button on:click={() => isMenuOpen = !isMenuOpen}>File</Button>
        <Menu items={menuItems} bind:isOpen={isMenuOpen} />
      </div>

      <div class="mb-4">
        <h3 class="text-sm font-bold my-2">Tabs</h3>
        <Tabs {tabs} bind:activeTab>
          <div class="p-2">Content for {activeTab}</div>
        </Tabs>
      </div>

      <div class="mb-4">
        <h3 class="text-sm font-bold my-2">Progress Bar</h3>
        <ProgressBar value={progress} max={100} />
      </div>

      <div class="mb-4">
        <h3 class="text-sm font-bold my-2">Checkboxes</h3>
        <div class="space-y-2">
          <Checkbox bind:checked={isChecked} label="Enable feature" />
          <Checkbox checked={true} label="Disabled checked" disabled />
        </div>
      </div>

      <div class="mb-4">
        <h3 class="text-sm font-bold my-2">Radio Buttons</h3>
        <div class="space-y-2">
          <Radio bind:group={selectedRadio} value="option1" label="Option 1" />
          <Radio bind:group={selectedRadio} value="option2" label="Option 2" />
          <Radio bind:group={selectedRadio} value="option3" label="Option 3" disabled />
        </div>
      </div>

      <div class="mb-4">
        <h3 class="text-sm font-bold my-2">Select</h3>
        <Select bind:value={selectedOption}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>

      <div class="mb-4">
        <h3 class="text-sm font-bold my-2">Text Field</h3>
        <div class="space-y-2">
          <TextField 
            bind:value={textValue} 
            placeholder="Type something..."
          />
          <TextField 
            value="Disabled input" 
            disabled
          />
        </div>
      </div>

      <div class="mb-4">
        <h3 class="text-sm font-bold my-2">Sliders</h3>
        <div class="space-y-3">
          <div>
            <label class="text-sm block mb-1">Basic Slider</label>
            <Slider bind:value={sliderValue} min={0} max={100} step={1} />
          </div>
          
        </div>
      </div>
    </div>
  </Window> -->

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