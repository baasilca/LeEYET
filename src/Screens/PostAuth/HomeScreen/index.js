import React from 'react'
import { WebView } from 'react-native-webview';

const index = () => {
    return (
        <WebView source={{ uri: 'https://www.leeyet.com' }} style={{ flex: 1 }} allowsBackForwardNavigationGesture />
    );
}

export default index