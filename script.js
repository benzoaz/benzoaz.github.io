/*
let data = {
    photo: 'images/monalisa.jpg',
    title: 'Mona Lisa',
    description: 'Mona Lisa is fat and I love Nutella, too'
  };
*/
let currentPhoto = 0;
let imagesData = ['images/skeleton.png', 'images/shield.png', 'images/kimjongum.jpg', 'images/monalisa.jpg', 'images/therock.jpg'];
let titlesData = ['A skeleton', 'A shield', 'death', 'Mona Lisa', 'Rock, paper, scissors'];
let descData = ['Skeletons r scary', 'Shields are for defense', 'His sister wont be better', 'She follows u with her fat eyes', 'I want to play rps with him'];
    $('#photo').attr('src', imagesData[currentPhoto]);
    $('#photo-title').text(titlesData[currentPhoto]);
    $('#photo-description').text(descData[currentPhoto]);

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber]);
    $('#photo-title').text(titlesData[photoNumber]);
    $('#photo-description').text(descData[photoNumber]);
}

loadPhoto(currentPhoto);

$('#arrowRight').click(() => {
    loadPhoto(currentPhoto);
    if (currentPhoto>3) {
        currentPhoto=-1;
    }
    currentPhoto++;
});
$('#arrowLeft').click(() => {
    loadPhoto(currentPhoto);
    if (currentPhoto<1) {
        currentPhoto=5;
    }
    currentPhoto--;
});

