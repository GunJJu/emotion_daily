import emotion1 from './../assets/image1.png'
import emotion2 from './../assets/image2.png'
import emotion3 from './../assets/image3.png'
import emotion4 from './../assets/image4.png'
import emotion5 from './../assets/image5.png'


export function getEmoticonImg(emotionId) {
    switch (emotionId) {
        case 1: return emotion1;
        case 2: return emotion2;
        case 3: return emotion3;
        case 4: return emotion4;
        case 5: return emotion5;
        default: return null
    }
}