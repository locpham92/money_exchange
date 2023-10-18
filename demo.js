function convert(){
    let amount=+document.getElementById("amount").value;
    let selectedFrom=+document.getElementById("from").value;
    let selectedTo=+document.getElementById("to").value;
    let result=selectedFrom*amount/selectedTo;
    if (selectedTo == 1) {
        result = result.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'});
        document.getElementById("result").innerHTML="Result: "+result;
    } else if (selectedTo == 25000) {
        result = result.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'});
        document.getElementById("result").innerHTML="Result: "+result;
    }
    else if (selectedTo == 24000){
        result = result.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        document.getElementById("result").innerHTML="Result: "+result;
    }
    else {
        result = result.toLocaleString('jp-JP', {style: 'currency', currency: 'JYP'});
        document.getElementById("result").innerHTML="Result: "+result;
    }
}