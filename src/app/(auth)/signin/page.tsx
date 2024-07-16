import { Input, FormItem, Form, InputPassword, Button } from '@/components/Ant'
import { SignInStyles } from './signin.styles'

export default function Signin() {
  return (
    <SignInStyles>
      <p className="title">Signin</p>
      <p className="info">Don’t have an account? Sign Up</p>
      <Form layout="vertical">
        <FormItem label="Email" required>
          <Input placeholder="input placeholder" />
        </FormItem>
        <FormItem label="Password" required>
          <InputPassword placeholder="input placeholder" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </FormItem>
      </Form>
    </SignInStyles>
  )
}
