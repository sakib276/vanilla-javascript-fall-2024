const inputNumber= document.getElementById('input-number');
const generateTable= document.getElementById('generate');
const tableBody= document.getElementById('table-body');
const reset=document.getElementById('reset');

reset.addEventListener('click',function()
{
    tableBody.innerHTML='';
})

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
    const cells=[];
    for(let i=1;i<=5;i++)
    {
        const cell=document.createElement('td');
        cells.push(cell);
    }
   

    cells[0].innerText=num;
    cells[1].innerText= ' X ';
    cells[2].innerText= mult;
    cells[3].innerText= ' = ';
    cells[4].innerText= num*mult;

    const tableRow= document.createElement('tr');
    for(let i=0;i<cells.length;i++)
    {
        tableRow.appendChild(cells[i]);
    }

   
    
    return tableRow;

}