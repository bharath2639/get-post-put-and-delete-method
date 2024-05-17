const userinput1  = document.getElementById("input1");
const userLast = document.getElementById("input2");
const userEmail = document.getElementById("useremail");
const userNumber = document.getElementById("usernumber");
const userAddress = document.getElementById("address");
const userUploadPic = document.getElementById("uploadpic");


const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");
const error4 = document.getElementById("error4");
const error5 = document.getElementById("error5");


const buttonCreate = document.getElementById("btn1");
const button = document.getElementById("btn2");

const updatedButton = document.getElementById("btn3");
const contanier = document.getElementById("contaniner")



button.addEventListener("click", async(event)=>{
    event.preventDefault();
    contanier.innerHTML=""

    try{
        const theUrl = await fetch("https://the-techie-crud.onrender.com/users")
        const convert = await theUrl.json();
        const infoData = convert.data;
        console.log(infoData);
        // console.log(convert);
        infoData.forEach((value)=>{
            console.log(value);
            const{firstName,lastName,email,mobile,address,profilePic} = value;

            const html = `<img src=${profilePic} height=100px />
                          <h4>First Name:${firstName}${lastName}</h4>
                          <h4>Email Id:${email}</h4>
                          <h4>mobile number:${mobile}</h4> 
                          <address>Address:${address}</address>`

            contanier.innerHTML += html;


        })

    }catch(error){
        console.log(error);
    }

})

//post method

buttonCreate.addEventListener("click",async(event)=>{
    event.preventDefault()
    
    try{
        if(userinput1.value===""){
            error1.textContent="Enter Your Name";
            error1.style.color="red"
        }else if(userLast===""){
            error2.textContent="Enter Your Last Name"
            error2.style.color="red"
        }else if(userEmail.value===""){
            error3.textContent="Enter Your Email"
            error3.style.color="red"
        }else if(userNumber.value===""){
            error4.textContent="Enter you number"
            error4.style.color="red"
        }else if(userAddress.value===""){
            error5.textContent="Enter your Address"
            error5.style.color="red"
        }else{
            const personDetails ={
                firstName: userinput1.value,
                lastName: userLast.value,
                email: userEmail.value,
                mobile: userNumber.value,
                address: userAddress.value
            }

            const theUrl = await fetch("https://the-techie-crud.onrender.com/user-creation",

    {
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(personDetails),
    })
    console.log(theUrl);

        }
    
  }catch(error){
    console.log(error);
  }
})

userUploadPic.addEventListener("change", async(event)=>{

    try{
        const link = event.target.files[0];
        const data = new FormData();

        data.append("image",link);

        const theUrl = await fetch("https://the-techie-crud.onrender.com/upload/6641cd6011c8c4de4800e23b",{
            method:"POST",
            body: data
        });
        const result = await theUrl.json();
        console.log(result);
        

    }catch(error){
        console.log(error);
    }
})




//put or patch method:
updatedButton.addEventListener("click",async(event)=>{
    event.preventDefault()
    try{
        if(userinput1.value===""){
            error1.textContent="Enter Your Name";
            error1.style.color="red"
        }else if(userLast===""){
            error2.textContent="Enter Your Last Name"
            error2.style.color="red"
        }else if(userEmail.value===""){
            error3.textContent="Enter Your Email"
            error3.style.color="red"
        }else if(userNumber.value===""){
            error4.textContent="Enter you number"
            error4.style.color="red"
        }else if(userAddress.value===""){
            error5.textContent="Enter your Address"
            error5.style.color="red"
        }else{
            const updatedInfo={
                firstName:userinput1.value,
                lastName:userLast.value,
                email:userEmail.value,
                mobile:userNumber.value,
                address:userAddress

            }
            const dataStore = await fetch("https://the-techie-crud.onrender.com/update-user-info/6641cd6011c8c4de4800e23b",{
                method:"PUT",
                headers:{
                    "content=type":"application/json"
                },
                body:JSON.stringify(updatedInfo),
            
            });
            console.log(dataStore);

        }
            

    }catch(error){
        console.log(error);
    }
})