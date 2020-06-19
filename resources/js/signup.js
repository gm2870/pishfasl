import $ from 'jquery';
import {elements} from "./elements";

$(document).ready(function () {
    const navPill = $('.nav-pills li');
    const nextBtn = $('.btn-next');
    const prevBtn = $('.btn-previous')
    $('#advanced-checkbox').on('change',function () {
        if($('#advanced-checkbox').is(':checked')){
            $('.tab-pane').removeClass('active');
            $('.tab-pane[id="advanced"]').addClass('active');
        }else {
            $('.nav-pills li a[href="#advanced"]').remove();
            $('.nav-pills li a[href="#user-info"]').parent().addClass('nav-pill-active');
        }
    });
    nextBtn.on('click',function () {
        const index = $(this).data('step');
        $(this).data('step',index+1);
        const current = $(this).data('step') + 1;
        navPill.removeClass('nav-pill-active');
        $('body .nav-pills li:nth-child(' + current + ')').addClass('nav-pill-active');
        $('.tab-pane').removeClass('active');
        $('.tab-pane:nth-child(' + current + ')').addClass('active');
    });
    prevBtn.on('click',function () {
        const index = nextBtn.data('step');
        nextBtn.data('step',index - 1);
        const current = nextBtn.data('step') + 1;
        navPill.removeClass('nav-pill-active');
        $('body .nav-pills li:nth-child(' + current + ')').addClass('nav-pill-active');
        $('.tab-pane').removeClass('active');
        $('.tab-pane:nth-child(' + current + ')').addClass('active');
    });
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