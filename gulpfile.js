var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var webpack = require("webpack");

gulp.task('default', function() {
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