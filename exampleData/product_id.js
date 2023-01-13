//this file contains example data returned from the product_id, styles,and related endpoints

/*

GET /products/:product_id

Parameters
Parameter	Type	    Description
product_id	        integer	Required ID of the Product requested

Response
Status: 200 OK

/*/

{
    "id": 11,
    "name": "Air Minis 250",
    "slogan": "Full court support",
    "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
    "category": "Basketball Shoes",
    "default_price": "0",
    "features": [
  	{
            "feature": "Sole",
            "value": "Rubber"
        },
  	{
            "feature": "Material",
            "value": "FullControlSkin"
        },
    ],
}

/*

GET /products/:product_id/styles

Parameters
Parameter	Type	    Description
product_id	        integer	Required ID of the Product requested

Response
Status: 200 OK

/*/

{
  "product_id": "1",
  "results": [
  {
          "style_id": 1,
          "name": "Forest Green & Black",
          "original_price": "140",
          "sale_price": "0",
          "default?": true,
          "photos": [
      {
                  "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                  "url": "urlplaceholder/style_1_photo_number.jpg"
              },
      {
                  "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
                  "url": "urlplaceholder/style_1_photo_number.jpg"
              }
          ],
      "skus": {
                "37": {
                      "quantity": 8,
                      "size": "XS"
                },
                "38": {
                      "quantity": 16,
                      "size": "S"
                },
                "39": {
                      "quantity": 17,
                      "size": "M"
                },
            }
  },
{
      "style_id": 2,
      "name": "Desert Brown & Tan",
      "original_price": "140",
      "sale_price": "0",
      "default?": false,
      "photos": [
      {
                  "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
                  "url": "urlplaceholder/style_2_photo_number.jpg"
      }
          ],
      "skus": {
                "37": {
                      "quantity": 8,
                      "size": "XS"
                },
                "38": {
                      "quantity": 16,
                      "size": "S"
                },
                "39": {
                      "quantity": 17,
                      "size": "M"
                },
            }
  },
  ]
}

/*

GET /products/:product_id/related

Parameters
Parameter	Type	    Description
product_id	        integer	Required ID of the Product requested

Response
Status: 200 OK

/*/

[
  2,
  3,
  8,
  7
],