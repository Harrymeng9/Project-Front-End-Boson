import React from 'react';
import { useState, useEffect } from "react";
import RelatedProductCard from './relatedComponents/RelatedProductCard.jsx';
import YourOutfitCard from './relatedComponents/YourOutfitCard.jsx';
import Overlay from './relatedComponents/Overlay.jsx';
import axios from 'axios';
import RelatedCarousel from './relatedComponents/RelatedCarousel.jsx';
import YourOutfitCarousel from './relatedComponents/YourOutfitCarousel.jsx';
import ErrorBoundary from '../../Utils/ErrorBoundary.jsx';

export var products = function (currentProductInfo, relatedProds, setStarButtonClick, starButtonClick, currentProductId, setCurrentProductFeatures, setSelectedRelatedProductFeatures, setSelectedRelatedProductName, setCurrentProductName, setProductId) {
  return relatedProds.map((prod, index) => {
    return (
      <RelatedProductCard key={index} currentProductInfo={currentProductInfo} setProductId={setProductId} setCurrentProductName={setCurrentProductName} setSelectedRelatedProductName={setSelectedRelatedProductName} setCurrentProductFeatures={setCurrentProductFeatures} setSelectedRelatedProductFeatures={setSelectedRelatedProductFeatures} currentProduct={currentProductId} productId={prod.productId} starButtonClick={starButtonClick} setStarButtonClick={setStarButtonClick} image={prod.image} name={prod.name} category={prod.category} price={prod.price} />
    )
  })
};

export var yourOutfitProducts = function (outfitProducts, setYourOutfitProducts, setProductId) {
  return outfitProducts.map((prod, index) => {
    return (
      <YourOutfitCard key={index} setProductId={setProductId} setYourOutfitProducts={setYourOutfitProducts} productId={prod.productId} image={prod.image} name={prod.name} category={prod.category} price={prod.price} />
    )
  })
};

export var Related = (props) => {

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [myOutfit, setMyOutfit] = useState([]);
  const [starButtonClick, setStarButtonClick] = useState(false);
  const [currentProductFeatures, setCurrentProductFeatures] = useState([]);
  const [selectedRelatedProductFeatures, setSelectedRelatedProductFeatures] = useState([]);
  const [selectedRelatedProductName, setSelectedRelatedProductName] = useState(null);
  const [currentProductName, setCurrentProductName] = useState(null);
  const [outfitProducts, setOutfitProducts] = useState([]);

  useEffect(() => {

    // would like to streamline the below to minimize API calls
    axios.get(`/products/${props.productId}/related`)
      .then((results) => {
        var info = [];
        for (var i = 0; i < results.data.length; i++) {
          var image = new Promise((resolve, reject) => {
            axios.get(`/products/${results.data[i]}/styles`)
              .then((results) => {
                resolve(results);
              })
              .catch((error) => {
                reject(error);
              })
          })
          var related = new Promise((resolve, reject) => {
            axios.get(`/products/${results.data[i]}`)
              .then((results) => {
                resolve(results);
              })
              .catch((error) => {
                reject(error);
              })
          })
          info.push(image);
          info.push(related);
        }
        return Promise.all(info);
      })
      .then((relatedInfo) => {
        var data = [];
        for (var i = 1; i < relatedInfo.length; i += 2) {
          var prodId = relatedInfo[i - 1].data.product_id;
          var image = relatedInfo[i - 1].data.results[0].photos[0].thumbnail_url;
          var name = relatedInfo[i].data.name;
          var category = relatedInfo[i].data.category;
          var price = relatedInfo[i].data.default_price;

          data.push({
            productId: prodId,
            image: image,
            name: name,
            category: category,
            price: price
          });
        }
        setRelatedProducts(data);
      })
      .catch((error) => {
        console.log('There is an error in Related.jsx when trying to get related product info: ', error);
      })
      .then(() => {
        var outfitIds = Object.values(props.yourOutfitProducts);
        var info = [];
        for (var i = 0; i < outfitIds.length; i++) {
          var image = new Promise((resolve, reject) => {
            axios.get(`/products/${outfitIds[i]}/styles`)
              .then((results) => {
                resolve(results);
              })
              .catch((error) => {
                reject(error);
              })
          })
          var related = new Promise((resolve, reject) => {
            axios.get(`/products/${outfitIds[i]}`)
              .then((results) => {
                resolve(results);
              })
              .catch((error) => {
                reject(error);
              })
          })
          info.push(image);
          info.push(related);
        }
        return Promise.all(info);
      })
      .then((relatedInfo) => {
        var data = [];
        for (var i = 1; i < relatedInfo.length; i += 2) {
          var prodId = relatedInfo[i - 1].data.product_id;
          var image = relatedInfo[i - 1].data.results[0].photos[0].thumbnail_url;
          var name = relatedInfo[i].data.name;
          var category = relatedInfo[i].data.category;
          var price = relatedInfo[i].data.default_price;

          data.push({
            productId: prodId,
            image: image,
            name: name,
            category: category,
            price: price
          });
        }
        setOutfitProducts(data);
      })
      .catch((error) => {
        console.log('There is an error in Related.jsx when trying to get Your Outfit products info', error);
      });
  }, [props.productId, props.yourOutfitProducts]);

  return (
    <div>
      <ErrorBoundary>
        <h4>RELATED PRODUCTS</h4>
        <div>
          {starButtonClick ? <Overlay currentProductName={currentProductName} selectedRelatedProductName={selectedRelatedProductName} currentProductFeatures={currentProductFeatures} selectedRelatedProductFeatures={selectedRelatedProductFeatures} setStarButtonClick={setStarButtonClick} starButtonClick={starButtonClick} /> : null}
          <RelatedCarousel
            cards={products(props.currentProductInfo, relatedProducts, setStarButtonClick, starButtonClick, props.productId, setCurrentProductFeatures, setSelectedRelatedProductFeatures, setSelectedRelatedProductName, setCurrentProductName, props.setProductId)}
          />
        </div>
        <h4>YOUR OUTFIT</h4>
        <div>
          <YourOutfitCarousel cards={yourOutfitProducts(outfitProducts, props.setYourOutfitProducts, props.setProductId)} setYourOutfitProducts={props.setYourOutfitProducts} productId={props.productId} />
        </div>
      </ErrorBoundary>
    </div>
  )
};
