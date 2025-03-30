import { StyleSheet, StatusBar } from "react-native";

//backgroundColor: "#F7F6F2", 
//backgroundColor: "#F2ECEC", 
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F6F2', 
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
      linkText: {
        marginTop: 10,
        marginBottom: 20,
        textDecorationLine: 'underline',
      },
      loginButton: {
        backgroundColor: '#F2ECEC',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth:2,
        borderRadius: 5,
        borderColor: "#000000",
        width: '100%',
        alignItems: 'center',
      },
      loginButtonText: {
        fontSize: 18,
      },

});