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

    const params =
    {
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
    }

    const csrfToken = document.getElementById("csrf-token").value;
    console.log(csrfToken);
    
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
            alert(data.prediction);
         }).catch(error => {
            console.error('Error:', error);
        });

});

function removeRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}