import {StyleSheet} from 'react-native';

export const homeStyle = StyleSheet.create({
  productContainer: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#34401A',
  },
  scrollProductView: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#34401A',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  scanButtonView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#B0BF8E',
    marginBottom: 30,
  },
  scanButton: {
    backgroundColor: '#5F7336',
    width: '90%',
    borderRadius: 20,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanButtonText: {
    color: 'white',
  },
});
