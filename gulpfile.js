var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var webpack = require("webpack");
var less = require('gulp-less');
var path = require('path');

gulp.task('default', ['test', 'less', 'nodemon']);

gulp.task('nodemon', function() {
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

gulp.task('less', function() {
    return gulp.src('./src/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('test', function() {
    console.log('going through gulp');
});