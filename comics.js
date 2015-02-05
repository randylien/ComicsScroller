console.log("reader starts");
var comics=comics || { };
document.onreadystatechange = function () {
	if (document.readyState == "interactive") {
		
		comics.panel=document.createElement("div");
		comics.panel.id="comics_panel";
		
		comics.titlebar=document.createElement("div");
		comics.titlebar.id="comics_titlebar";

		var titlename=document.evaluate("//*[@id=\"enjoy_b\"]/div[1]/div[1]/h1/a",document,null,XPathResult.ANY_TYPE, null).iterateNext().text;
		var chapternum=document.evaluate("//*[@id=\"enjoy_b\"]/div[1]/div[1]/h2/a",document,null,XPathResult.ANY_TYPE, null).iterateNext().text;
		var nextURL=document.evaluate("//*[@id=\"enjoy_b\"]/div[2]/ul/li[6]/a/@href",document,null,XPathResult.ANY_TYPE, null).iterateNext().text;
		var nextURL=document.evaluate("//*[@id=\"enjoy_b\"]/div[2]/ul/li[6]/a",document,null,XPathResult.ANY_TYPE, null).iterateNext().getAttribute("href");
		comics.nextChaptertxt=document.createElement("a");
		comics.nextChaptertxt.id="comics_nextchaptertxt";
		comics.nextChaptertxt.textContent=titlename+" / "+chapternum+"  ";

		comics.nextChapter=document.createElement("div");
		comics.nextChapter.id="comics_nextchapter";
		comics.nextChapter.textContent="下一章";
		comics.nextChapter.addEventListener("click", function(){
    		window.location="http://manhua.ali213.net"+nextURL;
		});

		comics.titlebar.appendChild(comics.nextChaptertxt);
		comics.titlebar.appendChild(comics.nextChapter);
		comics.panel.appendChild(comics.titlebar);
		document.body.parentElement.appendChild(comics.panel);
		document.body.style.display="none";
		

		comics.pageMax=document.getElementsByClassName("chose")[0].childElementCount;
		comics.chapterId=/http\:\/\/manhua.ali213.net\/comic\/\d*\/(\d*).html/.exec(document.URL)[1];

		eval(document.head.innerHTML.replace(/[\r\n]/g,'@@@').match(/(eval.*?)\/*@@@/)[1]);
		var img_domain='';

		if (comics.chapterId>144681){
			img_domain="http://mhimg1.ali213.net";
		}else{
			img_domain="http://mhimg.ali213.net";
		}
		
		var imgs =[]; 
		
		for(var i=0;i<comics.pageMax;i++){
			imgs[i]=img_domain+imgpath+i+".jpg";
		}
		
		comics.images=imgs;
		comics.appendImage=function(){
			console.log('appendImage');
			for(var i=0;i<comics.pageMax;++i){
				console.log(comics.images[i]);
				var img=new Image();
				img.setAttribute("data-echo",comics.images[i]);
				img.src="";
				img.className="comics_img";
				this.panel.appendChild(img);
			}	
		};
		comics.appendImage();
		window.onscroll=function(){
			if (document.body.scrollTop+document.documentElement.clientHeight==document.body.scrollHeight){
				comics.setImages(comics.nextURL);
				comics.appendImage();
				echo.init({
	    			offset: 2500,
	    			throttle: 0,
	    			unload: false,
	    			callback: function (element, op) {
	        		// console.log(element, 'has been', op + 'ed')
	    			}
				});
			}
		};	
		echo.init({
	    	offset: 2500,
	    	throttle: 100,
	    	unload: false,
	    	callback: function (element, op) {
	        // console.log(element, 'has been', op + 'ed')
	    	}
		});
	}
	if(document.readyState=="complete"){
		
		// echo.render();  	
	}
}


// console.log("reader starts");
// var comics=comics || { };
// var pageRegEx=/^http\:\/\/(tel||www)\.dm5\.com\/m(\d*)\//;
// var indexRegEx=/^http\:\/\/(tel||www)\.dm5\.com\/m\//;
// comics.domainName=pageRegEx.exec(document.URL)[1];


// if(pageRegEx.test(document.URL)){
// 	document.onreadystatechange = function () {
// 	  if (document.readyState == "interactive") {
		
// 		comics.pannel=document.createElement("div");
// 		comics.pannel.id="comics_panel";
// 		document.body.parentElement.appendChild(comics.pannel);
// 		document.body.style.display="none";

// 		comics.pageMax = document.getElementById("pagelist").childElementCount;
// 		// var chapterRegEx=/^http\:\/\/(tel||www)\.dm5\.com\/m(\d*)\//;
// 		comics.chapterId=pageRegEx.exec(document.URL)[2];
// 		comics.images=[];
// 		comics.setImages = function(cid){
// 			var photos=[];
// 			for(var i=0;i<this.pageMax;++i){
// 	     	    var pid="-p"+(i+1);
// 	     	    if(i==0){
// 	     	    	pid="";
// 	     	    }
// 				photos[i]="http://"+comics.domainName+".dm5.com/m"+cid+pid+"/chapterimagefun.ashx?cid="+cid+"&page="+(i+1)+"&language=1&key=";
// 				// console.log(photos[i]);
// 			}
// 			comics.images=photos;
// 		};
// 		var next= document.evaluate("//*[@id=\"index_right\"]/div[2]/div[2]/span[2]/a/@href",document,null,XPathResult.ANY_TYPE, null).iterateNext();
// 		comics.nextURL = (next==null)?null :next.value;
// 		var chaptername=document.evaluate("/html/body/div[3]/h1",document,null,XPathResult.ANY_TYPE, null).iterateNext();
// 		var title=document.createElement("div");
// 		title.id="comics_title";
// 		var nextChapter=document.createElement("a");
// 		title.textContent=chaptername.textContent;

// 		// comics.images = comics.getImages(comics.chapterId);
// 		// console.log(comics.images);
// 		comics.appendImage=function(){
// 			console.log('appendImage');
// 			for(var i=0;i<comics.pageMax;++i){
// 				console.log(comics.images[i]);
// 				var img=new Image();
// 				img.setAttribute("data-echo",comics.images[i]);
// 				img.src="";
// 				img.className="comics_img";
// 				this.pannel.appendChild(img);
// 			}	
// 		};
// 		console.log(comics.chapterId);
// 		comics.setImages(comics.chapterId);		
// 		comics.appendImage();
		
		
// 		window.onscroll=function(){
// 			if (document.body.scrollTop+document.documentElement.clientHeight==document.body.scrollHeight){
// 				comics.setImages(comics.nextURL);
// 				comics.appendImage();
// 				echo.init({
// 	    			offset: 2500,
// 	    			throttle: 0,
// 	    			unload: false,
// 	    			callback: function (element, op) {
// 	        		// console.log(element, 'has been', op + 'ed')
// 	    			}
// 				});
// 			}
// 		};
// 		document.createElement("script");
// 	  }
// 	  if(document.readyState=="complete"){
// 		echo.init({
// 	    	offset: 2500,
// 	    	throttle: 0,
// 	    	unload: false,
// 	    	callback: function (element, op) {
// 	        // console.log(element, 'has been', op + 'ed')
// 	    	}
// 		});
// 		// echo.render();  	
// 	  }
// 	};
// }



// // document.body.style.display="none";
// // for(var i=0;i<comics.pageMax();++i){
// // 	console.log(comics.images[i]);
// // }