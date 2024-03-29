(function ($) {
  "use strict";
  $(document).ready(function () {
    $("#rev_slider")
      .show()
      .revolution({
        responsiveLevels: [1920, 1600, 768, 320],
        gridwidth: [1240, 1024, 768, 300],
        sliderType: "standard",
        dottedOverlay: "none",
        sliderLayout: "auto",
        gridheight: [800, 800, 500, 400],
        delay: 5000,
        spinner: "spinner2",
        navigation: {
          onHoverStop: "off",
          arrows: { enable: true, style: "uranus", hide_onleave: true },
          bullets: {
            enable: false,
            style: "hermes",
            hide_onleave: false,
            h_align: "center",
            v_align: "bottom",
            h_offset: 0,
            v_offset: 20,
            space: 5,
          },
        },
      });
  });
})(jQuery);
