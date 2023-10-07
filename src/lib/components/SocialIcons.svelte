<script>

    import {dataLoad} from "../utils/dataLoad.js";
    import {t} from "../stores/translate.js";

    import icons from '../../assets/icons/icons.js';
console.log(icons)
    let identityPromise = dataLoad("identity");


</script>


{#await identityPromise }
{:then identity}

    <div class="flex">
        {#each Object.keys(identity.socials) as social}
            <a target="_blank" href="{identity.socials[social]}" class="m-1">

               <img class="w-4" src={icons[social]}/>

            </a>
        {/each}
    </div>
{/await}