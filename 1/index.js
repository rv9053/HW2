function extractor() {

    var str = document.getElementById("textInput").value;
    var numMatches = str.match(/(\d+)/);
    var textMatch = str.replace(/[^a-zA-Z]/g, '');
    var arr = []

    if (numMatches) {
        document.getElementById('number').innerHTML
                = numMatches[0];
        
    } if (textMatch){
        document.getElementById('text').innerHTML
                = textMatch;
    }

}