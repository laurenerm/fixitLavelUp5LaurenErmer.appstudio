
deleteUpdateCustomer.onshow=function(){
   let query = "SELECT * FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lne99312&pass=Lnermer7&database=lne99312&query=" + query)

    if (req1.status == 200) { //transit worked.
            let results = JSON.parse(req1.responseText)
            // names now in results array - load names into the dropdown
            selCustomer.clear()
            for (i = 0; i <= results.length - 1; i++)
                selCustomer.addItem(results[i][1])
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    } 
}

btnDelete.onclick=function(){
     let name = selCustomer.value
      let queryDelete = "DELETE FROM customer WHERE name = " + '"' + name + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lne99312&pass=Lnermer7&database=lne99312&query=" + queryDelete)
      if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500)    // means the insert succeeded
            NSB.MsgBox("You have successfully deleted the customer named " + name)
        else
            NSB.MsgBox("There was a problem deleting " + name + " from the database.")
      } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
      }  
  } 


btnUpdate.onclick=function(){
      let newName = inptUpdate.value
    let oldName = selCustomer.value
    let queryUpdate = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lne99312&pass=Lnermer7&database=lne99312&query=" + queryUpdate)

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the update succeeded
            let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully changed the customer name!")
        } else
            NSB.MsgBox("There was a problem changing the customer name.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  

}


hmbNavCopy.onclick=function(){
  switch (hmbNavCopy.selection){
 case 'See Customer':
    ChangeForm(seeCustomers)
    break;
  case 'Add Customer':
  ChangeForm(addCustomer)
  break;
case 'Edit Customer':
  ChangeForm(deleteUpdateCustomer)
  Break;
case 'DDelete Customer':
  ChangeForm(deleteUpdateCustomer)
  break;
}
}
