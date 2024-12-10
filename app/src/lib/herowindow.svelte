<script lang="ts">
    import Window from "./components/Window.svelte";
    import VolumeSlider from "./components/VolumeSlider.svelte";
    import Button from "./components/Button.svelte";
    import AudioPlayer from "./components/AudioPlayer.svelte";
    import danceGif from "../assets/images/dance-schizo.gif";
    import schizodio_sq from "../assets/images/schizodio_sq.jpg";
    import GlitchEffect from './scene/GlitchEffect.svelte';
    let volumeValue = 0.5;
    export let isWildGlitch = false;
</script>

<Window title="✨Schizodio✨" width="full">
    <style>
        .bliss {
            background-image: URL("https://upload.wikimedia.org/wikipedia/en/2/27/Bliss_%28Windows_XP%29.png");
            background-size: cover;
            background-position: center;
        }
    </style>
    <div class="bliss w-full sm:w-96">
        <img src={danceGif} alt="SCHIZODIO" width="auto" />
    </div>
    <div class="flex gap-1 w-full mt-1.5">
        <a class="w-full" href="https://x.com/schizodio"
            ><Button>Twitter</Button></a
        >
        <a class="w-full" href="https://t.me/schizodio"
            ><Button>Telegram</Button></a
        >
        <a
            class="w-full"
            href="https://app.avnu.fi/en?mode=simple&tokenFrom=0x4718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d&tokenTo=0xacc2fa3bb7f6a6726c14d9e142d51fe3984dbfa32b5907e1e76425177875e2&amount=0.001"
            ><Button>Buy</Button></a
        >
        <a
            class="w-full"
            href="https://dexscreener.com/starknet/0x00acc2fa3bb7f6a6726c14d9e142d51fe3984dbfa32b5907e1e76425177875e2-0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d-2347948331754475397897284791279200659-5982-0x0"
            ><Button>Chart</Button></a
        >
    </div>
</Window>
<div class="flex flex-col gap-2 max-w-96 w-full sm:w-64">
    <Window title="😵glitchizodio.exe🙃" width="full">
        <div class="relative">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="text-3xl text-center block mb-1">ₕₒw ₛcₕᵢzₒ yₒᵤ ₐᵣₑ?</label>
            <br />
            <div class="flex-col text-xs items-center gap-2">
                <div class="flex text-xs items-center gap-2">
                    <span class="text-xl">ʟօա</span>
                    <VolumeSlider bind:value={volumeValue} steps={10} />
                    <span class="text-xl">𝐡𝐢𝐠𝐡</span>
                </div>
                <br />
                <br />
                <div class="flex-row text-2xl font-bold text-center items-center gap-2">
                    <span>千ᑌᒪĻ𝔰𝓒𝕙𝔦Ƶ๏</span>
                    <input
                        id="wildGlitch"
                        type="checkbox"
                        bind:checked={isWildGlitch}
                    />
                </div>
            </div>

        </div>
    </Window>
    <Window title="💿schizo.mp3" width="full">
        <AudioPlayer audioSrc="./canttakemyeyesoffyou.mp3" />
    </Window>
    <img src={schizodio_sq} alt="SCHIZODIO" width="auto" class="" />
</div>
