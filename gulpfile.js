var gulp = require('gulp');

gulp.task('move-uv', function(){
    console.log("moving uv files from node_modules to public");
    return gulp
    .src("node_modules/test-ra-uv/dist/**/*")
    .pipe(gulp.dest("public/lib/test-ra-uv"));
});

gulp.task('default', ['move-uv'], function(){
});