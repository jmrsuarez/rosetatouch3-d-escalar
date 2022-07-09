var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {

      myIndex = x.length;
    
  //  redirect('instrucciones.html');
     redirect('zoom.html');
    
  }
  
  console.log("aqui voy "+myIndex)
  if (myIndex==11) {
    document.getElementById("info").style.display="none"; 
    document.getElementById("info2").style.display="none";       
   }

  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 6000);
  
  // Change image every 9 seconds
   
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