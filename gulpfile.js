// HamburgerMenu ☰ MIT License
// Gulp configuration and tasks

// Imports
import cssNano from     'cssnano';
import babel from       'gulp-babel';
import gap from         'gulp-append-prepend';
import gulp from        'gulp';
import header from      'gulp-header';
import htmlHint from    'gulp-htmlhint';
import mergeStream from 'merge-stream';
import postCss from     'gulp-postcss';
import rename from      'gulp-rename';
import replace from     'gulp-replace';
import size from        'gulp-size';
import { htmlValidator } from 'gulp-w3c-html-validator';
import { readFileSync } from 'fs';

// Setup
const pkg =            JSON.parse(readFileSync('./package.json'));
const home =           pkg.homepage.replace('https://', '');
const banner =         'HamburgerMenu v' + pkg.version + ' ☰ ' + home + ' ☰ MIT License';
const bannerCss =      '/*! ' + banner + ' */\n';
const bannerJs =       '//! ' + banner + '\n';
const htmlHintConfig = { 'attr-value-double-quotes': false };
const headerComments = /^\/\/.*\n/gm;
const transpileES6 =   ['@babel/env', { modules: false }];
const babelMinifyJs =  { presets: [transpileES6, 'minify'], comments: false };

// Tasks
const task = {

   analyzeHtml() {
      return gulp.src('docs/**/*.html')
         .pipe(htmlHint(htmlHintConfig))
         .pipe(htmlHint.reporter())
         .pipe(htmlValidator.analyzer())
         .pipe(htmlValidator.reporter())
         .pipe(size({ showFiles: true }));
      },

   buildDistribution() {
      const buildCss = () =>
         gulp.src('src/hamburger-menu.css')
            .pipe(header(bannerCss))
            .pipe(gap.appendFile('src/customize-style.css'))
            .pipe(gap.appendText('\n'))
            .pipe(gulp.dest('dist'))
            .pipe(gulp.dest('docs'))
            .pipe(postCss([cssNano()]))
            .pipe(rename({ extname: '.min.css' }))
            .pipe(replace(/(MIT License ..)/, '$1\n'))
            .pipe(gap.appendText('\n'))
            .pipe(size({ showFiles: true }))
            .pipe(gulp.dest('dist'));
      const buildJs = () =>
         gulp.src('src/hamburger-menu.js')
            .pipe(replace(headerComments, ''))
            .pipe(header(bannerJs))
            .pipe(replace('[VERSION]', pkg.version))
            .pipe(size({ showFiles: true }))
            .pipe(gulp.dest('dist'))
            .pipe(gulp.dest('docs'))
            .pipe(babel(babelMinifyJs))
            .pipe(rename({ extname: '.min.js' }))
            .pipe(header(bannerJs))
            .pipe(gap.appendText('\n'))
            .pipe(size({ showFiles: true }))
            .pipe(size({ showFiles: true, gzip: true }))
            .pipe(gulp.dest('dist'));
      return mergeStream(buildCss(), buildJs());
      },

   };

// Gulp
gulp.task('lint-html',  task.analyzeHtml);
gulp.task('build-dist', task.buildDistribution);
