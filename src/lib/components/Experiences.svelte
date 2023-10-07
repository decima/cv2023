<script>
    import {dataLoad} from "../utils/dataLoad.js";
    import {t} from "../stores/translate.js";
    import ExperienceCard from "./ExperienceCard.svelte";

    let experiencesPromise = dataLoad("experiences");

</script>
<div>
<h1 class="title">{$t("title.experiences")}</h1>
{#await experiencesPromise}
    <p>...loading</p>
{:then experiences}
    <div class="grid grid-cols-2 gap-4">
        {#each Object.values(experiences) as experience}
            {#if experience.displayInResume }
                <div class="even:text-right">
                    <ExperienceCard experience={experience}/>
                </div>
            {/if}
        {/each}

    </div>
{:catch error}
    <p>...error {error}</p>
{/await}
</div>