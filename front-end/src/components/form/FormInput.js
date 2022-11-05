import styles from './formInput.module.css'

function FormInput(props) {
  return (
    <div className={styles.formInput}>
      <input 
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default FormInput