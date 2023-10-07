<script>
    import moment from "moment";
    import Badge from "./Badge.svelte";

    export let experience;

    function formatDate(date) {
        return moment(date).locale("fr").format('YYYY MMM')
    }
</script>

<div>
    <h2 class=" text-primary content-center font-bold">
        <span class="material-symbols-outlined text-lg mr-0.5">{experience.icon}</span>
                {experience.title ?? ""} - {experience.company ?? ""}
    </h2>

    <div class=" text-sm text-secondary">
        <span class="  text-sm material-symbols-outlined">calendar_month</span> {formatDate(experience.from)} -
        {#if experience.to } {formatDate(experience.to)}{:else} now{/if}
    </div>

    <div class="text-xs">{experience.description ?? ""}</div>
    {#if experience.keywords}
        {#each experience.keywords as keyword }
                <Badge>{keyword}</Badge>
        {/each}
    {/if}




</div>