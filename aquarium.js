window.onload=function() {
    lengthObj = document.getElementById('txtLength');
    widthObj = document.getElementById('txtWidth');
	heightObj = document.getElementById('txtHeight');
    costObj = document.getElementById('tdCos');
    document.getElementById('btnReset').onclick = resetInputs;
    document.getElementById('btnCalc').onclick = calccost;
}
function resetInputs() {
    lengthObj.value = '';
    if(isNaN(length) || isNaN(width)) {
        alert('Invalid length or width');
        return;
    }
    costObj.innerHTML = length*Math.pow(width,2)/800;
}

    widthObj.value = '';
    costObj.innerHTML = '';
}
function calccost() {
    var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
    costObj.innerHTML = '';
