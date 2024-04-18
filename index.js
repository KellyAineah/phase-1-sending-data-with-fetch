function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, configurationObject)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Append the new id to the DOM
        document.body.innerHTML += data.id;
        return data;
      })
      .catch(error => {
        // Append the error message to the DOM
        document.body.innerHTML += error.message;
        return error;
      });
  }
  
  
  
