import style from "./Form.module.css"

function Form() {
  return (
    <form className={style.form}>
      <input type='text' className={style.input} placeholder='Enter new ToDo' />
      <button type='submit' className={style.btn}>
        Submit
      </button>
    </form>
  )
}

export default Form
