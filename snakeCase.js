const snakeCase = function(str) {

	let output = "";
	let code;
	let iscamel;
	
	//check for satzzeichen and spaces
	if(containsStz(str))
	{
		//find nonchars or "multiple" non-chars and replace with _
		
		for(let i = 0; i<str.length; i++)
		{
			if(islower(str[i])==true || isupper(str[i])==true)
			{
				output+=str[i];
			}
			else //add _ and jump to next char
			{
				i = findnextchar(i,str)
				
				if(i==0)
				{
					return output.toLowerCase();
				}
				else{
					output+="_";
					i--;
				}


				

			}
		}

		return output.toLowerCase();

		


	}
	
	//is camelcase
	else
	{
		//find "lower-to-upper point"
		for(let i = 0; i < str.length-1; i++)
		{
			if(islower(str[i])==true && isupper(str[i+1])==true)
			{
				output+=str[i];
				output+='_';
			}
			else
			{
				output+=str[i];
			}
		}
		output+=str[str.length-1]
		return output.toLowerCase();
	}




	





}
function findnextchar(iter,str)
{
	for(let i = iter; i < str.length; i++)
	{
		if(isupper(str[i]) == true || islower(str[i])==true)
		{
			return i;
		}		
	}
	return 0;
}

function isupper(char)
{
	let code = char + " ";
	code=code.charCodeAt(0);
	if (code > 64 && code < 91)
    {
        return true;
    }
    else
    {
    	return false;
    }


}

function islower(char)
{
	let code = char + " ";
	code=code.charCodeAt(0);
	if (code > 96 && code < 123)
    {
        return true;
    }
    else
    {
    	return false;
    }

}

function containsStz(str)
{
	for(let i = 0; i<str.length; i++)
	{
		if(str[i]=='.' || str[i]==',' || str[i]=='-' || str[i]=='!' || str[i]=='?' || str[i]==' ')
		{
			return true;
		}
	}
	return false;
}



module.exports = snakeCase