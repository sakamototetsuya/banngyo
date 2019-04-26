$(function() {
	$('.banner-nav .dropdown').hover(function() {
		$('.dropdown-menu').show();
	}, function() {
		$('.dropdown-menu').hide();
	})
	
//	轮播图宽度
	var bannerWidth = $(".banner").width();
	$('.banner-inner>li').css({'width':bannerWidth});	
	var len = $('.banner-inner>li').length;
	for(var i = 0; i < len; i++) {
		$('.banner-inner>li>a').eq(i).css({'background' : 'url(img/'+(i+1)+'.jpg) no-repeat top center', 'background-size' : 'cover'});
	}
	
//	轮播图运行
	var addEle = $('.banner-inner>li').eq(0).clone();
	$('.banner-inner').append(addEle);
	var c = 0;
	var timer =	setInterval(run, 2000);
	function run() {
		c++;
		if(c == 11) {
			$('.banner-inner').css({left:0});
			c=1;
		}
		var left = -($('.banner-inner>li').width() * c);
		$('.banner-inner').stop().animate({'left' : left+'px'},1000);	
	}
	$('.banner-inner').hover(function(){
		clearInterval(timer);
	},function(){
		clearInterval(timer);
		timer =	setInterval(run, 2000);
	})
	
	for(var j = 0; j < len; j++){
		$('.banner-text').append('<li></li>');
		var txt = $('.banner-inner>li').eq(j).text();
		$('.banner-text>li').eq(j).append(txt)
	}
	
	$('.banner-text>li').click(function() {
		clearInterval(timer);
		var k = $(this).index();
		$('.banner-inner').stop().animate({'left' : -$('.banner-inner>li').width() * k}, 10);
		c = k;
		timer = setInterval(run, 2000);
	})
	
	
//	同步课程录入
	var oClass = [
		{
			'img': "img/3606209ef58ea15e949760e4cde81eff.jpg",
			'label': "41期课程可选",
			'subject': "英",
			'name': "AE外教英语直播班专区",
			'persons': "10000+人已报名",
			'price': "￥550起"
		},
		{
			'img': "img/15329501751119.jpg",
			'label': "51期课程可选",
			'subject': "数",
			'name': "大班大数学直播班专区",
			'persons': "10000+人已报名",
			'price': "￥700起"
		}
	];
	for(var i = 0; i < oClass.length; i++) {
		$('.lesson-box').append(`
			<div class='lesson'>
				<a href="#">
					<div class="lesson-img">
						<img>
						<div class="lesson-label"></div>
					</div>
					<div class="lesson-msg">
						<span class="lesson-sub"></span>
						<span class="lesson-name"></span>
					</div>
					<div class="lesson-other">
						<span class="lesson-person"></span>
						<strong class="lesson-price"></strong>
					</div>
				</a>
			</div>
		`);
		$('.lesson-img>img').eq(i).prop("src",oClass[i].img);
		$('.lesson-label').eq(i).text(oClass[i].label);
		$('.lesson-sub').eq(i).text(oClass[i].subject);
		$('.lesson-name').eq(i).text(oClass[i].name);
		$('.lesson-person').eq(i).text(oClass[i].persons);
		$('.lesson-price').eq(i).text(oClass[i].price);
	}
	
//	专题课程录入
	var spOClass = [
		{
			'subject': '语',
			'name': '许多的汉字之旅',
			'time': '10月22日、24日、29日、31日	18:30-20:00',
			'img': 'img/15369114144013.png',
			'post': '授课',
			'tName': '刘威V5',
			'sTime': '距离课程停售还剩4天',
			'price': '￥19'
		},
		{
			'subject': '数',
			'name': '玩转索玛立方体',
			'time': '11月6日-20日每周二	19:00-20:00',
			'img': 'img/15272391972271.png',
			'post': '授课',
			'tName': '罗丹',
			'sTime': '距离课程停售还剩4天',
			'price': '￥60'
		},
		{
			'subject': '英',
			'name': '自然拼读直播班（0级）—适合Pre K-K学员',
			'time': '11月8日-12月15日每周中教周四	18:45-19:45	外教每周六	19:00-19:40',
			'img': 'img/15369114144013.png',
			'post': '授课',
			'tName': '刘威V5',
			'sTime': '距离课程停售还剩4天',
			'price': '￥19'
		},
		{
			'subject': '英',
			'name': '自然拼读直播班（0级）—适合Pre K-K学员',
			'time': '10月22日、24日、29日、31日	18:30-20:00',
			'img': 'img/15369114144013.png',
			'post': '授课',
			'tName': '刘威V5',
			'sTime': '距离课程停售还剩4天',
			'price': '￥19'
		},
		{
			'subject': '英',
			'name': '自然拼读直播班（0级）—适合Pre K-K学员',
			'time': '10月22日、24日、29日、31日	18:30-20:00',
			'img': 'img/15369114144013.png',
			'post': '授课',
			'tName': '刘威V5',
			'sTime': '距离课程停售还剩4天',
			'price': '￥19'
		},
	];
	for(var i = 0; i < spOClass.length; i++) {
		$('.sp-course').append(`
			<div class="sp-lesson">
				<a href="#">
					<div class="sp-msg">
						<span class="sp-sub"></span>
						<span class="sp-name"></span>
					</div>
					<div class="sp-time"></div>
					<div class="sp-teachers">
						<div class="teacher">
							<img src=""/>
							<p class="post"></p>
							<p class="teacher-name"></p>
						</div>
					</div>
					<div class="sp-other">
						<span class="surplus-time"></span>
						<span class="sp-price"></span>
					</div>
				</a>
			</div>	
		`);
		$('.sp-sub').eq(i).text(spOClass[i].subject);
		$('.sp-name').eq(i).text(spOClass[i].name);
		$('.sp-time').eq(i).text(spOClass[i].time);
		$('.teacher>img').eq(i).prop('src',spOClass[i].img);
		$('.post').eq(i).text(spOClass[i].post);
		$('.teacher-name').eq(i).text(spOClass[i].tName);
		$('.surplus-time').eq(i).text(spOClass[i].sTime);
		$('.sp-price').eq(i).text(spOClass[i].price);
	}
})
