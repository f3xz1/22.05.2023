let selected_label; 

onload = function() {
    var labels = document.getElementsByClassName('mylabel');
    for(var i = 0; i < labels.length; i++) {
        var anchor = labels[i];
        anchor.onclick = function(event) {
            if(selected_label != null){
                selected_label.style.background = 'transparent'
            }
            selected_label = event.target;
            event.target.style.background = 'rgb(255, 166, 0, 0.5)';;
        }
    }
}