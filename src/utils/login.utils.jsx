export const login = async (username, password) => {
    if (!username || username.trim() === '') {
      throw new Error('Por favor, llene el campo de usuario');
    }
    if (!password || password.trim() === '') {
      throw new Error('Por favor, llene el campo de contraseña');
    }
    try {
      const response = await fetch(`http://localhost:8080/login1?username=${username}&password=${password}`);
      if (!response.ok) {
        throw new Error('Credenciales incorrectas');
      }
      const data = await response.json();
      if (data.status === 'Ok') {
        return { msg: 'Login exitoso', status: 'Ok' };
      } else {
        throw new Error('Credenciales incorrectas');
      }
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Error del servidor');
      } else {
        throw error;
      }
    }
  };