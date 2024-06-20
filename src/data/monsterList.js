import imageIndex from '../data/imageIndex';

let baseMonsters =[];

const pathPrefix ='../images/monsters-';
const bottomInfix='bottom_000';
const midInfix='mid_000';
const topInfix='top_000';

//attempt at making standalone monster class
//no way out of using the image index object

export default class Monster {

    constructor (fullName){
        this.fullName= fullName;
        this.adjective= '';
        this.hobby='';
        this.habitat='';
        this.imgStem='1_Dracula.png';
       this.id = `${this.fullName}-top`;
       this.topImg = imageIndex[`${this.fullName}-top`];
       this.midImg = imageIndex[`${this.fullName}-middle`];

        //this.topImgPath = this.getImgPath("top");
        //this.midImgPath=this.getImgPath("mid");
        //this.bottomIngPath=this.getImgPath("bottom");
        this.imgReq = require(`${pathPrefix}${topInfix}1_Dracula.png`);

      
    }

    

    setHobby(hobby){
        this.hobby=hobby;
    }
    setName(newName){
        this.fullName= newName;
    }
 
    setHabitat(habitat){
        this.habitat=habitat;
    }

    getHabitat(){
        return this.habitat;
    }
    getHobby(){
        return this.hobby;
    }
    getAdjective (){
        return this.adjective;
    }


}

const monster1 = new Monster("Unicorn");
monster1.setHobby('entertaining friends');

/**
 *             <Text> {monster1.fullName} likes {monster1.hobby}</Text>
            <Image style={styles.thumbnailStyle} source={monster1.midImg}></Image>
 */