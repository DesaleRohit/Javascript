let n, r, sum = 0;

n = parseInt(prompt("Enter any Number"));

while (n > 0) 
{
    r = parseInt(n % 10);
    sum = sum + (r);
    n = parseInt(n / 10);
}
document.write("Addition="+sum);
console.log("Addition="+sum);
