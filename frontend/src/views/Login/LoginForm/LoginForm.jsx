import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Icon, Form, Alert, Input,
} from 'antd';

import { Formik } from 'formik';
import FormInput from '../../../components/FormInput';

import { schema } from './schema';

const LoginForm = ({ onSubmit }) => (
  <Formik
    onSubmit={onSubmit}
    validationSchema={schema}
    initialStatus={{}}
  >
    {({ handleSubmit, isSubmitting, status }) => (
      <Form onSubmit={handleSubmit}>
        <FormInput
          prefix={(
            <Icon
              type="user"
              style={{ color: 'rgba(0,0,0,.25)' }}
            />
          )}
          type="text"
          placeholder="Username"
          name="username"
        />
        <FormInput
          prefix={(
            <Icon
              type="lock"
              style={{ color: 'rgba(0,0,0,.25)' }}
            />
          )}
          component={Input.Password}
          type="password"
          placeholder="Password"
          name="password"
        />
        {status.passwordIncorrect && (
          <Form.Item>
            <Alert message={status.passwordIncorrect} type="error" />
          </Form.Item>
        )}
        <Form.Item
          style={{
            marginBottom: 0,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            loading={isSubmitting}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    )}
  </Formik>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
