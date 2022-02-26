import axios from "axios";
import { Button, Form, Input } from "antd";
import {
  FormsContainer,
  FormBox,
  ListContainer,
  ListBox,
  BoxName,
  ListBoxContainer,
} from "./style";
import { useState, useEffect } from "react";

export const Mantenedor = () => {
  const [client, setClient] = useState([]);
  const [platform, setPlatform] = useState([]);

  const [formCli] = Form.useForm();
  const [formPla] = Form.useForm();

  const onFinishPlatform = (values) => {
    axios
      .post("https://warm-temple-82704.herokuapp.com/platform", values)
      .then(function (response) {
        formPla.resetFields();
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("Success:", values);
  };
  const onFinishClient = (values) => {
    axios
      .post("https://warm-temple-82704.herokuapp.com/client", values)
      .then(function (response) {
        formCli.resetFields();
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("Success:", values);
  };

  const handleDeleteCli = (id) => {
    axios.delete(`https://warm-temple-82704.herokuapp.com/client/${id}`);
  };

  const handleDeletePla = (id) => {
    axios.delete(`https://warm-temple-82704.herokuapp.com/platform/${id}`);
  };

  useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .get("https://warm-temple-82704.herokuapp.com/client", {
        cancelToken: source.token,
      })
      .then((response) => {
        if (!unmounted) {
          setClient(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      unmounted = true;
    };
  }, [client]);
  useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .get("https://warm-temple-82704.herokuapp.com/platform", {
        cancelToken: source.token,
      })
      .then((response) => {
        if (!unmounted) {
          setPlatform(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      unmounted = true;
    };
  }, [platform]);
  return (
    <FormsContainer>
      <FormBox>
        <h1>Agregar Plataforma</h1>
        <Form onFinish={onFinishPlatform} form={formPla}>
          <Form.Item
            name="name"
            label="Plataforma"
            rules={[
              {
                required: true,
                message: "Ingrese una Plataforma",
              },
            ]}
          >
            <Input placeholder="Plataforma" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
        <ListContainer>
          <ListBoxContainer>
            {platform.map((plat) => (
              <ListBox key={plat._id}>
                <BoxName>{plat.name}</BoxName>
                <Button type="danger" onClick={() => handleDeletePla(plat._id)}>
                  Borrar
                </Button>
              </ListBox>
            ))}
          </ListBoxContainer>
        </ListContainer>
      </FormBox>
      <FormBox>
        <h1>Agregar Cliente</h1>
        <Form onFinish={onFinishClient} form={formCli}>
          <Form.Item
            name="name"
            label="Cliente"
            rules={[
              {
                required: true,
                message: "Ingrese un Cleinte",
              },
            ]}
          >
            <Input placeholder="Cliente" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
        <ListContainer>
          <ListBoxContainer>
            {client.map((cli) => (
              <ListBox key={cli._id}>
                <BoxName>{cli.name}</BoxName>
                <Button type="danger" onClick={() => handleDeleteCli(cli._id)}>
                  Borrar
                </Button>
              </ListBox>
            ))}
          </ListBoxContainer>
        </ListContainer>
      </FormBox>
    </FormsContainer>
  );
};
