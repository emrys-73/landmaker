<script>
    import { animate } from "../../stores";
    
</script>


<div class="w-full h-full min-h-screen pt-16 flex flex-col justify-center items-center">
    <div class="w-3/4 flex items-center justify-center flex-col">
        <div class="w-full">
            <div class="flex flex-row gap-4">  
                <h1 class="text-7xl sm:text-9xl md:text-[180px] py-8 font-bold w-full justify-start ">
                    Log In
                </h1>
            </div>
            
            <form action="?/login" method="POST" class="flex flex-col justify-center items-center gap-6">
                <input type="email" id="email" name="email" placeholder="EMail" class="px-4 py-2 w-full h-full bg-transparent border-2 dark:border-white border-black border-opacity-20 dark:border-opacity-20 rounded-2xl dark:placeholder:text-white placeholder:text-black placeholder:text-opacity-70 dark:text-white text-black">

                <input type="password" id="password" name="password" placeholder="Password" class="px-4 py-2 w-full h-full bg-transparent border-2 dark:border-white border-black border-opacity-20 dark:border-opacity-20 rounded-2xl dark:placeholder:text-white placeholder:text-black placeholder:text-opacity-70 dark:text-white text-black">
                
                <button type="submit" class="{$animate} w-3/4 hover:w-full bg-gradient-to-l dark:from-blue-600 dark:to-violet-500 from-blue-200 to-violet-200 rounded-full">
                    Log in
                </button>
            </form>

        </div>
    
    </div>

</div>