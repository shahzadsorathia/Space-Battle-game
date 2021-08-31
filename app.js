class ship { // Main Class
    constructor(name, hull, firepower, accuracy){
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy= accuracy;
    }
}
let captain = new ship ( "Shahzad" , 20, 5 , 0.7) // Create players ship
var shipArr = [] // Creates Enemy Ship
for ( let i =1; i<=6; i++){  // loop to create 6 ships
    
    let shipHull = Math.floor( Math.random() *4 ) +3;
    let shipaccuracy = Math.floor ( Math.random() *3) + 6 / 10;
    let shipfirepower = Math.floor( Math.random () *3 ) +2;
    let Ship = new ship("Alien_Ship", shipHull,  shipfirepower,  shipaccuracy, );
    shipArr.push(Ship) ;
}
start= ( ) =>{  // Game Start Function
    var play= prompt("Do you want to play the battle space game: yes/No ?");
    if(play === "yes" ){
        alert("Let the Game begin: ");
     attack();
    }
    else { alert (" GOOD BYE!")
        }
} 
attack=() => { // Attack function
        let response = " "
    while(true){
     response = prompt ( "Do you want to attack ? yes/no");
        if( response.toLocaleLowerCase() === "yes")
    { loadgame()   
    break}
    else{
        alert ("invalid Input")
        }
    }
}
loadgame=() => { // main game function 
  while ( shipArr.length !== 0){ // checking the array length
    var shipleft = shipArr.pop(); // Removing one ship everytime loop runs
    if(Math.random() <= shipleft.accuracy){ // checking the accuracy power of ship
        alert( " Player got hit: " + shipleft.hull );   // displaying alert message and hull power
    captain.hull = captain.hull - shipleft.firepower;  // subtracting player hull power from ship firepower
        alert("Ship Got hit: " + captain.hull);     // displaying players hull power
    } 
        else if ( Math.random() >= shipleft.accuracy){  // checking the randon generated number is greater the accuracy power
            alert(`Great Attack:  ${captain.firepower} ship Damage`) // displaying player firepower after attack
             shipleft.hull - captain.firepower ; // subtracting ship hull power from player firepower
    }
           else if(captain.hull <=0){  // checking condition if player is defeated or not
                alert("Player Defeated ")
                break;
            } 
};
            if( captain.hull >= 0 && shipArr.length == 0 ) { // checking condition if player hull power is greated than ship remaining 
                alert(" Ship Defeated, Player Wins")
                }
};
