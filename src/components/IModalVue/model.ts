import { computed, onMounted, onUnmounted, useSlots } from 'vue';
import type { ModelProps, ModelReturn, SlotsCheck } from './types';

const useModel = ({
  options, 
  emits
}: ModelProps): ModelReturn => {

  // slots
  const slots = useSlots();
  
  const slotsCheck = computed<SlotsCheck>(() => {
    return {
      hasHeader: !!slots?.header, 
      hasBody: !!slots?.body, 
      hasFooter: !!slots?.footer
    }
  })
  // end-slots

  // calculate-sizes
  const headerWidth = computed<string>(() => options.value.showCloseBtn ? '94%' : '100%');
  const bodyWidth = computed<string>(() => options.value.showCloseBtn && !slotsCheck.value.hasHeader ? '94%' : '100%')
  // end-calculate-sizes

  // close-handlers
  const handleClosebtnClose = (): void => { options.value.closeableClosebtn ?  emits('onClose') : null; }
  const handleMaskClose = (): void => { options.value.closeableMask ?  emits('onClose') : null; }
  const handleEscClose = (): void => { emits('onClose'); }
  // end-close-handlers

  // esc
  onMounted(() => {
    if (options.value.closeOnEsc) { window.addEventListener('keydown', handleEscClose); }
  });

  onUnmounted(() => {
    if (options.value.closeOnEsc) { window.removeEventListener('keydown', handleEscClose); }
  });
  // end-esc

  return { 
    handleClosebtnClose, 
    handleMaskClose, 
    headerWidth, 
    bodyWidth
  }
}

export default useModel;