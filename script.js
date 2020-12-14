document.getElementById('button-1').addEventListener('click', loadCustomer);
document.getElementById('button-2').addEventListener('click', loadCustomers);

//load customer

function loadCustomer(e){

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);


    xhr.onload = function(){
        if(xhr.status === 200){
            const customer = JSON.parse(this.responseText);

            const output = `
            <ul>
            <li>ID: ${customer.id}</li>
           
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.comapany}</li>
            <li>Phone: ${customer.phone}</li> `

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();
}
//load customers

function loadCustomers(e){

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);


    xhr.onload = function(){
        if(xhr.status === 200){
            const customers = JSON.parse(this.responseText);

            let output = "";


            customers.forEach(customer => {
                output += `
                <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.comapany}</li>
                <li>Phone: ${customer.phone}</li> `;
                
            });
            

            document.getElementById('customers').innerHTML = output;
        }
    }

    xhr.send();
}