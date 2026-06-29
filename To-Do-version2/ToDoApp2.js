let btn=document.querySelector(".submit");
let inpt=document.querySelector("input");
let ol=document.querySelector("ol");

btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inpt.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("dlt");

    item.appendChild(delbtn);
    ol.appendChild(item);
    inpt.value="";
});

ol.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})

// let dltbtn=document.querySelectorAll(".dlt");
// for(dlt of dltbtn){
//     dlt.addEventListener("click", function(){
//         let par=this.parentElement;
//         par.remove();
//     });
// }