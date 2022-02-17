import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingTop: 40
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#E2E6EA',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginLeft: 280,
    marginTop: -20,
    marginBottom: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 30,
    paddingHorizontal: 30,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#43505C',
  },
  priceText: {
    fontWeight: 'bold',
  },
  infoText: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'normal',
    fontSize: 20,
    color: '#43505C',
  },
  assineButton: {
    borderColor: '#F751A0',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 280,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  subscriberButton:{
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 280,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#7666FC',
  },
  assineText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#F751A0',
  },
  subscriberText:{
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  alertText: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    paddingHorizontal: 40,
    textShadowColor:'#585858',
    textShadowOffset:{width: 3, height: 3},
    textShadowRadius: 10,
  }
});

export default styles;