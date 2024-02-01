<script>
    // @ts-nocheck
    
        import { onMount } from 'svelte';
        import { animate, cover_img } from '../../../stores.js';
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
    
            showAI = true;
    
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
      
    
        <div class="w-3/4 min-h-80 transition-all ease-in-out animate-slide-in duration-1000 flex items-center justify-center flex-col z-20">
            <div class="rounded-2xl relative altashadow-xl w-[400px] h-full dark:bg-black bg-white dark:bg-opacity-80 bg-opacity-20 backdrop-blur-xl flex justify-center items-center flex-col min-h-[500px] overflow-hidden">
                <a href={`/${data?.user?.username}`} class="{$animate} z-50 absolute top-6 right-6 opacity-70 hover:opacity-100 hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                      
                    </a>
                <h1 class="text-2xl font-bold z-30 absolute top-0 py-5 px-8 w-full justify-start backdrop-blur-2xl">
                    {data?.user?.full_name}
                </h1>
    
    
                <div id="chatbox" class="w-full h-full relative flex flex-col min-h-[500px]">
                    <!-- bg-[url('/social_bgs/insta.png')] bg-cover  -->
                    
                    {#if loaded}
                    <div class=" h-full flex justify-end items-end min-h-[450px] overflow-auto mb-12 px-4 mt-6 z-10 w-full">
                        
                        
                        <ul class="overflow-auto h-[450px] px-4 py-4 mt-12 flex flex-col gap-2 w-full">
                            {#each $messages as message}
                            {#if message.role == "assistant"}
                            <li class="font-normal text-white">{message.content}</li>
                            {:else}
                                {#if message.role == "user"}
                                    <li class="font-normal opacity-50 w-full">{message.content}</li>
                                {/if}
                            {/if}
                                
                            {/each}
                            </ul>
                    </div>
                    {/if}
                    <form on:submit|preventDefault={handleSubmit} class="w-full absolute bottom-0 flex flex-row overflow-hidden rounded-full">
                        <input bind:value={$input} class="w-full bg-[#e5e5e5] text-black px-4 font-semibold text-sm" />
                        <button type="submit" class="{$animate} px-4 py-2 bg-[#000000] hover:bg-[#FFFFFF] hover:text-black text-white font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>                          
                        </button>
                        </form>
                    
    
                </div>
    
    
    
            </div>
        </div>
    </div>
    {/if}
    