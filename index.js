/***** Deliverable 1 *****/
const header = document.querySelector('#header')
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red";

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
let firstName = traveler.name;
let travelerName = document.querySelector("h2");
travelerName.textContent = firstName;

let nickName = traveler.nickname;
let travelerNickName = document.querySelector("em");
travelerNickName.innerHTML = nickName;


let travelerPic = document.querySelector("img");
travelerPic.src = "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ce2ece60-9b32-11e6-95ab-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg"

travelerPic.alt = "test image" 

// why tf does .textContent work on line 13, and not at the end of line 12
/***** Deliverable 4 *****/


    traveler.animalSightings.forEach(function (sighting) {
        
        let animalUl = document.querySelector("#animals");
        let li = document.createElement("li");
        let p = document.createElement("p");
        let img = document.createElement("img")
        let a = document.createElement("a");
        p.textContent = `${sighting["description"]}`;
        img.src = `${sighting["photo"]}`;
        img.alt = `${sighting["species"]}`;
        a.href = `${sighting["link"]}`;
        a.target = "_blank";
        a.textContent = `Here's a video about the ${sighting.species} species!`
        li.append(p, img, a);
        animalUl.append(li);
        li.setAttribute('data-id', `${sighting.id}`);

     });



/***** Deliverable 5 *****/

let animal = document.querySelector("#animals")
