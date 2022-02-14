import React from 'react';
import { View } from 'react-native';

import AppNavigator from '..';
import HomeScreen from '../HomeScreen';
import { render, waitFor } from '@testing-library/react-native';

jest.mock('../HomeScreen', () => jest.fn());

describe('AppNavigator', () => {
  test('Should render HomeScreen by default', async () => {
    (HomeScreen as jest.Mock).mockReturnValueOnce(
      <View testID="mock-home-screen" />,
    );
    const wrapper = render(<AppNavigator />);

    await waitFor(() => {
      wrapper.getByTestId('mock-home-screen');
    });
  });
});
