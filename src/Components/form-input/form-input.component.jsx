import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="group">
              <input className="form-input dismissible" {...otherProps} />
            {label && (
                <label htmlFor="displayName"
                className={`${otherProps.value.length ?'shrink':'' }form-input-label`}
            >
                    {label}
                    <span className="required">*</span>
            </label>
            )
            }
        </div>
        
    );
};

export default FormInput; 