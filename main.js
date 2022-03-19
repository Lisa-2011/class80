var names=[];

function submit() {
    var display_student_array=[];
    
    for(var j=1; j<=4; j++)
    {
        var name_of_student=document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_student);
        names.push(name_of_student);
    }
    console.log(names);
    var length_array=names.length;
    console.log(length_array);

    for(var k=0; k<length_array; k++){
        display_student_array.push("<h4>NAMES - "+names[k]+"</h4>");
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    
    var remove_commas=display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting() {
    names.sort();
    console.log(names);

    var display_student_array_sort=[];
    var length_sorted_array=names.length;
    console.log(length_sorted_array);

    for(var k=0; k<length_sorted_array; k++){
        display_student_array_sort.push("<h4>NAMES - "+names[k]+"</h4>");
        console.log(display_student_array_sort);
    }

    var remove_commas=display_student_array_sort.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
   
}

function new_update() {
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+names+"<h1>";
    
}