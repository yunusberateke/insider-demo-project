import { Store } from 'vuex'
import type { HorseStoreState } from './index'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<HorseStoreState>
  }
}
