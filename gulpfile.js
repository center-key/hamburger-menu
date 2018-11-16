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
const task = {
   lintHtml: function() {
      return gulp.src('spec/**/*.html')
         .pipe(htmlHint(htmlHintConfig))
         .pipe(htmlHint.reporter())
         .pipe(htmlValidator())
         .pipe(htmlValidator.reporter())
         .pipe(size({ showFiles: true }));
      },
   lintJs: function() {
      return gulp.src('src/hamburger-menu.js')
         .pipe(jsHint(jsHintConfig))
         .pipe(jsHint.reporter())
         .pipe(size({ showFiles: true }));
      },
   minify: function() {
      return mergeStream(
          gulp.src('src/hamburger-menu.css')
            .pipe(header(banner + '\n'))
            .pipe(gulp.dest('dist')),
          gulp.src('src/hamburger-menu.css')
            .pipe(rename('hamburger-menu.min.css'))
            .pipe(postCss([cssNano()]))
            .pipe(header(banner))
            .pipe(gulp.dest('dist')),
         gulp.src('src/hamburger-menu.js')
            .pipe(header(banner + '\n'))
            .pipe(gulp.dest('dist'))
            .pipe(rename('hamburger-menu.min.js'))
            .pipe(uglify())
            .pipe(header(banner))
            .pipe(gulp.dest('dist'))
         );
      }
   };

// Gulp
gulp.task('lint-html', task.lintHtml);
gulp.task('lint-js',   task.lintHtml);
gulp.task('minify',    task.minify);
