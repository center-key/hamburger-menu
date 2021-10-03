// HamburgerMenu ☰ MIT License
// Gulp configuration and tasks

// Imports
import babel   from 'gulp-babel';
import cssNano from 'cssnano';
import gap     from 'gulp-append-prepend';
import gulp    from 'gulp';
import postCss from 'gulp-postcss';
import rename  from 'gulp-rename';
import size    from 'gulp-size';

// Setup
const transpileES6 =  ['@babel/env', { modules: false }];
const babelMinifyJs = { presets: [transpileES6, 'minify'], comments: false };

// Tasks
const task = {

   minifyCss() {
      return gulp.src('src/hamburger-menu.css')
         .pipe(gap.appendFile('src/customize-style.css'))
         .pipe(gap.appendText('\n'))
         .pipe(gulp.dest('build'))
         .pipe(postCss([cssNano()]))
         .pipe(rename({ extname: '.min.css' }))
         .pipe(gap.appendText('\n'))
         .pipe(size({ showFiles: true }))
         .pipe(gulp.dest('build'));
      },

   minifyJs() {
      return gulp.src('src/hamburger-menu.js')
         .pipe(babel(babelMinifyJs))
         .pipe(rename({ extname: '.min.js' }))
         .pipe(gap.appendText('\n'))
         .pipe(size({ showFiles: true }))
         .pipe(gulp.dest('build'));
      },

   };

// Gulp
gulp.task('minify-css', task.minifyCss);
gulp.task('minify-js',  task.minifyJs);
