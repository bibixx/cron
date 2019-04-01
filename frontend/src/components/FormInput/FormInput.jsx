import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import { Field } from 'formik';

const FormInput = ({
  component: Component, itemProps, name, ...props
}) => (
  <Field
    name={name}
  >
    {({
      field,
      form: {
        errors,
      },
    }) => (
      <Form.Item
        validateStatus={errors[name] && 'error'}
        help={errors[name]}
        {...itemProps}
      >
        <Component
          {...field}
          {...props}
        />
      </Form.Item>
    )}
  </Field>
);


FormInput.propTypes = {
  itemProps: PropTypes.shape({}),
  name: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

FormInput.defaultProps = {
  itemProps: {},
  component: Input,
};

export default FormInput;
