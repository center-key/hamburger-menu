// hamburger-menu

const gulp =        require('gulp');
const header =      require('gulp-header');
const htmlHint =    require('gulp-htmlhint');
const jsHint =      require('gulp-jshint');
const mergeStream = require('merge-stream');
const rename =      require("gulp-rename");
const uglify =      require('gulp-uglify');
const w3cJs =       require('gulp-w3cjs');

const pkg = require('./package.json');
const banner = '/*! HamburgerMenu v' + pkg.version +
   ' ☰ github.com/center-key/hamburger-menu ☰ License: MIT */\n';
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
      return gulp.src('src/hamburger-menu.js')
         .pipe(jsHint(jsHintConfig))
         .pipe(jsHint.reporter());
      },
   all: function() {
      return mergeStream(analyze.html(), analyze.js());
      }
   };

const minify = {
   js: function() {
      return gulp.src('src/hamburger-menu.js')
         .pipe(header(banner + '\n'))
         .pipe(gulp.dest('dist'))
         .pipe(rename('hamburger-menu.min.js'))
         .pipe(uglify())
         .pipe(header(banner))
         .pipe(gulp.dest('dist'));
      },
   };

gulp.task('lint', analyze.all);
gulp.task('build', minify.js);
