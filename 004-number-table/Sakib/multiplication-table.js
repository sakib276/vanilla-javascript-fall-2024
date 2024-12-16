const inputNumber= document.getElementById('input-number');
const generateTable= document.getElementById('generate');
const tableBody= document.getElementById('table-body');

generateTable.addEventListener('click',function()
{
    const num= parseInt(inputNumber.value);
    
    cleanTable();
    createTable(num);
   
})


function cleanTable()
{
    tableBody.innerHTML=' ';
}
function createTable(num)
{
    for(let rowNo=1 ;rowNo<=10;rowNo++)
    {
        const tableRow=getRow(num,rowNo);
        tableBody.appendChild(tableRow);
    }
}

function getRow(num,mult)
{
    const cell1=document.createElement('td');
    const cell2=document.createElement('td');
    const cell3=document.createElement('td');
    const cell4=document.createElement('td');
    const cell5=document.createElement('td');

    cell1.innerText=num;
    cell2.innerText= ' X ';
    cell3.innerText= mult;
    cell4.innerText= ' = ';
    cell5.innerText= num*mult;

    const tableRow= document.createElement('tr');

    tableRow.appendChild(cell1);
    tableRow.appendChild(cell2);
    tableRow.appendChild(cell3);
    tableRow.appendChild(cell4);
    tableRow.appendChild(cell5);
    
    return tableRow;

}