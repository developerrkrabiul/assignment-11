

const deve = document.querySelector(".deve-sec");


deves.map(data => {

    deve.innerHTML += `
    
    
    <div class="all-data">

        <div class="data">
            <img src="${data.image}" alt="">
            <h1 class="id"><span>ID</span>: ${data.id}</h1>
            <h1 class="name"><span>Name</span>: ${data.name} </h1>
            <h1 class="location"> <Span>Location</Span>: ${data.location} </h1>
            <h1 class="Skill"> <span>Skill</span></s>: ${data.skill} </h1>
            <h1 class="salary"> <span>Salary</span>: $${data.salary}</h1>
        </div>

    </div>   

`} );

const student = document.querySelector(".student-data");

students.map(data => {

    student.innerHTML += `

    <div class="all-data">

        <div class="data">
            <img src="${data.image}" alt="">

            <div class="stud-about">
                <h1 class="id"><span>Roll</span>: ${data.id}</h1>
                <h1 class="name"><span>Name</span>: ${data.name} </h1>
                <h1 class="location"> <Span>Location</Span>: ${data.location} </h1>
            </div>
        </div>
    </div>   

`} );

const phone = document.querySelector(".phone-nub table tbody");

phoneBook.map((data, index) => {
    phone.innerHTML +=`
    <tr>
        <td>${index+1}</td>
        <td>${data.name}</td>
        <td>0${data.Number}</td>
        <td>${data.relation}</td>
        <td><img src="${data.image}" alt=""></td>
    </tr>
    
    
`})
