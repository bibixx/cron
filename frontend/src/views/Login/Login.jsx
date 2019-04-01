import React, { useContext } from 'react';
import {
  Card, Layout, Row, Col,
} from 'antd';

import AuthContext from '../../components/AuthProvider/AuthContext';
import LoginForm from './LoginForm';

const { Content, Footer } = Layout;

const Login = () => {
  const { login } = useContext(AuthContext);

  const onSubmit = async ({ username, password }, actions) => {
    actions.setSubmitting(true);
    const { errors } = await login(username, password);

    if (errors) {
      actions.setStatus({});

      actions.setStatus({
        passwordIncorrect: errors.password,
      });

      actions.setSubmitting(false);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', display: 'flex' }}>
      <Content style={{ padding: '4rem', flex: '1' }}>
        <Row>
          <Col
            offset={6}
            span={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card
              title="Login"
              bordered={false}
              style={{
                width: 500,
              }}
            >
              <LoginForm onSubmit={onSubmit} />
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Login;
