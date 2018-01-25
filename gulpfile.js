// hamburger-menu

const gulp =        require('gulp');
const htmlHint =    require('gulp-htmlhint');
const jshint =      require('gulp-jshint');
const mergeStream = require('merge-stream');
const w3cJs =       require('gulp-w3cjs');

const htmlHintConfig = { 'attr-value-double-quotes': false };
const jsHintConfig = { strict: 'implied', undef: true, unused: true, browser: true, jquery: true };

const analyze = {
   html: function() {
      return gulp.src('spec/*.html')
         .pipe(w3cJs())
         .pipe(w3cJs.reporter())
         .pipe(htmlHint(htmlHintConfig))
         .pipe(htmlHint.reporter());
      },
   js: function() {
      return gulp.src('hamburger-menu.js')
         .pipe(jshint(jsHintConfig))
         .pipe(jshint.reporter());
      },
   all: function() {
      return mergeStream(analyze.html(), analyze.js());
      }
   };

gulp.task('lint', analyze.all);
