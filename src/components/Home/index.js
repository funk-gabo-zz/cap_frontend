import { Box, BoxContainer, Secc, NavButtons } from "./style";
import {
  clienteInfo,
  usuarioInfo,
  plataformaInfo,
} from "../../utils/modalInfo";
import { useState } from "react";
import { Table, Button, Modal, Input, Form, Select } from "antd";
const {Option} = Select;

export const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };
  const dataSource = [
    {
      key: "1",
      cliente: "CRUZDELSUR",
      usuario: "Someone",
      plataforma: "Control",
    },
    {
      key: "2",
      cliente: "Cacciuttolo",
      usuario: "Rixion",
      plataforma: "Dispatcher",
    },
  ];

  const columns = [
    {
      title: "Cliente",
      dataIndex: "cliente",
      key: "cliente",
    },
    {
      title: "Usuario",
      dataIndex: "usuario",
      key: "usuario",
    },
    {
      title: "Plataforma",
      dataIndex: "plataforma",
      key: "plataforma",
    },
  ];

  return (
    <Secc>
      <BoxContainer>
        <Box onClick={clienteInfo}>
          <h1>Clientes</h1>
          <span>0</span>
        </Box>
        <Box onClick={usuarioInfo}>
          <h1>Usuarios</h1>
          <span>0</span>
        </Box>
        <Box onClick={plataformaInfo}>
          <h1>Plataformas</h1>
          <span>0</span>
        </Box>
        <Box>
          <h1>Capacitaciones</h1>
          <span>0</span>
        </Box>
      </BoxContainer>
      <NavButtons>
        <Button onClick={showModal}>Add</Button>
      </NavButtons>
      <Table dataSource={dataSource} columns={columns} />
      <Modal
        title="Nueva Capacitación"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="Usuario"
            name="usuario"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="cliente"
            label="Cliente"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Seleccione un Cliente"
              allowClear
            >
              <Option value="Angloamerican">Angloamerican</Option>
              <Option value="Cacciuttolo">Cacciuttolo</Option>
              <Option value="Cruzdelsur">Cruzdelsur</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="plataforma"
            label="Plataforma"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Seleccione una Plataforma"
              allowClear
            >
              <Option value="Dispatcher">Dispatcher</Option>
              <Option value="Control">Control</Option>
              <Option value="Telemetría">Telemetría</Option>
            </Select>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Secc>
  );
};
