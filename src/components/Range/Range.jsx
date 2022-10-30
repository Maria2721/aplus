import "./Range.scss";

function Range({ text, value, handleChange, min, max, step }) {
  const percent = ((value - min) * 100) / (max - min);
  const outputOffset = (value - min) / (max - min) * 100

  return (
    <div className="range">
      <div className="range__inputWrapper">
        <input
        className="range__input"
          type="range"
          value={value}
          step={step}
          min={min}
          max={max}
          onChange={handleChange}
          style={{
            backgroundSize: `${percent}% 100%`,
          }}
        />
      </div>
      <div
        className="range__numberWrapper"
        style={{
          left: `calc(${outputOffset}% + ${20 - (20 * (outputOffset / 100))}px)`,
        }}>
        <output id="rangevalue" className="range__number">
          {value.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ")} {text}
        </output>
      </div>
    </div>
  );
}

export default Range;