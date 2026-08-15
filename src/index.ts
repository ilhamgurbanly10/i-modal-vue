import IModal, {
  type IModalProps,
  type IModalOptions
} from "./components/IModalVue";

import type { App } from "vue";

export { IModal };
export type { IModalProps, IModalOptions };

export default {
  install(app: App) {
    app.component("IModal", IModal);
  }
};
