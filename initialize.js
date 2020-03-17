var db = firebase.firestore();

var employeesRef = db.collection("employees");


employeesRef.get().then((querySnapshot) => { querySnapshot.forEach((doc)=>{
    console.log("aaa");})});
    employeesRef.doc("V.Kohli").set({
    playerRank: 01,
    playerName: "Virat Kohli",
    playerTeam: "India",
    playerSports: "Cricket",
    playerJersey: 18
    
});

employeesRef.doc("L.Messi").set({
    playerRank: 02,
    playerName: "Leo Messi",
    playerTeam: "Barcelona",
    playerSports: "Football",
    playerJersey: 10
    
});

employeesRef.doc("C.Ronaldo").set({
    playerRank: 01,
    playerName: "Christiano Ronaldo",
    playerTeam: "Juventus F.C.",
    playerSports: "Football",
    playerJersey: 07
    
});

employeesRef.doc("R.Fedrer").set({
    playerRank: 04,
    playerName: "Roger Fedrer",
    playerTeam: "Switzerland",
    playerSports: "Tennis",
    playerJersey: 08
    
})