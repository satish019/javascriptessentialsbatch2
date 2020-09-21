window.onload=function(){
    let buses=[]; 
    
    if(localStorage.getItem("buses")==null){
        let stringbuses=JSON.stringify("buses");
        localStorage.setItem("buses",stringbuses)
    }
}

function display(bus_data=undefined){
    let resbuses="";
    document.getElementById("tbody").innerHTML="";
    if(bus_data==undefined){
        resbuses=JSON.parse(localStorage.getItem("buses"))
    }
    else{
        resbuses= bus_data;
    }
    resbuses.forEach(function(ele,i){
        document.getElementById("tbody").innerHTML+=` <tr>
        <td>${ele.name}</td>
        <td>${ele.source}</td>
        <td>${ele.destination}</td>
        <td>${ele.number}</td>
        <td>${ele.capacity}</td>
        </tr>
        `
        resbuses+=bus_data;
        
    });
    document.getElementById(tdata).innerHTML=resbuses;

}
display();

function addbus(event) {
 e.preventDefault();
 let bus={};
 let busname=document.getElementById("name").value;
 let bussource=document.getElementById("source").value;
 let busdestination=document.getElementById("dest").value;
 let busnumber=document.getElementById("num").value;
 let buscapacity=document.getElementById("cap").value;

 bus.name=busname;
 bus.source=bussource;
 bus.destination=busdestination;
 bus.number=busnumber;
 bus.capacity=buscapacity;

   let arrbus=JSON.parse(localStorage.getItem("buses"));
   arrbus.push(bus);
   localStorage.setItem("buses",JSON.stringify(arrbus));

   let arrbus1=JSON.parse(localStorage.getItem("buses"));

   display(arrbus1)

document.getElementById("name").value="";
 document.getElementById("source").value="";
 document.getElementById("dest").value="";
 document.getElementById("num").value="";
document.getElementById("cap").value="";


}
 function searchbysource(){
     let serach_value=document.getElementById("searchsource");
     let arrbus=JSON.parse(localStorage.getItem("buses"));
     let result =  arrbus.filter((ele,i)=>{

         return ele.source.indexOf(serach_value())!=-1;

     })
     display(result);

 }

 function searchbydest(){
    let serach_value=document.getElementById("serachdest");
    let arrbus=JSON.parse(localStorage.getItem("buses"));
    let result =  arrbus.filter((ele,i)=>{

        return ele.destination.indexOf(serach_value())!=-1;

    })
    display(result);
    
}
