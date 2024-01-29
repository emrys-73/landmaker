<script>
    import { animate } from '../stores.js';

    export let data;

</script>

<div class="w-full h-full min-h-screen pt-16 flex flex-col justify-center items-center">
    <div class="w-3/4 flex items-center justify-center flex-col">
        <div class="w-full">
            <div class="w-full flex flex-row gap-2 ">
                <span class="px-6 rounded-full py-2 dark:bg-white dark:bg-opacity-10 bg-black bg-opacity-10">
                    Astralta
                </span>
            </div>
            <div class="flex flex-row gap-4">  
                <h1 class="text-7xl sm:text-9xl md:text-[180px] py-8 font-bold w-full justify-start ">
                    Landing Maker
                </h1>
            </div>

            
            <div class="w-full flex text-center">
                <a href="/users/create" class="{$animate} w-3/4 hover:w-full bg-gradient-to-l dark:from-blue-600 dark:to-violet-500 from-blue-200 to-violet-200 rounded-full">
                    + New User
                </a>
                
            </div>
        
            <!-- <div class="w-full flex flex-row">
                <button class="px-12 py-1 bg-white bg-opacity-10">
                    + New user
                </button>
            </div> -->
        </div>
    </div>

</div>