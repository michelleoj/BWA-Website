$(document).ready(function() {
    var body = $('body');
    var headerLayout = $("<div class='navbar navbar-inverse navbar-fixed-top' style='position: absolute; '><div class='navbar-inner'><ul class='nav' style='white-space: nowrap;'><li><a href='index.html'>Home</a></li><li><a href='resources.html'>Resources</a></li><li><a href='eboard.html'>E-Board</a></li><li><a href='gallery.html'>Members</a></li><li><a href='events.html'>Events</a></li><li><a href='los.html'>Ladies of Soul</a></li><li><a href='contact.html'>Contact</a></li></ul></div></div><div class='header'><h1>Black Women's Alliance</h1><p style='text-align: center;'>Love, Protect, Respect Your Sista EST. 1997</p></div><div class='span7' style='position: absolute'><img src='pinklogo_transparent.png' id='logo' style='margin-top: -30px; margin-left: -30px' /></div>");
    
    var footer = $('<div id="footer"><p>Developed by &copy; 2013 <a href="http://web.mit.edu/mchlljy/www">mchlljy</a>.</p></div><script src="bootstrap/js/bootstrap.min.js"></script><script src="bootstrap/js/bootstrap.js"></script><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script><script src="Includes/jquery.mCustomScrollbar.concat.min.js"></script><script>(function($) {$(window).load(function() {$(".contentBox").mCustomScrollbar();theme:"light-thick"});})(jQuery); </script><script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script><script src="http://blueimp.github.com/cdn/js/bootstrap.min.js"></script><script src="http://blueimp.github.com/JavaScript-Load-Image/load-image.min.js"></script><script src="js/bootstrap-image-gallery.min.js"></script>');

    body.prepend(headerLayout);
    body.append(footer);

})