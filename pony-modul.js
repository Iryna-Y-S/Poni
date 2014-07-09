var Pony = (function () {

    function Constructor () {
	
	    var attributes = {},
		    key;
			
		this.setAttributes = function (key, value) {
		    attributes[key] = value;
	    };
		
		this.getAttributes = function () {
		   return attributes;
		};
		
		return this;
	}

	Constructor.prototype.ride = function () {
	    console.log("Pony rides!");
	};
	
	Constructor.prototype.sayIgogo = function () {  
	    console.log("Pony says:'Igogo!'");
	};
	
	Constructor.prototype.eat = function () {
	    if (fillHungry()) {
		    console.log("Pony is hungry!");
		} else {
		    console.log("Pony isn't hungry!");
		}	
	};
	
	function fillHungry () {
	    return true;
	}
	
    return Constructor;
})();

