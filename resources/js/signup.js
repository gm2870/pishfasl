import $ from "jquery";
import { elements } from "./elements";

$(document).ready(function() {
    const navPill = $(".nav-pills li");
    const nextBtn = $(".btn-next");
    const prevBtn = $(".btn-previous");
    $("#advanced-checkbox").on("change", function() {
        if ($("#advanced-checkbox").is(":checked")) {
            $(".tab-pane").removeClass("active");
            $('.tab-pane[id="advanced"]').addClass("active");
        } else {
            $('.nav-pills li a[href="#advanced"]').remove();
            $('.nav-pills li a[href="#user-info"]')
                .parent()
                .addClass("nav-pill-active");
        }
    });
    nextBtn.on("click", function() {
        const index = $(this).data("step");
        $(this).data("step", index + 1);
        const current = $(this).data("step") + 1;
        navPill.removeClass("nav-pill-active");
        $("body .nav-pills li:nth-child(" + current + ")").addClass(
            "nav-pill-active"
        );
        if (current == navPill.length) {
            console.log(current);
            $(this).css("display", "none");
            $(".btn-finish").css("display", "block");
        }
        $(".tab-pane").removeClass("active");
        $(".tab-pane:nth-child(" + current + ")").addClass("active");
    });
    prevBtn.on("click", function() {
        nextBtn.css("display", "block");
        $(".btn-finish").css("display", "none");
        $(".btn-next").prop("disabled", false);

        const index = nextBtn.data("step");
        nextBtn.data("step", index - 1);
        const current = nextBtn.data("step") + 1;
        navPill.removeClass("nav-pill-active");
        $("body .nav-pills li:nth-child(" + current + ")").addClass(
            "nav-pill-active"
        );
        $(".tab-pane").removeClass("active");
        $(".tab-pane:nth-child(" + current + ")").addClass("active");
    });

    $(".field-btns input").on("click", function() {
        console.log(this.value);
    });
    $(".user-type-btn input").on("click", function() {
        console.log($(this).value);
    });
    $("#phone").on("blur", function() {
        if (this.value.length < 10 && !$(this).hasClass("input-error")) {
            $(".btn-next").prop("disabled", true);
            $(this).addClass("input-error");
            $(this).after(
                "<p class='m-0'><i class='far fa-times-circle red ml-2'></i>شماره تلفن وارد شده صحیح نیست.</p>"
            );
        }
    });
    $("#code").on("blur", function() {
        if (this.value.length < 1234 && !$(this).hasClass("input-error")) {
            $(".btn-next").prop("disabled", true);
            $(this).addClass("input-error");
            $(this).after(
                "<p class='m-0'><i class='far fa-times-circle red ml-2'></i>کد وارد شده صحیح نیست.</p>"
            );
        }
    });
    $(".user-info input").on("blur", function() {
        if (this.value == "") {
            $(".btn-next").prop("disabled", true);

            $(this).addClass("input-error");
        }
    });
    const carousel1 = $("#carousel1").carousel({
        interval: false
    });
    const carousel2 = $("#carousel2").carousel({
        interval: false
    });
    carousel1.on("slide.bs.carousel", function(event) {
        const to = $(event.relatedTarget).index();
        carousel2.carousel(to);
    });
});
