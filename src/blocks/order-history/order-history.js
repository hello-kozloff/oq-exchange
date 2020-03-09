$(document).ready(() => {

  $(".trade-history__tab").on("click", function (e) {
    e.preventDefault();

    // Get target id.
    const targetId = $(this).attr("target-id");

    // Hide all content.
    $(".trade-history__content").addClass("trade-history__content_invisible");

    // Show current content.
    $(`#${targetId}`).removeClass("trade-history__content_invisible");

    // Remove selected in all tabs.
    $(".trade-history__tab").removeClass("trade-history__tab_selected");

    // Add selected in current tab.
    $(this).addClass("trade-history__tab_selected");
  });

});
