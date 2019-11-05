import React from "react"
import componentStyles from "./index.module.css"



const FindBlock = () => {
  const [input, setValue] = React.useState('');
  const [isError, setError] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    window.location = '/at-sequi-harum-non?' + input //change on working example
  }

  const handleChange = (event) => {
    setValue(event.target.value)
    if(!isNaN(Number(event.target.value))){
      setError(false)
    } else {
      setError(true)
    }
    
  }



  return(
    <section className={componentStyles.searchBlock}>
      <div className='wrapper__width' >
      <h3 className="h3-style h3-style-black"><span>Find product by code</span></h3>
      <form className={componentStyles.form} onSubmit={handleSubmit}>
        <div className={componentStyles.inputWrapper}>
          <input type="text" onChange={(event) => handleChange(event)} value={input}/>
          <button type="sunbmit" >Find</button>
          {isError ? <p className={componentStyles.error}>error</p> : ''}
        </div>
        <p className={componentStyles.formText}>if you come from instagramm insert code of product in search field</p>
      </form>
      </div>
    </section>
  )
}

export default FindBlock