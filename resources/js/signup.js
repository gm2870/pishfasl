import $ from 'jquery';
import {elements} from "./elements";

$(document).ready(function () {
    const navPill = $('.nav-pills li');
    const nextBtn = $('.btn-next');
    const prevBtn = $('.btn-previous');
    let formIsValid = false;
    $('#advanced-checkbox').on('change',function () {
        if($('#advanced-checkbox').is(':checked')){
            $('#advanced').css('display','block');
        }else {
            $('#advanced').css('display','none')
        }
    });
    nextBtn.on('click',function () {
        prevBtn.prop('disabled',false);
        const index = $(this).data('step');
        $(this).data('step',index+1);
        const current = $(this).data('step') + 1;
        if (current === navPill.length) {
            $(this).css("display", "none");
            $(".btn-finish").css("display", "block");
            if(!formIsValid) {
                $(".btn-finish").prop('disabled',true)
            }
        }
        navPill.removeClass('nav-pill-active');
        $('body .nav-pills li:nth-child(' + current + ')').addClass('nav-pill-active');
        $('.tab-pane').removeClass('active');
        $('.tab-pane:nth-child(' + current + ')').addClass('active');
    });
    prevBtn.on('click',function () {
        nextBtn.css("display", "block");
        $(".btn-finish").css("display", "none");
        $(".btn-next").prop("disabled", false);
        const index = nextBtn.data('step');
        nextBtn.data('step',index - 1);
        const current = nextBtn.data('step') + 1;
        if( current === 1) {
            prevBtn.prop('disabled',true);
        }
        navPill.removeClass('nav-pill-active');
        $('body .nav-pills li:nth-child(' + current + ')').addClass('nav-pill-active');
        $('.tab-pane').removeClass('active');
        $('.tab-pane:nth-child(' + current + ')').addClass('active');
    });
    $(".field-btns input").on("click", function() {
    });
    $(".user-type-btn input").on("click", function() {
    });
    $("#phone").on("blur", function() {
        if (this.value.length < 10 && !$(this).hasClass("input-error")) {
            formIsValid = false;
            $(this).addClass("input-error");
            $(this).after(
                "<p class='m-0'><i class='far fa-times-circle red ml-2'></i>شماره تلفن وارد شده صحیح نیست.</p>"
            );
        }else {
            formIsValid = true;
            $(this).removeClass("input-error");
            $(this).next().remove();

        }
    });
    $("#code").on("blur", function() {
        if (this.value.length < 4 && !$(this).hasClass("input-error")) {
            formIsValid = false;
            $(this).addClass("input-error");
            $(this).after(
                "<p class='error m-0'><i class='far fa-times-circle red ml-2'></i>کد وارد شده صحیح نیست.</p>"
            );
        }else if(this.value.length === 4) {
            formIsValid = true;
            $(this).removeClass("input-error");
            $(this).next().remove();
        }
    });
    $(".user-info input").on("blur", function() {
        if (this.value === "") {
            formIsValid = false;
            $(this).addClass("input-error");
        }else {
            formIsValid = true;
            $(this).removeClass("input-error");
        }
    });
    $('.login-form .form-group input').on('blur',function () {
        if(this.value === '') {
            $(this).addClass('input-error');
            $('.login-submit').prop('disabled',true);
        }else {
            $(this).removeClass("input-error");
            $('.login-submit').prop('disabled',false);

        }
    })
        const carousel1 = $('#carousel1').carousel({
            interval:false
        });
        const carousel2= $('#carousel2').carousel({
            interval:false
        });
        carousel1.on('slide.bs.carousel', function(event) {
            const to = $(event.relatedTarget).index();
            carousel2.carousel(to);
        });
})