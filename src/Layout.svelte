<script>
    import IdentityHeader from "./lib/components/IdentityHeader.svelte";
    import Experiences from "./lib/components/Experiences.svelte";
    import Skills from "./lib/components/Skills.svelte";
    import Studies from "./lib/components/Studies.svelte";
    import Interests from "./lib/components/Interests.svelte";
    import Footer from "./lib/components/Footer.svelte";
</script>

<main>
    <header>
        <IdentityHeader/>
    </header>
    <div class="mt-4 px-8 container mx-auto">

        <Skills/>
        <Experiences/>
        <div class="grid grid-cols-2 gap-2">
            <Studies/>
            <Interests/>
        </div>

    </div>
    <Footer/>

</main>



