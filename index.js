function check()
{
   var str=document.getElementById("a").value;
   var result = str.charAt(0);
    var count = 1;
    if (str.length == 1) 
    {
        result += count;
        
    }
  else 
  {
        for(var i=1;i<str.length;i++) 
        {
            if(str.charAt(i) != str.charAt(i-1)) 
            {
                result += count + str.charAt(i);
                count = 1;
            } 
          else 
          {
                count++;
            }
            if (i === str.length - 1) 
            {
                result += count;
            }
        }
      document.getElementById("output").value=result;
    }
}
