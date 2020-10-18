

(function ($) {
    "use strict";
    
    var loginBtn = document.getElementById("loginButton");


     /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
    

  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    loginBtn.onclick = function() {
        var userName = document.getElementById('username').value;
        var userPassword = document.getElementById("password").value;
        if (userName != "" && userPassword != "") {
            // Check credentials   
            location.replace("../www/recipe-card.html");
            // $.ajax({
            //     type: "POST",
            //     async: true,
            //     url: "http://localhost/ReceptorApp/login.php",
            //     data: { a: 'CheckCredentials',
            //             b: userName,
            //             c: userPassword },                
            //     })
            //     .done(function(output) {
            //         // here is the code that runs client side after php script
            //         alert( "asds: " + output );
            //     });

        }
        else {
            location.replace("../www/recipe-card.html");

            console.log("doh");
        }


    }

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);