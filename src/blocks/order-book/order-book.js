$(document).ready(() => {

  $(".order-book__view_buy").on("click", function (e) {
    e.preventDefault();

    $(".order-book__view").removeClass("order-book__view_selected");
    $(this).addClass("order-book__view_selected");

    $(".order-book__area_sell").hide();
    $(".order-book__area_buy").show();
  });

  $(".order-book__view_split").on("click", function (e) {
    e.preventDefault();

    $(".order-book__view").removeClass("order-book__view_selected");
    $(this).addClass("order-book__view_selected");

    $(".order-book__area_buy").show();
    $(".order-book__area_sell").show();
  });

  $(".order-book__view_sell").on("click", function (e) {
    e.preventDefault();

    $(".order-book__view").removeClass("order-book__view_selected");
    $(this).addClass("order-book__view_selected");

    $(".order-book__area_buy").hide();
    $(".order-book__area_sell").show();
  });

});
