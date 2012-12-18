;( function( W ) {
  
  Layer = function( options ) {
    this.options = options;
    this.initialize();
  }
  
  Layer.prototype.initialize = function() {
    this._initElement();
  }
  
  Layer.prototype._initElement = function() {
    var o = this.options,
        paper = o.paper;
        
    if ( is_empty( paper ) ) {
      throw "No paper option given";
    }
    
    var element = paper.circle(
      o.x,
      o.y,
      o.R
    ).attr({
      fill: o.fill,
      stroke: null
    });
    this.element = element;
  }
  
  Layer.prototype.startMotion = function() {
    var self = this,
        direction = ( Math.random() - 0.5 ) > 0 ? 1 : -1,
        angle = Math.round( direction * 180 * Math.random() ),
        duration = Math.round( Math.random() * 15 * 1000 );
    this.element.animate({
      transform: format( "r%d", angle )
    }, duration, "<>", function() {
      self.startMotion();
    } );
  }
  
  W.Layer = Layer;
  
} )( window );