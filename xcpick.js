// function to go to a new page defined by a select element
function goToPage(id) 
{
   var node = document.getElementById(id);

   // check to see if node is valid and if node is a select form control
   if(node != null && node.tagName == "SELECT") 
   {
      // go to web page defined by the value attribute of the option element
      window.location.href = node.options[node.selectedIndex].value;
   } 
}