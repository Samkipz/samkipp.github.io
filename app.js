function openPage(pageName, elmnt) {
    // Hide all elements with class="tabcontent" by default */
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Show the specific tab content
    let show = document.getElementById(pageName);
    show.style.display = "flex"
    
    //Replace "active" class to be the selected element
    for(i = 0; i < tablinks.length; i++){
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    elmnt.className += " active";
    

}
document.getElementById("defaultOpen").click();
 

