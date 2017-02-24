var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var webpack = require("webpack");
var less = require('gulp-less');
var path = require('path');
var config = require("./webpack.config.js");
var watch = require("gulp-watch");
var gutil = require("gulp-util");

gulp.task('default', ['start', 'webpack', 'less', 'nodemon']);

gulp.task('start', ['webpack', 'less']);

gulp.task('webpack', function(done) {
    webpack(config).run(onBuild(done));
});

function onBuild(done) {
    return function(err, stats) {
        if (err) {
            gutil.log('Error', err);
            if (done) {
                done();
            }
        } else {
            Object.keys(stats.compilation.assets).forEach(function(key) {
                gutil.log('Webpack: output ', gutil.colors.green(key));
            });
            gutil.log('Webpack: ', gutil.colors.blue('finished ', stats.compilation.name));
            if (done) {
                console.log('done');
                done();
            }
        }
    }
}

gulp.task('nodemon', function() {
    gulp.start('watch-public');
    nodemon({
            script: 'app.ts',
            ext: 'ts',
            env: {
                PORT: 7000
            },
            ignore: ['./node_modules/**']
        })
        .on('restart', function() {
            console.log('Restarting...');
        });
});

gulp.task('watch-public', function() {
    return watch('src/compnents/**/*.tsx');
});

gulp.task('less', function() {
    return gulp.src('./src/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('test', function() {
    console.log('going through gulp');
});