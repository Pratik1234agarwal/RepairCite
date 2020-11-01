import React, { createContext, useState } from 'react';
import axios from 'axios';

export const Context = createContext();

const ContextComponent = ({ children }) => {
  const [data, setData] = useState({
    phones: [],
    modal: {
      show: false,
      msg: '',
      error: true,
    },
  });
  const [formData, setFormData] = useState({
    modelName: '',
    type: '',
    date: '',
    timeSlot: '',
    address: '',
    phone: '',
    email: '',
    pincode: '',
    price: '',
    additionInfo: '',
    color: '',
  });
  const onBulkChange = (data) => {
    console.log(data);
    setFormData({
      ...formData,
      ...data,
    });
  };
  const onChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const pathChange = (path) => setData({ ...data, path });
  const setModal = (show, msg = '', error = true) => {
    setData({
      ...data,
      modal: {
        show,
        msg,
        error,
      },
    });
  };
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('/api');
        console.log(res.data);
        setData((data) => ({
          ...data,
          phones: res.data.phones,
        }));
        setLoading(false);
      } catch (err) {
        console.log(err);
        alert(err.response.data.err);
      }
    }
    fetchData();
  }, [setLoading, setData]);
  return loading ? (
    <div className='spinner_wrapper'>
      <div className='spinner'></div>
    </div>
  ) : (
    <Context.Provider
      value={{
        ...data,
        formData,
        onChange,
        onBulkChange,
        setModal,
        pathChange,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextComponent;
