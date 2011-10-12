if (typeof jQuery == 'undefined') {
	var jQ = document.createElement('script');
	jQ.type = 'text/javascript';
	jQ.onload=runthis;
	jQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	document.body.appendChild(jQ);
} else {
	runthis();
}

function message(msg) {
    var element = jQuery('<a>')
      .html(msg)
      .attr('href', '#')
      .css({
        width: 'auto',
        opacity: 0.9,
        position: 'fixed',
        zIndex: 9000,
        top: '15px',
        right: '20px',
        background: '#000',
        'float': 'right',
        padding: '7px 10px',
        color: '#fff',
        border: 'solid 2px #fff',
        textDecoration: 'none',
        textAlign: 'center',
        font: '12px "Lucida Grande",Helvetica,Tahoma bold',
        borderRadius: '5px',
        MozBorderRadius: '5px',
        MozBoxShadow: '0 0 20px #000',
        WebkitBorderRadius: '5px',
        WebkitBoxShadow: '0 0 20px #000'
      })
      .click(function(evt){
        evt.preventDefault();
        jQuery(this).fadeOut('slow', function(){jQuery(this).remove()});
      })
      .appendTo('body');
    window.setTimeout(function(){ element.trigger('click') }, 2500);
  };
  
function runthis() {
	//$("img").hide();
	 //$("body").append("<div id='hola'><h1>Hola Mundo</h1></div>");
	 message("hola");
}



