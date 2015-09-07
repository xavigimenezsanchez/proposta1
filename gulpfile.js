var gulp = require("gulp");
var concat = require('gulp-concat');
var uglify = require("gulp-uglify");
var ngAnnotate = require("gulp-ng-annotate");
var sourcemaps = require("gulp-sourcemaps");
var nodemon = require("gulp-nodemon");
var bowerFiles = require("main-bower-files");
//var fs = require("fs");

gulp.task('bower', function() {
    
   //bowerFiles({paths:{bowerDirectory:'./public/lib'}}).pipe(gulp.dest('./patata')); 
   gulp.src(bowerFiles({"main": "**/*.min.js",paths:{bowerDirectory:'./public/lib'}})).pipe(gulp.dest('./assets'));
});

gulp.task('dev:server', function(){
    nodemon({
        script: "server.js",
        ext: "js",
        ignore: ["ng*", "gulp*", "assets*"]
    });
});
gulp.task("prod", ["watch:js-prod","dev:server"]);
gulp.task("dev",["watch:js-dev","dev:server"]);
gulp.task("watch:js-dev", ["js-dev"], function(){
    gulp.watch("ng/**/*.js",["js-dev"]);
});
gulp.task('js-dev', function() {
    gulp.src(["ng/module.js","ng/**/*.js"])
        .pipe(sourcemaps.init())
            .pipe(concat("app.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("assets"));
});
gulp.task("js-prod", function() {
    gulp.src(["ng/module.js","ng/**/*.js"])
        .pipe(sourcemaps.init())
            .pipe(concat("app.js"))
            .pipe(ngAnnotate())
            .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("assets"));
});
