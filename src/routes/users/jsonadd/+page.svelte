<script>
    // @ts-nocheck
    
        import { animate } from "../../../stores";
        import * as Avatar from "$lib/components/ui/avatar";
        import { onMount } from "svelte";
        import { scale, fly } from 'svelte/transition'
     
        let show = false;
    
        onMount( async () => {
            show = true;
        })
    
        export let data;
    
        const cover_url = data?.user?.cover_url ?? "https://github.com/shadcn.png"
    
    
    </script>
    
    
    <div class="w-full h-full min-h-screen pt-16 flex flex-col justify-center items-center">
        {#if show}
        <form transition:fly={{ y:-400, duration:800}} action="?/createUser" method="POST" class="w-3/4 flex items-center justify-center flex-col">
            <div class="w-full">
                <div class="w-full flex flex-row gap-2">
                    <span class="px-6 rounded-full py-2 dark:bg-white dark:bg-opacity-10 bg-black bg-opacity-10">
                        Creating
                    </span>
                    <a href="/users/add" class="flex">
                        <span class="{$animate} px-6 rounded-full py-2 border-2 border-opacity-20 border-white dark:bg-transparent hover:dark:bg-white hover:dark:text-black dark:bg-opacity-10 bg-black bg-opacity-10">
                            Add manually
                        </span>
                    </a>
                </div>
    
                <div class="flex flex-row gap-4">
                    <h1 class="text-7xl sm:text-9xl md:text-[180px] py-8 font-bold w-full justify-start ">
                        JSON Create
                    </h1>
                        
                </div>
    
            </div>
    
            <div class="w-full justify-start flex flex-row gap-8 ">
                <!-- <div>
                    <Avatar.Root class="w-14 h-14">
                        <Avatar.Image src={cover_url} alt="Cover pic" />
                        <Avatar.Fallback>CN</Avatar.Fallback>
                      </Avatar.Root>
                </div> -->
    
                <input type="text" name="json" placeholder="Give me everything you've got." class="bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-5 rounded-2xl w-full px-6 py-4 placeholder:dark:text-white placeholder:text-black placeholder:opacity-50">
                
            </div>
    
        </form>
        {/if}
    
    </div>