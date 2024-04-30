// $('.counting').each(function() {
//     var $this = $(this),
//         countTo = $this.attr('data-count');

//     $({ countNum: $this.text()}).animate({
//       countNum: countTo
//     },

//     {

//       duration: 3000,
//       easing:'linear',
//       step: function() {
//         $this.text(Math.floor(this.countNum));
//       },
//       complete: function() {
//         $this.text(this.countNum);
//         //alert('finished');
//       }

//     });  


//   });



// counter



$(document).ready(function () {

  $('.counter').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

});



// gallery


lightbox.option({
  'albumLabel': "picture %1 of %2",
  'fadeDuration': 300,
  'resizeDuration': 150,
  'wrapAround': true
})

new WOW().init();


