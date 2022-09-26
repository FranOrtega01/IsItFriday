const dia = document.querySelector('h1')
const foto = document.querySelector('.Boca')

window.onload = () => {

    const music = new Audio('');
    music.play();
    music.loop = true;

    switch(5) {
        case 1:
            day = ''
            pala = 'https://www.pngmart.com/files/8/Shovel-Tools-PNG-No-Background.png'
            op = 1
            break;
        case 2:
            day = ''
            pala = 'https://www.pngmart.com/files/8/Shovel-Tools-PNG-No-Background.png'
            op= .8
            break;
        case 3:
            day = ''
            pala = 'https://www.pngmart.com/files/8/Shovel-Tools-PNG-No-Background.png'
            op= .6
            break;
        case 4:
            day = 'Un día más de pala y sale Moscú'
            pala = 'https://www.pngmart.com/files/8/Shovel-Tools-PNG-No-Background.png'
            op= .4
            break;
        case 5:
            day = 'Viernes dale boo'
            pala = ''
            break;
        case 6:
            day = "Pe ta ñea te";
            break;
        case 0:
            day = 'Zzz..'
            pala = ''
            break;
        default:
            pala = 'https://www.pngmart.com/files/8/Shovel-Tools-PNG-No-Background.png';
            break
    }
    if(pala.length > 0){
        dia.innerHTML = day
        dia.style.opacity = 0.8
        foto.src = pala
        foto.style.opacity = op
    }else{
        dia.innerHTML = day
    }
};