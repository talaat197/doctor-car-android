import AsyncStorage from '@react-native-community/async-storage';

export const _storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
    }
};

export const _retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (error) {
        return null;
    }
};

export const _clearItem = async(key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
    }
};