


// function saveLead(){
//     console.log("Button Clicked!by");
// }

//by Event Listener

// let myLeads = ["1","2","3", "4"];


let myLeads = [];
const inputText = document.getElementById("input-lead")
const inputBtn = document.getElementById("input-btn")
const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
let leadList = document.getElementById("lead-list")


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

const tabs = [{url: "www.jugaadhai.in"}]

saveBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    //console.log(tabs[0].url)
   
})



let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
//console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputText.value)
   inputText.value = ""

   localStorage.setItem("myLeads", JSON.stringify(myLeads))
   render(myLeads)
  // console.log( localStorage.getItem("myLeads") )
})

function render(leads){
    let listItems = ""

    for(let index = 0; index < leads.length; index++) {

        listItems += `<li><a target='_blank' href='${leads[index]}'> ${leads[index]} </a></li>` 

}
leadList.innerHTML = listItems
}



// Different method

// for(let index = 0; index < myLeads.length; index++) {
//     //Create a li element
//     //set text content
//     // append to ul

//     let li = document.createElement("li")
//     li.textContent = myLeads[index]
//     leadList.append(li)
// }

// localStorage.setItem("leadList", "www.com")
// console.log(localStorage.getItem("leadList"))
// //localStorage.clear()


//localStorage.setItem("Name", "Nurai Khan");
//console.log(localStorage.getItem("Name"))
//localStorage.clear()

//Arrays to strings and vice - versa

// myLeads = JSON.stringify(myLeads) // Arrays to String
// myLeads = JSON.parse(myLeads) //Strings to Array

    // console.log("check:", listItems)


        //leadList.innerHTML += "<li>" + myLeads[index] + "</li>" //less performance
    //  listItems += "<li>" + myLeads[index] + "</li>"
        //listItems += "<li><a 'target='_blank' href=' " + myLeads[index] + "'>" + myLeads[index] + "</a></li>" //Add link + New Tab
        // listItems += `<li>
        //                     <a target='_blank' href='${myLeads[index]}'>
        //                     ${myLeads[index]} </a>
        //                 </li>` //use Template String