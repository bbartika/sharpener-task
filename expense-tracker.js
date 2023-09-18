
 function validateForm(){
    var expense=document.getElementById("expense").value;
    var description=document.getElementById("description").value;
    var category=document.getElementById("category").value;

    if(expense=="")
    {
        alert("expension is required");
        return false;
    }
    if(description=="")
    {
        alert("description is required");
        return false;
    }
    if(category=="")
    {
        alert("category is required");
        return false;
    }

    return true;
}
function showData(){
    var expenseList;
    if(localStorage.getItem("expenseList") == null){
        expenseList=[];
    }
    else{
        expenseList=JSON.parse(localStorage.getItem("expenseList"));
    }
    var html="";

    expenseList.forEach(function(element,index){
        html+="<tr>";
        html+="<td>" +element.expense +"</td>";
        html+="<td>" +element.description +"</td>";
        html+="<td>" +element.category +"</td>";
        html+='<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button><button onclick="updateData('+index+')" class="btn btn-warning m-2">Edit</button></td>';
        html+= "</tr>";
        
    });
    document.querySelector("#expenseTable tbody").innerHTML = html;
}

document.onload=showData();

function AddData(){
    if(validateForm()==true){
        var expense=document.getElementById("expense").value;
        var description=document.getElementById("description").value;
        var category=document.getElementById("category").value;

        var expenseList;
        if(localStorage.getItem("expenseList") == null){
            expenseList=[];
        }
        else{
            expenseList=JSON.parse(localStorage.getItem("expenseList"));
        }

        expenseList.push({
            expense:expense,
            description:description,
            category:category,
        });

        localStorage.setItem("expenseList",JSON.stringify(expenseList));

        showData();

        document.getElementByIdf("expense").value="";
        document.getElementById("description").value="";
        document.getElementById("category").value="";
    }
}
function deleteData(index){
        var expenseList;
        if(localStorage.getItem("expenseList") == null){
            expenseList=[];
        }
        else{
            expenseList=JSON.parse(localStorage.getItem("expenseList"));
        }

        expenseList.splice(index,1);
        localStorage.setItem("expenseList",JSON.stringify(expenseList));
        showData();

}

function updateData(index){
     document.getElementById("Submit").style.display="none";
     document.getElementById("Update").style.display="block";
     var expenseList;
        if(localStorage.getItem("expenseList") == null){
            expenseList=[];
        }
        else{
            expenseList=JSON.parse(localStorage.getItem("expenseList"));
        }

        document.getElementById("expense").value=expenseList[index].expense;
        document.getElementById("description").value=expenseList[index].description;
        document.getElementById("category").value=expenseList[index].category;


        document.querySelector("#Update").onclick=function(){

            if(validateForm()==true){
                expenseList[index].expense=document.getElementById("expense").value;
                expenseList[index].description=document.getElementById("description").value;
                expenseList[index].category=document.getElementById("category").value;

                localStorage.setItem("expenseList",JSON.stringify(expenseList));

                showData();

                document.getElementByIdf("expense").value="";
                document.getElementById("description").value="";
                document.getElementById("category").value="";


                document.getElementById("Submit").style.display="block";
                document.getElementById("Update").style.display="none";
            }
        }
}
