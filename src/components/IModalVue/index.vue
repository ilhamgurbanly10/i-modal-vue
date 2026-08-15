<script setup lang="ts">
    import type { Props, Emits, Options } from './types';
    import useModel from './model';
    import { initialOptions } from './data';
    import { computed } from 'vue';

    const { 
       show, 
       options = {}
    } = defineProps<Props>();

    const emits = defineEmits<Emits>();

    const allOptions = computed<Required<Options>>(() => {
        return { ...initialOptions, ...options}
    });
    
    const { 
        handleClosebtnClose, 
        handleMaskClose, 
        headerWidth, 
        bodyWidth 
    } = useModel({ options: allOptions, emits } );

</script>

<template>

    <div @click="handleMaskClose" class="i-modal-mask" :style="{zIndex: allOptions.zIndex, backgroundColor: allOptions.maskColor}" :class="{ 'i-modal-show':  show, 'i-modal-center': allOptions.center }">

        <div @click.stop class="i-modal-container" :style="{backgroundColor: allOptions.containerColor, width: `${allOptions.width}px`, minHeight: `min(${allOptions.height}px, 90%)`, padding: `${allOptions.padding}px`}">

            <button v-if="allOptions.showCloseBtn" :class="{ 'i-modal-close-disabled': !allOptions.closeableClosebtn }" class="i-modal-close" aria-label="Close" type="button" @click="handleClosebtnClose()" :style="{ top: `${allOptions.padding}px`, right: `${allOptions.padding}px`}">
                <svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path></svg>
            </button>

            <div class="i-modal-header" :style="{ width: headerWidth}"><slot name="header" /></div>
            <div class="i-modal-body" :style="{ width: bodyWidth}"><slot name="body" /></div>
            <div class="i-modal-footer"><slot name="footer" /></div>

        </div>

    </div>

</template>

<style scoped>
    @import "./styles.css";
</style>