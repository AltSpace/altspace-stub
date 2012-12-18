window.addEventListener( "DOMContentLoaded", function() {
  var width = window.innerWidth,
      height = window.innerHeight,
      pic_path = "url(img/AS_plate_diff-%d.png)",
      pics_count = 8,
      layers = [],
      paper,
      frozen_layers = [ 0, 8 ];
  Raphael( "page", width, height, function() {
    var paper = this;
    for ( var i = 0; i <= pics_count; i++ ) {
      layers.push(
        new Layer(
          {
            paper: paper,
            x: paper.width / 2,
            y: paper.height / 2,
            R: 400,
            fill: ( i == 0 ) ? "#000" : format( pic_path, i )
          }
        )
      );
    }
    
    each ( layers, function( layer, i ) {
      if ( -1 === frozen_layers.indexOf( parseInt( i, 10 ) ) ) {
        layer.startMotion();
      }
    } );
    
  } )
}, false );