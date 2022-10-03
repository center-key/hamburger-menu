// Mocha Specification Suite

// Imports
import { assertDeepStrictEqual } from 'assert-deep-strict-equal';
import fs from 'fs';

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('The current files', () => {

   it('for the "dist" folder are correct', () => {
      const actual = fs.readdirSync('dist').sort();
      const expected = [
         'hamburger-menu.css',
         'hamburger-menu.js',
         'hamburger-menu.min.css',
         'hamburger-menu.min.js',
         ];
      assertDeepStrictEqual(actual, expected);
      });

   it('for the "docs" folder are correct', () => {
      const actual = fs.readdirSync('docs').sort();
      const expected = [
         'CNAME',
         'app.js',
         'hamburger-menu.css',
         'hamburger-menu.js',
         'index.html',
         'multipage',
         'single-page-app',
         'style.css',
         ];
      assertDeepStrictEqual(actual, expected);
      });

   });
