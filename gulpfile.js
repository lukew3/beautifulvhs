const gulp = require('gulp');
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('browserify', () => {
        return browserify('./src/script.js')
                .bundle()
                .pipe(source('bundle.js'))
                .pipe(buffer())
                .pipe(uglify())
                .pipe(gulp.dest('./dist'));
});

gulp.task('copyStatic', () => {
        gulp.src('src/index.html')
                .pipe(gulp.dest('dist'));
        gulp.src('src/data.js')
                .pipe(gulp.dest('dist'));
        gulp.src('src/style.css')
                .pipe(gulp.dest('dist'));
        return gulp.src('textures/*/*')
                .pipe(gulp.dest('dist/textures'));
});

gulp.task('build', gulp.parallel('copyStatic', 'browserify'));

