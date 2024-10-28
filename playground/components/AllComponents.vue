<script lang="ts" setup>

import resolveConfig from "@nuxtjs/tailwindcss";

</script>

<template>
    <ComponentSection title="Buttons" description="Shows all possible Variants of the S1Button component">
        <div class="flex flex-row gap-4">
            <S1Button text="Primary" variant="Primary" size="Small" />
            <S1Button text="Primary Outline" variant="Primary-Outline" size="Medium" />
            <S1Button text="Primary Flat" variant="Primary-Flat" size="Large" />
            <S1Button text="Secondary" variant="Secondary" size="Small" />
            <S1Button text="Secondary Outline" variant="Secondary-Outline" size="Medium" />
            <S1Button text="Secondary Flat" variant="Secondary-Flat" size="Large" class="!bg-primary-weak" />
        </div>
    </ComponentSection>
</template>
