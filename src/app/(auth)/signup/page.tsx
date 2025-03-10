import { InputPassword, Form, Input, Button, FormItem, Title, Paragraph } from '@/components/Ant'

export default function Signup() {
  return (
    <div>
      <Title>Signup</Title>
      <Paragraph>
        Already have an account?{' '}
        <Button type="link" href="/auth/signin">
          Sign In
        </Button>
      </Paragraph>
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
    </div>
  )
}
