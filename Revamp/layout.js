var data = {
    name: "Black Women's Alliance",
    tagLine: "Love, Protect, Respect Your Sista EST. 1997",
    links: ["Home","Resources","E-Board","Members","Events","Ladies of Soul","Contact"],
    headers: ["Why We're Here","Resources","BWA Executive Board 2013-2014","Ladies of BWA","Upcoming Events","Ladies of Soul","Contact"],
    footer: "Developed by © 2013 mchlljy",
    url : function () {  
        return function (text, render) {  
            text = render(text);  
            var url = text.trim().toLowerCase().split()[0] + '.html';
            console.log(url);
            if (url == 'home.html') {
                return '<a href="index.html">' + text + '</a>';  
            }
            else if ( url == 'ladies of soul.html' ) {
                return '<a href="los.html">' + text + '</a>'; 
            }
            else if (url == 'e-board.html') {
                return '<a href="eboard.html">' + text + '</a>';
            }
            else {
                return '<a href="' + url + '">' + text + '</a>';
            }
        }  
    } 
};

var template = "<div class='navbar navbar-inverse navbar-fixed-top' style='position: absolute;'><div class='navbar-inner'><ul class='nav'>{{#links}}<li>{{#url}} {{.}} {{/url}}</li>{{/links}}</ul></div></div><div class='header'><h1>Black Women's Alliance</h1><p style='text-align: center;'>Love, Protect, Respect Your Sista EST. 1997<br>Developed by &copy; 2013 <a href='http://web.mit.edu/mchlljy/www'>mchlljy</a></p><br><br></div><div class='span7' style='position: absolute'><img src='pinklogo_transparent.png' id='logo' style='margin-top: -30px; margin-left: -30px'/></div>";

var html = Mustache.render(template, data);

document.write(html);
