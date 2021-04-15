export default function UserForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="first_name"
          onChange={onChange}
          placeholder="First"
          value={values.first_name}
        />
        <input
          type="text"
          name="last_name"
          onChange={onChange}
          placeholder="Last"
          value={values.last_name}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={values.email}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={values.password}
        />
      </label>
      <label>
        Click here to agree to the Terms of Service:
        <input
          type="checkbox"
          name="terms_of_service"
          onChange={onChange}
          checked={values.terms_of_service}
        />
      </label>
      <div className="errors">
        <div>{errors.first_name}</div>
        <div>{errors.last_name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.terms_of_service}</div>
      </div>
      <button disabled={disabled}>Submit</button>
    </form>
  );
}
