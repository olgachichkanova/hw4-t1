const { useState } = require("react")

const ColorsConverter = () => {
    const hexToRGB = (hex) => {
        if(hex.length < 3) {
            return "error"
        }
        let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
          return r + r + g + g + b + b;
        });
        let [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
        if ([r, g, b].some(i => typeof(i) !== 'number')) {
          return "error"
        }
        return `rgb(${r}, ${g}, ${b})`;
    }

    const [hexColor, setHexColor] = useState('#34495e')
    const [rgbColor, setRgbColor] = useState(hexToRGB(hexColor))

    const handleInput = (evt) => {
        setHexColor(evt.target.value)
        setRgbColor(hexToRGB(evt.target.value))
    }

    return (
        <div className="ColorsConverter" style={{backgroundColor: hexColor}}>
            <div>
                <input type="text" value={hexColor} onChange={handleInput}></input>
                <div className="message">{rgbColor}</div>
            </div>
        </div>
    )
}

export default ColorsConverter;