function goToPage(id) 
{
   var node = document.getElementById(id);

   if(node != null && node.tagName == "SELECT") 
   {
      window.location.href = node.options[node.selectedIndex].value;
   } 
}