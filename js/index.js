window.onload = function() {

	loyi.app.index.broadcast();
	// loyi.app.index.indicator();

	loyi.layout.news.newslist();
	loyi.layout.case.caselist();
	loyi.layout.product.productlist();
	
	loyi.ui.fadeOut();
	loyi.ui.pub.Liclick();
	loyi.ui.news.Amovein ();
	// loyi.ui.pub.pagenumclick();
	loyi.ui.product.Amovein();

};
// 命名空间
var loyi = {};











/*--------------------------------工具层------------------------*/
// 工具层
loyi.tools = {};
loyi.tools.getByClass = function(oParent, sClass) {
	var aEle = oParent.getElementsByTagName("*");
	var arr = [];

	for (var i = 0; i < aEle.length; i++) {
		if (aEle[i].className == sClass) {
			arr.push(aEle[i]);
		}

	}
	return arr;

};
loyi.tools.getByStyle = function(obj, styleName){
	if (obj.currentStyle) {
		return obj.currentStyle[styleName];
	} else {
		return getComputedStyle(obj,null)[styleName];
	}
}
loyi.tools.getByTagName = function(oParent, sTagName) {
		var arr = [];
		var aEle = oParent.getElementsByTagName(sTagName);

		for (var i = 0; i < aEle.length; i++) {
			arr.push(aEle[i]);
		}
		return arr;
}










/*--------------------------------UI层------------------------*/
// 组件UI层
loyi.ui = {};
loyi.ui.fadeOut = function() {
	var head = document.getElementById("header");
	if (!head) {return;}
	var productUl = loyi.tools.getByClass(head, "clearfix")[0];
	if (!productUl) {return;}
	var oLi = loyi.tools.getByTagName(productUl, "li")[1];
	if (!oLi) {return;}
	var listUl = loyi.tools.getByClass(head, "list")[0];
	if (!listUl) {return;}


	// console.log(oLi);
	oLi.onmouseover = function() {
		listUl.style.display = "block";
	};

	oLi.onmouseout = function() {
		listUl.style.display = "none";
	};
};

// 共用#wrap .title
loyi.ui.pub = {};
loyi.ui.pub.Liclick = function() {
	var oparent = document.getElementById("wrap");
	if (!oparent) {return;}
	var oul = oparent.getElementsByClassName("title")[0];
	if (!oul) {return;}
	var arrA = oul.getElementsByTagName("li");
	if (!arrA) {return;}

	for (var i = 0; i < arrA.length; i++) {
		arrA[i].index = i;
		var currentI = arrA[0].index;
		arrA[currentI].className = "active";
		arrA[i].onclick = function() {
			arrA[currentI].className = "";
			this.className = "active";
			currentI = this.index;
		};
	}
};
// #wrap .pagenum 共用页码li选择函数
loyi.ui.pub.pagenumclick = function(){
	var oparent = document.getElementById("wrap");
	if (!oparent) {return;}
	var opagediv = oparent.getElementsByClassName("pagenum")[0];
	if (!opagediv) {return;}
	var arrLi = opagediv.getElementsByTagName("li");
	if (!arrLi) {return;}

	var currentLi = arrLi[0];
	currentLi.className = "active";
	for (var i = 0; i < arrLi.length; i++) {
		arrLi[i].onclick = function(){
			currentLi.className = "";
			this.className = "active";
			currentLi = this;
		};
	}
};
// 新闻UI层
loyi.ui.news = {};
loyi.ui.news.Amovein = function(){
	var oparent = document.getElementById("wrap");
	if (!oparent) {return;}
	var odiv = oparent.getElementsByClassName("newslist")[0];
	if (!odiv) {return;}
	var arrA =  odiv.getElementsByTagName("a");
	if (!arrA) {return;}


	for (var i = 0; i < arrA.length; i++) {
		arrA[i].onmouseover = function(){
			var h3 = this.getElementsByTagName("h3")[0];
			var arrp = this.getElementsByTagName("p");
			var odiv = this.getElementsByTagName("div")[0];

			h3.style.textDecoration = "underline";
			h3.style.color = "#fff";
			h3.style.transition = "all .3s ease-in";
			odiv.style.background = "#00a2eb"
			odiv.style.transition = "all .3s ease-in";
			for (var i = 0; i < arrp.length; i++) {
				arrp[i].style.color = "#fff";
				arrp[i].style.transition = "all .3s ease-in";
			}
		};
		arrA[i].onmouseout = function(){
			var h3 = this.getElementsByTagName("h3")[0];
			var arrp = this.getElementsByTagName("p");
			var odiv = this.getElementsByTagName("div")[0];

			h3.style.textDecoration = "none";
			h3.style.color = "#444444";
			h3.style.transition = "all .3s ease-in";
			odiv.style.background = "#f0f0f0"
			odiv.style.transition = "all .3s ease-in";
			for (var i = 0; i < arrp.length; i++) {
				arrp[i].style.color = "#888888";
				arrp[i].style.transition = "all .3s ease-in";
			}
		};
	}
};
// 产品UI层
loyi.ui.product = {};
loyi.ui.product.Amovein = function(){
	var oparent = document.getElementById("wrap");
	if (!oparent) {return;}
	var odiv = oparent.getElementsByClassName("productlist")[0];
	if (!odiv) {return;}
	var arrA =  odiv.getElementsByTagName("a");
	if (!arrA) {return;}

	for (var i = 0; i < arrA.length; i++) {
		arrA[i].onmouseover = function(){
			var op = this.getElementsByTagName("p")[0];
			op.className = "active";
		};
		arrA[i].onmouseout = function(){
			var op = this.getElementsByTagName("p")[0];
			op.className = "";
		};
	}
}










