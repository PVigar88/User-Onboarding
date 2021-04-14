export default function UserForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={onChange}
          placeholder="First"
          value={}
        />
        <input
          type="text"
          name="name"
          onChange={onChange}
          placeholder="Last"
          value={}
        />
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={onChange} value={value} />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={value}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={value}
        />
      </label>
      <label>
        Click here to agree to the Terms of Service:
        <input
          type="checkbox"
          name="termsOfService"
          onChange={onChange}
          value={value}
        />
      </label>
      <button disabled={disabled}>Submit</button>
    </form>
  );
}
