import React from 'react';
import { render, screen, getByText } from '@testing-library/react';
import { products, Related } from './Related.jsx';
import { Card } from './relatedComponents/Card.jsx';

describe("Related Widget Tests", function () {
  // test that relatedProds in products function is a non-empty array
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

  test("Card component should render the correct related product name", () => {
    var expectedName = "Bright Future Sunglasses";
    render(<Card name={expectedName} />);
    screen.getByText(expectedName);
  });
});