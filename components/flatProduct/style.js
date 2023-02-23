import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contain/theme";

const height = Dimensions.get('window').height - 130;


const styles = StyleSheet.create({
    productBox: {
        height: height / 4,
        flexDirection: 'row',
        marginBottom: 30,
        width: '85%',
    },

    product: {
        width: '85%',
    },

    productBoxImage: {
        flex: 3,
    },

    productImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    productBoxTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.second,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },

    title: {
        fontWeight: '700',
        fontSize: 16,
        color: COLORS.title
    },

    icon: {
        width: '15%',
    },

    iconBox: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: COLORS.second,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
    },

});


export default styles