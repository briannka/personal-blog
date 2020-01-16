document.getElementById('login-form').addEventListener('submit', function(event) {
     event.preventDefault(); let userName=document.getElementById('username').value; 
     alert('Username is: ' + userName); 
     return false; 
    }
    );
    