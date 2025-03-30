import { StyleSheet, StatusBar } from "react-native";
 
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'F2ECEC', 
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 28,
        marginBottom: 20,
      },
      input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 2,
        borderRadius: 5,
      },
      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        alignSelf: 'flex-start',
      },
      checkboxLabel: {
        marginLeft: 8,
      },
      registerButton: {
        backgroundColor: '#F2ECEC',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: "#000000",
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        
      },
      registerButtonText: {
        fontSize: 18,
      },
      linkText: {
        marginTop: 10,
        textDecorationLine: 'underline',
      },
    
});