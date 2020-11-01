import React from 'react';
import { Context } from '../context/Context';
import { Route, Redirect } from 'react-router-dom';

const ControlRoute = ({ component: Component, data, ...rest }) => {
  const { formData } = React.useContext(Context);
  //   return props.path === path.substr(path.lastIndexOf('/') + 1) ? (
  //     <Route path={path} component={Component} />
  //   ) : (
  //     <Redirect to='/bookings/model' />
  //   );
  console.log(data);
  console.log(formData);
  return (
    <Route
      {...rest}
      render={(props) =>
        formData[data] !== '' ? (
          <Component />
        ) : (
          <Redirect to='/bookings/model' />
        )
      }
    />
  );
};

export default ControlRoute;
