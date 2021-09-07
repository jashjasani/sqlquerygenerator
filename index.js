var count=0;
var x=document.getElementsByTagName("input")[0].value;
function btn(){
    var tag=
    '<tr id="'+count+'">'+
        '<td><input type="text" name="column" placeholder="Column name" class="column"></td>'+
        '<td>'+
            '<select class="type">'+
            '<option value="INT">INT</option>'+
            '<option value="FLOAT">FLOAT</option>'+
            '<option value="DOUBLE">DOUBLE</option>'+
            '<option value="VARCHAR2">VARCHAR2</option>'+
            '<option value="BINARY">BINARY</option>'+
            '<option value="DATE">DATE</option>'+
            '<option value="BOOLEAN">BOOLEAN</option>'+
            '</select>'+
        '</td>'+  
        '<td>'+
            '<input type="number" name="length" min="0" max="9999" placeholder="length" class="size">'+
        '</td>'+
        '<td>'+
        '<button onclick="rmClm(this.value)" value="'+count+'" class="rmbtn">'+
            '<i class="far fa-trash-alt fa-2x"></i>'+
        '</button>'+
    '</td>'+
    '</tr>';
    document.getElementById("sql").insertAdjacentHTML("beforeend",tag);
    count+=1;
}
function genCode(){
    let tableName=document.getElementsByTagName("input")[0].value;
    let code="CREATE TABLE "+tableName+"( ";
    if(tableName==""){
        alert("Table name can't be null !");
    }
    else{
        for(var i=0;i<=count;i++){
            let columnName=document.getElementsByClassName("column")[i].value;
            if(columnName==""){
                alert("Column name cannot be null");
                break;
            }
            let type=document.getElementsByClassName("type")[i].value;
            let size=document.getElementsByClassName("size")[i].value;
            code+=""+columnName+" "+ type +"("+size+"),";
        }
        code=code.slice(0,-1);
        code+=");";
        document.getElementById("sqlcode").value=code;
    }
}
function rmClm(id){
    document.getElementById(id).remove();
    count=count-1;
}
function cpyClp(){
    document.getElementById("sqlcode").select();
    document.execCommand('copy');
    alert("Sucessfully copied the code");
}