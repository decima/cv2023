<script>
    import {t} from "../stores/translate.js";
    import {dataLoad} from "../utils/dataLoad.js";
    import SocialIcons from "./SocialIcons.svelte";

    let identityPromise = dataLoad("identity");
</script>

<div class="mt-2 p-2 border-t-4 border-t-primary text-xs bg-base-200 text-base-content absolute w-full bottom-0">
{#await identityPromise }
{:then identity}
    <div class="flex gap-3 justify-center w-full">
        <div><span class="material-symbols-outlined  text-xs">map</span> {identity.location}</div>
        –
        <div><span class="material-symbols-outlined  text-xs">email</span> {identity.email}</div>
        –
        <div><span class="material-symbols-outlined text-xs">phone</span> {identity.phone}</div>
    </div>
    <div class="flex justify-center w-full">
    <SocialIcons/>
    </div>

{/await}
</div>