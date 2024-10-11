<script>
    import { onMount } from "svelte";
    onMount(() => {
        window.location.href =
            "https://studio.blockopolis.com/Blockopolis-Packager";
    });
</script>

<svelte:head>
    <title>Redirecting</title>
    <meta name="title" content="Blockopolis - Home" />
    <meta property="og:title" content="Blockopolis - Home" />
    <meta property="twitter:title" content="Blockopolis - Home">
    <meta name="description" content="The area where featured projects and community stuff & info is shown.">
    <meta property="twitter:description" content="The area where featured projects and community stuff & info is shown.">
    <meta property="og:url" content="https://blockopolis.com/">
    <meta property="twitter:url" content="https://blockopolis.com/">
</svelte:head>
<div>
    If you are not redirected automatically,
    <a href="https://studio.blockopolis.com/Blockopolis-Packager">click here</a>
</div>

<style>
    * {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: white;
    }

    a {
        margin-left: 4px;
    }

    div {
        background: #ff4c4c;
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        overflow: hidden;
        justify-content: center;
    }
</style>
