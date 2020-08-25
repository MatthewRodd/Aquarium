window.onload=function() {
    lengthObj = document.getElementById('txtLength');
    widthObj = document.getElementById('txtWidth');
	heightObj = document.getElementById('txtHeight');
    costObj = document.getElementById('tdCost');
    document.getElementById('btnReset').onclick = resetInputs;
    document.getElementById('btnCalc').onclick = calccost;
}

function resetInputs() {
    lengthObj.value = '';
    widthObj.value = '';
	heightObj.value = '';
    costObj.innerHTML = '';
}

function surfaceArea() {
	return (length * width * 2) + (length * height * 2) + (width 8 height * 2);
}

function edges() {
	return (height * 4) + (width * 2) + (length * 2);
}

function labourCost() {
	return (60 / 6000);
}

function variables() {
    var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
    var glassCost = 0.10;
	var glueCost = 0.10;
	costObj.innerHTML = '';	
    return (edges * glueCost) + (surfaceArea * glassCost) + (labourCost * surfaceArea);

}
