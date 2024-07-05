let n , temp=0 , sum=0 , r ;

n=parseInt(prompt("Enter the Number:"));
temp=n;

while(n>0)
{
    r=parseInt(n%10);
    sum=sum+(r*r*r);
    n=parseInt(n/10);
    
    
}

if(temp==sum)
{
    document.write("The Number is Armstrom.");
}
else
{
    document.write("The Number is Not Armstrom.");
}