let employees =[
    {
        Name:"Manav",
        age:25,
        city:"mohali",
        salary:72000,
    },
    {
        Name:"nitika",
        age:24,
        city:"panchkula",
        salary:85000,
    },
    {
        Name:"Geetika",
        age:25,
        city:"chandigarh",
        salary:12000,
    },
    {
        Name:"salman",
        age:54,
        city:"delhi",
        salary:52000,
    },
    {
        Name:"arushi",
        age:20,
        city:"shimla",
        salary:54000,
    },
];
 

function display(){
    let newdata ="";
    employees.forEach(function(emp,index){

        let currow =`<tr>
        <td>${index+1}</td>
        <td>${emp.Name}</td>
        <td>${emp.age}</td>
        <td>${emp.city}</td>
        <td>${emp.salary}</td>
        <td><button onclick="deleteemp()">Delete</button>
        </td>
        </tr>`
        newdata += currow;
    });
    document.getElementById("tdata").innerHTML=newdata;

    
}
display(employees);


function addemp(e){
    e.preventDefault();
    let emp={};
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let city=document.getElementById("city").value;
    let salary=document.getElementById("salary").value;
    emp.Name=name;
    emp.age=age;
    emp.city=city;
    emp.salary=salary;

    employees.push(emp);

    display(employees);




}
 

function searchby(){
     let searchvalue=document.getElementById("sdata").value;

     let search= employees.filter(function(employ){
       return(
        (employ.city.indexOf(searchvalue)!=-1) ||(employ.Name.indexOf(searchvalue)!=-1)
       );
     });
     console.log(search);


     display(search);
     
    }


function deleteemp(index){
    employees.splice(index,1);
    display(employees);
    
}
