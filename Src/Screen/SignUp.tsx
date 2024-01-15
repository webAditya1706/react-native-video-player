import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
}

const MyForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Do something with the form data
    console.log('Form data:', data);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={field.value}
            onChangeText={(text) => field.onChange(text)}
          />
        )}
        name="name"
        rules={{ required: 'Name is required' }}
      />
      {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={field.value}
            onChangeText={(text) => field.onChange(text)}
            keyboardType="email-address"
          />
        )}
        name="email"
        rules={{ required: 'Email is required' }}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});

export default MyForm;
