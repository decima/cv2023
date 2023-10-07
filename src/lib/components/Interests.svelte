<script>
    import {t} from "../stores/translate.js";
    import {dataLoad} from "../utils/dataLoad.js";
    import Badge from "./Badge.svelte";
    import StudyCard from "./StudyCard.svelte";

    let interestsPromise = dataLoad("interests");

</script>
<div>

    <h1 class="title text-right">{$t("title.interests")}</h1>

    {#await interestsPromise}
        <p>...loading</p>
    {:then interests}
        <div class="text-xs flex flex-col gap-1">
            {#each interests as interest}
                <div class="flex flex-row justify-end gap-1">
                    <h2 class="text-primary font-bold">
                        <span class="material-symbols-outlined text-xs">{interest.icon}</span>
                        {interest.title}
                    </h2>
                    <div class="font-light">
                    {interest.description}
                    </div>
                </div>
            {/each}

        </div>
    {:catch error}
        <p>...error {error}</p>
    {/await}
</div>