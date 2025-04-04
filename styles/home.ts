import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  menuButton: {
    position: 'absolute',
    top: '5%',
    left: '20%',
    right: '5%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuButtonText: {
    fontSize: 18,
  },
  listContainer: {
    position: 'absolute',
    top: '10%',
    left: '20%',
    right: '5%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    maxHeight: '25%',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  placeInfo: {
    justifyContent: 'center',
    width: '70%',
  },
  placeName: {
    fontSize: 16,
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userButton: {
    position: 'absolute',
    top: '5%',
    left: '5%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
    elevation: 5,
  },

  userInfoBox: {
    position: 'absolute',
    top: '11%',
    left: '5%',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 10,
    padding: 8,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: 'center',
  },
})
