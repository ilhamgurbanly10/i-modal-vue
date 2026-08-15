<script setup lang="ts">

import { reactive, ref } from "vue";
import IModal, { type IModalOptions } from "./components/IModalVue/";

const show = ref<boolean>(false);

const options = reactive<IModalOptions>({
  width: 500,
  height: 400,
  center: true,
  zIndex: 1000000,
  maskColor: 'rgba(0, 0, 0, .5)',
  containerColor: 'white',
  closeOnEsc: true,
  closeableClosebtn: true,
  showCloseBtn: true,
  closeableMask: true, 
  padding: 25
});

</script>

<template>

  <button class="my-modal-btn primary" @click="show = true">Show Modal</button>

  <IModal :show="show" @onClose="show = false" :options="options">

    <template #header>
      <h3 class="my-modal-title">What is Lorem Ipsum ?</h3>
    </template>

    <template #body>
      
      <img src="../public/modal_img.jpg" class="my-modal-img">
      <p class="my-modal-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    
    </template>

    <template #footer>
      <div class="my-modal-footer-wrapper">
        <button class="my-modal-btn danger" type="button" @click="show = false">Close</button>
        <button class="my-modal-btn secondary" type="button" @click="show = false">OK</button>
      </div>
    </template>

  </IModal>

</template>
