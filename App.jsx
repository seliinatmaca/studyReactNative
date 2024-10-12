import {StyleSheet, Text, View} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import FormikApp from './src/components/Formik';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <FormikApp />
    </ApplicationProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
