import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string[];
  senderEmail: string;
  senderName: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  senderName
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message from Your Digital Portfolio</Preview>
      <Tailwind>
        <Body className="rounded-md">
          <Container>
            <Section className="bg-gray-50 borderBlack my-2 px-6 py-4 rounded-md">
              <Heading className="leading-tight text-black">
                You have received a message
              </Heading>
              <Text className="text-black">Sender's Name: {senderName}</Text>
              <Text className="text-black">Sender's Email: {senderEmail}</Text>
              <Container className="py-2 px-6 text-black bg-gray-100">
                {message.map((msg, index) => (
                  <Text key={index}>{msg}</Text>
                ))}
              </Container>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
