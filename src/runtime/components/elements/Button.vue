<script lang="ts" setup>

export type ButtonVariant = "Primary" | "Primary-Outline" | "Primary-Flat" | "Secondary" | "Secondary-Outline" | "Secondary-Flat";
export type ButtonSize = "Small" | "Medium" | "Large";

export type ButtonProps = {
    text: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
}

defineProps<ButtonProps>();

</script>

<template>
    <button
        class="leading-normal"
        :class="{
            'py-1 px-2': size === 'Small',
            'py-2 px-4': size === 'Medium',
            'py-3 px-6': size === 'Large',
            'bg-primary text-white': variant === 'Primary',
            'border border-primary text-primary': variant === 'Primary-Outline',
            'bg-primary-weak text-white': variant === 'Primary-Flat',
            'bg-secondary text-white': variant === 'Secondary',
            'border border-secondary text-secondary': variant === 'Secondary-Outline',
            'bg-secondary-weak text-white': variant === 'Secondary-Flat',
        }"
    >
        {{ text }}
    </button>
</template>
