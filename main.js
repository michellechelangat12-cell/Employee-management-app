document.addEventListener('DOMContentLoaded',()=> {
    
    //  DETAILS BUTTON
    const detailsButtons=document.querySelectorAll('.details-btn');
    detailsButtons.forEach(button=> {
        button.onclick=(e)=>{
            const btn=e.target;
            const row=btn.closest('tr');
            
            // Get text from table cells
            const name=row.cells[1].innerText;
            const phone=row.cells[2].innerText;
            const email=row.cells[3].innerText;
            const position=row.cells[4].innerText;

            const idNum=btn.getAttribute('data-id');
            const gender=btn.getAttribute('data-gender');
            const address=btn.getAttribute('data-address');
            const dob=btn.getAttribute('data-dob');
            const dept=btn.getAttribute('data-dept');

            alert(
                "ID Number:"+ idNum +"\n"+
                "Full Name:"+ name +"\n"+
                "Gender:"+gender +"\n"+
                "Date of Birth:"+dob +"\n"+
                "Phone:"+ phone +"\n"+
                "Email:"+ email +"\n"+
                "Department:"+ dept +"\n"+
                "Position:"+ position +"\n"+
                "Address:"+ address
            );
        };
    
    });
    //  EDIT BUTTON
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.onclick = () => alert("Edit mode activated!");
    });

    // DELETE BUTTON
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.onclick = () => {
            if (confirm("Are you sure you want to delete this record?")) {
                alert("Record deleted successfully.");
            }
        };
    });
    });