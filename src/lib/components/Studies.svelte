<script>
    import {t} from "../stores/translate.js";
    import {dataLoad} from "../utils/dataLoad.js";
    import Badge from "./Badge.svelte";
    import StudyCard from "./StudyCard.svelte";

    let studiesPromise = dataLoad("studies");

</script>
<div>

    <h1 class="title">{$t("title.studies")}</h1>

    {#await studiesPromise}
        <p>...loading</p>
    {:then studies}
        <div class="flex gap-2">
            {#each studies as study}
                <StudyCard study={study}/>
            {/each}

        </div>
    {:catch error}
        <p>...error {error}</p>
    {/await}
</div>