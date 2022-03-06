// Mocha Specification Suite

// Imports
import { assertDeepStrictEqual } from 'assert-deep-strict-equal';
import { readdirSync } from 'fs';

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('The "dist" folder', () => {

   it('contains the correct files', () => {
      const actual = readdirSync('dist').sort();
      const expected = [
         'hamburger-menu.css',
         'hamburger-menu.js',
         'hamburger-menu.min.css',
         'hamburger-menu.min.js',
         ];
      assertDeepStrictEqual(actual, expected);
      });

   });
