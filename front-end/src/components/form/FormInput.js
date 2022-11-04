

function FormInput(props) {
  return (
    <div className="form__item">
        <input 
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
        />
    </div>
  )
}

export default FormInput