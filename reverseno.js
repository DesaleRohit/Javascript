let n,r;

//n=parseInt
n=parseInt(prompt("Enter any Number:"));

while(n>0)
{
    r=parseInt(n%10);
    n=parseInt(n/10);
    console.log(""+r);
   document.write(""+r);
}



