var tempArr = []
function addnewnote(ele) {
    var additionalNodes = document.getElementById("additionalnodes")
    var boxDiv = document.createElement("div")

    if (ele.id == "orange") {
        boxDiv.setAttribute("Class", "group h-64 relative w-full rounded-lg border-2 bg-orange-300/80 flex flex-col shadow-lg shadow-gray-400 border-none hover:bg-orange-400 transition-all duration-500")
    } else if (ele.id == "rose") {
        boxDiv.setAttribute("Class", "group h-64 relative w-full rounded-lg border-2 bg-rose-300/80 flex flex-col shadow-lg shadow-gray-400 border-none hover:bg-rose-400 transition-all duration-500")
    } else if (ele.id == "green") {
        boxDiv.setAttribute("Class", "group h-64 relative w-full rounded-lg border-2 bg-green-400/80 flex flex-col shadow-lg shadow-gray-400 border-none hover:bg-green-500 transition-all duration-500")
    } else if (ele.id == "yellow") {
        boxDiv.setAttribute("Class", "group h-64 relative w-full rounded-lg border-2 bg-yellow-300/80 flex flex-col shadow-lg shadow-gray-400 border-none hover:bg-yellow-400 transition-all duration-500")
    } else if (ele.id == "fuchsia") {
        boxDiv.setAttribute("Class", "group h-64 relative w-full rounded-lg border-2 bg-fuchsia-200/50 flex flex-col shadow-lg shadow-gray-400 border-none hover:bg-fuchsia-300 transition-all duration-500")
    }
    var headerDiv = document.createElement("div")
    headerDiv.setAttribute("Class", "w-full flex items-center justify-around pt-4 ")
    var headerDiv2 = document.createElement("div")
    headerDiv2.setAttribute("Class", "flex items-center justify-start w-10/12 overflow-hidden")
    var Inputfield = document.createElement("input")
    Inputfield.setAttribute("onkeypress", "onEnter(event)")
    Inputfield.setAttribute("onfocus", "saveInput(this)")
    if (ele.id == "orange") {
        Inputfield.setAttribute("Class", "bg-orange-300 outline-none rounded-md pl-1")
    } else if (ele.id == "rose") {
        Inputfield.setAttribute("Class", "bg-rose-300  outline-none rounded-md pl-1")
    } else if (ele.id == "green") {
        Inputfield.setAttribute("Class", "bg-green-400  outline-none rounded-md pl-1")
    } else if (ele.id == "yellow") {
        Inputfield.setAttribute("Class", "bg-yellow-300 outline-none rounded-md pl-1")
    } else if (ele.id == "fuchsia") {
        Inputfield.setAttribute("Class", "bg-fuchsia-200/80  outline-none rounded-md pl-1")
    }
    var heading = document.createElement("p")
    heading.setAttribute("Class", "font-bold text-xl")
    heading.innerHTML
    headerDiv2.append(Inputfield)
    headerDiv2.append(heading)
    headerDiv.append(headerDiv2)
    boxDiv.append(headerDiv)

    var textDiv = document.createElement("div")
    textDiv.setAttribute("class", "w-full flex items-start justify-around pt-2 break-words overflow-hidden h-40")
    var textDiv2 = document.createElement("div")
    textDiv2.setAttribute("class", "w-10/12 h-full")

    var inputText = document.createElement("textarea")
    inputText.setAttribute("onfocus", "saveInput(this)")
    inputText.setAttribute("onkeypress", "onEnter(event)")
    if (ele.id == "orange") {
        inputText.setAttribute("Class", " bg-orange-300 w-full h-full resize-none outline-none rounded-md text-sm p-1")
    } else if (ele.id == "rose") {
        inputText.setAttribute("Class", "bg-rose-300 w-full h-full resize-none outline-none rounded-md text-sm p-1")
    } else if (ele.id == "green") {
        inputText.setAttribute("Class", "bg-green-400 w-full h-full resize-none outline-none rounded-md text-sm p-1")
    } else if (ele.id == "yellow") {
        inputText.setAttribute("Class", "bg-yellow-300 w-full h-full resize-none outline-none rounded-md text-sm p-1")
    } else if (ele.id == "fuchsia") {
        inputText.setAttribute("Class", "w-full h-full box-border resize-none bg-fuchsia-200  outline-none rounded-md text-sm p-1 overflow-auto")
    }

    var actualText = document.createElement("p")
    actualText.setAttribute("class", "text-sm")
    textDiv2.append(inputText)
    textDiv2.append(actualText)
    textDiv.append(textDiv2)
    boxDiv.append(textDiv)

    var trashCan = document.createElement("div")
    trashCan.setAttribute("class", "absolute w-10/12 self-center mt-56")
    var trashCan2 = document.createElement("div")
    trashCan2.setAttribute("class", "flex justify-between ")
    var trashCanIcon = document.createElement("i")
    if (ele.id == "orange") {
        trashCanIcon.setAttribute("class", "fa fa-trash text-orange-800/0 group-hover:text-orange-800  transition-all duration-500 cursor-pointer")
    } else if (ele.id == "rose") {
        trashCanIcon.setAttribute("Class", "fa fa-trash text-rose-800/0 group-hover:text-rose-800  transition-all duration-500 cursor-pointer")
    } else if (ele.id == "green") {
        trashCanIcon.setAttribute("Class", "fa fa-trash text-green-800/0 group-hover:text-green-800 transition-all duration-500 cursor-pointer")
    } else if (ele.id == "yellow") {
        trashCanIcon.setAttribute("Class", "fa fa-trash text-yellow-800/0 group-hover:text-yellow-800  transition-all duration-500 cursor-pointer")
    } else if (ele.id == "fuchsia") {
        trashCanIcon.setAttribute("Class", "fa fa-trash text-fuchsia-800/0 group-hover:text-fuchsia-800  transition-all duration-500 cursor-pointer")
    }
    trashCanIcon.setAttribute("aria-hidden", "true")
    trashCanIcon.setAttribute("onclick", "removethis(this)")
    var editIcon = document.createElement("i")
    editIcon.setAttribute("onclick", "editthis(this)")
    if (ele.id == "orange") {
        editIcon.setAttribute("class", "fa fa-edit text-orange-800/0 group-hover:text-orange-800  transition-all duration-500 cursor-pointer")
        inputText.setAttribute("id", "orange1")
    } else if (ele.id == "rose") {
        editIcon.setAttribute("Class", "fa fa-edit text-rose-800/0 group-hover:text-rose-800  transition-all duration-500 cursor-pointer")
        inputText.setAttribute("id", "rose1")
    } else if (ele.id == "green") {
        editIcon.setAttribute("Class", "fa fa-edit text-green-800/0 group-hover:text-green-800 transition-all duration-500 cursor-pointer")
        inputText.setAttribute("id", "green1")
    } else if (ele.id == "yellow") {
        editIcon.setAttribute("Class", "fa fa-edit text-yellow-800/0 group-hover:text-yellow-800  transition-all duration-500 cursor-pointer")
        inputText.setAttribute("id", "yellow1")
    } else if (ele.id == "fuchsia") {
        editIcon.setAttribute("Class", "fa fa-edit text-fuchsia-800/0 group-hover:text-fuchsia-800  transition-all duration-500 cursor-pointer")
    }
    trashCan2.append(editIcon)
    trashCan2.append(trashCanIcon)
    trashCan.append(trashCan2)
    boxDiv.append(trashCan)
    additionalNodes.insertBefore(boxDiv, additionalNodes.lastElementChild)

}
function removethis(ele) {
    var header = ele.parentNode.parentNode.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.innerHTML
    var note = ele.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild.innerHTML
    var userParsed = JSON.parse(localStorage.getItem("userData"))
    for (let i = 0; i < userParsed.length; i++) {
        if (header == userParsed[i].header) {
            if (note == userParsed[i].note) {
                if (i == 0) {
                    userParsed.shift()
                    // console.log(userParsed);
                    localStorage.setItem("userData", JSON.stringify(userParsed))
                } else if (i == userParsed.length - 1) {
                    userParsed.pop()
                    console.log(userParsed);
                    localStorage.setItem("userData", JSON.stringify(userParsed))
                } else{
                    console.log(userParsed.splice(i,1));
                    
                    localStorage.setItem("userData", JSON.stringify(userParsed))
                }
                
            }
        }
    }
    ele.parentNode.parentNode.parentNode.remove()

}
var currInput
var userData = {
    header: "",
    note: "",
    color: ""
}
function saveInput(ele) {
    currInput = ele
    for (i = 0; i < ele.classList.length; i++) {
        if (ele.classList[i] == "bg-orange-300") {
            userData.color = "bg-orange-300"
        } else if (ele.classList[i] == "bg-rose-300") {
            userData.color = "bg-rose-300"
        } else if (ele.classList[i] == "bg-fuchsia-200/80") {
            userData.color = "bg-fuchsia-200/80"
        } else if (ele.classList[i] == "bg-green-400") {
            userData.color = "bg-green-400"
        } else if (ele.classList[i] == "bg-yellow-300") {
            userData.color = "bg-yellow-300"
        }
    }
}
function onEnter(ele) {
    if (ele.key === "Enter") {
        currInput.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.setAttribute("aria-disabled", "false")
        if (currInput.value) {
            currInput.nextElementSibling.innerHTML = currInput.value
            if (currInput.tagName.toLowerCase() === "input") {
                userData.header = currInput.nextElementSibling.innerHTML
            } else if (currInput.tagName.toLowerCase() === "textarea") {
                userData.note = currInput.nextElementSibling.innerHTML
                userDataparsed = JSON.parse(localStorage.getItem("userData"))
                if (userDataparsed == null) {
                    userDataparsed = [userData]
                    localStorage.setItem("userData", JSON.stringify(userDataparsed))
                    userData = {
                        header: "",
                        note: "",
                        color: ""
                    }
                } else {
                    userDataparsed.push(userData)
                    localStorage.setItem("userData", JSON.stringify(userDataparsed))
                    userData = {
                        header: "",
                        note: "",
                        color: ""
                    }

                }
            }
            currInput.value = ""
            currInput.remove()
            ele.preventDefault()
        }
    }
}
function editthis(ele) {
    if (ele.ariaDisabled == "false") {
        if (ele.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.children.length <= 1) {

            var Inputfield = document.createElement("input")
            Inputfield.setAttribute("onkeypress", "onEnter(event)")
            Inputfield.setAttribute("onfocus", "saveInput(this)")
            Inputfield.setAttribute("id", "hello")
            Inputfield.value = ele.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.lastElementChild.innerHTML
            ele.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.lastElementChild.remove()
            if (ele.className.includes("text-orange-800")) {
                Inputfield.setAttribute("Class", "bg-orange-300 outline-none rounded-md pl-1")
            } else if (ele.className.includes("text-rose-800")) {
                Inputfield.setAttribute("Class", "bg-rose-300  outline-none rounded-md pl-1")
            } else if (ele.className.includes("text-green-800")) {
                Inputfield.setAttribute("Class", "bg-green-400  outline-none rounded-md pl-1")
            } else if (ele.className.includes("text-yellow-800")) {
                Inputfield.setAttribute("Class", "bg-yellow-300 outline-none rounded-md pl-1")
            } else if (ele.className.includes("text-fuchsia-800")) {
                Inputfield.setAttribute("Class", "bg-fuchsia-200 outline-none rounded-md pl-1")
            }
            ele.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.append(Inputfield)
            var heading = document.createElement("p")
            heading.setAttribute("Class", "font-bold text-xl")
            ele.parentNode.parentNode.parentNode.firstElementChild.firstElementChild.append(heading)
        }

        var inputText = document.createElement("textarea")
        inputText.setAttribute("onfocus", "saveInput(this)")
        inputText.setAttribute("onkeyup", "onEnter(event)")
        inputText.value = ele.parentNode.parentNode.previousElementSibling.firstElementChild.lastElementChild.innerHTML
        ele.parentNode.parentNode.previousElementSibling.firstElementChild.lastElementChild.remove()
        if (ele.className.includes("text-orange-800")) {
            inputText.setAttribute("Class", " bg-orange-300 resize-none w-full h-full outline-none rounded-md text-sm p-1")
        } else if (ele.className.includes("text-rose-800")) {
            inputText.setAttribute("Class", "bg-rose-300  resize-none w-full h-full outline-none rounded-md text-sm p-1")
        } else if (ele.className.includes("text-green-800")) {
            inputText.setAttribute("Class", "bg-green-400  resize-none w-full h-full outline-none rounded-md text-sm p-1")
        } else if (ele.className.includes("text-yellow-800")) {
            inputText.setAttribute("Class", "bg-yellow-300 resize-none w-full h-full outline-none rounded-md text-sm p-1")
        } else if (ele.className.includes("text-fuchsia-800")) {
            inputText.setAttribute("Class", "w-full h-full resize-none bg-fuchsia-200  outline-none rounded-md text-sm p-1")
        }
        ele.parentNode.parentNode.previousElementSibling.firstElementChild.append(inputText)
        var actualText = document.createElement("p")
        actualText.setAttribute("class", "text-sm")

        ele.parentNode.parentNode.previousElementSibling.firstElementChild.append(actualText)
    }
    ele.setAttribute("aria-disabled", "true")
}

