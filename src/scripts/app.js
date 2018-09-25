// $('[type="submit"]').on('click', function () {
//     // this adds 'required' class to all the required inputs under the same <form> as the submit button
//     $(this)
//         .closest('form')
//         .find('[required]')
//         .addClass('required');
// });


$(function () {

    document.querySelector("form")
        .addEventListener("invalid", function (event) {
            event.preventDefault();
        }, true);


    function checkPassword() {
        if ($(".password").val().length < 8 || $(".password").val().length > 24) {
            console.log(`length`, $(".password").val().length);
            
            $(".errorMessage").addClass("show");
            $(".password").toggleClass("invalid");
        } else {
            console.log(`hello`);
            console.log(`length`, $(".password").val().length);
            
            $(".login").addClass("hide");
            $(".logout").removeClass("hide");
            $(".logout").toggleClass("showFlex");
        }
    };


    $('.submit').on("click", function (e) {
        console.log(`timer`);
        e.preventDefault();
        setTimeout(checkPassword, 3000);
    });

    function goHome() {
        location.reload();
    }

    function loggedOut() {
        alert("You've been logged out.");
        goHome();
    }

    $(".logout--home").on("click", function() {
        console.log(`goodbye`);
        
        setTimeout(goHome, 2000);
    });

    $(function () {
        $(".submit").on("click", function () {
            var btndom = $(this);
            btndom.addClass("loading-start");
            btndom.attr("disabled", true);

            setTimeout(function () {
                btndom.removeClass("loading-start").removeAttr("disabled");
            }, 3000);
        });
    });


});


