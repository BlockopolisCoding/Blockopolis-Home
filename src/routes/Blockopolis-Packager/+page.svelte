<script>
    import { onMount } from "svelte";
    onMount(() => {
        window.location.href =
            "https://electramod-packager.vercel.app";
    });
</script>

<svelte:head>
    <title>Redirecting</title>
    <meta name="title" content="ElectraMod - Home" />
    <meta property="og:title" content="ElectraMod - Home" />
    <meta property="twitter:title" content="ElectraMod - Home">
    <meta name="description" content="The area where featured projects and community stuff & info is shown.">
    <meta property="twitter:description" content="The area where featured projects and community stuff & info is shown.">
    <meta property="og:url" content="https://electramod-home.vercel.app/">
    <meta property="twitter:url" content="https://electramod-home.vercel.app/">
</svelte:head>
<div>
    If you are not redirected automatically,
    <a href="https://electramod-packager.vercel.app">click here</a>
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
        background: #2A293F;
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
