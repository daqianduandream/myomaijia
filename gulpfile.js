//1引入gulp包
var gulp = require('gulp');

//2引入 gulp-webserver包
var webserver = require('gulp-webserver')

//3引入 gulp-webpack 包
var webpack = require('gulp-webpack')

//4引入文件名提取包,vinyl人名
var named = require('vinyl-named')

//5引入 gulp-sass 包
var sass = require('gulp-sass')

gulp.task('copy-index', function() {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./build/'))
})
//启动
gulp.task('webserver', function() {
  gulp.src('./build/')
    .pipe(
      webserver({
        host: 'localhost',
        port: '8289',
        directoryListing: { //显示目录
          enable: true,
          path: './build'
        },
        livereload: true
      })
    )
})
//打包js，打包后叫main.js,commjs规范是webpack做的事情
gulp.task('packjs', function() {
  gulp.src('./src/script/app.js')
    //在管道前配置webpack,'[name].js'就取到了*.js的name,[name]是规范
    .pipe(named()) //name+()表示执行
    .pipe(webpack({
      output: {
        filename: '[name].js'
      },
      module: {
        loaders: [ //loader就是解析某些文件
          {
            test: /\.js$/,
            loader: 'imports-loader', //在node-modules里
            exclude: './node_modules' //排除node_modules
          }, {
            test: /\.string$/,
            loader: 'string-loader'
          }
        ]
      }

    }))
    .pipe(gulp.dest('./build/script'))
})

//用gulp-sass打包scss
gulp.task('packcss', function() {
  gulp.src('./src/style/usage/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/style'))
})

//copy images
gulp.task('copyimages', function() {
  gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./build/images'))
  gulp.src('./build/images')
})

//copy libs
gulp.task('copylibs',function(){
  gulp.src('./src/script/libs/*.*')
  .pipe(gulp.dest('./build/libs'))
})
//检测变化
gulp.task('watch', function() {
  gulp.watch('./src/*.html', ['copy-index'])
  gulp.watch('./src/script/**/*.js', ['packjs'])
  gulp.watch('./src/style/usage/module/*.scss', ['packcss'])
  gulp.watch('./src/script/**/*.string', ['packjs'])
  gulp.watch('./src/images/**/*', ['copyimages'])
  gulp.watch('./src/libs/**/*',['copylibs'])

})
//定义默认任务
gulp.task('default', ['copy-index', 'packjs', 'packcss', 'copyimages', 'watch', 'webserver'], function() {
  console.log('done...OK');
})

//启动一个server服务
