import { useFormik } from 'formik';
import { ReactElement, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { IContactForm } from '~/models/Contacts';
import { ContactsSchema } from '~/schemas';
import FormatPhone from '~/utils/formatPhone';
import Input from '../Input';
import * as S from './styles';

interface IForm {
  initialData: IContactForm;
  titleBtnSubmit: string;
  loadOnSubmit: boolean;
  loadInitialData?: boolean;
  onSubmit: (values: IContactForm) => void;
}

function Form({
  initialData,
  titleBtnSubmit,
  loadOnSubmit,
  loadInitialData,
  onSubmit,
}: IForm): ReactElement {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setValues,
  } = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      email: '',
    },
    onSubmit,
    validationSchema: ContactsSchema,
  });

  const handleNormalizeMobile = (mobile: string): string => {
    const normalizeVal = mobile
      ? mobile
          .replace('(', '')
          .replace('(', '')
          .replace(')', '')
          .replace(')', '')
          .replace(' ', '')
          .replace(' ', '')
          .replace('-', '')
          .replace('-', '')
      : '';

    // unmasked  value
    if (normalizeVal.length <= 10) return normalizeVal;

    // masked value
    return FormatPhone(mobile);
  };

  useEffect(() => {
    if (loadInitialData && !Object.values(initialData).includes(undefined)) {
      setValues(initialData);
    }
  }, [initialData]);

  if (loadInitialData && !Object.values(initialData).length)
    return <ActivityIndicator color="#142B5D" />;

  return (
    <S.Container>
      <View>
        <Input
          label="Nome Completo"
          placeholder="Digite o nome do contato"
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
          error={!!touched.name && errors.name}
        />
        <Input
          label="Email"
          placeholder="Digite o email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          autoCapitalize="none"
          value={values.email}
          error={!!touched.email && errors.email}
        />
        <Input
          label="Celular"
          placeholder="Digite o celular"
          maxLength={15}
          keyboardType="number-pad"
          onChangeText={handleChange('mobile')}
          onBlur={handleBlur('mobile')}
          value={handleNormalizeMobile(values.mobile)}
          error={!!touched.mobile && errors.mobile}
        />
      </View>
      <S.CustomButton
        styled="default"
        color="primary"
        text={titleBtnSubmit}
        loading={loadOnSubmit}
        onPress={handleSubmit}
      />
    </S.Container>
  );
}
export default Form;
