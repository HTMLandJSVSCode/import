var logical = true
do {
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", "minecraft.jpeg", true)
} while (logical === true)
    
