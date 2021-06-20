
function compute()
{
    
    var principal = document.getElementById("principal").value;
    if(parseFloat(principal) <= 0 ){
        alert('Enter a positive number')
    }
    else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById('years').value;
        interest = principal * years * rate / 100;
        
        var year = new Date().getFullYear() + parseInt(years)
    
        const res = document.getElementById('result');
        var amount =  parseFloat(interest);
        res.innerHTML = "If you deposit " + principal + "\<br\>at an interest rate of " + rate+ "% \<br\>You will recieve an amount of " + amount + ",\<br\>in the year " + year + "\<br\>";
    }
};

const rate = document.getElementById("rate");
rate.addEventListener('change',function(){
    updateRate();
});

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById('rate_val').innerText = rateval + "%";
};