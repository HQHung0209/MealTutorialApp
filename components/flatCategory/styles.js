import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contain/theme";

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        height: height / 3 - 120,
        backgroundColor: COLORS.second,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 22,
    },

    product: {
        flex: 1,
        width: '100%',
        alignItems : 'center',
    },

    imgContainer: {
        width: '100%',
        height: '50%',
        marginBottom: 14, 
    },

    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    text: {
        fontWeight: '700',
        fontSize: 16,
        color: COLORS.title,
        textAlign: 'center',
    },

    productIcon : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        width : '100%'
    },
});

export default styles;