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

  let textValue = '';
  let sliderValue = 50;
  let volumeValue = 75;
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
</script>

<main class="min-h-screen bg-win95-teal p-5 font-ms-sans">
  <Window title="Windows 95 Demo" width="500px">
    <div class="text-win95-text">
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
          <div>
            <label class="text-sm block mb-1">Volume Control</label>
            <Slider bind:value={volumeValue} min={0} max={100} step={5} />
          </div>
        </div>
      </div>
    </div>
  </Window>
</main>