function deleteAllNodes() {
    var additionalNodes = document.getElementById("additionalnodes")
    additionalNodes.innerHTML = ""
    var mainDiv = document.createElement("div")
    mainDiv.setAttribute("Class", "h-64 w-full rounded-md border-2 bg-white flex  flex-col shadow-lg shadow-gray-400 border-none ")
    var firstchildDiv = document.createElement("div")
    firstchildDiv.setAttribute("Class", "w-full h-1/2 flex justify-between items-center")
    var OrangeDiv = document.createElement("div")
    OrangeDiv.setAttribute("Class", "bg-orange-300 flex justify-end items-end w-1/2 h-full rounded-tl-md hover:bg-orange-400 transition-all duration-500")
    OrangeDiv.setAttribute("Onclick", "addnewnote(this)")
    OrangeDiv.setAttribute("id", "orange")
    var RoseDiv = document.createElement("div")
    RoseDiv.setAttribute("Class", "bg-rose-300 flex justify-end items-end w-full h-full rounded-tr-md hover:bg-rose-400 transition-all duration-500")
    RoseDiv.setAttribute("Onclick", "addnewnote(this)")
    RoseDiv.setAttribute("id", "rose")

    firstchildDiv.append(OrangeDiv)
    firstchildDiv.append(RoseDiv)
    mainDiv.append(firstchildDiv)

    var secChildDiv = document.createElement("div")
    secChildDiv.setAttribute("Class", "text-6xl bg-fuchsia-200/50 hover:bg-fuchsia-200 h-1/2 border-solid flex items-center justify-around transition-all duration-500")
    secChildDiv.setAttribute("Onclick", "addnewnote(this)")
    secChildDiv.setAttribute("id", "fuchsia")
    var plusIcon = document.createElement("I")
    plusIcon.setAttribute("class", "fa fa-plus")
    plusIcon.setAttribute("aria-hidden", "true")
    secChildDiv.append(plusIcon)
    mainDiv.append(secChildDiv)

    var thirdChildDiv = document.createElement("div")
    thirdChildDiv.setAttribute("Class", "w-full h-1/2 flex justify-between items-center")
    var greenDiv = document.createElement("div")
    greenDiv.setAttribute("class", "bg-green-400 flex justify-end items-end w-full rounded-bl-md h-full hover:bg-green-500 transition-all duration-500")
    greenDiv.setAttribute("Onclick", "addnewnote(this)")
    greenDiv.setAttribute("id", "green")
    var yellowDiv = document.createElement("div")
    yellowDiv.setAttribute("class", "bg-yellow-300 flex justify-end items-end w-1/2 h-full rounded-br-md hover:bg-yellow-400 transition-all duration-500")
    yellowDiv.setAttribute("Onclick", "addnewnote(this)")
    yellowDiv.setAttribute("id", "yellow")
    thirdChildDiv.append(greenDiv)
    thirdChildDiv.append(yellowDiv)
    mainDiv.append(thirdChildDiv)
    additionalNodes.append(mainDiv)
    
    var getData = JSON.parse(localStorage.getItem("userData"))
    if (getData == "Null") {
        return
    } else {
        getData = []
        console.log(getData);
        localStorage.setItem("userData", JSON.stringify(getData))

    }
}

