$(document).ready(() => {

  $(".order-history__tab").on("click", function (e) {
    e.preventDefault();

    // Get target id.
    const targetId = $(this).attr("target-id");

    // Hide all content.
    $(".order-history__content").addClass("order-history__content_invisible");

    // Show current content.
    $(`#${targetId}`).removeClass("order-history__content_invisible");

    // Remove selected in all tabs.
    $(".order-history__tab").removeClass("order-history__tab_selected");

    // Add selected in current tab.
    $(this).addClass("order-history__tab_selected");
  });

});
