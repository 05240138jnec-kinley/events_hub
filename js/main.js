const resetBtn = document.querySelector("#regForm button[type='reset']"); 
 if (resetBtn) { 
   resetBtn.addEventListener("click", function (e) { 
  if (!confirm("Clear the whole form?")) { 
    e.preventDefault(); 
  } 
   }); 
 } 
