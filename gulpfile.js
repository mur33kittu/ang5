// var gulp = require('gulp');
// var tslint = require('gulp-tslint');
// var sourcemaps = require('gulp-sourcemaps');
// var uglify = require('gulp-uglify');
// var del = require('del');
// var runSequence = require('run-sequence');
// var tsc = require("gulp-typescript");
// var gulpIf = require('gulp-if');

// var devMode = true;
// var tsProject = tsc.createProject("tsconfig.json");
// var sourceRoot = "src/";
// var destinationPath = 'dest/';
// var deletePath = [destinationPath + '/**']

// var typeScriptSource = [sourceRoot + "**/*.ts"];
// var destinationPathForJSLibraries = destinationPath + '/js';
// var javaScriptLibraries = [sourceRoot + 'js/**/*.js'];
// var htmlSource = [sourceRoot + '**/*.html'];
// var mapPath = 'maps';

// var angularLibraries = [
//   'core-js/client/shim.min.js',
//   'zone.js/dist/**',
//   'reflect-metadata/Reflect.js',
//   'systemjs/dist/system.src.js',
//   '@angular/**/bundles/**',
//   'rxjs/**/*.js',
//   'angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
// ]


// gulp.task('default', function () {
//   console.log("Hi! I'm Gulp default task!");
// });

// gulp.task('tslint', function () {
//   return gulp.src(typeScriptSource)
//     .pipe(tslint({
//       formatter: 'prose'
//     }));
//   // .pipe(tslint.report());
// });

// gulp.task("buildTS", ["tslint"], function () {
//   return gulp.src(typeScriptSource).pipe(sourcemaps.init())
//     .pipe(tsProject())
//     .pipe(uglify())
//     .pipe(sourcemaps.write(mapPath))
//     .pipe(gulp.dest(destinationPath))
//     .pipe(gulpIf(devMode, sourcemaps.init()))
//     .pipe(gulpIf(devMode, sourcemaps.write(mapPath)));
// });
// gulp.task('copyAngularLibraries', function () {
//   gulp.src(angularLibraries, {
//       cwd: "node_modules/**"
//     })
//     .pipe(gulp.dest(destinationPathForJSLibraries));
// });

// gulp.task('copyJSLibraries', function () {
//   gulp.src(javaScriptLibraries).pipe(gulp.dest(destinationPathForJSLibraries));
// });

// gulp.task('copyHTML', function () {
//   return gulp.src(htmlSource).pipe(gulp.dest(destinationPath));
// });

// gulp.task("build", ['buildTS', 'copyJSLibraries', 'copyAngularLibraries', 'copyHTML']);
// gulp.task('clean', function () {
//   return del(deletePath);
// });
// gulp.task('cleanBuild', function () {
//   runSequence('clean', 'build');
// });
// gulp.task('buildProd', function () {
//   devMode = false;
//   gulp.start('cleanBuild')
// });


// gulp.task('buildWatch', ['build'], function () {
//   gulp.watch(typeScriptSource, ['buildTS']).on('change', function (event) {
//     console.log('File Path' + event.path);
//   })
//   gulp.watch(htmlSource, ['copyHTML']).on('change', function (event) {
//     console.log('File Path' + event.path);
//   });
//   gulp.watch(javaScriptLibraries, ['copyJSLibraries']).on('change', function (event) {
//     console.log("File Path : " + event.path);
//   });
// });


// // var gulp = require('gulp');
// // var exec = require('child_process').exec;
// // var args = require('yargs').argv;



// // // development mode?
// // // devBuild = (process.env.NODE_ENV !== 'production'),

// // //   gulp.task('runBuild', function (cb) {
// // //     var cmdText = "ng b -e local --base-href . --no-delete-output-path";

// // //     if (args.d) cmdText = "ng b -e dev --base-href . --no-delete-output-path";
// // //     if (args.q) cmdText = "ng b -e qa --base-href . --no-delete-output-path";
// // //     if (args.p) cmdText = "ng b -e prod --base-href . --no-delete-output-path";

// // //     log("Ececuting Build : " + cmdText);

// // //     exec(cmdText, {
// // //       maxBuffer: 500 * 1024
// // //     }, function (err, stdout, stderr) {
// // //       console.log(stdout);
// // //       cb(stderr);
// // //     });
// // //   })

// // // gulp.task('copy-jsp', ['runBuild'], function () {
// // //   return gulp.src("src/index.jsp")
// // //     .pipe(gulp.dest("dist"));
// // // })

// // // gulp.task('default', ['copy-jsp'], function () {
// // //   return gulp.src("dist/*")
// // //     .pipe(zip("mycode.zip"))
// // //     .pipe(gulp.dest("dest"));
// // // })
