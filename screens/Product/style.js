import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contain/theme";


const width = Dimensions.get('window').width;

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    background: {
        position: 'absolute',
        flex: 1,
        opacity: 0.8,
    },

    productImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    productImgIcon: {
        backgroundColor: COLORS.second,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        height: 50,
        width: width / 3.5,
    },

    productImgIconLeft: {
        borderTopRightRadius: 30,
        left: 0,
    },

    productImgIconRight: {
        borderTopLeftRadius: 30,
        right: 0,
    },

    productContent: {
        flex: 2,
        marginHorizontal: 15,
    },

    productContenttext: {
        marginTop: 24,
        marginBottom: 20,
    },

    productContentBox: {
        marginVertical: 20,
        alignItems: 'center',
    },

    productContentBoxTitle: {
        width: 167,
        height: 35,
        backgroundColor: COLORS.second,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: COLORS.title
    },

    text: {
        fontSize: 14,
    },

    productContentBoxContent: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: COLORS.second
    },

});

export default styles;