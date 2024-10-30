import { singleton } from 'tsyringe';

@singleton()
export default class SetButtonNameDispatcher {
  public dispatch = (value: string) => {
    return value + ' Test';
  };
}
