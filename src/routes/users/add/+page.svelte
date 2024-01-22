<script>
// @ts-nocheck

    import { animate } from "../../../stores";
    import * as Avatar from "$lib/components/ui/avatar";
    import { onMount } from "svelte";
    import { scale, fly } from 'svelte/transition'

    import { Button, buttonVariants } from "$lib/components/ui/button";
    import * as Dialog from "$lib/components/ui/dialog";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";

    import * as Select from "$lib/components/ui/select";
    const socials = [
        { value: "insta", label: "Instagram" },
        { value: "facebook", label: "Facebook" },
        { value: "twitterx", label: "X (Twitter)" },
        { value: "linkdin", label: "LinkdIn" },
        { value: "tiktok", label: "TikTok" },
        { value: "web", label: "Web" },
        { value: "pinterest", label: "Pinterest" },
        { value: "email", label: "EMail" },
        { value: "whatsapp", label: "Whatsapp" },
    ];

    let links = [

    ]

    let selectedSocial;
    let url;

    const addLink = ( social, url ) => {
        let newElement;

        switch (social) {
            case "insta":
                newElement = {
                    title: "instagram",
                    bg_color: "#C221FA",
                    bg_class: "hover:bg-[#C221FA]",
                    bg_image: undefined,
                    url: url,
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" class="w-6 h-6  opacity-40 hover:opacity-100 opacity-20 hover:opacity-100"><path d="M34,3H16C8.83,3,3,8.83,3,16v18c0,7.17,5.83,13,13,13h18c7.17,0,13-5.83,13-13V16C47,8.83,41.17,3,34,3z M25,36c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S31.07,36,25,36z M37,15c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S38.1,15,37,15z"/><path d="M34,25c0,4.96-4.04,9-9,9s-9-4.04-9-9s4.04-9,9-9S34,20.04,34,25z"/></svg>`,
                    icon_path: `<path d="M34,3H16C8.83,3,3,8.83,3,16v18c0,7.17,5.83,13,13,13h18c7.17,0,13-5.83,13-13V16C47,8.83,41.17,3,34,3z M25,36c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S31.07,36,25,36z M37,15c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S38.1,15,37,15z"/><path d="M34,25c0,4.96-4.04,9-9,9s-9-4.04-9-9s4.04-9,9-9S34,20.04,34,25z"/>`,
                    viewbox: "0 0 50 50",
                    active: true,
                }
                break;

            case "web":
                newElement = {
                    title: "web",
                    bg_color: "#2162FA",
                    bg_class: "hover:bg-[#2162FA]",
                    bg_image: undefined,
                    url: url,
                    icon: undefined,
                    icon_path: `<path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"/>`,
                    viewbox: "0 0 50 50",
                    active: true,
                }
                break;
        
            default:
                newElement = {
                    title: "link",
                    bg_color: "#0046FF",
                    bg_class: "hover:bg-[#0046FF]",
                    bg_image: undefined,
                    url: url,
                    icon: undefined,
                    icon_path: `<path d="M 26.5625 1 C 22.621094 1 19.40625 4.140625 19.40625 8 C 19.40625 9.769531 20.035156 10.992188 21.125 12.53125 C 21.894531 13.621094 21.988281 14.34375 21.84375 14.625 C 21.703125 14.894531 21.164063 15.046875 20.46875 15 C 17.996094 14.832031 10.339844 13.941406 10.3125 13.9375 C 10.140625 13.910156 9.964844 13.90625 9.8125 13.90625 C 8.9375 13.90625 7.417969 14.328125 7.09375 17.15625 C 7.007813 17.570313 6.617188 19.808594 6.03125 27.5625 C 5.96875 27.878906 6.015625 28.164063 6.0625 28.40625 C 6.277344 29.503906 7.003906 30.15625 8 30.15625 C 9.03125 30.15625 10.203125 29.460938 11.78125 28.34375 C 13.097656 27.414063 14.191406 27 15.3125 27 C 18.152344 27 20.46875 29.242188 20.46875 32 C 20.46875 34.757813 18.152344 37 15.3125 37 C 13.988281 37 13.078125 36.632813 11.71875 35.5625 C 10.140625 34.320313 8.949219 33.75 8 33.75 C 7.160156 33.75 6.511719 34.210938 6.1875 35 C 6 35.460938 5.964844 36.144531 6.03125 36.53125 C 6.550781 41.972656 6.808594 42.972656 7.03125 43.84375 L 7.125 44.21875 C 7.511719 45.90625 8.707031 47 10.15625 47 L 42.1875 47 C 44.507813 47 46 45.527344 46 43.25 L 46 17.375 C 46 15.660156 45.085938 14.515625 43.25 13.96875 C 43.125 13.929688 42.976563 13.925781 42.84375 13.9375 C 42.769531 13.945313 35.261719 14.691406 32.59375 15 C 32.492188 15.011719 32.378906 15.03125 32.28125 15.03125 C 32.027344 15.03125 31.574219 14.992188 31.40625 14.6875 C 31.222656 14.359375 31.273438 13.605469 31.96875 12.5 L 32.09375 12.3125 C 33.160156 10.617188 33.6875 9.761719 33.6875 8 C 33.6875 4.140625 30.503906 1 26.5625 1 Z"/>`,
                    viewbox: "0 0 50 50",
                    active: true,
                }
                break;
        }

        links.push(newElement)
    }
 
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
            <div class="w-full flex flex-row gap-2 ">
                <span class="px-6 rounded-full py-2 dark:bg-white dark:bg-opacity-10 bg-black bg-opacity-10">
                    Creating
                </span>
                <a href="/users/jsonadd" class="flex">
                    <span class="{$animate} px-6 rounded-full py-2 border-2 border-opacity-20 dark:border-white border-black dark:bg-transparent bg-transparent hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black dark:bg-opacity-10 bg-black bg-opacity-10">
                        Add through JSON
                    </span>
                </a>
            </div>

            <div class="flex flex-row gap-4">
                <input type="text" name="full_name" placeholder="New User" class="text-7xl sm:text-9xl md:text-[180px] py-8 font-bold w-full justify-start bg-transparent placeholder:dark:text-white placeholder:text-black rounded-3xl placeholder:opacity-50" />
                    
            </div>

        </div>

        <div class="w-full justify-start flex flex-row gap-8 ">
            <div>
                <Avatar.Root class="w-14 h-14">
                    <Avatar.Image src={cover_url} alt="Cover pic" />
                    <Avatar.Fallback>CN</Avatar.Fallback>
                  </Avatar.Root>
            </div>

            <input type="text" name="bio" placeholder="Kinda interesting new person." class="bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-5 rounded-2xl w-full px-6 py-4 placeholder:dark:text-white placeholder:text-black placeholder:opacity-50">
            
        </div>

        <div>
        {#each links as l}
                Hello!!
        {/each}
        </div>

        <!-- socials -->
        <div class="py-10">
            <Dialog.Root>
                <Dialog.Trigger class={buttonVariants({ variant: "outline" })}
                  >Add social</Dialog.Trigger
                >
                <Dialog.Content class="sm:max-w-[425px]">
                  <Dialog.Header>
                    <Dialog.Title>Add Link</Dialog.Title>
                    <Dialog.Description>
                      Add links to a user's socials here.
                    </Dialog.Description>
                  </Dialog.Header>
                  <div class="grid gap-4 py-4">
                    <div class="grid grid-cols-4 items-center gap-4">
                      <Label for="social" class="text-right">Site</Label>
                      <Select.Root class="w-full">
                        <Select.Trigger class="w-[180px]">
                          <Select.Value placeholder="Select a site" bind:value={selectedSocial} />
                        </Select.Trigger>
                        <Select.Content>
                          <Select.Group>
                            <Select.Label>Social</Select.Label>
                            {#each socials as social}
                              <Select.Item value={social.value} label={social.label}>{social.label}</Select.Item>
                            {/each}
                          </Select.Group>
                        </Select.Content>
                      </Select.Root>

                      
                    </div>
                    <div class="grid grid-cols-4 items-center gap-4">
                        <Label for="url" class="text-right">URL</Label>
                        <Input id="url" class="col-span-3" bind:value={url} />
                      </div>
                  </div>
                  <Dialog.Footer>
                    <Button type="button" on:click={() => addLink(selectedSocial, url)}>Add Link</Button>
                  </Dialog.Footer>
                </Dialog.Content>
              </Dialog.Root>


              
        </div>

    </form>
    {/if}

</div>