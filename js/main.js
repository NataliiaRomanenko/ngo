$(document).ready(function () {




// ~~~~~~~~~~~~~~~open registration modal when click btnReg in loginModal~~~~~~~~~~~~~~~~~~~~~~//
    $(".btnReg").click(function () {
        $("#loginModal").modal("hide");
    });

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~styles select~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    $('select').select2({
        minimumResultsForSearch: Infinity
    });
    $('#countryOrg').select2({
        minimumResultsForSearch: Infinity,
        templateResult: addUserPic,
        templateSelection: addUserPic
    });

    function addUserPic(opt) {
        if (!opt.id) {
            return opt.text;
        }
        let optimage = $(opt.element).data('image');
        if (!optimage) {
            return $('<span class="selectImg"><span class="empty"/> ' + opt.text + '</span>');

        } else {
            let $opt = $(
                '<span class="selectImg"><img src="' + optimage + '" class="selectIcon" /> ' + $(opt.element).text() + '</span>'
            );
            return $opt;
        }
    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~styled scrollBlock~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    $(".scrollBlock").mCustomScrollbar({
        theme: "minimal-dark"

    });



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~for mobile menu open submenu~~~~~~~~~~~~~~~~~~~~~~~~~//
    $('.mainMenuList').click(function () {
        $(this).children('.subMenu').toggleClass('open');
    });

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~for mobile burger~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    $("#navBurger").click(function () {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");

    });
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~active link on header~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    $(function () {
        var current_page_URL = location.href;

        $(".mainMenuLink").each(function () {

            if ($(this).attr("href") !== "#") {

                var target_URL = $(this).prop("href");

                if (target_URL == current_page_URL) {
                    $('.mainMenuLink').removeClass('active');
                    $(this).addClass('active');

                    return false;
                }
            }
        });
    });


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~tabs for modal registration~~~~~~~~~~~~~~~~~~~~~~~~~//
    var tabs = $('.tabsBlock');
    $('.tabs-content > div', tabs).each(function (i) {
        if (i != 0) $(this).hide(0);
    });
    tabs.on('click', '.tabs a', function (e) {
        /* Предотвращаем стандартную обработку клика по ссылке */
        e.preventDefault();

        /* Узнаем значения ID блока, который нужно отобразить */
        var tabId = $(this).attr('href');

        /* Удаляем все классы у якорей и ставим active текущей вкладке */
        $('.tabs a', tabs).removeClass();
        $(this).addClass('active');

        /* Прячем содержимое всех вкладок и отображаем содержимое нажатой */
        $('.tabs-content > div', tabs).hide(0);
        $(tabId).show();
    });

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ styled last messages for chat~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    $(".userMessage").last($(".chatMessageWrapper.right").addClass("lastMessage")) ;
    $(".userMessage").last($(".chatMessageWrapper.left").addClass("lastMessage"));



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~calendar~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    $('.datepicker-here').datepicker({
        moveToOtherYearsOnSelect: true,
        changeYear: true,
        dateFormat: 'dd.mm.yyyy'
    });

    $('.datepicker-here.blueFont').datepicker({
        classes: "blue"
    });
    $('.datepicker-here.orangeFont').datepicker({
        classes: "orange"
    });
    $('.datepicker-here.redFont').datepicker({
        classes: "red"
    });
    let onlyDate, onlyMonth, dateNewFormat, today = new Date();
    dateNewFormat = today.getFullYear();
    onlyDate = today.getDate();
    onlyMonth = today.getMonth() + 1;

    if (onlyDate.toString().length == 2 || onlyMonth.toString().length == 2) {
        dateNewFormat = onlyDate + '.0' + onlyMonth + '.' + dateNewFormat;
    } else {
        dateNewFormat = '0' + onlyDate + '.0' + onlyMonth + '.' + dateNewFormat;
    }
    $('.datepicker-here').val(dateNewFormat);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~for userCabinet open favourites subMenu~~~~~~~~~~~~~~~~~~~~~~~~~//
    if($('.mainTab').hasClass('active')){
        $('.tab-content.submenu .tab-pane').removeClass('show active');
        $('.favouriteSubMenu .nav-item').removeClass('active');
    }

    $('#nav-fav-tab').click(function () {
            $(this).toggleClass('active show');
            $('.favouriteSubMenu').toggleClass('open');
            $('.mainTab').removeClass('active');
        $('.favouriteSubMenu .nav-item:first-child').addClass('active');
        $('.userCabinetTabsContent .tab-pane').removeClass('show active')
            if( $('.favouriteSubMenu .nav-item:first-child').hasClass('active')){
                $('.tab-content.submenu .tab-pane:first-child').addClass('show active');
            }
    });

    $('.mainTab').click(function () {
        $('.favouriteSubMenu').removeClass('open');
        $('#nav-fav-tab').removeClass('active');
        $('.tab-content.submenu .tab-pane').removeClass('show active');
        $('.favouriteSubMenu .nav-item').removeClass('active');
    });

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~for btn close~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    $('.chatBodyHeaderUSer.org').hover(
        function () {
        $('.chatShortUserInfo').removeClass('close');
        $('.chatBodyMessages').addClass('opacityBlock');
         }, function() {
            $('.chatShortUserInfo').addClass('close');
            $('.chatBodyMessages').removeClass('opacityBlock');
        }
    );
    $('.close').click(function () {
        $('.chatShortUserInfo').addClass('close');
    });

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~ select event members~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    $('.eventMember').hover(
        function () {
            $('.chatShortUserInfo').removeClass('close');
            //console.log(this);
            let parent = $(this).parent();
            let posX = parent[0].offsetTop;  // верхний отступ эл-та от родителя
           // console.log('top', posX)
            $('.chatShortUserInfo').css('top', posX);
            // let top = parent.position();
            //     console.log('position',top);
            //     $('.chatShortUserInfo').css('top', top.top);

        }, function() {
            $('.chatShortUserInfo').addClass('close');
        }
    );
});


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~sticky header on scroll~~~~~~~~~~~~~~~~~~~~~~~~~~~//
$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('header').addClass('sticky');
        $('.socialBlock').addClass('sticky');
        $('.firstSection').addClass('margin');

    } else {
        $('header').removeClass('sticky');
        $('.socialBlock').removeClass('sticky');
        $('.firstSection').removeClass('margin');
    }
});