/*--------------------------------应用层------------------------*/
// 应用层
loyi.app = {};
loyi.app.index = {};
loyi.app.index.broadcast = function(){
	var broadcast = document.getElementById("broadcast");
	if (!broadcast) {return;}
	var cont = broadcast.getElementsByClassName("cont")[0];
	if (!cont) {return;}
	var oul = broadcast.getElementsByTagName("ul")[0];
	if (!oul) {return;}
	var ali = oul.getElementsByTagName("li");
	if (!ali) {return;}
	oul.style.position = "relative";
	oul.style.top = "0";

	oul.innerHTML +=oul.innerHTML;
	var liH = ali[0].offsetHeight;
	oul.style.height = ali.length * liH + "px";
	var num = 0;

	var timer = setInterval(auto, 3500);

	function auto(){

		if (num == 0) {
			num = ali.length/2;
			oul.style.top = -oul.offsetHeight/2 + "px";
		}

		loyi.app.index.movefun(oul,-num * liH , -(num-1) * liH, "top");

		num --;

	};

	cont.onmouseover = function(){
		if (timer) {
			clearInterval(timer);
		}
	};
	cont.onmouseout = function(){
		if (timer) {
			clearInterval(timer);
		}
		timer = setInterval(auto, 3500);
	};
};

loyi.app.index.indicator = function(){
	var banner = document.getElementById("banner");
	if (!banner) {return;}
	var odiv = banner.getElementsByClassName("pic-indicator")[0];
	if (!odiv) {return;}
	var aspan = odiv.getElementsByTagName("span");
	if (!aspan) {return;}
	var oul = banner.getElementsByClassName("pic-banner")[0];
	if (!oul) {return;}
	var ali = oul.getElementsByTagName("li");
	if (!ali) {return;}

	var len = aspan.length;
	var current_show = ali[0];
	current_show.className = "";
	var current_span = aspan[0];

	var timer = null;
	var num = 1;
	timer = setInterval(auto, 3000);

	function auto(){

		if (num == len) {
			num = 0;
		}
		// console.log(num);

		current_span.className = "";
		aspan[num].className = "act";
		current_span = aspan[num];

		for (var i = 0; i < ali.length; i++) {
			loyi.app.index.fadeOut(ali[i]);
		}
		loyi.app.index.fadeIn(ali[num]);

		num++;
	};

	for (var i = 0; i < len; i++) {
		aspan[i].index = i;
		aspan[i].onclick = function(){

			current_show.className = "hide";
			ali[this.index].className = "";
			current_show = ali[this.index];

			current_span.className = "";
			this.className = "act";
			current_span = this;

			for (var i = 0; i < ali.length; i++) {
				loyi.app.index.fadeOut(ali[i]);
			}
			loyi.app.index.fadeIn(ali[this.index]);

		};
	}

	banner.onmouseover = function(){
		if (timer) {
			clearInterval(timer);
		}
	};
	banner.onmouseout = function(){
		if (timer) {
			clearInterval(timer);
		}
		timer = setInterval(auto, 3000);
	};

};

