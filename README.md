
# draw-line-connect

You can connect your dom elements with drawing lines between them

And the best part is, it can be either a diagonal line or in the shape of L!


[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)


## Installation

Install draw-line-connect with npm

```bash
  npm install draw-line-connect
```
    
## Usage/Examples

```javascript
import {drawLine, drawL} from 'draw-line-connext'

drawLine({
    startingElement: {
        id: "box1", x: "right", y: "mid"
    }, 
    endingElement: {
        id:"box2", x: "center", y: "top"
    }, 
    color: "red", 
    thickness: "4"
})

drawL({
    startingElement: {
        id: "box1", x: "center", y: "bottom"
    },
    endingElement: {
        id: "box2", x: "left", y: "mid"
    }, 
    color: "black", 
    thickness: "5", 
    shape: "upsidedownL"
})
```

## Demo

drawL => https://codepen.io/Maxlous/pen/dyVOXYJ

drawLine => https://codepen.io/Maxlous/pen/BawogPw


## Features

- Customize the color
- Customize the thickness of the line
- Specify a shape
- Determine specific starting and ending points for elements


## FAQ

#### Can I use it in frameworks such as React?

Yes you can, since it is a regular JavaScript function you can use it in your components or in a useEffect to manipulate your page



## Screenshots

![Diagonal Line](https://res.cloudinary.com/maxlous/image/upload/v1640438489/for%20developmental%20projects/Screen_Shot_2021-12-25_at_16.15.58_sf58v6.png)
![L Line](https://res.cloudinary.com/maxlous/image/upload/v1640438489/for%20developmental%20projects/Screen_Shot_2021-12-25_at_16.20.53_olkduh.png)


## Roadmap

- Add a custom css support for lines

- Add animation effects

- Add timeout support for lines to be appear

- Add z-index support

- Add on scroll event listener support



## Contributing

Contributions are always welcome!



## Feedback

If you have any feedback, please reach out to us at burakkgunduz21@gmail.com


## Authors

- [@burakgunduz](https://www.github.com/burakkgunduzz)


## License

[MIT](https://choosealicense.com/licenses/mit/)

