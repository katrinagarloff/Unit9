/**
 * Created by Katrina on 7/16/2017.
 */
var wordItems = document.getElementsByTagName("strong");

for(var i = 0; i < wordItems.length; i++) {
    wordItems[i].onmouseover = function () {
        this.style.color = "red";
    };

    wordItems[i].onmouseout = function () {
        this.style.color = "black";
    };
}