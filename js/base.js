function loveColor()
{
	var p = document.querySelector("#edu");
	p.style.backgroundColor = 'pink';
}
function easeColor()
{
	var p = document.querySelector("#edu");
	p.style.backgroundColor = 'white';
}

var windowTop = 0;
$(window).scroll(function(){
	var scrollS = $(this).scrollTop();
	var navBar = document.querySelector(".nav-bar");
	if(scrollS >= windowTop){
		// alert(scrollS);
		// alert('鼠标下滑');
		if(navBar.classList.contains('nav-bar-scrolling-up') == true && navBar.classList.contains('nav-bar-scrolling-down') == false)
			navBar.classList.add('nav-bar-scrolling-down');
		if(navBar.classList.contains('nav-bar-scrolling-up') == true)
			navBar.classList.remove('nav-bar-scrolling-up');
	}else{
		// alert('鼠标上滑');
		if(navBar.classList.contains('nav-bar-scrolling-up') == false)
			navBar.classList.add('nav-bar-scrolling-up');
		if(navBar.classList.contains('nav-bar-scrolling-down') == true)
		{
			// alert('There is a down');
			navBar.classList.remove('nav-bar-scrolling-down');
		}
	}
	var p = document.querySelector(".info p");
	if(scrollS <= 100)
		p.style.opacity = 1;
	else if(scrollS <= 150)
		p.style.opacity = 0.6;
	else if(scrollS > 200 && scrollS <= 300)
		p.style.opacity = 0.2;
	else if(scrollS > 300)
		p.style.opacity = 0;
	windowTop = scrollS;
	
	var obj = document.querySelector(".hobby .hbs .running");
	console.log(obj.getBoundingClientRect().top + 100 + " " + $(window).height());
	if(obj.getBoundingClientRect().top + 100 <= $(window).height())
		
	
})
$(".label").bind("click touch",function(){
	$('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top)}, 500);
});
var bookIndex = 0;
var flag = 0;
var bookTitle = ["牧羊少年的奇幻之旅", "我与地坛", "杀死一只知更鸟"];
var bookAuthor = ["保罗·柯艾略", "史铁生", "哈珀·李"];
function shiftBook()
{
	var cIndex = bookIndex;
	var nIndex = (bookIndex+1)%3;
	var cb = document.querySelector(".hobby .hbs .reading .box .books .cBook");
	var nb = document.querySelector(".hobby .hbs .reading .box .books .nBook");
	
	if(flag == 0)
	{
		nb.style.left = "180px";
		nb.src = "img/"+ bookTitle[nIndex] + ".jpeg";
		$(".hobby .hbs .reading .box .books .cBook").animate({left: "-180px"}, 400);
		$(".hobby .hbs .reading .box .books .nBook").animate({left: "0"}, 400);
	}else{
		cb.style.left = "180px";
		cb.src = "img/"+ bookTitle[nIndex] + ".jpeg";
		$(".hobby .hbs .reading .box .books .nBook").animate({left: "-180px"}, 400);
		$(".hobby .hbs .reading .box .books .cBook").animate({left: "0"}, 400);
	}
	document.querySelector(".hobby .hbs .reading .box .content h3").innerHTML = bookTitle[nIndex];
	document.querySelector(".hobby .hbs .reading .box .content h4").innerHTML = bookAuthor[nIndex]
	bookIndex = nIndex;
	flag ^= 1;
}
