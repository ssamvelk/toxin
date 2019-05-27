import '../../../vendors/jquery-ui-1.12.1.custom/jquery-ui'
import '../../../vendors/jquery-ui-1.12.1.custom/jquery-ui.css'
$( function() {
    $( "#slider" ).slider({
      range: true,
      min: 0,
      max: 15000,
      values: [ 5000, 10000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      },
      slide: function( event, ui ) {
        let rangeStart = $( "#slider" ).slider( "values", 0 ),
            rangeEnd = $( "#slider" ).slider( "values", 1 );
        $("#range-start").html(rangeStart);
        $("#range-end").html(rangeEnd);
        //console.log( 'slider  values start = ' + rangeStart);
        //console.log( 'slider  values end = ' + rangeEnd);
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    
    //------------------------------
    //console.log('SLIDER JS ')


    //$("#range-start").click
});



  