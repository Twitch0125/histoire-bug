/**
 * Represents a list item.
 */
export type ListItem = {
  name: string;
  value: any;
};

import { ref } from 'vue'
import {useListbox} from '@baleada/vue-features'

/**
 * Creates a reactive list item.
 * @returns {import('vue').Ref<ListItem>} The reactive list item.
 */
export function useListItem() {
  const item = ref<ListItem>({
    name: '',
    value: ''
  })
  const box = useListbox()
  return item
}
