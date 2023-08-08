

const gulp = require('gulp'),
      sass = require('gulp-sass')(require('sass')),
      autoprefixer = require('gulp-autoprefixer'),
      sourcemaps = require('gulp-sourcemaps'),
      browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./style/sass/*.scss')
  .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./style/css'))
    .pipe(browserSync.stream());
});


gulp.task('sass:watch', function () {
      browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000,
    });
  gulp.watch('./style/sass/*.scss', gulp.series('sass'));
  gulp.watch('./*.html').on('change', browserSync.reload);
});