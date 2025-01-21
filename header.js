

//console.debug("hep")
const images = [
    'images/1.png',
    'images/button.png',
    'images/chest_block.png',
    'images/conduction_block.png',
    'images/rock.png',
    'images/simple_constructor.png',
    'images/tinkerer_block.png'
    
];

const randomIndex = Math.floor(Math.random() * images.length);
const imgElement = document.getElementById('randomImage');

imgElement.src = images[randomIndex];

