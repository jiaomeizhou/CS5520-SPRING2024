import { StyleSheet } from 'react-native'
import * as Colors from './Color'

// Styles for the app
export const Styles = StyleSheet.create({
    textInput: {
        width: '100%',
        color: Colors.primaryPurpleColor,
        borderWidth: 2,
        borderColor: Colors.primaryPurpleColor,
        backgroundColor: Colors.textInputBackgroundColor,
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
    },
    header: {
        backgroundColor: Colors.headerColorPurple,
    },
    headerTitle: {
        color : Colors.primaryWhiteColor,
        alignSelf: 'center',
    },
    bottomTab: {
        backgroundColor: Colors.headerColorPurple,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.primaryBackgroundColor,
        padding: 20,
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    inputText: {
        fontSize: 16,
        color: Colors.primaryPurpleColor,
    },
    errorText: {
        color: Colors.warningColorBlack,
        fontSize: 14,
    },
    inputHeader: {
        fontSize: 16,
        color: Colors.primaryPurpleColor,
        fontWeight: 'bold',
    },
    flatList: {
        marginTop: 20,
    },
    activityItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        borderWidth: 2,
        borderColor: Colors.primaryPurpleColor,
        backgroundColor: Colors.headerColorPurple,
        padding: 10,
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    activityText: {
        fontSize: 14,
        color: Colors.primaryWhiteColor,
        fontWeight: 'bold',
    },
    activityDateDurationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activityDateDuration: {
        backgroundColor: Colors.primaryWhiteColor,
        color: Colors.primaryPurpleColor,
        fontSize: 14,
        fontWeight: 'bold',
        padding: 5,
        marginRight: 3,
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginTop: 100,
        margin: 10,
    },
    checkboxText: {
        marginRight: 5,
        color: Colors.primaryPurpleColor,
        fontWeight: 'bold',
    },
    pressedView: {
        opacity: 0.5,
    },
    defaultButtonStyle: {
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 5,
        textAlign: 'center',
    },
    cancelButton: {
        backgroundColor: Colors.cancelResetColorRed,
    },
    saveButton: {
        backgroundColor: Colors.headerColorPurple,
    },
    buttonText: {
        color: Colors.primaryWhiteColor,
    },
    headerButton: {
        paddingHorizontal: 5,
        marginRight: 10,
    }
})