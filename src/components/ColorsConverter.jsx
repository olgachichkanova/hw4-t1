const { useState } = require("react")

const ColorsConverter = () => {
    const hexToRGB = (hex) => {
        if (!hex || typeof hex !== 'string' || hex.length < 7) {
          return;
        }
      
        let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
          return r + r + g + g + b + b;
        });
      
        let matches = hex.match(/\w\w/g);
        if (matches) {
          let [r, g, b] = matches.map(x => parseInt(x, 16));
          if ([r, g, b].some(i => typeof(i) !== 'number' || isNaN(i))) {
            return "error";
          }
          return `rgb(${r}, ${g}, ${b})`;
        } else {
          return "error";
        }
      }
      

    const [hexColor, setHexColor] = useState('#34495e')
    const [rgbColor, setRgbColor] = useState(hexToRGB(hexColor))

    const handleInput = (evt) => {
        setHexColor(evt.target.value)
        setRgbColor(hexToRGB(evt.target.value))
    }

    return (
        <div className="ColorsConverter" style={{backgroundColor: rgbColor === "error" ? "#ea4b34" : hexColor}}>
            <div>
                <input type="text" value={hexColor} onChange={handleInput}></input>
                <div className="message">{rgbColor}</div>
            </div>
        </div>
    )
}

export default ColorsConverter;