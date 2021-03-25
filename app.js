//name tag input field variables

const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
const pronounInput = document.getElementById('pronoun-input');
const pronounDisplay = document.getElementById('pronoun-display');
const submitButton = document.getElementById('submit-button');

//name tag input 
submitButton.addEventListener ('click', () => {
    nameDisplay.textContent = nameInput.value ;
    pronounDisplay.textContent = pronounInput.value ;
});

//name change tracking
const nameChangeCount = document.getElementById('name-change-count');

let nameChangeClicks = 0;
submitButton.addEventListener ('click', () => {
    nameChangeClicks +=1;
if (nameChangeClicks === 1) {
    nameChangeCount.textContent = "(You've used 1 name tag)";
} else if (nameChangeClicks > 1 ) {
    nameChangeCount.textContent = "(You've used " + nameChangeClicks + " name tags)";
}
});



//name tag color
const nameTagColor = document.getElementById('name-tag-main');
const pinkButton = document.getElementById('pink-button');
const redButton = document.getElementById('red-button');
const orangeButton = document.getElementById('orange-button');
const yellowButton = document.getElementById('yellow-button');
const greenButton = document.getElementById('green-button');

redButton.addEventListener ('click', () => {
    nameTagColor.style.background = 'red';
}
)

orangeButton.addEventListener ('click', () => {
        nameTagColor.style.background = 'orange';
}
)

greenButton.addEventListener ('click', () => {
    nameTagColor.style.background = 'chartreuse';
}
)
yellowButton.addEventListener ('click', () => {
    nameTagColor.style.background = 'gold';
}
)

pinkButton.addEventListener ('click', () => {
    nameTagColor.style.background = 'hotpink';
}
)
//name tag font
const nameTagFont = document.getElementById('input-display');
const brushButton = document.getElementById('brush-button');
const typewriterButton = document.getElementById('typewriter-button');
const cuteButton = document.getElementById('cute-button');
const professionalButton = document.getElementById('professional-button');
const elegantButton = document.getElementById('elegant-button');

brushButton.addEventListener ('click', () => {
    nameTagFont.style.fontFamily = "Brush Script MT,Bradley Hand,cursive";
}
)

typewriterButton.addEventListener ('click', () => {
    nameTagFont.style.fontFamily = "monospace";
}
)

cuteButton.addEventListener ('click', () => {
    nameTagFont.style.fontFamily = "Comic Sans MS,Comic Sans";
}
)
professionalButton.addEventListener ('click', () => {
    nameTagFont.style.fontFamily = "serif";
}
)

elegantButton.addEventListener ('click', () => {
    nameTagFont.style.fontFamily = "Snell Roundhand";
}
)