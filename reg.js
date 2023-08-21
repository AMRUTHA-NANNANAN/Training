const citiesByState = {
    assam: ["Dhuburi", "Dibrugarh", "Dispur", "Guwahati", "Jorhat", "Nagaon", "Sivasagar", "Silchar", "Tezpur" < "Tinsukia"],
    goa: ["Madgaon", "Panajil"],
    karnataka: ["Bengaluru","Belagavi","Bhadravati","Bidar","Chikkamagaluru","Chitradurga","Davangere","Halebid","Hassan","Hubballi - Dharwad","Kalaburagi","Kolar","Madikeri","Mandya","Mangaluru","Mysuru","Raichur","Shivamogga","Shravanabelagola","Shrirangapattana","Tumakuru","Vijayapura"],
    kerala: ["Alappuzha", "Vatakara", "Idukki", "Kannur", "Kochi", "Kollam", "Kottayam", "Kozhikode", "Mattancheri", "Palakkad", "thalassery", "Thiruvananthapuram", "Thrissur"],
    sikkim: ["Gangtok","Gyalshing","Lachung","Mangan"]
    }
function populateCities() {
    const stateSelect = document.getElementById("state");
    const citySelect = document.getElementById("city");

   
    citySelect.innerHTML = "<option value=''>Select a city</option>";

    const selectedState = stateSelect.value;

    
    if (selectedState && citiesByState[selectedState]) {
        citiesByState[selectedState].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.text = city;
            citySelect.appendChild(option);
        });
    }
}
function validate() {
    
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var date = document.getElementById("date");
    var age = document.getElementById("age");
    var gender = document.getElementById("gender");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var address = document.getElementById("address");
    var username = document.getElementById("username");
    var password = document.getElementById("pwd");

    if (fname.value == "") {
        alert("must have a Firstname");
        document.form.fname.focus();
        return false;
    }
    if (lname.value == "") {
        alert("must have a Lastname");
        document.form.lname.focus();
        return false;
    }
    if (date.value == "") {
        alert("must have a date");
        document.form.date.focus();
        return false;
    }
    if (age.value == "") {
        alert("must have an age");
        document.form.age.focus();
        return false;
    }
    if (gender.value == "") {
        alert("must have an age");
        document.form.gender.focus();
        return false;
    }
    if (phone.value == "") {
        alert("must have an age");
        document.form.phone.focus();
        return false;
    }
    if (email.value == "") {
        alert("must have an age");
        document.form.email.focus();
        return false;
    }
    if (address.value == "") {
        alert("must have an age");
        document.form.address.focus();
        return false;
    }
    if (username.value == "") {
        alert("must have an age");
        document.form.username.focus();
        return false;
    }
    if (password.value == "") {
        alert("must have an age");
        document.form.password.focus();
        return false;
    }
    
    
    return true;
};
function myfunction() {
    let x = document.getElementById("email");
    x.value = x.value.toLowerCase();
};



