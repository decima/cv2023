<script>
    import {t} from "../stores/translate.js";
    import {dataLoad} from "../utils/dataLoad.js";
    import Badge from "./Badge.svelte";

    let skillsPromise = dataLoad("skills");

</script>
<div>
    <h1 class="title">{$t("title.skills")}</h1>

    {#await skillsPromise}
        <p>...loading</p>
    {:then skills}
        <div class="flex gap-2">
            {#each skills as category}
                <div class="w-full">
                    <h2 class="text-lg text-primary content-center font-bold">
                        <span class="material-symbols-outlined text-lg mr-0.5">{category.icon}</span>
                        {category.name ?? ""}

                    </h2>
                    {#each category.keywords as keyword}
                        <Badge>{keyword}</Badge>
                    {/each}
                </div>
            {/each}
        </div>
    {:catch error}
        <p>...error {error}</p>
    {/await}
</div>