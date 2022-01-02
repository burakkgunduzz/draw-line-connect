# draw-line-connect

You can connect your dom elements with drawing lines between them

And the best part is, it can be either a diagonal line or in the shape of L!

This packege can be only used in vanilla JS projects.

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Installation

Install draw-line-connect with npm

```bash
  npm install draw-line-connect
```

or with yarn

```bash
  yarn add draw-line-connect
```

## Usage/Examples

```javascript
import { drawLine, drawL } from "draw-line-connect";

drawLine({
  startingElement: {
    id: "box1",
    x: "right",
    y: "mid",
  },
  endingElement: {
    id: "box2",
    x: "center",
    y: "top",
  },
});

drawL({
  startingElement: {
    id: "box1",
    x: "center",
    y: "bottom",
  },
  endingElement: {
    id: "box2",
    x: "left",
    y: "mid",
  },
  color: "black",
  thickness: 5,
  shape: "upsidedownL",
});
```

## API Referance

#### drawLine()

This function should take an object as a parameter with following keys:

- startingElement: object (required)
  | Key | Value |
  | ------------- |:-------------:|
  | id (required) | string |
  | x (required) | "left" or "center" or "right" |
  | y (required) | "top" or "mid" or "bottom" |

- endingElement: object (required)
  | Key | Value |
  | ------------- |:-------------:|
  | id (required) | string |
  | x (required) | "left" or "center" or "right" |
  | y (required) | "top" or "mid" or "bottom" |

#### drawL()

This function should take an object as a parameter with following keys:

- startingElement: object (required)
  | Key | Value |
  | ------------- |:-------------:|
  | id (required) | string |
  | x (required) | "left" or "center" or "right" |
  | y (required) | "top" or "mid" or "bottom" |

- endingElement: object (required)
  | Key | Value |
  | ------------- |:-------------:|
  | id (required) | string |
  | x (required) | "left" or "center" or "right" |
  | y (required) | "top" or "mid" or "bottom" |

- shape: string ("upsidedownL", optional, defaults to "normal")

#### Other optional params for drawLine and drawL

- color: string (color in any format, optional, defaults to black)

- thickness: integer (thickness for the line, optional, defaults to 4)

## JS Demos

drawL => https://codepen.io/Maxlous/pen/dyVOXYJ

drawLine => https://codepen.io/Maxlous/pen/BawogPw

## Features

- Customize the color, thickness and many more if you like
- Specify a shape
- Determine specific starting and ending points for elements
- Pass any valid div attribute if necessary

## FAQ

#### Can I use it in frameworks such as React?

No you can not! But there is react-compatible package for it! check out react-drawline

## Screenshots

![Diagonal Line](https://res.cloudinary.com/maxlous/image/upload/v1640438489/for%20developmental%20projects/Screen_Shot_2021-12-25_at_16.15.58_sf58v6.png)
![L Line](https://res.cloudinary.com/maxlous/image/upload/v1640438489/for%20developmental%20projects/Screen_Shot_2021-12-25_at_16.20.53_olkduh.png)

## Roadmap

- Add animation effects

- Add timeout support for lines to be appear

- Add on scroll event listener support

- Add Intersection Observer

- Adopt the line according the resizing of the browser

## Contributing

Contributions are always welcome!

## Feedback

If you have any feedback, please reach out to us at burakkgunduz21@gmail.com

## Authors

- [@burakgunduz](https://www.github.com/burakkgunduzz)

## License

[MIT](https://choosealicense.com/licenses/mit/)
