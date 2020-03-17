document.addEventListener("DOMContentLoaded",init)

function init(){
    
    getPlayers()
    document.getElementById('addPlayers').addEventListener('click', navigate);
    document.getElementById('cancel').addEventListener('click', backToHome);

}
function backToHome(){


location.reload();
    document.getElementById("formTwo").style.display = "none"
    document.getElementById("formOne").style.display = "block"
}

function navigate(){
    document.getElementById("formOne").style.display = "none"
    document.getElementById("formTwo").style.display = "block"
}

function getPlayers(){
    var db = firebase.firestore();

    var employeesRef = db.collection("employees");
    
    employeesRef.get().then((querySnapshot) => {
        
        
        querySnapshot.forEach(item => {
             var Data = item.data()
             console.log(Data)
    
            let tbody = document.querySelector(".playerTable")
             
            let tr = document.createElement("tr")
    
            let idTd = document.createElement('td')
            idTd.innerHTML = Data.playerRank
            
            
            let nametd = document.createElement("td")
            nametd.innerHTML = Data.playerName
    
            let Firstnametd = document.createElement("td")
            Firstnametd.innerHTML = Data.playerTeam
    
            let Lastnametd = document.createElement("td")
            Lastnametd.innerHTML = Data.playerSports
    
            let Jerseytd = document.createElement("td")
            Jerseytd.innerHTML = Data.playerJersey

            let actionTd = document.createElement('td')
                let deleteBtn = document.createElement('button')
                deleteBtn.setAttribute("class","btn btn-danger deletePlayerBtn")
                deleteBtn.setAttribute("data-id",Data.playerName + Data.playerTeam)
                deleteBtn.addEventListener("click",deletePlayer)
                deleteBtn.textContent = "DELETE"

                let getId = document.querySelectorAll(".deletePlayerBtn")
                console.log(getId)

                getId.forEach(i => {
                    i.addEventListener('click', deletePlayer)
                })
                

                // let dltIbtn = document.createElement('i')
                // dltIbtn.setAttribute("class","fas fa-trash")
                // dltIbtn.setAttribute("data-id",Data.playerName)
                // dltIbtn.addEventListener("click",deletePlayer)

                actionTd.append(deleteBtn)
                //actionTd.append(dltIbtn)
    
                    tr.appendChild(idTd)
                    tr.appendChild(nametd)
                    tr.appendChild(Firstnametd)
                    tr.appendChild(Lastnametd)
                    tr.appendChild(Jerseytd)
                    tr.append(actionTd)
                    tbody.appendChild(tr)
                    
        })
       
    })

}

function deletePlayer(ev){
   // ev.preventDefault()
   let show =  ev.currentTarget.getAttribute("data-id")
   console.log(show)

   var db = firebase.firestore();
   //var employeesRef = db.collection("employees");
   db.collection("employees").doc(show).delete()
  

}


function addPlayer(){
    
   //var db = firebase.firestore();
   let rank = document.getElementById('rank').value
   let name = document.getElementById('name').value
   let team = document.getElementById('team').value
   let sports = document.getElementById('sports').value
   let jersey = document.getElementById('jersey').value
   var db = firebase.firestore();
   docName = name + team
   db.collection("employees").doc(docName).set({

    playerRank: rank,
    playerName: name,
    playerTeam: team,
    playerSports: sports,
    playerJersey: jersey

    
   }).then(function(){
       console.log('success')
   }).catch(function(error){
       console.log(error.message)
   })

   document.getElementById("formOne").style.display = "table"
   document.getElementById("formTwo").style.display = "none"
   location.reload();
}