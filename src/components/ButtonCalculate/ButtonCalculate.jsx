import './ButtonCalculate.scss';

function ButtonCalculate ({ handleCalculatorModal }) {
  return (
    <button className="btn btn_blank" onClick={handleCalculatorModal}>
    Рассчитать стоимость
    </button>
  )
}

export default ButtonCalculate;
