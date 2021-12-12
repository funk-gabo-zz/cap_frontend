import { Modal } from "antd";

export const clienteInfo = () => {
  Modal.info({
    title: "Clientes Registrados",
    content: (
      <div>
        <ul>
          <li>Anglo</li>
          <li>Cacciuttolo</li>
          <li>American</li>
        </ul>
      </div>
    ),
  });
};

export const usuarioInfo = () => {
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

export const plataformaInfo = () => {
  Modal.info({
    title: "Plataforma Registrada",
    content: (
      <div>
        <ul>
          <li>Dispatcher</li>
          <li>Telemetría</li>
          <li>Control</li>
        </ul>
      </div>
    ),
  });
};
