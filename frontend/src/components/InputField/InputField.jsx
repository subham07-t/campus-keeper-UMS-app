const InputField = ({
  label,
  value,
  setValue,
  setErrValue,
  //   setErrCredentials,
  errValue,
  style,
  type,
  inputHeight,
}) => {
  return (
    <div className="inputdiv_sub1" style={style}>
      <label htmlFor="" className="login_label">
        {label}
      </label>
      <input
        style={inputHeight}
        className="input__field"
        placeholder=""
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setErrValue("");
          //   setErrCredentials("");
        }}
        type={type}
      />

      {errValue ? <p className="error_msg">{errValue}</p> : null}
    </div>
  );
};

export default InputField;