loyi.app.index.fadeIn = function(obj,opacityvalue){
	if (opacityvalue==1) {return false;}
	clearInterval(obj.timer);
	var value = 0;
	obj.timer = setInterval(function(){
		var ispeed = 5;
		if (value == 100) {
			clearInterval(obj.timer);
		} else {
			value += ispeed;
			obj.style.opacity = value / 100;
			obj.style.filter = "alpha(opacity=" + value + ")";
		}

	},30);
};

loyi.app.index.fadeOut = function(obj,opacityvalue){
	if (opacityvalue==0) {return false;}
	clearInterval(obj.timer);
	var value = 0;
	obj.timer = setInterval(function(){
		var ispeed = -5;
		if (value == 100) {
			clearInterval(obj.timer);
		} else {
			value += ispeed;
			obj.style.opacity = value / 100;
			obj.style.filter = "alpha(opacity=" + value + ")";
		}

	},30);
};


loyi.app.index.movefun = function(obj, newh, oldh ,orientation){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var ispeed = (newh - oldh) / 100;
		ispeed = ispeed > 0 ? Math.ceil(ispeed) : Math.floor(ispeed);
		if (newh == oldh) {
			clearInterval(obj.timer);
		} else {
			newh -= ispeed;
			obj.style[orientation] = newh + "px";
		}
	},30);
};












/*--------------------------------布局层------------------------*/
//JS布局层
loyi.layout = {};
// 新闻js布局
loyi.layout.news = {};
loyi.layout.news.newslist = function(){
	var oparent = document.getElementById("wrap");
	if (!oparent) {return;}
	var odiv = oparent.getElementsByClassName("newslist")[0];
	if (!odiv) {return;}
	var arrli = odiv.getElementsByTagName("li");
	if (!arrli) {return;}

	var arr = [];
	var n =1;
	for (var i = 0; i < arrli.length; i++) {
		if (i%3==0) {
			n+=3;
			arr.push(n);
		}
	}
	arr.unshift(1); //数组最前端添加1 对应shift()
	arr.pop();// 数组删除最后段一个元素 对应push()
	for (var i = 0; i < arr.length; i++) {
		arrli[arr[i]].style.margin = "0 40px";
	}
	console.log(arr);
};
// 案例js布局
loyi.layout.case = {};
loyi.layout.case.caselist = function(){
	var oparent = document.getElementById("wrap");
	if (!oparent) {return;}
	var oul = oparent.getElementsByClassName("case-ul")[0];
	if (!oul) {return;}
	var arrli = oul.getElementsByTagName("li");
	if (!arrli) {return;}

	// console.log(arrli);
	for (var i = 0; i < arrli.length; i++) {
		if (i%2==0) {
			arrli[i].style.float = "left";
		} else {
			arrli[i].style.float = "right";
		}
	}
};
// 产品js布局
loyi.layout.product = {};
loyi.layout.product.productlist = function(){
	var oparent = document.getElementById("wrap");
	if (!oparent) {return;}
	var odiv = oparent.getElementsByClassName("productlist")[0];
	if (!odiv) {return;}
	var arrli = odiv.getElementsByTagName("li");
	if (!arrli) {return;}

	var arr = [];
	var n=1;
	for (var i = 0; i < arrli.length; i++) {
		if (i%3==0) {
			n += 3;
			arr.push(n);
		}
	}
	arr.unshift(1);
	arr.pop();
	for (var i = 0; i < arr.length; i++) {
		arrli[arr[i]].style.margin = "0 30px";
	}
};









