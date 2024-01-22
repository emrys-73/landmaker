<script >
    // @ts-nocheck
    
        import * as Table from "$lib/components/ui/table";
        import * as Avatar from "$lib/components/ui/avatar";
        import { onMount } from "svelte";
        export let data


        const cover_url = data?.user?.cover_url ?? "https://github.com/shadcn.png"
    </script>
    
    <div class="w-full h-full min-h-screen pt-16 flex flex-col justify-center items-center">
        <div class="w-3/4 flex items-center justify-center flex-col">
            <div class="w-full">
                <div class="w-full flex flex-row gap-2 ">
                    <span class="px-6 rounded-full py-2 dark:bg-white dark:bg-opacity-10 bg-black bg-opacity-10">
                        Editing
                    </span>
                </div>
                <div class="flex flex-row gap-4">
                    
                    <h1 class="text-7xl sm:text-9xl md:text-[180px] py-8 font-bold w-full justify-start ">
                        {data?.user?.full_name}
                    </h1>
                </div>
            </div>
            <div class="w-full justify-start flex flex-row gap-8 ">
                <div>
                    <Avatar.Root class="w-14 h-14">
                        <Avatar.Image src={cover_url} alt="Cover pic" />
                        <Avatar.Fallback>CN</Avatar.Fallback>
                      </Avatar.Root>
                </div>
                <div class="bg-white bg-opacity-5 rounded-2xl w-full px-6 py-4">
                    {@html data?.user?.bio}
                </div>
            </div>
    
           
         
        </div>
    
    
    </div>