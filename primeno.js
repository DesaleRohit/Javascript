let flag=1,i,no;

no=prompt("Enter any Number:");

if(no==1)
   {
     flag=1;
   }
else
    {
       for( i=2; i<=no-1; i++)
       {
        if( no % i == 0)
        {
            flag=0;
            break;
        }
       }
    }   



if(flag==1)
    {
        console.log( no +" is Prime Number");
        document.write( no +" is Prime Number");
    }
else
    {
        console.log( no +" is Not Prime Number");
        document.write( no +" is Not Prime Number");
    }