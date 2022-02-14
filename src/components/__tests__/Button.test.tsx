import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import Button from '../Button';

describe('Button', () => {
  test('Should render correctly', () => {
    const wrapper = render(<Button label="" onPress={jest.fn()} />);
    wrapper.getByTestId('button');
  });

  test('Should render loader when loading', () => {
    const wrapper = render(<Button label="" onPress={jest.fn()} loading />);
    wrapper.getByTestId('button-loading');
  });

  test('Should call given onPress when pressed', () => {
    const mockedOnPress = jest.fn();
    const wrapper = render(<Button label="" onPress={mockedOnPress} />);
    const button = wrapper.getByTestId('button');

    fireEvent.press(button);
    expect(mockedOnPress).toHaveBeenCalled();
  });

  test('Should render label', () => {
    const wrapper = render(<Button label="mock-label" onPress={jest.fn()} />);
    wrapper.getByText('mock-label');
  });

  test('Should accept custom view props', () => {
    const wrapper = render(
      <Button label="" onPress={jest.fn()} testID="custom-test-id" />,
    );
    wrapper.getByTestId('custom-test-id');
  });
});