function signup() {
    var email = document.getElementById("email")
    var username = document.getElementById("username")
    var password = document.getElementById("password")
    if (email.value == "" || username.value == "" || password.value == "") {
        alert("input fields empty")
        return
    } else {
        var userObj = {
            email: email.value,
            name: username.value,
            password: password.value
        }

    }
    getUsers = localStorage.getItem("Users")

    if (getUsers === null) {
        localStorage.setItem("Users", JSON.stringify([userObj]))
        alert("you are signed up")
        window.location.assign("./login.html")
    } else {
        var userParse = JSON.parse(getUsers)
        var findEmail = userParse.find(function (value, index) {
            if (value.email == userObj.email) {
                alert("you are already signed up")
                window.location.assign("./login.html")
            }
        })
        if (findEmail == undefined) {
            userParse.push(userObj)
            localStorage.setItem("Users", JSON.stringify(userParse))

            window.location.assign("./login.html")
        }

    }
}
function Login() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    var userCollection = JSON.parse(localStorage.getItem("Users"))

    var userExist = userCollection.find(function (value, index) {
        if (value.email === email.value && value.password === password.value) {
            return value
        }
    })

    if (!userExist) {
        alert("email OR password invalid")
        return
    } else {
        alert("successfully login")
        localStorage.setItem("userLogin", JSON.stringify(userExist))
        window.location.replace("./index.html")
    }
}
var userDetails = null
function isUserLogin() {
    var getUsers = JSON.parse(localStorage.getItem("userLogin"))
    if (getUsers === null) {
        userDetails = getUsers

        window.location.replace("./login.html")
    }
}

