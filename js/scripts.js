$(document).ready(function () {
  // Handle hover for main dropdown items
  $('.nav-item.dropdown').hover(function () {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
  }, function () {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
  });

  // Handle click for main dropdown items
  $('.nav-item.dropdown > a').click(function (e) {
    e.preventDefault(); // Prevent default action of the anchor tag
    $(this).siblings('.dropdown-menu').first().slideToggle();
  });

  // Handle hover for dropdown submenus
  $('.dropdown-submenu').hover(function () {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
  }, function () {
    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
  });
});

  //carousel card swiper//

  $(document).ready(function(){
    $('.carousel').slick({
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots:true,
      centerMode: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // centerMode: true,
  
        }
  
      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
  
        }
      },  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }]
    });
  });



   // Search form


   var client = algoliasearch('YourApplicationID', 'YourSearchOnlyAPIKey');
   var index = client.initIndex('your_index_name');
   var myAutocomplete = autocomplete('#search-input', { hint: false }, [
       {
           source: autocomplete.sources.hits(index, { hitsPerPage: 5 }),
           displayKey: 'name',
           templates: {
               suggestion: function (suggestion) {
                   return '<span>' + suggestion._highlightResult.name.value + '</span>';
               }
           }
       }
   ]).on('autocomplete:selected', function (event, suggestion, dataset) {
       console.log(suggestion, dataset);
       // Handle the selected suggestion (recipe or ingredient)
   });

   document.querySelector(".searchbox [type='reset']").addEventListener("click", function () {
       document.querySelector(".aa-input").focus();
       this.classList.add("hide");
       myAutocomplete.autocomplete.setVal("");
   });

   document.querySelector("#search-input").addEventListener("keyup", function () {
       var searchbox = document.querySelector(".aa-input");
       var reset = document.querySelector(".searchbox [type='reset']");
       if (searchbox.value.length === 0) {
           reset.classList.add("hide");
       } else {
           reset.classList.remove('hide');
       }
   });


