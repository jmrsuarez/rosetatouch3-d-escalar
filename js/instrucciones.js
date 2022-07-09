var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 15}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 1000);
  
  
  // Change image every 9 seconds
  
if (myIndex == 1) 
      {document.getElementById('instru').style.display = 'none';} 
  
  
if (myIndex == 8) 
      {document.getElementById('instru').style.display = 'none';} 
      // estaba en block antes
  

if (myIndex == 17) 
      {document.getElementById('instru').style.display = 'none';
       redirect('zoom.html');
      }   
}


function redirect (url) {
    var ua        = navigator.userAgent.toLowerCase(),
        isIE      = ua.indexOf('msie') !== -1,
        version   = parseInt(ua.substr(4, 2), 10);

    // Internet Explorer 8 and lower
    if (isIE && version < 9) {
        var link = document.createElement('a');
        link.href = url;
        document.body.appendChild(link);
        link.click();
    }

    // All other browsers can use the standard window.location.href (they don't lose HTTP_REFERER like Internet Explorer 8 & lower does)
    else { 
        window.location.href = url; 
    }
}

