const picture1 = document.getElementById('picture1');
const title1 = document.getElementById('title1');
const text1 = document.getElementById('text1');

const animatedBgs = document.querySelectorAll('.animated_bg');
const animatedBgText = document.querySelectorAll('.animated_bg_text');

setTimeout(getData1, 1500)

function getData1() {
    picture1.innerHTML = '<img src="images/dog-walking1.jpg" class="img-fluid" alt="">'
    title1.innerHTML = 'Call Us In'
    text1.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et corporis praesentium ab quibusdam. Nemo minus ipsam minima itaque mollitia id quisquam molestiae quis earum voluptatum quae, labore eum fugit!'
    
    animatedBgs.forEach(bg => bg.classList.remove('animated_bg'))
    animatedBgText.forEach(bg => bg.classList.remove('animated_bg_text'))
}

const picture2 = document.getElementById('picture2');
const title2 = document.getElementById('title2');
const text2 = document.getElementById('text2');

setTimeout(getData2, 1500)

function getData2() {
    picture2.innerHTML = '<img src="images/cat-cafe.jpg" class="img-fluid" alt="">'
    title2.innerHTML = 'Bring Them In'
    text2.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et corporis praesentium ab quibusdam. Nemo minus ipsam minima itaque mollitia id quisquam molestiae quis earum voluptatum quae, labore eum fugit!'
    
    animatedBgs.forEach(bg => bg.classList.remove('animated_bg'))
    animatedBgText.forEach(bg => bg.classList.remove('animated_bg_text'))
}

const picture3 = document.getElementById('picture3');
const title3 = document.getElementById('title3');
const text3 = document.getElementById('text3');

setTimeout(getData3, 1500)

function getData3() {
    picture3.innerHTML = '<img src="images/pet_grooming.jpg" class="img-fluid" alt="">'
    title3.innerHTML = 'Fancy Pampering?'
    text3.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et corporis praesentium ab quibusdam. Nemo minus ipsam minima itaque mollitia id quisquam molestiae quis earum voluptatum quae, labore eum fugit!'
    
    animatedBgs.forEach(bg => bg.classList.remove('animated_bg'))
    animatedBgText.forEach(bg => bg.classList.remove('animated_bg_text'))
}

const picture4 = document.getElementById('picture4');
const title4 = document.getElementById('title4');
const text4 = document.getElementById('text4');

setTimeout(getData4, 1500)

function getData4() {
    picture4.innerHTML = '<img src="images/pet-hotel1.jpg" class="img-fluid" alt="">'
    title4.innerHTML = 'Paw Lodgings'
    text4.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore et corporis praesentium ab quibusdam. Nemo minus ipsam minima itaque mollitia id quisquam molestiae quis earum voluptatum quae, labore eum fugit!'
    
    animatedBgs.forEach(bg => bg.classList.remove('animated_bg'))
    animatedBgText.forEach(bg => bg.classList.remove('animated_bg_text'))
}


