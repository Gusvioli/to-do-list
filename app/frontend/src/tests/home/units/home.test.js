import { screen, render } from "@testing-library/react";
import React from 'react'
import '@testing-library/jest-dom'
import Navbar from "../../../components/Navbar";

describe('Testando a página Home', () => {
  describe('Testando o componente Navbar', () => {
    it(('Verifica se o componente Navbar está na tela'), () => {
      render(<Navbar />);
      const navbar = screen.getByTestId('navbar');
      expect(navbar).toBeInTheDocument();
    });
    it(('Verifica se o formulário está na tela'), () => {
      render(<Navbar />);
      const navbar = screen.getByTestId('form-Login');
      expect(navbar).toBeInTheDocument();
    });
    it(('Verifica se o input de busca está na tela'), () => {
      render(<Navbar />);
      const navbar = screen.getByTestId('input-buscador');
      expect(navbar).toBeInTheDocument();
    });
    it(('Verifica se o button de buscar está na tela'), () => {
      render(<Navbar />);
      const navbar = screen.getByTestId('button-buscar');
      expect(navbar).toBeInTheDocument();
    });
    it(('Verifica se o button de sair está na tela'), () => {
      render(<Navbar />);
      const navbar = screen.getByTestId('button-sair');
      expect(navbar).toBeInTheDocument();
    });
    it(('Verifica se o componente user-name está na tela'), () => {
      render(<Navbar />);
      const navbar = screen.getByTestId('user-name');
      expect(navbar).toBeInTheDocument();
    });
  });
});