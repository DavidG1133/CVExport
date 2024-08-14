import fetch from 'jest-fetch-mock';
import { login } from '../src/utils/login.utils';

describe('login', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('debe devolver un mensaje de éxito cuando las credenciales son correctas', async () => {
    fetch.mockResponseOnce(JSON.stringify({ status: 'Ok', msg: 'Login exitoso' }));
    const result = await login('pepe', '123456');
    expect(result).toEqual({ status: 'Ok', msg: 'Login exitoso' });
  });

  it('debe devolver un mensaje de error cuando las credenciales son incorrectas', async () => {
    fetch.mockResponseOnce(JSON.stringify({ status: 'Error', msg: 'Credenciales incorrectas' }));
    await expect(login('pepe', 'wrongpassword')).rejects.toThrow('Credenciales incorrectas');
  });

  it('debe devolver un mensaje de error cuando el usuario está vacío', async () => {
    await expect(login('', '123456')).rejects.toThrow('Por favor, llene el campo de usuario');
  });

  it('debe devolver un mensaje de error cuando la contraseña está vacía', async () => {
    await expect(login('pepe', '')).rejects.toThrow('Por favor, llene el campo de contraseña');
  });
});
