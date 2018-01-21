import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss'],
    animations: [routerTransition()]
})
export class LibraryComponent implements OnInit {
    constructor() {}

    patternCards = [
      {
        type: "knitting",
        title: "Header",
        thumbnail: "https://www.cbronline.com/wp-content/uploads/2016/07/what-is-yarn.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content",
        visible: true
      },
      {
        type: "knitting",
        title: "Header",
        thumbnail: "https://www.cbronline.com/wp-content/uploads/2016/07/what-is-yarn.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content",
        visible: true
      },
      {
        type: "knitting",
        title: "Header",
        thumbnail: "https://www.cbronline.com/wp-content/uploads/2016/07/what-is-yarn.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content",
        visible: true
      },
      {
        type: "knitting",
        title: "Header",
        thumbnail: "https://www.cbronline.com/wp-content/uploads/2016/07/what-is-yarn.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content",
        visible: true
      },
      {
        type: "spinning",
        title: "Header",
        thumbnail: "http://cdn3.craftsy.com/blog/wp-content/uploads/2014/04/twoply-sm.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content",
        visible: true
      },
      {
        type: "crochet",
        title: "Header",
        thumbnail: "https://fthmb.tqn.com/VEmtmtKNP2slG-0d-59eZGyoxFk=/960x0/filters:no_upscale()/97659406-56a1e5305f9b58b7d0c46191.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content",
        visible: true
      },
      {
        type: "crochet",
        title: "Header",
        thumbnail: "https://fthmb.tqn.com/VEmtmtKNP2slG-0d-59eZGyoxFk=/960x0/filters:no_upscale()/97659406-56a1e5305f9b58b7d0c46191.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content",
        visible: true
      },
      {
        type: "knitting",
        title: "Header",
        thumbnail: "https://www.cbronline.com/wp-content/uploads/2016/07/what-is-yarn.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content",
        visible: true
      },
      {
        type: "spinning",
        title: "Header",
        thumbnail: "http://cdn3.craftsy.com/blog/wp-content/uploads/2014/04/twoply-sm.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content",
        visible: true
      },
      {
        type: "crochet",
        title: "Header",
        thumbnail: "https://fthmb.tqn.com/VEmtmtKNP2slG-0d-59eZGyoxFk=/960x0/filters:no_upscale()/97659406-56a1e5305f9b58b7d0c46191.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content",
        visible: true
      },
      {
        type: "knitting",
        title: "Header",
        thumbnail: "https://www.cbronline.com/wp-content/uploads/2016/07/what-is-yarn.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content",
        visible: true
      },
      {
        type: "spinning",
        title: "Header",
        thumbnail: "http://cdn3.craftsy.com/blog/wp-content/uploads/2014/04/twoply-sm.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content",
        visible: true
      },
      {
        type: "knitting",
        title: "Header",
        thumbnail: "https://www.cbronline.com/wp-content/uploads/2016/07/what-is-yarn.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content",
        visible: true
      },
      {
        type: "knitting",
        title: "Header",
        thumbnail: "https://www.cbronline.com/wp-content/uploads/2016/07/what-is-yarn.jpg",
        subtitle: "Primary card title",
        content: "Some quick example text to build on the card title and make up the bulk of the card's content",
        visible: true
      }
    ];

    filter = {
        type: {
            selected: 0,
            options: ["knitting", "crochet", "spinning"]
        }
    }

    //let filterList = patternCards;


    ngOnInit() {}


    filterClick(typeOption) {

        this.resetDefaults();
    //this. because accessing filter inside method
    // >= 0 shorthand check that the parameter matches an item in the array
        let indexOfTypeOption = this.filter.type.options.indexOf(typeOption);

        if (indexOfTypeOption >= 0) {
            this.filter.type.selected = indexOfTypeOption;


            //call function to refreshList
            //this. because it refers to itself on the instance
            this.refreshList(indexOfTypeOption);


        }

    }

    refreshList(craftType) {

        let type = '';


        if (craftType == 0) {
            type = 'knitting';
        }
        else if (craftType == 1) {
            type = 'crochet';
        }
        else if (craftType == 2) {
            type = 'spinning';
        }

        //if the type of the next array item is
        for (let patternCard in this.patternCards) {
            //console.log(this.patternCards[patternCard].type);

            if (type !== this.patternCards[patternCard].type) {
                this.patternCards[patternCard].visible = false;
            }


        }

    }

    resetDefaults() {

        for (let patternCard in this.patternCards) {

            if (this.patternCards[patternCard].visible == false) {
                this.patternCards[patternCard].visible = true;
            }

        }

    }



}
