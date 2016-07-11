var rad = document.myForm.myRadios;
var prev = null;

/**
  * For all radio buttons, onclick change output_initialize
  */
  
for(var i = 0; i < rad.length; i++) {
	if (rad[i].checked) {
        document.getElementById("output_initialize").innerHTML = this.value;
	}
    rad[i].onclick = function() {
        (prev)? console.log(prev.value):null;
        if(this !== prev) {
            prev = this;
        }
        document.getElementById("output_initialize").innerHTML = this.value;
    };
}

function outputfirstselected() {

}


