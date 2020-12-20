import en from './en';
import sk from './sk';

const getMessages = (langKey) => {
    switch( langKey ) {
        case 'sk':
          return sk;
        case 'en':
        default:
            return en;
      }
}

export default getMessages;
