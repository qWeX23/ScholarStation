/**
 * Created by Michael on 2/6/2016.
 */
$(document).ready(function() {

    var animating = false,
        submitPhase1 = 1100,
        submitPhase2 = 400,
        logoutPhase1 = 800,
        $login = $(".login"),
        $app = $(".app");

    function ripple(elem, e) {
        $(".ripple").remove();
        var elTop = elem.offset().top,
            elLeft = elem.offset().left,
            x = e.pageX - elLeft,
            y = e.pageY - elTop;
        var $ripple = $("<div class='ripple'></div>");
        $ripple.css({top: y, left: x});
        elem.append($ripple);
    };

    $(document).on("click", ".login__submit", function(e) {
        //console.log(" animating...");
        if (animating) return;
        animating = true;
        var that = this;
        ripple($(that), e);
        $(that).addClass("processing");
        setTimeout(function() {
            $(that).addClass("success");
            setTimeout(function() {
                $app.show();
                $app.css("top");
                $app.addClass("active");
            }, submitPhase2 - 70);
            setTimeout(function() {
                $login.hide();
                $login.addClass("inactive");
                animating = false;
                $(that).removeClass("success processing");
            }, submitPhase2);
        }, submitPhase1);

    });



    $(document).on("click", ".app__logout", function(e) {
        if (animating) return;
        $(".ripple").remove();
        animating = true;
        var that = this;
        $(that).addClass("clicked");
        setTimeout(function() {
            $app.removeClass("active");
            $login.show();
            $login.css("top");
            $login.removeClass("inactive");
        }, logoutPhase1 - 120);
        setTimeout(function() {
            $app.hide();
            animating = false;
            $(that).removeClass("clicked");
        }, logoutPhase1);
    });

});

/* // this doesn't appear to send the json correctly. going to try the ajax way
    $(document).on("click", ".login__submit", function(e) {

    console.log("got into validate login...");
    var xhttp = new XMLHttpRequest();
    var json_upload;
    xhttp.onreadystatechange = function() { // for the response from server
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            // in here check if the loginUtility returned true
            //document.getElementById("demo").innerHTML = xhttp.responseText;
            //window.location ="http://70.187.52.39:3000/dashBoard"; // redirect to the dashboard
            console.log("the request was all good. Here is the response...\n");

            console.log("IN BROWSER -- userame: " + xhttp.response.body.username.toString() + " password: "+ xhttp.response.body.password);
            //window.location ="http://localhost:3000/dashBoard"; // redirect to the dashboard
        }
    };
    jsnon_upload = JSON.stringify({username:"qwex", password:"pass1234"});
    xhttp.open("POST", "http://localhost:3000/LoginApp" , true);
    //xhttp.open("POST", "http://70.187.52.39:3000/LoginApp" , true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(JSON.stringify({username:"qwex", password:"pass1234"}));
});
    */


$(document).on("click", ".login__submit", function(e) {

    console.log("got into validate login...");

     var result = $.ajax({
                    type: "POST",
                    url: "http://localhost:3000/LoginApp",
                    data: {'username': 'qwex', 'password': 'pass1234'},
                    success: function() {
                            alert("made it back. sucess");
                        //console.log("IN BROWSER -- userame: " + response.body.username.toString() + " password: "+ xhttp.response.body.password);
                    },
                    failure: function(){
                        alert("made it back. failed");
                    },
                    dataType: 'json'
                });

});