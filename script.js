


document.querySelector('form').addEventListener('submit', submitFunc);

//TAKES INPUT FROM FORM for card creation
function submitFunc(e){
    e.preventDefault();

    const destName = e.target.elements["destinationName"].value;
    const loc = e.target.elements['location'].value;
    const photoURL = e.target.elements["photo"].value;
    const descrip = e.target.elements["description"].value;
    
    //clear the values for a new entry
    resetValues(e.target);

    //create a new card
    const destCard = newCard(destName,loc,photoURL,descrip);

    //adds card to yellow container
    document.querySelector('#yellow_body').appendChild(destCard);
}

//reset Values function
function resetValues(form){
    for (var i = 0; i < form.length; i++) {
        form.elements[i].value = "";
      }
}




//CREATES NEW CARD
function newCard(name, location, photo, description){
    //creating a card from bootstrap template
    let card = document.createElement('div');
    card.setAttribute("class", "card");
    card.style.width = "18rem";


    //PHOTO SECTION (TOP of card)
    let img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("alt", name);
    //stock image if no photo address added
    let stockPhoto = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
    if(photo.length === 0 ){
        img.setAttribute("src" , stockPhoto);
    }else{
        img.setAttribute('src' , photo)
    }
    card.appendChild(img)


    //TEXT PORTION OF THE CARD (Body of the card)
    let cardBody = document.createElement('div');
    cardBody.setAttribute("class", "card-body");
    //name
    let title = document.createElement('h5');
    title.setAttribute("class", "card-title");
    title.innerText = name;
    cardBody.appendChild(title);
    //location
    let subTitle = document.createElement('h6');
    subTitle.setAttribute("class", "card-subtitle text-muted");
    subTitle.innerText = location;
    cardBody.appendChild(subTitle);
    
    //description if entered
    if(description.length > 0){
        let cardDescription = document.createElement('p');
        cardDescription.setAttribute("class", 'card-text');
        cardDescription.innerText = description;
        cardBody.appendChild.cardDescription;
    }


    // // EDIT AND DELETE BUTTONS ON CARD
    // let buttonSection = document.createElement('div');
    // buttonSection.setAttribute('class' , "buttonSection");

    // let editBtn = document.createElement('button');
    // editBtn.setAttribute('class' , ' btn btn-success');
    // editBtn.innerText = "Edit";
    // buttonSection.appendChild(editBtn);
    // // editBtn.addEventListener('click' , editDestCard);

    // let deleteBtn = document.createElement('button');
    // deleteBtn.setAttribute('class' , 'btn btn-danger');
    // deleteBtn.innerText = "Delete";
    // buttonSection.appendChild(deleteBtn);
    // deleteBtn.addEventListener('click' , deleteDestCard);

    // cardBody.appendChild(buttonSection);

    card.appendChild(cardBody);

    return card;
}

//Create editDestCard


// //Delete btn function
// function deleteDestCard(e) {
//     var cardBody = e.target.parentElement.parentElement;
//     var card = cardBody.parentElement;
//     card.remove();
//   }
  