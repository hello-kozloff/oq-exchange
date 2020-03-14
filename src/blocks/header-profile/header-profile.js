$(document).ready(() => {

  $(".header-profile__button").on("click", function (e) {
    toggleHeaderProfile();
  });

  $(document).mouseup(function (e){
    const div = $(".header-profile");

    if (!div.is(e.target) && div.has(e.target).length === 0 && $(".header-profile").hasClass("header-profile_toggle")) {
      toggleHeaderProfile();
    }
  });

  /**
   * The function toggle header profile.
   */
  function toggleHeaderProfile() {
    $(".header-profile").toggleClass("header-profile_toggle");
    $(".header-profile__icon").toggleClass("header-profile__icon_toggle");
  }

});
