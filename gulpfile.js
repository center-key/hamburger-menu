// hamburger-menu

// Imports
const cssNano =       require('cssnano');
const gulp =          require('gulp');
const header =        require('gulp-header');
const htmlHint =      require('gulp-htmlhint');
const htmlValidator = require('gulp-w3c-html-validator');
const jsHint =        require('gulp-jshint');
const mergeStream =   require('merge-stream');
const postCss =       require('gulp-postcss');
const rename =        require("gulp-rename");
const size =          require("gulp-size");
const uglify =        require('gulp-uglify');

// Setup
const pkg = require('./package.json');
const banner = '/*! HamburgerMenu v' + pkg.version +
   ' ☰ github.com/center-key/hamburger-menu ☰ MIT License */\n';
const htmlHintConfig = { 'attr-value-double-quotes': false };
const jsHintConfig = { strict: 'implied', undef: true, unused: true, browser: true, jquery: true };

// Tasks
const analyze = {
   html: function() {
      return gulp.src('spec/**/*.html')
         .pipe(htmlHint(htmlHintConfig))
         .pipe(htmlHint.reporter())
         .pipe(htmlValidator())
         .pipe(htmlValidator.reporter())
         .pipe(size({ showFiles: true }));
      },
   js: function() {
      return gulp.src('src/hamburger-menu.js')
         .pipe(jsHint(jsHintConfig))
         .pipe(jsHint.reporter())
         .pipe(size({ showFiles: true }));
      },
   all: function() {
      return mergeStream(analyze.html(), analyze.js());
      }
   };
const minify = {
   css: function() {
      return mergeStream(
          gulp.src('src/hamburger-menu.css')
            .pipe(header(banner + '\n'))
            .pipe(gulp.dest('dist')),
          gulp.src('src/hamburger-menu.css')
            .pipe(rename('hamburger-menu.min.css'))
            .pipe(postCss([cssNano()]))
            .pipe(header(banner))
            .pipe(gulp.dest('dist'))
         );
      },
   js: function() {
      return gulp.src('src/hamburger-menu.js')
         .pipe(header(banner + '\n'))
         .pipe(gulp.dest('dist'))
         .pipe(rename('hamburger-menu.min.js'))
         .pipe(uglify())
         .pipe(header(banner))
         .pipe(gulp.dest('dist'));
      },
   all: function() {
      return mergeStream(minify.css(), minify.js());
      }
   };

// Gulp
gulp.task('lint',  analyze.all);
gulp.task('build', minify.all);
