<script >
// @ts-nocheck

    import * as Table from "$lib/components/ui/table";
    import { animate } from "../../stores.js";

    export let data

    
</script>

<div class="w-full h-full min-h-screen pt-16 flex flex-col justify-center items-center">
    <div class="w-3/4 flex items-center justify-center flex-col py-20">
        <div class="w-full">
            <h1 class="py-8 text-7xl sm:text-9xl md:text-[180px] font-bold w-full justify-start ">
                USERS
            </h1>
        </div>

       
        <Table.Root>
            <Table.Caption>A list of your users</Table.Caption>

            <Table.Header>
              <Table.Row>
                <Table.Head class="w-20"></Table.Head>
                <Table.Head class="w-40">Full Name</Table.Head>
                <Table.Head>Stage</Table.Head>
                <Table.Head class="">Bio</Table.Head>
                
                <Table.Head class="">Links</Table.Head>
                <Table.Head>Views</Table.Head>
              </Table.Row>
            </Table.Header>

            <Table.Body>
                {#each data?.userList as user}     
                <Table.Row class="font-light">
                    <Table.Cell>
                        <a href="/users/{user.id}">
                            <span class="{$animate} opacity-60 hover:opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                  </svg>
                                  
                            </span>
                        </a>
                    </Table.Cell>
                      <Table.Cell class="font-bold">
                        <a href="/{user.username}">
                            {user.full_name}
                        </a>
                    </Table.Cell>
                      <Table.Cell>{user.stage}</Table.Cell>
                      <Table.Cell class="">{@html user.bio}</Table.Cell>
                      <Table.Cell>
                        {typeof user.links}

                        
                            
                    </Table.Cell>
                      <Table.Cell>{user.views}</Table.Cell>
                    </Table.Row>
                {/each}
            </Table.Body>
          </Table.Root>
          
    </div>


</div>