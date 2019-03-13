import { State, Selector, Store } from '@ngxs/store';

@State({
  name: 'form',
  defaults: {
    person: {
      model: [],
      dirty: false,
      status: '',
      errors: {}
    }
  }
})
export class FormState {
  constructor(private store: Store) {}

  @Selector()
  static personForm(state: any) {
    return state.person;
  }
}
