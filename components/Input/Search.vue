<template>
    <!-- <input type="text" name="search" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"> -->
    <div class="relative">
        <input type="search" id="search" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" name="search"
            class="bg-card-primary border border-border-primary text-text-primary placeholder-text-secondary text-deskripsi-sm md:text-deskripsi rounded-2xl md:rounded-lg focus:border-border-primary focus:ring-0 block w-full pl-10 pr-5 py-3 dark:bg-card-primary-dark dark:border-border-primary-dark dark:text-text-primary-dark dark:placeholder-text-secondary-dark dark:focus:border-border-primary-dark"
            :placeholder="placeholder">

        <div
            class="absolute top-0 left-0 text-deskripsi h-full text-text-secondary flex items-center ml-4">

            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="m-auto">
                <g id="Search" class="fill-text-secondary dark:fill-text-secondary-dark">
                    <path id="Search_2" fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.5468 0.333344C5.35381 0.333344 0.333374 5.2429 0.333374 11.2991C0.333374 17.3554 5.35381 22.2649 11.5468 22.2649C14.1956 22.2649 16.6298 21.3669 18.5485 19.8651L22.1933 23.4201L22.2902 23.5017C22.6286 23.7466 23.1084 23.7188 23.4146 23.4185C23.7514 23.0883 23.7507 22.5536 23.413 22.2242L19.8111 18.711C21.6425 16.7593 22.7603 14.1569 22.7603 11.2991C22.7603 5.2429 17.7399 0.333344 11.5468 0.333344ZM11.5468 2.02237C16.786 2.02237 21.0331 6.17573 21.0331 11.2991C21.0331 16.4226 16.786 20.5759 11.5468 20.5759C6.30771 20.5759 2.06055 16.4226 2.06055 11.2991C2.06055 6.17573 6.30771 2.02237 11.5468 2.02237Z" />
                </g>
            </svg>

            <span class="sr-only">Search</span>
        </div>
    </div>
</template>

<script setup>
defineProps(['modelValue', 'placeholder'])
defineEmits(['update:modelValue'])
</script>