function loadAuthScreen() {
    var getUsers = JSON.parse(localStorage.getItem("userLogin"))

    if (getUsers !== null) {
        window.location.replace("./index.html")
    }
}
function userLogout() {
    localStorage.removeItem("userLogin")
    window.location.replace("./login.html")
}

function onload() {
    var additionalNodes = document.getElementById("additionalnodes")
    var userData = JSON.parse(localStorage.getItem('userData'))
    if (!userData) {
        return
    } else {
        userData.forEach(value => {
            if (value.color === "bg-orange-300") {
                divsave = `<div
                class="group h-64 relative w-full rounded-lg border-2 bg-orange-300/80 flex flex-col shadow-lg shadow-gray-400 border-none hover:bg-orange-400 transition-all duration-500">
                <div class="w-full flex items-center justify-around pt-4 ">
                    <div class="flex items-center justify-start w-10/12 overflow-hidden">
                        <p class="font-bold text-xl">${value.header}</p>
                    </div>
                </div>
                <div class="w-full flex items-start justify-around pt-2 break-words overflow-hidden h-40">
                    <div class="w-10/12 h-full">
                        <p class="text-sm">${value.note}</p>
                    </div>
                </div>
                <div class="absolute w-10/12 self-center mt-56 invisible group-hover:visible ">
                    <div class="flex justify-between "><i onclick="editthis(this)" class="fa fa-edit text-orange-800 cursor-pointer"
                            aria-disabled="false"></i><i class="fa fa-trash text-orange-800 cursor-pointer" aria-hidden="true"
                            onclick="removethis(this)"></i></div>
                </div>
            </div>`
                additionalNodes.innerHTML += divsave
            } else if (value.color === "bg-rose-300") {
                divsave = `<div
                class="group h-64 relative w-full rounded-lg border-2 bg-rose-300/80 flex flex-col shadow-lg shadow-gray-400 border-none hover:bg-rose-400" transition-all duration-500>
                <div class="w-full flex items-center justify-around pt-4 ">
                    <div class="flex items-center justify-start w-10/12 overflow-hidden">
                        <p class="font-bold text-xl">${value.header}</p>
                    </div>
                </div>
                <div class="w-full flex items-start justify-around pt-2 break-words overflow-hidden h-40">
                    <div class="w-10/12 h-full">
                        <p class="text-sm">${value.note}</p>
                    </div>
                </div>
                <div class="absolute w-10/12 self-center mt-56 invisible group-hover:visible ">
                    <div class="flex justify-between ">
                        <i onclick="editthis(this)" class="fa fa-edit text-rose-800 cursor-pointer" aria-disabled="false"></i>
                        <i class="fa fa-trash text-rose-800 cursor-pointer" aria-hidden="true" onclick="removethis(this)"></i>
                    </div>
                </div>
            </div>`
                additionalNodes.innerHTML += divsave
            } else if (value.color === "bg-fuchsia-200/80") {
                divsave = `<div
                class="group h-64 relative w-full rounded-lg border-2 bg-fuchsia-200/50 flex flex-col shadow-lg shadow-gray-400 border-none hover:bg-fuchsia-300 transition-all duration-500">
                <div class="w-full flex items-center justify-around pt-4 ">
                    <div class="flex items-center justify-start w-10/12 overflow-hidden">
                        <p class="font-bold text-xl">${value.header}</p>
                    </div>
                </div>
                <div class="w-full flex items-start justify-around pt-2 break-words overflow-hidden h-40">
                    <div class="w-10/12 h-full">
                        <p class="text-sm">${value.note}</p>
                    </div>
                </div>
                <div class="absolute w-10/12 self-center mt-56 invisible group-hover:visible ">
                    <div class="flex justify-between "><i onclick="editthis(this)"
                            class="fa fa-edit text-fuchsia-800 cursor-pointer" aria-disabled="false"></i><i
                            class="fa fa-trash text-fuchsia-800 cursor-pointer" aria-hidden="true" onclick="removethis(this)"></i>
                    </div>
                </div>
            </div>`
                additionalNodes.innerHTML += divsave
            } else if (value.color === "bg-green-400") {
                divsave = `<div
                class="group h-64 relative w-full rounded-lg border-2 bg-green-400/80 flex flex-col shadow-lg shadow-gray-400 border-none hover:bg-green-500 transition-all duration-500">
                <div class="w-full flex items-center justify-around pt-4 ">
                    <div class="flex items-center justify-start w-10/12 overflow-hidden">
                        <p class="font-bold text-xl">${value.header}</p>
                    </div>
                </div>
                <div class="w-full flex items-start justify-around pt-2 break-words overflow-hidden h-40">
                    <div class="w-10/12 h-full">
                        <p class="text-sm">${value.note}</p>
                    </div>
                </div>
                <div class="absolute w-10/12 self-center mt-56 invisible group-hover:visible ">
                    <div class="flex justify-between "><i onclick="editthis(this)"
                            class="fa fa-edit text-green-800 cursor-pointer"></i><i
                            class="fa fa-trash text-green-800 cursor-pointer" aria-hidden="true" onclick="removethis(this)"></i>
                    </div>
                </div>
            </div>`
                additionalNodes.innerHTML += divsave
            } else if (value.color === "bg-yellow-300") {
                divsave = `<div
                class="group h-64 relative w-full rounded-lg border-2 bg-yellow-300/80 flex flex-col shadow-lg shadow-gray-400 border-none hover:bg-yellow-400 transition-all duration-500">
                <div class="w-full flex items-center justify-around pt-4 ">
                    <div class="flex items-center justify-start w-10/12 overflow-hidden">
                        <p class="font-bold text-xl">${value.header}</p>
                    </div>
                </div>
                <div class="w-full flex items-start justify-around pt-2 break-words overflow-hidden h-40">
                    <div class="w-10/12 h-full">
                        <p class="text-sm">${value.note}</p>
                    </div>
                </div>
                <div class="absolute w-10/12 self-center mt-56 invisible group-hover:visible ">
                    <div class="flex justify-between "><i onclick="editthis(this)" class="fa fa-edit text-yellow-800 cursor-pointer"
                            aria-disabled="false"></i><i class="fa fa-trash text-yellow-800 cursor-pointer" aria-hidden="true"
                            onclick="removethis(this)"></i></div>
                </div>
            </div>`
                additionalNodes.innerHTML += divsave
            }
        });
    }
}
function onEnter1(e){
    if (e.keyCode == 13) {
        Login()
    }
}
function onEnter2(e){
    if (e.keyCode == 13){
        signup()
    }
}