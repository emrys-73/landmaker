<script>
// @ts-nocheck

	import { onMount } from 'svelte';
    import { animate, cover_img } from '../../stores.js';
    import { scale } from 'svelte/transition'

    let bg;
    let show = true;

    let userLinks;
    $: userLinks = [];

    let parsed;
    $: parsed = undefined;


    onMount(async () => {
        cover_img.set(`bg-[url(${data?.user?.cover_url})]`)

        setBg()

        await getlinks()
    })

    const getlinks = async () => {
        userLinks = data?.user?.links ?? [];
    }

    const setBg = async () => {
        if (data?.user?.bg_image_url) {
            bg = `bg-[url('${data.user.bg_image_url}')]`
        }
        else {
            switch (data?.user?.bg_color) {
                case "yellow":
                    bg = `bg-[url('walls/yellow.png')]`
                    break;
                case "purple":
                    bg = `bg-[url('walls/purple.png')]`
                    break;
                case "red":
                    bg = `bg-[url('walls/red.png')]`
                    break;
                case "green":
                    bg = `bg-[url('walls/green.png')]`
                    break;
            
                default:
                    bg = `bg-[url('walls/skyblue.png')]`
                    break;
            }
        }
    }

    export let data

</script>


{#if show}
<div class="{bg} bg-cover w-full h-full min-h-screen py-20 flex flex-col justify-center items-center relative">
    
    {#if data?.user?.bg_image_url}
    <div class=" bg-cover w-full h-full z-10 absolute top-0 min-h-screen">
        <img src={data?.user.bg_image_url} alt="bg" class="w-full h-full object-cover">
    </div>
    {/if}
   
    <!-- <div transition:fly={{ y:-400, duration: 700, easing: elasticOut }} class=" w-3/4 flex items-center justify-center flex-col z-20"> -->
    <div transition:scale={{ y:-400, duration: 700 }} class=" w-3/4 flex items-center justify-center flex-col z-20">
        <div class="rounded-3xl altashadow-xl w-[400px] h-full flex justify-center items-center flex-col  overflow-hidden">
            {#if data?.user?.cover_url}
            <div class="w-full flex">
                <img src={data?.user?.cover_url} alt="cover" class="w-full h-[50vh] object-cover shrink-0">
            </div>
            {/if}
            <div class="hidden">
                Made by Emrys
            </div>
            <div class="px-8 py-12 h-1/2 w-full gap-6 flex flex-col {data?.user?.darkMode ? 'bg-[#030304] text-[#F9F9F9]' : 'bg-white text-[#030304]'}">
                <h1 class="text-2xl font-bold">
                    {data?.user?.full_name}
                </h1>

                <div>
                    <p>
                        {@html data?.user?.bio}
                    </p>
                </div>
                
                <!-- links -->

                <div class="w-full flex flex-row gap-4 justify-start items-center overflow-auto pt-6">
                    {#each data.user.links as l}    
                        {#if l.active}
                        <a href={l.url}>
                            <div class="{$animate} {l.bg_class} {data?.user?.darkMode ? 'bg-white bg-opacity-5 fill-white' : 'bg-black bg-opacity-10 fill-black'} hover:fill-white rounded-full w-10 h-10 justify-center items-center flex ">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox={l.viewbox} class="w-6 h-6  opacity-40 hover:opacity-100">
                                    {@html l.icon_path}
                                </svg>
                                
                            </div>
                        </a>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
{/if}
