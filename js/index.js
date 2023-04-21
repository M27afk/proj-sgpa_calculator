let resultValue= document.getElementById("result")
let g=document.getElementById("selectTotal")
let h=document.getElementById("displayOptions")
let product=0

displayDropbox(1)
g.addEventListener('change', function(){
    h.innerHTML=''
    resultValue.innerHTML=' '
    displayDropbox(this.value)
});


function displayDropbox(next)
{
    let limit=0
    while( limit<next)  
    {   
        h.innerHTML+=
        `<label>Select grade: </label>
        <select id="selectGrade`+limit+`" style="margin-bottom:0.2em;width:3em;border-radius: 5px;">
                <option>S</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
        </select>
        <br>
        <label>Select credits: </label>
        <select id="selectValue`+limit+`" style="width:3em;border-radius: 5px;">
                <option>1.0</option>
                <option>1.5</option>
                <option>2.0</option>
                <option>2.5</option>
                <option>3.0</option>
                <option>3.5</option>
                <option>4.0</option>
                <option>4.5</option>
                <option>5.0</option>
        </select>
        <br>
        <br>
        `
        limit++
    }
    document.getElementById("displaySubmit").innerHTML=`<button type="button" id="submit" class="btn btn-success">Calculate</button><button type="button" id="reset" class="btn btn-danger">Reset</button>`
    let a=document.getElementById("submit") 
    
    a.addEventListener("click",function()
    {
        
        let b=document.getElementById("selectTotal")
        let totSub=b.options[b.selectedIndex].text
        calcSgpa(totSub)
        
    })
    document.getElementById("reset").addEventListener ("click",function(){
        location.reload();
    })
}

    



function calcSgpa(totSub)
{   
    let totalCredits=0
    for(let i=0;i<totSub;i++)
    {
        let f = document.getElementById("selectGrade"+i)
        let gr = f.options[f.selectedIndex].text
        let e = document.getElementById("selectValue"+i)
        let cr =parseFloat( e.options[e.selectedIndex].value )

        switch (gr)
        {
            case('S'):
            product+=cr*10;
                break;
            case('A'):
            product+=cr*9;
                break;
            case('B'):
                product+=cr*8;
                break;
            case('C'):
                product+=cr*7;
                break;
            case('D'):
                product+=cr*5;
                break;
            case('E'):
                product+=cr*4;
                break;       
            
            default:
                continue;
        }  
        totalCredits+=cr     
    }
    let sgpa=parseFloat((product/totalCredits).toFixed(3))
    let per=((sgpa-0.75)*10).toFixed(2)
    resultValue.innerHTML="Your SGPA is: "+`<b>`+ sgpa+`</b>`
    product=0
    totalCredits=0
}



   
