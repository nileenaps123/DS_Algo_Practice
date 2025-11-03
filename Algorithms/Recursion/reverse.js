//My solution

/* function reverse(str){
  
    if (str.length===1){
     

        return str
    }


   return str[str.length-1]+reverse(str.substr(0,str.length-1))


  } */

  //Solution from course 
  function reverse(str){
    console.log(str)
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}
  
  console.log(reverse('new') ) // 'emosewa'
  console.log( reverse('rithmschool') )// 'loohcsmhtir'





    