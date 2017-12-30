'use strict';

var path = require('path');
var gulp = require('gulp');
var shell = require('gulp-shell');
var clean = require('gulp-clean');
var fs = require("fs");

gulp.task('stopServer', shell.task('fis3 server stop'));
gulp.task('startServer', shell.task('fis3 server start'));
gulp.task('run', ['startServer'], shell.task('fis3 release -w'));