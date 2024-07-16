import { InputPassword, Form, Input, Button, FormItem } from '@/components/Ant'
import { SignUpStyles } from './signup.styles'

export default function Signup() {
  return (
    <SignUpStyles>
      <p className="title">Signup</p>
      <p className="info">Already have an account? Sign In</p>
      <Form layout="vertical">
        <FormItem label="First Name" required>
          <Input type="text" placeholder="Enter first name" />
        </FormItem>
        <FormItem label="Last Name" required>
          <Input type="text" placeholder="Enter last name" />
        </FormItem>
        <FormItem label="Email" required>
          <Input type="email" placeholder="Enter email adress" />
        </FormItem>
        <FormItem label="Password" required>
          <InputPassword type="password" placeholder="Enter password" />
        </FormItem>
        <FormItem label="Confirm Password" required>
          <InputPassword type="password" placeholder="Enter password" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </FormItem>
      </Form>
    </SignUpStyles>
  )
}
