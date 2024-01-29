import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import {GluestackUIProvider, Input, InputField} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';

const App = () => {
  const [text, onChangeText] = React.useState('Useless Text');

  return (
    <SafeAreaView>
      <TextInput
        style={{borderWidth: 1, margin: 10}}
        onChangeText={onChangeText}
        value={text}
        onKeyPress={({nativeEvent}) => console.log('nativeEvent TextInput', nativeEvent)}
        multiline
      />

      <GluestackUIProvider config={config}>
        <Input
          variant="outline"
          size="md"
        >
          <InputField 
            placeholder="Enter Text here" 
            onKeyPress={({nativeEvent}) => console.log('nativeEvent InputField', nativeEvent)}
            // onKeyPress={({nativeEvent}) => {
            //   console.log(`InputField-onKeyPress: ${nativeEvent.key}`, { nativeEvent });
            // }}
            multiline 
          />
        </Input>
      </GluestackUIProvider>
    </SafeAreaView>
  );
};

export default App;
