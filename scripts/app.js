// 创建app应用模块
var yike=angular.module("yike",[]);
// console.log(1111);

/*
	run方法在模块创建好之后,会直接执行
 */
yike.run(["$rootScope",function($rootScope){
	// alert(123);
	// 给头部的a标签绑定单击事件,点击按钮可以实现左侧导航栏的显示或隐藏
	// 给collapse类定义值,通过这个值决定colapse是否有效
	$rootScope.collapsed=false;
	$rootScope.toggle=function(){
		// alert("toggle");	
		// if($rootscope.collapsed=1){
		// 	$rootscope.collapsed=0;
		// }else{
		// 	$rootscope.collapsed=1;
		// }
		// ****直接取反原有的值
		$rootScope.collapsed=!$rootScope.collapsed;
		// 显示或隐藏导航栏标题内容
		// 获取导航栏中所有dd
		var dds=document.querySelectorAll("dd");
		// console.log(dds);
		// [dd.active, dd, dd, dd, dd, dd]
		// 遍历每一个dd,给每一个dd修改样式实现隐藏显示的效果
		// 显示时,translate值为0,此时collapsed值为true
		if($rootScope.collapsed){
			// 此时是显示
			for(var i=0;i<dds.length;i++){
				dds[i].style.transitionDuration = (i + 1) * 0.15 + 's';
				dds[i].style.transitionProperty = 'all';
				dds[i].style.transitionDelay = '0.2s';
				dds[i].style.transitionTimingFunction = 'ease-out';
				dds[i].style.transform = 'translate(0)';
			}
		}else{
			// 此时隐藏
			for(var i=0;i<dds.length;i++){
				dds[i].style.transitionDuration = (dds.length - i + 1) * 0.05 + 's';
				dds[i].style.transitionProperty = 'all';
				dds[i].style.transitionDelay = '';
				dds[i].style.transitionTimingFunction = 'ease-out';
				dds[i].style.transform = 'translate(-100%)';
			}
		}
	}
}]);