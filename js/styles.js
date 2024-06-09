//JS FINCTIONALITIES FOR INTEGRATION MOVEMENTS

const interaction = () => {
    //Seelecting the main card
    const flexItems = document.querySelectorAll('.card-item');

    flexItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            //selecting all items to be styled
            const img = item.querySelector('img');
            const informationText = item.querySelector('.information-text');
            const speciesNames = item.querySelector('.species-names');
            const speciesPlace = item.querySelector('.species-place');
            const knowMore = item.querySelector('.know-more');

            //Styling one by one all selected elements
            flexItems.style
            img.style.filter = 'grayscale(100%) blur(6px) brightness(45%)';
            img.style.transform = 'scale3d(1.07, 1.07, 1)';
            informationText.style.opacity = '1';
            speciesNames.style.transform = 'translate(0, -40px)';
            speciesPlace.style.transform = 'translate(0, -40px)';
            knowMore.style.display = 'block';
        });

        item.addEventListener('mouseleave', () => {
            //selecting all elements to be styled on mouseleave event
            const img = item.querySelector('img');
            const speciesNames = item.querySelector('.species-names');
            const speciesPlace = item.querySelector('.species-place');
            const knowMore = item.querySelector('.know-more');

            //Styling one by one all selected elements
            img.style.filter = '';
            img.style.transform = '';
            speciesNames.style.transform = '';
            speciesPlace.style.transform = '';
            knowMore.style.display = 'none';
        });
    });
}

//Calling the fuinction when DOM content is loaded
document.addEventListener("DOMContentLoaded", interaction)