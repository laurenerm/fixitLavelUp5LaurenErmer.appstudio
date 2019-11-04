
addCustomer.onshow=function(){
   let query = "SELECT * FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lne99312&pass=Lnermer7&database=lne99312&query=" + query)

    if (req1.status == 200) { //transit worked.
            let results = JSON.parse(req1.responseText)
            // names now in results array - load names into the dropdown
            lstCustomers.clear()
            for (i = 0; i <= results.length - 1; i++)
                lstCustomers.addItem(results[i][1])
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    } 
}

btnAdd.onclick=function(){
      let name = inptName.value
    let street = inptStreet.value
    let city = inptCity.value
    let state = inptState.value
    let zip = inptZip.value
    
    let queryAdd = "INSERT INTO customer (name, street, city, state, zipcode) VALUES ('" + name + "', '" + street + "', '" + city + "', '" + state + "', '" + zip +"')"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=lne99312&pass=Lnermer7&database=lne99312&query=" + queryAdd)

    if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the insert succeeded
            let result = JSON.parse(req1.responseText)
            NSB.MsgBox("You have successfully added the customer!")
        } else
            NSB.MsgBox("There was a problem with adding the customer to the database.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  

}
