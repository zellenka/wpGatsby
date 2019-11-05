import React from "react"
import componentStyles from "./calc.module.css"

const Calc = () => {

  const [values, setValues] = React.useState({
    chinaPrice: 0,
    emcCost: 10,
    countItem: 1,
    koef: 4.5,
  });
  const [totalPrice, setTotalPrice] = React.useState('...')

  const [weight, setWeight] = React.useState('...')

  const handleChange = props => (event) => {
    setValues({ ...values, [props]: Number(event.target.value) })
  }

  const handleChangeWeight = event => {
    setWeight(Number(event.target.value) * 5)
  }

  React.useEffect(() => {
    if(values.chinaPrice === 0 || values.emcCost === 0) {
      setTotalPrice('...')
    } else {
      setTotalPrice((values.chinaPrice + values.emcCost + values.countItem + values.koef).toFixed(2))
    }
    
  });
  return (
    <section className={componentStyles.calcBlock}>
      <div className='wrapper__width' >
        <form id="calc-block">
          <h3 className="h3-style h3-style-black">
            <span>просчет стоимости товара и доставки</span>
          </h3>
          <div className={componentStyles.flexParent}>
            <div className={componentStyles.flexPriceBlock}>
              <h4 className={componentStyles.heading}>
                Цена товара {totalPrice} грн.
              </h4>
              <div className={componentStyles.inputWrapper}>
                <label for="chinaPrice">
                  Цена на сайте
              </label>
                <input type="number" id="chinaPrice" name="chinaPrice" onChange={handleChange('chinaPrice')} />
              </div>
              <div className={componentStyles.inputWrapper}>
                <label for="emcCost">
                  Цена доставки (ЕМС)
              </label>
                <input type="number" id="emcCost" name="emcCost" onChange={handleChange('emcCost')} value={values.emcCost} />
              </div>
              <div className={componentStyles.inputWrapper}>
              <label for="countItem">
                колличество
              </label>
              <input type="number" id="countItem" name="countItem" onChange={handleChange('countItem')} value={values.countItem} />
              </div>
            </div>
            <div>
              <h4 className={componentStyles.heading}>
                Сумма за вес {weight} грн.
              </h4>
              <input type="number" id="time" name="name" onChange={event => handleChangeWeight(event)} />
            </div>
          </div>
        </form>
      </div>
    </section>

  )
}

export default Calc