var gulp = require('gulp');
var browserify                = require('browserify');
var babelify                  = require('babelify');
var source                    = require('vinyl-source-stream');
var watchify                  = require('watchify');
var notify                    = require("gulp-notify");


gulp.task('CacheWatchify', function() {
 var bundler = watchify(browserify({
               entries: ['public/app.js'],
               ignoreWatch: ['**/node_modules/**'],
               debug:true,
               cache: {}, // required for watchify
               packageCache: {}, // required for watchify
               fullPaths: true // required to be true only for watchify
             }));
     bundler.transform('babelify', {presets: ['es2015', 'react']})
     var rebundle = function() {
       var start = Date.now();
       console.log('Rebundling...');
       return  bundler.bundle()
                     .on('error',function(error){
                           console.log('Error:',error);
                     })
                     .pipe(source('./public/js/bundle.js'))
                     .pipe(gulp.dest('./'))
                     .pipe(notify('Rebundled in ' + (Date.now() - start) + 'ms'));
     };
     bundler.on('update', rebundle);
 return rebundle();

});

gulp.task('default', ['CacheWatchify'], function() {
    console.log('running default task ended')
});
