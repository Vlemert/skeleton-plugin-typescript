import { FrameworkConfiguration } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources('./hello-world');
}

export {HelloWorld} from './hello-world';