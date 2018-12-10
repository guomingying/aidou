var gulp =require ("gulp");
var server=require("gulp-webserver");

gulp.task('server',function(){
	return gulp.src('src')
	.pipe(server({
		port:'9090',
		open:true,
		host:"localhost",
		proxies:[
			{
				source:'/api/get/list',target:"http://localhost:3000/api/get/list"
			}
		]
	}))
})