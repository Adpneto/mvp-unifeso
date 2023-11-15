// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = (email, password, cpf, nome, sobrenome) => {
    setUser({ email, password, cpf, nome, sobrenome, agendamentos: [] });
  };

  const login = (email, password) => {
    if (user && user.email === email && user.password === password) {
      return true;
    } else {
      throw new Error('Credenciais inválidas');
    }
  };

  const logout = () => {
    setUser(null);
  };

  const addAgendamento = (data) => {
    setUser({ ...user, agendamentos: [...user.agendamentos, data] });
  };

  const removeAgendamento = (index) => {
    const newAgendamentos = [...user.agendamentos];
    newAgendamentos.splice(index, 1);
    setUser({ ...user, agendamentos: newAgendamentos });
  };

  const authValue = {
    user,
    signup,
    login,
    logout,
    addAgendamento,
    removeAgendamento,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser utilizado dentro de um AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
