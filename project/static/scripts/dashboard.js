
document.getElementById('predict').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form refresh    
    const cgpa = document.getElementById('cgpa').value;
    const mp = document.getElementById('mp').value;
    const mini = document.getElementById('mini').value;
    const ssc = document.getElementById('10th').value;
    const hsc = document.getElementById('12th').value;
    const bl = document.getElementById('BL').value;
    const ws = document.getElementById('ws').value;
    const com = document.getElementById('com').value;
    const sk = document.getElementById('sk').value;
    const internship = document.getElementById('Internship').value;
    const hackathon = document.getElementById('Hackathon').value;

    document.getElementById('predict').addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form refresh    
        const cgpa = document.getElementById('cgpa').value;
        const mp = document.getElementById('mp').value;
        const mini = document.getElementById('mini').value;
        const ssc = document.getElementById('10th').value;
        const hsc = document.getElementById('12th').value;
        const bl = document.getElementById('BL').value;
        const ws = document.getElementById('ws').value;
        const com = document.getElementById('com').value;
        const sk = document.getElementById('sk').value;
        const internship = document.getElementById('Internship').value;
        const hackathon = document.getElementById('Hackathon').value;

        const params = {
            "CGPA": cgpa,
            "Major Projects": mp,
            "Workshops/Certifications": ws,
            "Mini Projects": mini,
            "Skills": sk,
            "Communication Skill Rating": com,
            "Internship": internship,
            "Hackathon": hackathon,
            "12th Percentage": hsc,
            "10th Percentage": ssc,
            "Backlogs": bl
        };

        const csrfToken = document.getElementById("csrf-token").value;
        const msg = document.getElementById("message");
        const msg2 = document.getElementById("message2");

        fetch('http://127.0.0.1:8000/api/v1/prediction-placement/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            },
            body: JSON.stringify(params),
        })
            .then(response => response.json())
            .then(data => {
                const salary = document.getElementById("predict-salary");

                if (data.prediction == "Placed") {
                    msg.style.display = "block";
                    msg.innerText = `The student placement status is ${data.prediction}`;
                    if (salary) {
                        salary.removeAttribute("disabled");
                        salary.style.cursor = "pointer"; // Change cursor to pointer
                    }
                } else {
                    msg2.style.display = "block";
                    msg2.innerText = `The student placement status is ${data.prediction}`;
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });


});

function removeRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}



document.getElementById('predict-salary').addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form refresh   
        console.log("clicked");
        const csrfToken = document.getElementById("csrf-token").value;

        const cgpa = document.getElementById('cgpa').value;
        const mp = document.getElementById('mp').value;
        const mini = document.getElementById('mini').value;
        const ssc = document.getElementById('10th').value;
        const hsc = document.getElementById('12th').value;
        const bl = document.getElementById('BL').value;
        const ws = document.getElementById('ws').value;
        const com = document.getElementById('com').value;
        const sk = document.getElementById('sk').value;
        const internship = document.getElementById('Internship').value;
        const hackathon = document.getElementById('Hackathon').value;

        const params = {
            "CGPA": cgpa,
            "Major Projects": mp,
            "Workshops/Certifications": ws,
            "Mini Projects": mini,
            "Skills": sk,
            "Communication Skill Rating": com,
            "Internship": internship,
            "Hackathon": hackathon,
            "12th Percentage": hsc,
            "10th Percentage": ssc,
            "Backlogs": bl,
            "PlacementStatus": 1
        };
        fetch('http://127.0.0.1:8000/api/v1/prediction-salary/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken
            },
            body: JSON.stringify(params),
        })
        .then(response => response.json())
        .then(data => {

            const salary = document.getElementById("message3");
            salary.style.display = "block";
            salary.innerText = `The expected salary is  ${data.prediction}/-`;
        })
        .catch(error=>{
            console.log(error);
            
        })

    });

