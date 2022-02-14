import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import LocationService from '../services/LocationService';
import Button from './Button';

const WeatherCurrent = () => {
  const navigation = useNavigation();

  const handleFetchWeather = useCallback(async () => {
    const position = await LocationService.getCurrentPosition();
    navigation.navigate('Weather', position);
  }, [navigation]);

  return (
    <Button testID="weather-current" label="" onPress={handleFetchWeather} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WeatherCurrent;
