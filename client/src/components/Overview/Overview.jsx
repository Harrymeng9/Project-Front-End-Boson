import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import InfoList from './ovComponents/infoList.jsx';
import StyleSelect from './ovComponents/styleSelect.jsx';
import GalleryCarousel from './ovComponents/galleryCarousel.jsx';

var Overview = (props) => {
  //add the useState parameters here
  const [initial, setInitial] = useState([]);
  const [intStyle, setIntStyle] = useState([]);
  const [review, setReviews] = useState(0);
  const [bigPic, setBigPic] = useState('');
  const [windowPic, setWindowPic] = useState('');
  const [urlArray, setURLArray] = useState([]);
  const [title, setTitle] = useState('')

  // first item to render //
  var initialFetch = () => {
    return axios.get(`/products/${props.initial}`)
      .then(data => {
        setInitial([data.data]);
        setTitle(data.data.name)
      })
      .catch(err => console.log(err));
  }

  var firstStyle = () => {
    return axios.get(`/products/${props.initial}/styles`)
      .then(data => {
        var localUrlArray = [];
        var firstPic = data.data.results[0].photos[0].thumbnail_url;
        var firstWindow = data.data.results[0].photos[0].url;
        var firstUrls = data.data.results[0].photos;
        if (!firstPic) {setBigPic('No pictures to show')}
        firstUrls.forEach(img => {
          localUrlArray.push(img.url)
        })
        setURLArray(localUrlArray)
        setBigPic(firstPic)
        setIntStyle(data.data.results);
        setWindowPic(firstWindow);

      })
      .catch(err => console.log(err));
  }

  var reviews = () => {
    return axios.get(`/starrating`, {params: {product_id: props.initial}})
      .then(data => {
        setReviews(data.data);
      })
      .catch(err => console.log(err));
  }

  // click function to set the style as the first/default style
  let sets = (styleID) => {
    var redone = [];
    var updateUrlArray = [];
    var copy = intStyle.slice(0)
    for (var i = 0; i < copy.length; i++) {
      if (copy[i].style_id === styleID) {
        redone.push(copy[i]);
        delete copy[i];
        break;
      }
    }
    copy.forEach(e => {
      redone.push(e);
    })
    var updatedPics = redone[0].photos;
    updatedPics.forEach(img => {
      updateUrlArray.push(img.url);
    })
    setIntStyle(redone);
    setWindowPic(`${redone[0].photos[0].url}`)
    setURLArray(updateUrlArray)
  }

  // create a function that calls the axios requests on load
  useEffect(() => {
    initialFetch();
    firstStyle();
    reviews();
  }, [props.initial])


  //this is to crate a faux loading screen while the state is being set.
  //if the state is set, then we can fully render the app
  if (props === undefined) {
    return (
      <div>Loading product Overview</div>
    )
  } else {
    return (
      <div>
        <div><GalleryCarousel firstWindowPic={windowPic} setWindowPic={setWindowPic} urlArray={urlArray}/></div>
        <h1 className="prodTitle">{title}</h1>
        <div className="upmost-style"><StyleSelect styles={intStyle} id={props.initial} clickfunc={sets}
        setBigPic={setBigPic} setWindowPic={setWindowPic} setURLArray={setURLArray} /></div>
        <div className="upper-info"><InfoList info={initial} ratings={review} yourOutfitProducts={props.yourOutfitProducts}
        setYourOutfitProducts={props.setYourOutfitProducts}/></div>
      </div>
    )
  }

}

export default Overview;