import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Loader from '../components/Loader';

const AddPhone = (props) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      return props.history.push('/admin/login');
    } else {
      axios.defaults.headers.common['x-auth-token'] = token;
    }
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    color: [],
    charging: '',
    screen: '',
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async () => {
    //setFormData({ ...formData, color: colorField });
    setLoading(true);
    formData.color = colorField;
    console.log(formData);
    for (let i = 0; i < colorField.length; i++) {
      let color = colorField[i];
      if (color.name === '' && color.code === '')
        return alert('Please Enter correct valur for colors');
      if (formData.charging === '' && formData.screen === '')
        return alert('Please Enter the Price for repair');
    }
    try {
      const res = await axios.post('/auth/create', {
        ...formData,
        color: colorField,
      });
      console.log(res);
      setLoading(false);
      alert('Phone Has been Added');
    } catch (err) {
      if (err.response.status === 401) {
        localStorage.clear();
        alert('Session Timed Out, Login In Again ');
        return props.history.push('/admin/login');
      }
      alert(err.response.data.err);
    }
  };
  const [colorField, setColorField] = useState([
    {
      name: '',
      code: '',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const addColorField = () => {
    setColorField([...colorField, { name: '', code: '' }]);
  };
  const onColorFieldChange = (e) => {
    const index = e.target.dataset.index;
    const Mutatedcolor = colorField[index];
    Mutatedcolor[e.target.name] = e.target.value;
    const temp = colorField.map((color, c) => {
      return c === index ? Mutatedcolor : color;
    });
    setColorField(temp);
  };
  return loading ? (
    <Loader />
  ) : (
    <div className='container'>
      <h1 className='text-dark text-center'>Add Phone</h1>
      <>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Add Phone Name</Form.Label>
          <Form.Control
            name='name'
            value={formData.name}
            type='text'
            placeholder='iPhone X'
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Add Phone Code</Form.Label>
          <Form.Control
            name='code'
            value={formData.code}
            type='text'
            placeholder='6s(iPhone 6)'
            onChange={onChange}
          />
        </Form.Group>

        <div className='row'>
          <div className='col'>
            <Form.Label>Charging Port fix</Form.Label>
            <Form.Control
              name='charging'
              value={formData.charging}
              placeholder='Enter price in $'
              onChange={onChange}
            />
          </div>
          <div className='col'>
            <Form.Label>Screen fix</Form.Label>
            <Form.Control
              name='screen'
              value={formData.screen}
              onChange={onChange}
              placeholder='Enter price in $'
            />
          </div>
        </div>
        <div className='row my-3'>
          {colorField.map((color, count) => (
            <React.Fragment key={count}>
              <div className='col-sm-6'>
                <Form.Label>Color Name </Form.Label>
                <Form.Control
                  value={colorField[count].name}
                  data-index={count}
                  name='name'
                  onChange={onColorFieldChange}
                  placeholder='Space Gray'
                />
              </div>
              <div data-index={count} className='col-sm-6'>
                <Form.Label>Color Code</Form.Label>
                <Form.Control
                  data-index={count}
                  onChange={onColorFieldChange}
                  name='code'
                  value={colorField[count].code}
                  placeholder='Enter Hex color code (#fffff)'
                />
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className='row'>
          <div className='col'>
            <button onClick={addColorField} className='btn btn-dark btn-sm'>
              Add Another color
            </button>
          </div>
        </div>

        <button onClick={onSubmit} className='btn btn-primary mt-5'>
          Submit
        </button>
      </>
    </div>
  );
};

export default AddPhone;
