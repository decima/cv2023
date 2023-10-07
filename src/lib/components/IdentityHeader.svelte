<script>
    import {t} from "../stores/translate.js";
    import {dataLoad} from "../utils/dataLoad.js";
    import SocialIcons from "./SocialIcons.svelte";

    let identityPromise = dataLoad("identity");
</script>


{#await identityPromise }
{:then identity}
    <div class="hero bg-base-200 py-2 px-8 border-b-primary border-b-4">
        <div class="hero-content flex-col lg:flex-row-reverse print:flex-row-reverse justify-around">
           <div class="w-1/6"> <div class="avatar">
                <div class="w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

                    <img src="{identity.picture.large}" class=" rounded-full shadow-2xl"/>
                </div>
            </div>
           </div>
            <div class="w-full">
                <h1 class="text-3xl font-bold">
                    {$t("identity.title", {firstname: identity.name.first})}</h1>
                <h2 class="text-xl font-thin">{identity.job?.title || ""}</h2>
                <p class="">{identity?.description || ""}</p>
            </div>


        </div>
    </div>
{/await}