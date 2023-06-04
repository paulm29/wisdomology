import 'zone.js';
import 'zone.js/testing';
// import 'zone.js/dist/zone-testing.js';
// import 'zone.js/dist/async-test.js';
// import 'zone.js/dist/proxy.js';
// import 'zone.js/dist/sync-test.js';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting, } from '@angular/platform-browser-dynamic/testing';
import 'jest-preset-angular';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  {
    teardown: {destroyAfterEach: true},
  }
);

Object.defineProperty(window, 'CSS', {value: null});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance']
    };
  }
});
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});
