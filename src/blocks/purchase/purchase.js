$(document).ready(() => {

  $(".purchase__tab").on("click", function (e) {
    e.preventDefault();

    // Get target id.
    const targetId = $(this).attr("target-id");

    // Hide all content.
    $(".purchase__content").addClass("purchase__content_invisible");

    // Show current content.
    $(`#${targetId}`).removeClass("purchase__content_invisible");

    // Remove selected in all tabs.
    $(".purchase__tab").removeClass("purchase__tab_selected");

    // Add selected in current tab.
    $(this).addClass("purchase__tab_selected");
  });

});
