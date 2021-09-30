import * as Yup from 'yup'

export const formCreateUserSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: Yup.string().min(6, 'No mínimo 6 caracteres').required('Senha é obrigatório'),
  password_confirmation: Yup.string().oneOf([
    null,
    Yup.ref('password')
  ], 'As senhas precisam ser iguais').required('Confirmar senha é obrigatório')
})
