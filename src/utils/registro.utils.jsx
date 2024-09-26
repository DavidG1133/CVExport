export const registro = async (nombre, username, email, password) => {
    if (!nombre || !username || !email || !password) {
      throw new Error('Por favor, llene todos los campos');
    }
    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, username, email, contra: password }),
      });
      const data = await response.json();
      if (data.status === 'Ok') {
        return { status: 'Ok', msg: 'Usuario creado exitosamente' };
      } else {
        throw new Error('Error al crear usuario');
      }
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Error del servidor');
      } else {
        throw error;
      }
    }
  };
  