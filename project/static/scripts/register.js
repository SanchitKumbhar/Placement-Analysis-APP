function toggleForm() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "flex";
        registerForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "flex";
    }
}


const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const csrfToken = document.getElementById("csrf_token").value;

registerForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form refresh

    const params = {
        username: registerForm.querySelector("input[type='text']").value,
        password: registerForm.querySelector("input[placeholder='Password']").value,
        password2: registerForm.querySelector("input[placeholder='Confirm Password']").value
    };

    try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            },
            body: JSON.stringify(params)
        });

        const data = await response.json();

        if (data.error) {
            alert(data.error);
        } else {
            localStorage.setItem(data.user, data.token);
            // Redirect user or update UI accordingly
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form refresh

    const params = {
        username: loginForm.querySelector("input[type='text']").value,
        password: loginForm.querySelector("input[placeholder='Password']").value
    };

    console.log(params);


    try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            },
            body: JSON.stringify(params)
        });
        const data = await response.json();

        if (data.error) {
            alert(data.error);
        } else {

            localStorage.setItem(data.user, data.token);
            console.log(data.token);
            // Redirect user or update UI accordingly
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
