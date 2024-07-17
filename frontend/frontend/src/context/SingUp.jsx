import React,{useState} from 'react'

const SingUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
     confirmPassword: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Submit form (e.g., send data to the server)
      console.log('Form submitted', formData);
    }
  };

  
  return (
    <div className="signup-container">
    <h2>Signup for Fitness Website</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && <p className="error">{formErrors.name}</p>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <p className="error">{formErrors.email}</p>}
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {formErrors.password && <p className="error">{formErrors.password}</p>}
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {formErrors.confirmPassword && <p className="error">{formErrors.confirmPassword}</p>}
      </div>
      <button type="submit">Signup</button>
    </form>
  </div>
  );
};

export default SingUp;
