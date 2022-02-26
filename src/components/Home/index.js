import axios from "axios";
import { Box, BoxContainer, Secc, NavButtons, DeleteSpan } from "./style";
import { useState, useEffect, Fragment } from "react";
import { Table, Button, Modal, Input, Form, Select } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons'

export const Home = () => {
  const [cap, setCap] = useState([]);
  const [client, setClient] = useState([]);
  const [platform, setPlatform] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const { Option } = Select;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const clienteInfo = () => {
    Modal.info({
      title: "Clientes Registrados",
      content: (
        <div>
          <ul>
            {client.map((cli) => (
              <li key={cli._id}>{cli.name}</li>
            ))}
          </ul>
        </div>
      ),
    });
  };

  const usuarioInfo = () => {
    Modal.info({
      title: "Usuarios Registrados",
      content: (
        <div>
          <ul>
            <li>Rixion</li>
            <li>Natalia</li>
            <li>Gabriel</li>
          </ul>
        </div>
      ),
    });
  };

  const plataformaInfo = () => {
    Modal.info({
      title: "Plataforma Registrada",
      content: (
        <div>
          <ul>
            {platform.map((plat) => (
              <li key={plat._id}>{plat.name}</li>
            ))}
          </ul>
        </div>
      ),
    });
  };

  const onFinish = (values) => {
    axios
      .post("https://warm-temple-82704.herokuapp.com/cap", values)
      .then(function (response) {
        form.resetFields();
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("Success:", values);
  };

  const handleDelete = (id) => {
    axios.delete(`https://warm-temple-82704.herokuapp.com/cap/${id}`);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .get("https://warm-temple-82704.herokuapp.com/cap", {
        cancelToken: source.token,
      })
      .then((response) => {
        if (!unmounted) {
          setCap(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      unmounted = true;
    };
  }, [cap]);

  useEffect(() => {
    axios
      .get("https://warm-temple-82704.herokuapp.com/platform")
      .then((response) => {
        setPlatform(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://warm-temple-82704.herokuapp.com/client")
      .then((response) => {
        setClient(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const dataSource = cap.map((capacita) => {
    return {
      key: capacita._id,
      cliente: capacita.client,
      usuario: capacita.user,
      plataforma: capacita.platform,
      action: (
        <Fragment>
          <DeleteSpan type="danger" onClick={() => DeleteConfirm(capacita._id)}>
            Delete
          </DeleteSpan>
        </Fragment>
      ),
    };
  });

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
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  const DeleteConfirm = (id) => {
      Modal.confirm({
        title: 'Eliminar Capacitación',
        icon: <ExclamationCircleOutlined />,
        content: '¿Desea eliminar esta Capacitación?',
        onOk() {
          handleDelete(id)
        },
        onCancel() {
          console.log('');
        },
      });
  }

  return (
    <Secc>
      <BoxContainer>
        <Box onClick={clienteInfo}>
          <h1>Clientes</h1>
          <span>{client.length}</span>
        </Box>
        <Box onClick={usuarioInfo}>
          <h1>Usuarios</h1>
          <span>0</span>
        </Box>
        <Box onClick={plataformaInfo}>
          <h1>Plataformas</h1>
          <span>{platform.length}</span>
        </Box>
        <Box>
          <h1>Capacitaciones</h1>
          <span>{cap.length}</span>
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
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
        ]}
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
            name="user"
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
            name="client"
            label="Cliente"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="Seleccione un Cliente" allowClear>
              {client.map((cli) => (
                <Option key={cli._id} value={cli.name}>
                  {cli.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="platform"
            label="Plataforma"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="Seleccione una Plataforma" allowClear>
              {platform.map((pla) => (
                <Option key={pla._id} value={pla.name}>
                  {pla.name}
                </Option>
              ))}
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
