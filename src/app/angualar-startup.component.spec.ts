import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngualarStartupAppComponent } from '../app/angualar-startup.component';

beforeEachProviders(() => [AngualarStartupAppComponent]);

describe('App: AngualarStartup', () => {
  it('should create the app',
      inject([AngualarStartupAppComponent], (app: AngualarStartupAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angualar-startup works!\'',
      inject([AngualarStartupAppComponent], (app: AngualarStartupAppComponent) => {
    expect(app.title).toEqual('angualar-startup works!');
  }));
});
