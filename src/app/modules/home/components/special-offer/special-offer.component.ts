import {Component, OnInit} from '@angular/core';
import {ISpecialOffers} from "../../../../models/main-page/special-offers.interface";
import {CountdownConfig} from "ngx-countdown";

@Component({
  selector: 'app-special-offer',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.scss'],
})
export class SpecialOfferComponent implements OnInit {

  specialOffer?: ISpecialOffers;
  config: CountdownConfig = {};
  endTime?: string;
  selectedProductId: number = 0;

  ngOnInit() {

    this.specialOffer = {
      id: 1,
      name: "انگشتر نگین دار میکرو 2062",
      to: "2024-11-30T10:46:38.334Z",
      products: [
        {
          id: 0,
          title: "انگشتر نگین دار میکرو 2062",
          description: "",
          bookmark: true,
          defaultWeight: 0,
          fee: 6985000,
          discount: 20,
          status: "",
          category: {
            id: 0,
            name: "",
            parentCategory: {
              id: 0,
              name: "انگشتر"
            }
          },
          features: [
            {
              id: 0,
              name: "نوع نگین",
              value: "نگین دار",
              important: true
            },
            {
              id: 1,
              name: "تراکم",
              value: "میکرو",
              important: true
            },
            {
              id: 2,
              name: "جنس",
              value: "مقاوم دربرابر زنگ زدگی",
              important: true
            }
          ],
          colors: [
            {
              id: 0,
              name: "",
              code: "#BEBEBE"
            },
            {
              id: 1,
              name: "",
              code: "#FFD941"
            },
            {
              id: 2,
              name: "",
              code: "#FFC5C5"
            }
          ],
          stoneColors: [
            {
              id: 0,
              name: "",
              code: "#BEBEBE"
            },
            {
              id: 1,
              name: "",
              code: "#FFD941"
            },
            {
              id: 2,
              name: "",
              code: "#FFC5C5"
            }
          ],
          sizes: [
            {
              id: 0,
              name: "",
              weight: 0
            }
          ],
          review: "",
          silverPrice: {
            key: "",
            price: 0
          },
          similarProducts: [
            {
              id: 0,
              title: "",
              description: "",
              images: [],
              defaultWeight: 0,
              fee: 0,
              discount: 0,
              status: "",
              bookmark: true,
              silverPrice: {
                key: "",
                price: 0
              }
            }
          ],
          setProducts: [
            {
              id: 0,
              title: "",
              description: "",
              images: [],
              defaultWeight: 0,
              fee: 0,
              discount: 0,
              status: "",
              bookmark: true,
              silverPrice: {
                key: "",
                price: 0
              }
            }
          ],
          isSet: true,
          images: [
            "assets/images/6119thumb.png",
            "assets/images/6119thumb.png",
            "assets/images/6119thumb.png"
          ]
        },
        {
          id: 1,
          title: "گردنبند نگین دار میکرو 2063",
          description: "",
          bookmark: true,
          defaultWeight: 0,
          fee: 7000000,
          discount: 0,
          status: "",
          category: {
            id: 0,
            name: "",
            parentCategory: {
              id: 0,
              name: "انگشتر"
            }
          },
          features: [
            {
              id: 0,
              name: "نوع نگین",
              value: "نگین دار",
              important: true
            },
            {
              id: 1,
              name: "تراکم",
              value: "میکرو",
              important: true
            },
            {
              id: 2,
              name: "جنس",
              value: "مقاوم دربرابر زنگ زدگی",
              important: true
            }
          ],
          colors: [
            {
              id: 0,
              name: "",
              code: "#BEBEBE"
            },
            {
              id: 1,
              name: "",
              code: "#FFD941"
            },
            {
              id: 2,
              name: "",
              code: "#FFC5C5"
            }
          ],
          stoneColors: [
            {
              id: 0,
              name: "",
              code: "#BEBEBE"
            },
            {
              id: 1,
              name: "",
              code: "#FFD941"
            },
            {
              id: 2,
              name: "",
              code: "#FFC5C5"
            }
          ],
          sizes: [
            {
              id: 0,
              name: "",
              weight: 0
            }
          ],
          review: "",
          silverPrice: {
            key: "",
            price: 0
          },
          similarProducts: [
            {
              id: 0,
              title: "",
              description: "",
              images: [],
              defaultWeight: 0,
              fee: 0,
              discount: 0,
              status: "",
              bookmark: true,
              silverPrice: {
                key: "",
                price: 0
              }
            }
          ],
          setProducts: [
            {
              id: 0,
              title: "",
              description: "",
              images: [],
              defaultWeight: 0,
              fee: 0,
              discount: 0,
              status: "",
              bookmark: true,
              silverPrice: {
                key: "",
                price: 0
              }
            }
          ],
          isSet: true,
          images: [
            "assets/images/Mask Group 10.png",
            "assets/images/Mask Group 10.png",
            "assets/images/Mask Group 10.png"
          ]
        },
        {
          id: 2,
          title: "انگشتر نگین دار میکرو 2062",
          description: "",
          bookmark: true,
          defaultWeight: 0,
          fee: 6985000,
          discount: 20,
          status: "",
          category: {
            id: 1,
            name: "",
            parentCategory: {
              id: 0,
              name: "انگشتر"
            }
          },
          features: [
            {
              id: 0,
              name: "نوع نگین",
              value: "نگین دار",
              important: true
            },
            {
              id: 1,
              name: "تراکم",
              value: "میکرو",
              important: true
            },
            {
              id: 2,
              name: "جنس",
              value: "مقاوم دربرابر زنگ زدگی",
              important: true
            }
          ],
          colors: [
            {
              id: 0,
              name: "",
              code: "#BEBEBE"
            },
            {
              id: 1,
              name: "",
              code: "#FFD941"
            },
            {
              id: 2,
              name: "",
              code: "#FFC5C5"
            }
          ],
          stoneColors: [
            {
              id: 0,
              name: "",
              code: "#BEBEBE"
            },
            {
              id: 1,
              name: "",
              code: "#FFD941"
            },
            {
              id: 2,
              name: "",
              code: "#FFC5C5"
            }
          ],
          sizes: [
            {
              id: 0,
              name: "",
              weight: 0
            }
          ],
          review: "",
          silverPrice: {
            key: "",
            price: 0
          },
          similarProducts: [
            {
              id: 0,
              title: "",
              description: "",
              images: [],
              defaultWeight: 0,
              fee: 0,
              discount: 0,
              status: "",
              bookmark: true,
              silverPrice: {
                key: "",
                price: 0
              }
            }
          ],
          setProducts: [
            {
              id: 0,
              title: "",
              description: "",
              images: [],
              defaultWeight: 0,
              fee: 0,
              discount: 0,
              status: "",
              bookmark: true,
              silverPrice: {
                key: "",
                price: 0
              }
            }
          ],
          isSet: true,
          images: [
            "assets/images/Mask Group 10.png",
            "assets/images/Mask Group 10.png",
            "assets/images/Mask Group 10.png"
          ]
        },
        {
          id: 3,
          title: "نیم ست نگین دار میکرو 2064",
          description: "",
          bookmark: true,
          defaultWeight: 0,
          fee: 6985000,
          discount: 0,
          status: "",
          category: {
            id: 1,
            name: "",
            parentCategory: {
              id: 0,
              name: "انگشتر"
            }
          },
          features: [
            {
              id: 0,
              name: "نوع نگین",
              value: "نگین دار",
              important: true
            },
            {
              id: 1,
              name: "تراکم",
              value: "میکرو",
              important: true
            },
            {
              id: 2,
              name: "جنس",
              value: "مقاوم دربرابر زنگ زدگی",
              important: true
            }
          ],
          colors: [
            {
              id: 0,
              name: "",
              code: "#BEBEBE"
            },
            {
              id: 1,
              name: "",
              code: "#FFD941"
            },
            {
              id: 2,
              name: "",
              code: "#FFC5C5"
            }
          ],
          stoneColors: [
            {
              id: 0,
              name: "",
              code: "#BEBEBE"
            },
            {
              id: 1,
              name: "",
              code: "#FFD941"
            },
            {
              id: 2,
              name: "",
              code: "#FFC5C5"
            }
          ],
          sizes: [
            {
              id: 0,
              name: "",
              weight: 0
            }
          ],
          review: "",
          silverPrice: {
            key: "",
            price: 0
          },
          similarProducts: [
            {
              id: 0,
              title: "",
              description: "",
              images: [],
              defaultWeight: 0,
              fee: 0,
              discount: 0,
              status: "",
              bookmark: true,
              silverPrice: {
                key: "",
                price: 0
              }
            }
          ],
          setProducts: [
            {
              id: 0,
              title: "",
              description: "",
              images: [],
              defaultWeight: 0,
              fee: 0,
              discount: 0,
              status: "",
              bookmark: true,
              silverPrice: {
                key: "",
                price: 0
              }
            }
          ],
          isSet: true,
          images: [
            "assets/images/Mask Group 10.png",
            "assets/images/Mask Group 10.png",
            "assets/images/Mask Group 10.png"
          ]
        },
        {
          id: 4,
          title: "گردنبند قلب نگین دار میکرو 2352",
          description: "",
          bookmark: true,
          defaultWeight: 0,
          fee: 5000000,
          discount: 30,
          status: "",
          category: {
            id: 1,
            name: "",
            parentCategory: {
              id: 0,
              name: "انگشتر"
            }
          },
          features: [
            {
              id: 0,
              name: "نوع نگین",
              value: "نگین دار",
              important: true
            },
            {
              id: 1,
              name: "تراکم",
              value: "میکرو",
              important: true
            },
            {
              id: 2,
              name: "جنس",
              value: "مقاوم دربرابر زنگ زدگی",
              important: true
            }
          ],
          colors: [
            {
              id: 0,
              name: "",
              code: "#BEBEBE"
            },
            {
              id: 1,
              name: "",
              code: "#FFD941"
            },
            {
              id: 2,
              name: "",
              code: "#FFC5C5"
            }
          ],
          stoneColors: [
            {
              id: 0,
              name: "",
              code: "#BEBEBE"
            },
            {
              id: 1,
              name: "",
              code: "#FFD941"
            },
            {
              id: 2,
              name: "",
              code: "#FFC5C5"
            }
          ],
          sizes: [
            {
              id: 0,
              name: "",
              weight: 0
            }
          ],
          review: "",
          silverPrice: {
            key: "",
            price: 0
          },
          similarProducts: [
            {
              id: 0,
              title: "",
              description: "",
              images: [],
              defaultWeight: 0,
              fee: 0,
              discount: 0,
              status: "",
              bookmark: true,
              silverPrice: {
                key: "",
                price: 0
              }
            }
          ],
          setProducts: [
            {
              id: 0,
              title: "",
              description: "",
              images: [],
              defaultWeight: 0,
              fee: 0,
              discount: 0,
              status: "",
              bookmark: true,
              silverPrice: {
                key: "",
                price: 0
              }
            }
          ],
          isSet: true,
          images: [
            "assets/images/Mask Group 10.png",
            "assets/images/Mask Group 10.png",
            "assets/images/Mask Group 10.png"
          ]
        }
      ]
    }

    this.endTime = this.specialOffer?.to

  }

}

