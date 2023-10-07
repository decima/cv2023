<script>
    import moment from "moment";
    import Badge from "./Badge.svelte";

    export let study;

    function formatDate(date) {
        return moment(date).locale("fr").format('YYYY MMM')
    }
</script>

<div class="w-full">
    <h2 class=" text-primary content-center font-bold">

        {study.title ?? ""}
    </h2>

    <div class=" text-sm text-secondary flex gap-2">
        <div>
        <span class="material-symbols-outlined">calendar_month</span> {study.date}
        </div>
        <div>
            <span class="material-symbols-outlined">pin_drop</span> {study.school}
        </div>


    </div>

    <div class="text-xs">{study.description ?? ""}</div>




</div>