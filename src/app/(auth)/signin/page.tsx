import { Input, FormItem, Form, InputPassword, Button, Title, Paragraph } from '@/components/Ant'

export default function Signin() {
  return (
    <div>
      <Title>Signin</Title>
      <Paragraph>
        Don’t have an account?{' '}
        <Button type="link" href="/auth/signup">
          Sign Up
        </Button>
      </Paragraph>
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
    </div>
  )
}
