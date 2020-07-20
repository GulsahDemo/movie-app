import { helper } from '@ember/component/helper';
import Config from '../config/environment';

const NoImage = 'assets/images/no_image.svg';

function setUrl([src]) {
    let imgUrl = NoImage;
    
    src && (imgUrl = `${Config.TMDB.api_img_url}${src}`);

    return imgUrl;
}
export default helper(setUrl);