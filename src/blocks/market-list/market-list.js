$(document).ready(() => {

  $(".market-list__tab").on("click", function (e) {
    e.preventDefault();

    // Get target id.
    const targetId = $(this).attr("target-id");

    // Hide all content.
    $(".market-list__content").addClass("market-list__content_invisible");

    // Show current content.
    $(`#${targetId}`).removeClass("market-list__content_invisible");

    // Remove selected in all tabs.
    $(".market-list__tab").removeClass("market-list__tab_selected");

    // Add selected in current tab.
    $(this).addClass("market-list__tab_selected");
  });

  $(".market-list__button").on("click", function (e) {
    e.preventDefault();

    $(".market-list__body").toggleClass("market-list__body_invisible");
  });

});
