import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Welcome = ({ navigation }) => {
    return (
        <ImageBackground
            source={{ uri: "https://aquiles.mx/wp-content/uploads/2020/05/ANA_estilo_ilustracion_11_1080x690px.jpg" }}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <View style={styles.heroImages}>
                    <Image
                        source={{ uri: "https://i.ytimg.com/vi/sBtNuB9WAbo/maxresdefault.jpg" }}
                        style={styles.heroImage}
                    />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>Let's Get</Text>
                    <Text style={styles.title}>Started</Text>
                    <Text style={styles.description}>
                        Connect with each other
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Signup")}>
                        <Text style={styles.buttonText}>Join Now</Text>
                    </TouchableOpacity>
                    <View style={styles.loginContainer}>
                        <Text style={styles.loginText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={[styles.loginText, styles.bold]}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heroImages: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 50,
    },
    heroImage: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginHorizontal: 5,
        position: 'relative',
    },
    content: {
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 2,
    },
    description: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'purple',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    loginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    loginText: {
        color: 'white',
        marginRight: 5,
    },
    bold: {
        fontWeight: 'bold',
    },
});

export default Welcome;
