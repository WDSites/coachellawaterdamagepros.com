(function(){var b=document.querySelector('.menu-btn'),n=document.getElementById('sitenav');if(!b||!n){return;}
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.textContent=o?'Close':'Menu';});})();
