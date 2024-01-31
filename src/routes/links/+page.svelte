<script>
    import { animate } from "../../stores";

    import { onMount } from 'svelte';

    let JSONLinks = '{}';
    let editableContent = JSONLinks; // used for displaying and editing the JSON

    function updateJSONLinks() {
        try {
            // Parse and stringify to ensure valid JSON and to format it nicely
            JSONLinks = JSON.stringify(JSON.parse(editableContent), null, 2);
        } catch (error) {
            console.error('Invalid JSON:', error);
        }
    }

    // Reactive statement to update JSONLinks whenever editableContent changes
    $: updateJSONLinks();

    // If you have an initial JSON object to display, set it here
    onMount(() => {
        // Example: JSONLinks = '{"website": "https://example.com", "email": "contact@example.com"}';
        JSONLinks = `[
  {
    "title": "web",
    "bg_color": "#2162FA",
    "bg_class": "hover:bg-[#2162FA]",
    "bg_image": null,
    "url": "https://adrian.astralta.com/",
    "icon": null,
    "icon_path": "<path d=\"M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z\"/>",
    "viewbox": "0 0 50 50",
    "active": true
  },
  {
    "title": "threads",
    "bg_color": "#C221FA",
    "bg_class": "hover:bg-[#C221FA]",
    "bg_image": null,
    "url": "https://instagram.com/adrianmontoya00",
    "icon": null,
    "icon_path": null,
    "viewbox": "0 0 50 50",
    "active": false
  },
  {
    "title": "instagram",
    "bg_color": "#C221FA",
    "bg_class": "hover:bg-[#C221FA]",
    "bg_image": null,
    "url": "https://instagram.com/adrianmontoya00",
    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 50 50\" class=\"w-6 h-6  opacity-40 hover:opacity-100 opacity-20 hover:opacity-100\"><path d=\"M34,3H16C8.83,3,3,8.83,3,16v18c0,7.17,5.83,13,13,13h18c7.17,0,13-5.83,13-13V16C47,8.83,41.17,3,34,3z M25,36c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S31.07,36,25,36z M37,15c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S38.1,15,37,15z\"/><path d=\"M34,25c0,4.96-4.04,9-9,9s-9-4.04-9-9s4.04-9,9-9S34,20.04,34,25z\"/></svg>",
    "icon_path": "<path d=\"M34,3H16C8.83,3,3,8.83,3,16v18c0,7.17,5.83,13,13,13h18c7.17,0,13-5.83,13-13V16C47,8.83,41.17,3,34,3z M25,36c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S31.07,36,25,36z M37,15c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S38.1,15,37,15z\"/><path d=\"M34,25c0,4.96-4.04,9-9,9s-9-4.04-9-9s4.04-9,9-9S34,20.04,34,25z\"/>",
    "viewbox": "0 0 50 50",
    "active": true
  },
  {
    "title": "facebook",
    "bg_color": "#0086FF",
    "bg_class": "hover:bg-[#0086FF]",
    "bg_image": null,
    "url": null,
    "icon": null,
    "icon_path": "<path d=\"M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z\"/>",
    "viewbox": "0 0 24 24",
    "active": false
  },
  {
    "title": "twitterX",
    "bg_color": "#008EFF",
    "bg_class": "hover:bg-[#008EFF]",
    "bg_image": null,
    "url": "https://twitter.com/?lang=en",
    "icon": null,
    "icon_path": "<path d=\"M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z\"/>",
    "viewbox": "0 0 50 50",
    "active": false
  },
  {
    "title": "pinterest",
    "bg_color": "#FA2121",
    "bg_class": "hover:bg-[#FA2121]",
    "bg_image": null,
    "url": "https://instagram.com/adrianmontoya00",
    "icon": null,
    "icon_path": null,
    "viewbox": "0 0 50 50",
    "active": false
  },
  {
    "title": "email",
    "bg_color": "#7B21FA",
    "bg_class": "hover:bg-[#7B21FA]",
    "bg_image": null,
    "url": "mailto:montoya@astralta.com",
    "icon": null,
    "icon_path": "<path d=\"M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z\"/>",
    "viewbox": "0 0 32 32",
    "active": true
  },
  {
    "title": "phone",
    "bg_color": "#21D9FA",
    "bg_class": "hover:bg-[#21D9FA]",
    "bg_image": null,
    "url": "https://instagram.com/adrianmontoya00",
    "icon": null,
    "icon_path": null,
    "viewbox": "0 0 50 50",
    "active": false
  },
  {
    "title": "linkdIn",
    "bg_color": "#0046FF",
    "bg_class": "hover.bg-[#0046FF]",
    "bg_image": null,
    "url": "https://www.linkedin.com/in/adrianm1701/",
    "icon": null,
    "icon_path": "<path d=\"M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z\"/>",
    "viewbox": "0 0 24 24",
    "active": true
  },
  {
    "title": "link",
    "bg_color": "#0046FF",
    "bg_class": "hover.bg-[#0046FF]",
    "bg_image": null,
    "url": "https://www.linkedin.com/in/adrianm1701/",
    "icon": null,
    "icon_path": "<path d=\"M 26.5625 1 C 22.621094 1 19.40625 4.140625 19.40625 8 C 19.40625 9.769531 20.035156 10.992188 21.125 12.53125 C 21.894531 13.621094 21.988281 14.34375 21.84375 14.625 C 21.703125 14.894531 21.164063 15.046875 20.46875 15 C 17.996094 14.832031 10.339844 13.941406 10.3125 13.9375 C 10.140625 13.910156 9.964844 13.90625 9.8125 13.90625 C 8.9375 13.90625 7.417969 14.328125 7.09375 17.15625 C 7.007813 17.570313 6.617188 19.808594 6.03125 27.5625 C 5.96875 27.878906 6.015625 28.164063 6.0625 28.40625 C 6.277344 29.503906 7.003906 30.15625 8 30.15625 C 9.03125 30.15625 10.203125 29.460938 11.78125 28.34375 C 13.097656 27.414063 14.191406 27 15.3125 27 C 18.152344 27 20.46875 29.242188 20.46875 32 C 20.46875 34.757813 18.152344 37 15.3125 37 C 13.988281 37 13.078125 36.632813 11.71875 35.5625 C 10.140625 34.320313 8.949219 33.75 8 33.75 C 7.160156 33.75 6.511719 34.210938 6.1875 35 C 6 35.460938 5.964844 36.144531 6.03125 36.53125 C 6.550781 41.972656 6.808594 42.972656 7.03125 43.84375 L 7.125 44.21875 C 7.511719 45.90625 8.707031 47 10.15625 47 L 42.1875 47 C 44.507813 47 46 45.527344 46 43.25 L 46 17.375 C 46 15.660156 45.085938 14.515625 43.25 13.96875 C 43.125 13.929688 42.976563 13.925781 42.84375 13.9375 C 42.769531 13.945313 35.261719 14.691406 32.59375 15 C 32.492188 15.011719 32.378906 15.03125 32.28125 15.03125 C 32.027344 15.03125 31.574219 14.992188 31.40625 14.6875 C 31.222656 14.359375 31.273438 13.605469 31.96875 12.5 L 32.09375 12.3125 C 33.160156 10.617188 33.6875 9.761719 33.6875 8 C 33.6875 4.140625 30.503906 1 26.5625 1 Z\"/>",
    "viewbox": "0 0 50 50",
    "active": false
  }
]`
        editableContent = JSONLinks;
    });


let links = {
    web: "https://adrian.astralta.com",
    instagram: 'https://instagram.com/adrianmontoya00',
    threads: null,
    facebook: null,
    twitterX: "https://twitter.com/Emrys1701",
    pinterest: "https://pin.it/1SOMaD8PD",
    email: "mailto:montoya@astralta.com",
    phone: "tel:+491731928390",
    linkdIn: "https://www.linkedin.com/in/adrianm1701/",
}

</script>


<div class="w-full h-full min-h-screen pt-16 flex flex-col justify-center items-center">
    <div class="w-3/4 flex items-center justify-center flex-col">
        <div class="w-full">
            <div class="flex flex-row gap-4">  
                <h1 class="text-7xl sm:text-9xl md:text-[180px] py-8 font-bold w-full justify-start ">
                    Link Editor
                </h1>
            </div>
        </div>

        <div class="w-full h-full dark:border-white border-black border-2 border-opacity-20 rounded-2xl bg-transparent p-6 overflow-auto">
            <!-- Editable content area for JSON -->
            <div contenteditable="true" bind:innerText={editableContent} class="whitespace-pre-wrap"></div>
        </div>
    </div>
</div>