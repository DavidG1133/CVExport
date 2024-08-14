import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cvdetails from '../../src/Views/Cvdetails';

it('should generate PDF', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Cvdetails />
    </MemoryRouter>
  );
  const generatePdfButton = getByText('Generar PDF');
  fireEvent.click(generatePdfButton);
  expect(window.jsPDF).toHaveBeenCalledTimes(1);
});

it('should match snapshot', () => {
  const { container } = render(
    <MemoryRouter>
      <Cvdetails />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});