  // ハンバーガーメニュー
    $('#js-hamburger').on('click', function () {
        $('.nav').slideToggle(300)
        $('.hamburger_btn').toggleClass('hamburger-menu--open')
    });

  $('.nav a').on('click', function () {
    $('.nav').slideToggle(300)
    $('.hamburger_btn').toggleClass('hamburger-menu--open')
  });

    $(document).ready(function () {

    const $submitBtn = $('input[type="submit"]')
    $('form input,select').on('change', function () {
        validation();
    });

    validation();

    function validation(params) {
      let select = $("select").val();
      let tel = $('input[type="tel"]').val();
      let tel_validation = true;

      if(tel) {
        const regexp = /^0\d{9,10}$/;
        if(!regexp.test(tel)) {
          tel_validation = false
        }
      }
        if (
          $('input[name="diagnosis"]').val() !== "" &&
          $('input[name="day"]').val() !== "" &&
          $('input[name="time"]').val() !== "" &&
          $('input[name="second_name"]').val() !== "" &&
          $('input[name="first_name"]').val() !== "" &&
        $('input[type="email"]').val() !== "" &&
          $('input[type="tel"]').val() !== "" &&
          $('input[type="other"]').val() !== "" &&
        select != "" &&
        tel_validation
        ) {
        $submitBtn.prop('disabled', false);

        } else {
        $submitBtn.prop('disabled', true);
        }
    }

  });

$(function () {
  $("#datepicker").datepicker({
    dateFormat: "yy-mm-dd",
    dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
    monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  });
});

  AOS.init({
    offset: 300,
    delay: 100,
  });