const text = "Death at my hands is an honor:)";
let index = 0;
setInterval(()=>{
    document.body.innerText = text.slice(0, index);
    index++;
    if(index>text.length){
        index=0;
    }
},100);
