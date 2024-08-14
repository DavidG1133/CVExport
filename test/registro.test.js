import fetch from 'jest-fetch-mock';
import { registro } from '../src/utils/registro.utils';

describe('registro', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('debe devolver un mensaje de éxito cuando el registro es exitoso', async () => {
    fetch.mockResponseOnce(JSON.stringify({ status: 'Ok', msg: 'Usuario creado exitosamente' }));
    const result = await registro('Juan', 'juan123', 'juan@example.com', 'password123');
    expect(result).toEqual({ status: 'Ok', msg: 'Usuario creado exitosamente' });
  });

  it('debe devolver un mensaje de error cuando el nombre está vacío', async () => {
    await expect(registro('', 'juan123', 'juan@example.com', 'password123')).rejects.toThrow('Por favor, llene todos los campos');
  });

  it('debe devolver un mensaje de error cuando el username está vacío', async () => {
    await expect(registro('Juan', '', 'juan@example.com', 'password123')).rejects.toThrow('Por favor, llene todos los campos');
  });

  it('debe devolver un mensaje de error cuando el email está vacío', async () => {
    await expect(registro('Juan', 'juan123', '', 'password123')).rejects.toThrow('Por favor, llene todos los campos');
  });

  it('debe devolver un mensaje de error cuando la contraseña está vacía', async () => {
    await expect(registro('Juan', 'juan123', 'juan@example.com', '')).rejects.toThrow('Por favor, llene todos los campos');
  });
});