const pathPrefix ='../images/monsters-';
const bottomInfix='bottom_000';
const midInfix='mid_000';
const topInfix='top_000';
const treant ='4_Treant.png';
const dragon ='6_Dragon.png';
const mothman = '3_mothman.png';
const griffin ='2_Griffin.png';
const imageIndex = {

    //this works
    'Dracula-top': require(`${pathPrefix}${topInfix}1_Dracula.png`),

    'Dracula-middle': require(`${pathPrefix}${midInfix}1_Dracula.png`),

    'Dracula-bottom': require(`${pathPrefix}${bottomInfix}1_Dracula.png`),

    'Unicorn-top': require('../images/Unicorn-1.png'),

    'Unicorn-middle': require('../images/Unicorn-2.png'),

    'Unicorn-bottom': require('../images/Unicorn-3.png'),

    'Merperson-top': require('../images/Mer-1.png'),

    'Merperson-middle': require('../images/Mer-2.png'),

    'Merperson-bottom': require('../images/Mer-3.png'),

    'Yeti-top': require('../images/Yeti-1.png'),
    'Yeti-middle': require('../images/Yeti-2.png'),
    'Yeti-bottom': require('../images/Yeti-3.png'),
    'Griffin-top': require(`${pathPrefix}${topInfix}${griffin}`),
    'Griffin-middle': require(`${pathPrefix}${midInfix}${griffin}`),
    'Griffin-bottom': require(`${pathPrefix}${bottomInfix}${griffin}`),
    'Treant-top': require(`${pathPrefix}${topInfix}${treant}`),
    'Treant-middle': require(`${pathPrefix}${midInfix}${treant}`),
    'Treant-bottom': require(`${pathPrefix}${bottomInfix}${treant}`),
    'Dragon-top': require(`${pathPrefix}${topInfix}${dragon}`),
    'Dragon-middle': require(`${pathPrefix}${midInfix}${dragon}`),
    'Dragon-bottom': require(`${pathPrefix}${bottomInfix}${dragon}`),
    'Mothman-top': require(`${pathPrefix}${topInfix}${mothman}`),
    'Mothman-middle': require(`${pathPrefix}${midInfix}${mothman}`),
    'Mothman-bottom': require(`${pathPrefix}${bottomInfix}${mothman}`),



    };
    
    export default imageIndex;