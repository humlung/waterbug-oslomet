<template>
    <div class="main-wrapper">
        <div class="main-wrapper-header">
            <h4>about</h4>
        </div>
        here is about
        <p>Background photo credit.</p>
        <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@josefin?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Josefin"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Josefin</span></a>

    </div>
</template>

<script>
    export default {
        name: 'about',
    }
</script>

<style scoped>
    .main-wrapper {
        background: rgba(255, 255, 255, 0.4);
        margin-top: 3em;
    }

    .main-wrapper-header {
        background: rgba(255, 255, 255, 0.9);
    }

    .main-wrapper-header h4 {
        text-align: center;
        font-family: Montserrat Subrayada;
        font-style: normal;
        font-weight: bold;
        padding: 1em;
        margin: 0;
    }
</style>