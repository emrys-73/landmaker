<script>
    // @ts-nocheck
    
        import { onMount } from 'svelte';
        import { animate, cover_img } from '../../stores.js';
        import { scale } from 'svelte/transition'
        import { useChat } from 'ai/svelte'
        import { Button } from '$lib/components/ui/button';
    
        let bg;
        let show = true;
    
        let userLinks;
        $: userLinks = [];
    
        let parsed;
        $: parsed = undefined;
    
        let userId;
        $: userId = "";
    
        let tags;
        $: tags = [];
    
        let showAI;
        $: showAI = false;
    
        let starters;
        $: starters = [{"role": "system", "content": "You are an AI Assistant develoepd by Astralta Technolgies - a software company that has deployed over 20 projects worldwide implementing AI Technologies for businesses."}];
    
    
        let messages, handleSubmit, input;
    
        let loaded;
        $: loaded = false;
    
        onMount(async () => {
            cover_img.set(`bg-[url(${data?.user?.cover_url})]`)
    
            setBg()
    
            showAI = false;
    
            starters = await getSystemPrompt();
    
            await getlinks()
    
    
            userId = data?.user?.id
    
            tags = data?.user?.tags? parseStringToList(data.user.tags) : []
    
            loaded = true;
        })
    
        $: if (loaded) {
            const chat = useChat({
                initialMessages: starters,
                onFinish: () => {
                    storeMessage(messages[messages.length - 2].content, messages[messages.length - 1].content)
                }
            });
    
            ({ messages, handleSubmit, input } = chat);
        }
    
        const getSystemPrompt = async () => {
            const prompt = data?.user?.system_prompt ?? "You are an AI Assistant develoepd by Astralta Technolgies - a software company that has deployed over 20 projects worldwide implementing AI Technologies for businesses."
            const starterMessages = [{"role": "system", "content": `${prompt}`}];
    
            return starterMessages;
        }
    
          async function storeMessage ( user = userId, UserMessage, AIMessage) {
              const response = await fetch('/api/storeMsg', {
                    method: 'POST',
                    body: JSON.stringify({ userId, UserMessage, AIMessage }),
                    headers: {
                        'content-type': 'application/json'
                    }
                });
        
                const result = await response.json()
            }
        
    
        const getlinks = async () => {
            userLinks = data?.user?.links ?? [];
        }
    
        const toggleAI = () => {
            showAI = !showAI;
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
    
        function parseStringToList(str) {
            // Split the string by comma and trim each element
            return str.split(',').map(s => s.trim());
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
        <div transition:scale={{ y:-400, duration: 700 }} class=" w-3/4 items-center justify-center flex-col z-20 {showAI ? 'hidden' : 'flex'} transition-all animate-slide-in ease-in-out duration-700">
            <div class="rounded-3xl altashadow-xl w-[400px] h-full flex justify-center items-center flex-col  overflow-hidden">
                {#if data?.user?.cover_url}
                <div class="w-full flex relative">
                    <img src={data?.user?.cover_url} alt="cover" class="w-full h-[40vh] object-cover shrink-0">
                    {#if data?.user?.fade}
                        <div class=" bg-gradient-to-b from-transparent to-black w-full h-1/2 absolute bottom-0"/>
                    {/if}
                </div>
                {/if}
                <div class="hidden">
                    Made by Emrys
                </div>
                <div class="px-8 {data?.user?.fade ? 'pb-8 pt-4' : 'py-6'} h-full w-full gap-6 flex flex-col {data?.user?.darkMode ? 'bg-[#030304] text-[#F9F9F9]' : 'bg-white text-[#030304]'}">
                    <div class="w-full h-full gap-2 flex flex-col justify-start items-start">
                        {#if data?.user?.fade}
                            <h1 class="text-4xl font-bold z-50 -mt-28">
                                {data?.user?.full_name}
                            </h1>
    
                        {:else}
                            <h1 class="text-4xl font-bold z-50">
                                {data?.user?.full_name}
                            </h1>
                        {/if}
        
                        <div class="w-full h-full flex flex-row justify-start items-center gap-2">
                            {#each tags as t}
                                <div class="dark:bg-white dark:bg-opacity-10 px-4 py-1 text-sm rounded-2xl backdrop-blur-lg">
                                    {t}
                                </div>
                            {/each}
                        </div>
                    </div>
    
                    <div>
                        <p class="text-sm max-h-40 overflow-auto">
                            {@html data?.user?.bio}
                           
                        </p>
                    </div>
                    
                    <!-- links -->
    
                    <div class="w-full flex flex-row gap-4 justify-start items-center overflow-auto pt-6">
                        {#each data?.user?.links as l}    
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
                    <div class="w-full h-full flex flex-col justify-center items-center">
                        <Button href={`https://ai.astralta.com/${data?.user?.username}`} class="w-full rounded-full">
                            Talk to my AI
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    

    </div>
    {/if}
    