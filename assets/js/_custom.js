/* ==========================================================================
   Custom scripts
   ========================================================================== */

var basePath = '/' + window.location.pathname.split('/')[1] + '/';
var baseUrl = window.location.origin + basePath;
var gridWrapper = $('.grid__wrapper');
var gridFull = $('#grid__full');
var gridItems = gridFull.children();

$('.filters-button-group').children().each(function() {
  $(this).click(function() {
    var filter = $(this).attr('data-filter');
    var btnText = $(this).text().toLowerCase()
    gridWrapper.fadeOut(400,function() {
      gridWrapper.empty();
      if (filter === '*') {
        gridWrapper.append(gridItems);
        history.replaceState(null, null, baseUrl);
      }
      else {
        gridWrapper.append(gridItems.filter(function() {
          return $(this).hasClass(filter);
        }));
        history.replaceState(null, null, baseUrl + btnText.toLowerCase() + '/');
      }
      gridWrapper.fadeIn(300);
    })
  })
})


// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


$(function(){
    // Check the initial Poistion of the Sticky Header
    var stickyHeaderTop = $('#stickyheader').offset().top;

    $(window).scroll(function(){
            if( $(window).scrollTop() > stickyHeaderTop ) {
                    $('#stickyheader').css({position: 'fixed', top: '0px'});
                    $('#stickyalias').css('display', 'block');
            } else {
                    $('#stickyheader').css({position: 'static', top: '0px'});
                    $('#stickyalias').css('display', 'none');
            }
    });
});

function setTestimonialWrapperMargin() {
  var testimonialWrapperWidth = document.getElementById('testimonial-wrapper').offsetWidth;
  var marginSpace = (document.documentElement.clientWidth - testimonialWrapperWidth) / -2.0;
  document.getElementById('testimonial-wrapper').style.marginRight = Math.ceil(marginSpace) + 'px';
  document.getElementById('testimonial-wrapper').style.marginLeft = Math.floor(marginSpace) + 'px';
}

if (document.getElementById('testimonial-wrapper')) {
  setTestimonialWrapperMargin();
  $(window).resize(function() {
    document.getElementById('testimonial-wrapper').style.marginRight = '0px';
    document.getElementById('testimonial-wrapper').style.marginLeft = '0px';
    setTestimonialWrapperMargin();
  });
}

if (document.getElementById('contact-form')) {
  var $submit = $('#submit-button');
  var $successMessage = $('#success-message');
  var $errorMessage = $('#error-message');
  $('#contact-form').submit(function (e) {
    $successMessage.hide();
    $errorMessage.hide();
    if (e.preventDefault)
      e.preventDefault();
    else
      e.returnValue = false;
    console.log('hello??');
    $submit.prop('disabled', true);
    var formValues = {};
    $.each($(this).serializeArray(), function (i, field) {
      formValues[field.name] = field.value;
    });
    $.ajax({
      url: 'http://formspree.io/info@nearmissmgmt.com',
      method: 'POST',
      data: formValues,
      dataType: 'json',
      success: function () {
        $(this).find('input[type=text], input[type=email], textarea').val('');
        $successMessage.empty();
        $successMessage.text('Thank you for your message. We will be in touch shortly.');
        $successMessage.show();
        $submit.prop('disabled', false);
      },
      error: function (jqXHR) {
        $errorMessage.empty();
        $errorMessage.text('An error occurred submitting the contact form. Please try again.');
        $errorMessage.show();
        $submit.prop('disabled', false);
      }
    });
  });
}
