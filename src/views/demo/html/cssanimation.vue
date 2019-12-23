<template>
	<div class="contain">
		<div class="css">123</div>
		<div class="css1"></div>
		<div>456</div>
		<div class="transition">123</div>
		<hr>
		<div class="img"></div>
	</div>
</template>

<script>
</script>

<style>
	.contain{
		position: relative;
		width: 100%;
		height: 100%;
	}
	.css{
		position: absolute;
		left: 50px;
		right: 50px;
		width: 100px;
		height: 100px;
		background: red;
		 transform-origin:0Px 0Px;
		  transform: skew(30deg, 10deg);
		 /* transform :rotate(30deg) scale(1.3,1.3)translate(0px, 0px); */
	}
	.css1{
		position: absolute;
		left: 50px;
		right: 50px;
		width: 100px;
		height: 100px;
		background: blue;
		 /* transform-origin:0Px 0Px; */
		 
		 /* transform :rotate(30deg) scale(2,3); */
	}
	.transition{
		width: 100px;
		height: 100px;
		background: black;
		
	}
	.transition{width:200px;transition:width 1s ease}
.transition:hover{width:100px}
 .img {
	 width: 200px;
	 height: 200px;
	 border: 1px solid red;
            /*animation:动画名称 动画时间 运动曲线  何时开始  播放次数  是否反方向;*/
            animation: car 5s infinite;  /*引用动画*/
        }
        /*定义动画*/
        @keyframes car {
            0% {
                transform: translate3d(0, 0, 0);
            }
            50% {
                transform: translate3d(1000px, 0, 0);
            }
            51% {
                transform: translate3d(1000px, 0, 0) rotateY(180deg);
                /*如果多组变形 都属于 tarnsform 我们用空格隔开就好了*/
            }
            99% {
                transform: translate3d(0, 0, 0) rotateY(180deg);
                /*如果多组变形 都属于 tarnsform 我们用空格隔开就好了*/
            }

        }
</style>
