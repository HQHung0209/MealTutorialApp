import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contain/theme";

const width = Dimensions.get('window').width - 30;

const styles = StyleSheet.create({

    container: {
        width: width / 2,
        paddingHorizontal: 10,
    },

    product: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },

    productImg: {
        marginBottom: 13,
        width: '100%',
        height: 120,
        borderRadius: 10
    },

    text: {
        fontWeight: '700',
        fontSize: 16,
        color: COLORS.title,
    },

});

export default styles;