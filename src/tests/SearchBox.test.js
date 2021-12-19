import { fireEvent, render } from '@testing-library/react';

import SearchBox from '../components/SearchBox';

describe('SearchBox tests', () => {
  const props = {
    searchLabel: 'Zooken/Search',
    clearLabel: 'Clear',
    onInputChange: () => {},
  };

  it('renders empty input', () => {
    const { getByTestId } = render(<SearchBox {...props} />);
    const input = getByTestId('input');

    expect(input.value).toBe('');
  });

  it('should get search value when input is changed', () => {
    const { getByTestId } = render(<SearchBox {...props} />);
    const input = getByTestId('input');

    fireEvent.change(input, {
      target: { value: 'lorem' },
    });

    expect(input.value).toBe('lorem');
  });

  it('should not show clear button when input text does not exist', () => {
    const { queryByRole } = render(<SearchBox {...props} />);

    const clearButton = queryByRole('button', { name: props.clearLabel });

    expect(clearButton).not.toBeInTheDocument();
  });

  it('should show clear button when input is entered', () => {
    const { getByTestId, queryByRole } = render(<SearchBox {...props} />);
    const input = getByTestId('input');

    fireEvent.change(input, {
      target: { value: 'lorem' },
    });

    const clearButton = queryByRole('button', { name: props.clearLabel });

    expect(clearButton).toBeInTheDocument();
  });

  it('should clear input when clear button is clicked', () => {
    const { getByTestId, queryByRole } = render(<SearchBox {...props} />);
    const input = getByTestId('input');

    fireEvent.change(input, {
      target: { value: 'lorem' },
    });

    const clearButton = queryByRole('button', { name: props.clearLabel });

    fireEvent.click(clearButton);

    expect(clearButton).not.toBeInTheDocument();

    expect(input.value).toBe('');
  });

  it('should show focused border when input container is on focus', () => {
    const { getByTestId } = render(<SearchBox {...props} />);

    const div = getByTestId('input-container');

    fireEvent.focus(div);

    expect(div.classList.contains('focused')).toBe(true);
  });

  it('should hide focused border when input container is on blur', () => {
    const { getByTestId } = render(<SearchBox {...props} />);

    const div = getByTestId('input-container');

    fireEvent.focus(div);
    fireEvent.blur(div);

    expect(div.classList.contains('focused')).toBe(false);
  });
});
