import type { ComputedRef, EmitFn } from 'vue';

export interface Options {
    closeableCloseBtn?: boolean;
    showCloseBtn?: boolean;
    zIndex?: number;
    center?: boolean;
    closeOnEsc?: boolean;
    width?: number;
    height?: number;
    maskColor?: string;
    containerColor?: string;  
    closeableMask?: boolean;
    padding: number;
}

export interface Props {
    options?: Options;
    show: boolean;
}

export type Emits = {
  onClose: [];
};

export interface ModelProps {
    options:  ComputedRef<Required<Options>>;
    emits: EmitFn<Emits>;
}

export interface ModelReturn {
    handleClosebtnClose: () => void;
    handleMaskClose: () => void;
    headerWidth: ComputedRef<string>;
    bodyWidth: ComputedRef<string>;
}

export interface SlotsCheck {
    hasHeader: boolean;
    hasBody: boolean;
    hasFooter: boolean;
}