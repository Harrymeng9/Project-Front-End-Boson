/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { products, Related } from './Related.jsx';
import RelatedProductCard from './relatedComponents/RelatedProductCard.jsx';

describe("Related Widget Tests", function () {
  // unit test
  test("Products function should return an array with length equal to input array", () => {
    var relatedProducts = [
      {
        image: "image",
        name: "name",
        category: "category",
        price: "price"
      },
      {
        image: "image",
        name: "name",
        category: "category",
        price: "price"
      },
      {
        image: "image",
        name: "name",
        category: "category",
        price: "price"
      }
    ]
    expect(products(relatedProducts).length).toBe(3);
  });

  // integration test
  test("Card component should render the correct related product name", () => {
    const { getByText } = render(<RelatedProductCard name="Bright Future Sunglasses" />);
    const productName = getByText('Bright Future Sunglasses');
    expect(productName).toBeInTheDocument('Bright Future Sunglasses');
  });
});