###  Vue Modal Package by Ilham Gurbanly.

Modal Package for Vue 3.

### Installation

```sh
$ npm install i-modal-vue
```

### Usage

main.ts: If you wish use it as plugin, import and use it in main.ts file. And do not forget to import css file. This is global import.

```js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import IModal from "i-modal-vue";
import "i-modal-vue/dist/style.css";

createApp(App).use(IModal).mount('#app');
```

Local import as package in components:

```js
<script setup lang="ts">
    import { reactive, ref } from "vue";
    import { IModal, type IModalOptions } from "i-modal-vue";
    import "i-modal-vue/dist/style.css";
</script>
```

App.vue:

```js
<script setup lang="ts">

import { reactive, ref } from "vue";
import { type IModalOptions } from "i-modal-vue";

const show = ref<boolean>(false);

const options = reactive<IModalOptions>({
  width: 500,
  height: 400,
  center: true,
  zIndex: 1000000,
  maskColor: 'rgba(0, 0, 0, .6)',
  containerColor: 'white',
  closeOnEsc: true,
  closeableCloseBtn: true,
  showCloseBtn: true,
  closeableMask: true,
  padding: 25
});

</script>

<template>

  <section class="package-section">

    <button class="my-modal-btn primary" @click="show = true">Show Modal</button>

    <IModal :show="show" @onClose="show = false" :options="options">

      <template #header>
        <h3 class="my-modal-title">What is Lorem Ipsum ?</h3>
      </template>

      <template #body>

        <img src="../public/modal_img.jpg" class="my-modal-img">
        <p class="my-modal-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the
          librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make
          dummy
          text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic
          typesetting, remaining essentially unchanged.</p>

      </template>

      <template #footer>

        <div class="my-modal-footer-wrapper">
          <button class="my-modal-btn danger" type="button" @click="show = false">Close</button>
          <button class="my-modal-btn secondary" type="button" @click="show = false">OK</button>
        </div>

      </template>

    </IModal>

  </section>

</template>
```


### Props and named slots

 <section>
    <ul class="doc-list">
      <li><strong>show: boolean (Required)</strong> - controls whether the modal is visible.</li>
      <li><strong>onClose: event (Required)</strong> - Emitted when the user requests to close the modal (e.g. by
        pressing
        the ESC key, clicking the mask, or clicking the close icon). The parent is responsible for setting
        show to false.
      </li>
      <li><strong>options: options object (Optional)</strong>
        <ul>
          <li><strong>closeableCloseBtn: boolean (Optional)</strong> - whether close button can close the modal, default
            value is true.</li>
          <li><strong>showCloseBtn: boolean (Optional)</strong> - whether to show close button, default value is true.
          </li>
          <li><strong>zIndex: number (Optional)</strong> - z-index value of modal, default value is 9999999.</li>
          <li><strong>center: boolean (Optional)</strong> - whether to center modal container, default value is true.
          </li>
          <li><strong>closeOnEsc: boolean (Optional)</strong> - whether ESC button can close the modal, default value is
            true.</li>
          <li><strong>width: number (Optional)</strong> - width of modal container, default value is 500.</li>
          <li><strong>height: number (Optional)</strong> - minimum height of modal container, default value is 200.</li>
          <li><strong>maskColor: string (Optional)</strong> - mask color of modal, default value is rgba(0, 0, 0, .5).
          </li>
          <li><strong>containerColor: string (Optional)</strong> - container background color of modal, default value is
            white.</li>
          <li><strong>closeableMask: boolean (Optional)</strong> - whether clicking on mask can close the modal, default
            value is true.</li>
          <li><strong>padding: number (Optional)</strong> - padding of the modal container, default value is 20.</li>
        </ul>
      </li>
      <li><strong>header</strong> - named slot for providing custom header content.</li>
      <li><strong>body</strong> - named slot for providing custom body content.</li>
      <li><strong>footer</strong> - named slot for providing custom footer content.</li>
    </ul>
  </section>






