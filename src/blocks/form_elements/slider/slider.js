import '../../../vendors/jquery-ui-1.12.1.custom/jquery-ui'
import '../../../vendors/jquery-ui-1.12.1.custom/jquery-ui.css'
$( function() {
    let $slider = function( event, ui ) {    
        let rangeStart = $( "#slider" ).slider( "values", 0 );
        let rangeEnd = $( "#slider" ).slider( "values", 1 );
        
        $("#range-start").html(rangeStart);
        
        $("#range-end").html(rangeEnd);
      }

    $( "#slider" ).slider({
      range: true,
      min: 0,
      max: 15000,
      values: [ 5000, 10000 ],
      step: 100,
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        $slider();
      },
      change: $slider,
    });
    
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});



  