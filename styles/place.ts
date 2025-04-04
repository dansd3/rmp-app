import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#F7F6F2',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },

  title: {
    fontSize: 24,
    fontWeight: 'normal',
    marginLeft: 15,
  },
  section: {
    marginHorizontal: 15,
    backgroundColor: '#F2ECEC',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: width * 0.85,
    height: height * 0.25,
    marginRight: 15,
    borderRadius: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: height * 0.35,
    borderRadius: 15,
  },
})
