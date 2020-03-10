$(document).ready(() => {

  $(".header-profile__button").on("click", function (e) {
    e.preventDefault();

    $(".header-profile").toggleClass("header-profile_toggle");
  });

  $(document).mouseup(function (e){
    const div = $(".header-profile");

    if (!div.is(e.target) && div.has(e.target).length === 0 && $(".header-profile").hasClass("header-profile_toggle")) {
      $(".header-profile").toggleClass("header-profile_toggle");
    }
  });

});
