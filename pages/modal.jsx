/* eslint-disable react/react-in-jsx-scope */
import Modal from '../components/modal';

export default function Home() {
  return (
    <div>
      <h1>Conteúdo principal</h1>

      <Modal>
        <h2 className="text-lg font-bold mb-4">Modal</h2>
        <p>Este é um modal simples.</p>
      </Modal>
    </div>
  );
}
