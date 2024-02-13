import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PressableButton({ customStyle, onPress, children }) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => [styles.defaultStyle, customStyle, pressed && styles.pressed]}>
            {children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    defaultStyle: {
        backgroundColor: "blue",
    },
    pressed: {
        opacity: 0.5,
    },
})