docute.init({
	landing: 'landing.html',
	// sidebar: false,
	// disableSidebarToggle: true,
	
	
	// nav: [
 //    	// homepage
 //    	{title: 'Home', path: '/'},
 //    	// chinese doc
 //    	{title: 'Chinese', path: '/language/chinese'}
 //  	]
  	plugins: [
		evanyou(),
		// docuteIframe()
	]
});

function showWechat() {
	var pop = document.querySelector('.wechat');
	pop.classList.add('wechat-ease','wechat-show');
}

function hiddenWechat() {
	var pop = document.querySelector('.wechat');
	pop.classList.remove('wechat-show');
}





