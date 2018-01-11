import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-web-resources',
    templateUrl: './web-resources.component.html',
    styleUrls: ['./web-resources.component.scss'],
    animations: [routerTransition()]
})
export class WebResourcesComponent implements OnInit {
    constructor() {}

    webResources = [
      {
        title: 'ravelry',
        subtitle: 'Ravelry is a community site, an organizational tool, and a yarn & pattern database for knitters and crocheters.',
        webAddress: 'https://www.ravelry.com/',
        img: 'https://style-cdn.ravelrycache.com/images/splash/ravelry-logo-81r-300x.png'
      },

      {title: 'craftsy',
      subtitle: 'Lets make something together: kits, supplies, tutorials and endless inspiration for quilting, knitting, cakes, sewing, cooking, fine art and more.',
      webAddress: 'https://www.ravelry.com/',
      img: 'http://d1a6t1943usoj7.cloudfront.net/v1/096818e6-a6d0-4def-ae42-928e125fc699/large/1474658761910-craftsy_final_wordmark_logo.png'
      },

      {title: 'knitpicks',
      subtitle: 'Carefully selected luxury yarn, knitting supplies, needles, patterns & books. Free shipping. Complete hand knitting resource.',
      webAddress: 'https://www.knitpicks.com/',
      img: 'http://img2.everafterguide.net/W7LpKz-R65vRZI0U_um86WNOIVQ=/0x200/logos/knitpicks.com.png'
      },

      {title: 'knitters pride',
      subtitle: 'Knitters Pride offers a variety of high quality knitting and crochet needles. We carry needles from: Symfonie, Platina, MarblZ, Karbonz, Bamboo, Basix, Trendz and Waves.',
      webAddress: 'https://www.knitterspride.com/',
      img: 'http://www.knitterspride.com/images/logo.png'
      },

      {title: 'etsy',
      subtitle: 'Find handmade, vintage, and unique goods that express who you are.',
      webAddress: 'https://www.etsy.com/',
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Etsy_logo_lg_rgb.png'
      },

      {title: 'pinterest',
      subtitle: 'Discover recipes, home ideas, style inspiration and other ideas to try.',
      webAddress: 'https://www.pinterest.com/',
      img: 'https://digitalreadymarketing.com/wp-content/uploads/2016/03/pinterest.jpg'
      }

    ];


    ngOnInit() {}

}
