var gulp = require('gulp');
var server = require('gulp-webserver');
gulp.task('my',function(){
    gulp.src('./src')
        .pipe(server({
            port: 8008,
            host:"localhost",
            livereload:true,
            middleware:function(req,res,next){
                next();
            }
        }))
})
gulp.task('default',["my"])