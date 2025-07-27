const topBar = document.querySelector('#top-bar');
const exteriorColorSection = document.querySelector('#exterior-buttons');
const interiorColorSection = document.querySelector('#interior-buttons');
const exteriorImage = document.querySelector('#exterior-image');
const interiorImage = document.querySelector('#interior-image');
const wheelButtonsSection = document.querySelector('#wheel-buttons');
const performanceBtn = document.querySelector('#performance-btn');

let performance;
let currentColor = 'Stealth Grey';

/* Normal function */
//function wheelsOption(){
//return performance? exteriorImagesPerformance[currentColor]: exteriorImages[currentColor];}

/* Arrow function */
const wheelsOption = () => {
    return performance? exteriorImagesPerformance[currentColor]: exteriorImages[currentColor];
}

const exteriorImages = {
    'Stealth Grey': './images/model-y-stealth-grey.jpg',
    'Pearl White': './images/model-y-pearl-white.jpg',
    'Quicksilver': './images/model-y-quicksilver.jpg',
    'Deep Blue': './images/model-y-deep-blue-metallic.jpg',
    'Solid Black': './images/model-y-solid-black.jpg',
    'Ultra Red': './images/model-y-ultra-red.jpg'
}

const exteriorImagesPerformance = {
    'Stealth Grey': './images/model-y-stealth-grey-performance.jpg',
    'Pearl White': './images/model-y-pearl-white-performance.jpg',
    'Quicksilver': './images/model-y-quicksilver-performance.jpg',
    'Deep Blue': './images/model-y-deep-blue-metallic-performance.jpg',
    'Solid Black': './images/model-y-solid-black-performance.jpg',
    'Ultra Red': './images/model-y-ultra-red-performance.jpg'
}

const interiorImages = {
    'Dark': './images/model-y-interior-dark.jpg',
    'Light': './images/model-y-interior-light.jpg'
}

const handleScroll = () => {
    const atTop = window.scrollY === 0;
    topBar.classList.toggle('visible-bar', atTop);
    topBar.classList.toggle('hidden-bar', !atTop);
};

const handleColorButtonClick = (event) => {
    let button;
    if(event.target.tagName === 'IMG'){
        button = event.target.closest('button');
    }
    else if (event.target.tagName === 'BUTTON'){
        button = event.target;
    }
    if (button) {
        const buttons = event.currentTarget.querySelectorAll('button');
        buttons.forEach((btn) => btn.classList.remove('btn-selected'));
        button.classList.add('btn-selected');

        if (event.currentTarget === exteriorColorSection){
            currentColor = button.querySelector('img').alt;
            exteriorImage.src = wheelsOption();
        }

        if (event.currentTarget === interiorColorSection){
            const color = button.querySelector('img').alt;
            interiorImage.src = interiorImages[color];
        }
    }
};

const handleWheelButtonClick = (event) => {
    if (event.target.tagName === "BUTTON"){
        const buttons = document.querySelectorAll('#wheel-buttons button');
        buttons.forEach((btn) => btn.classList.remove('bg-gray-700', 'text-white'));
        buttons.forEach((btn) => btn.classList.add('bg-gray-200'));
        event.target.classList.add('bg-gray-700', 'text-white');

        if (event.target.textContent.includes('Performance')){
            performance = true;
        } else performance = false;
        exteriorImage.src = wheelsOption();
    }
}

const handlePerformancePackageButtonClick = () => {
    performanceBtn.classList.toggle('bg-gray-700');
    performanceBtn.classList.toggle('text-white');
}

window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));
exteriorColorSection.addEventListener('click', handleColorButtonClick);
interiorColorSection.addEventListener('click', handleColorButtonClick);
wheelButtonsSection.addEventListener('click', handleWheelButtonClick);
performanceBtn.addEventListener('click', handlePerformancePackageButtonClick);