<script>
// @ts-nocheck

	import '../app.pcss';
	import { ModeWatcher } from "mode-watcher";
	import Button from '$lib/components/ui/button/button.svelte';
  	import { Sun, Moon, Home } from "radix-icons-svelte";
  	import { toggleMode } from "mode-watcher";
	import { animate } from '../stores';

	const menu = [
		{
			title: "Home",
			url: "/",
		},
		{
			title: "Users",
			url: "/users",
		},
		{
			title: "AI",
			url: "/AI",
		},
		{
			title: "Link Editor",
			url: "/links",
		},
	]

</script>


<ModeWatcher/>

<div class="w-full h-16 flex border-b-[0.5px] fixed top-0 border-opacity-30 dark:altashadow-xs altashadow-xs-light dark:border-opacity-20 border-black dark:border-white items-center justify-between px-4 md:px-20 backdrop-blur-xl bg-transparent">
	<div class="justify-center items-center flex flex-row gap-3">
		<a href="/" class="justify-center items-center flex flex-row gap-3">
			<img src="/00_logo.png" alt="logo" class="h-4 dark:flex hidden">
			<img src="/01_logo.png" alt="logo" class="h-4 flex dark:hidden">
			
			<span class="font-extralight text-lg items-center">|</span>
			<span class="font-extralight text-lg">
				LM
			</span>
		</a>
	</div>

	<!-- Menu -->
	<div class="flex justify-center items-center gap-4 md:gap-12 flex-row font-light">
		{#each menu as i}
			<a href={i.url} class="{$animate} opacity-70 hover:opacity-100">
				<div>
					{i.title}
				</div>
			</a>
		{/each}
	</div>

	<div>
		<Button on:click={toggleMode} variant="outline" size="icon">
			<Sun
			  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
			  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		  </Button>
	</div>
</div>



<slot />
