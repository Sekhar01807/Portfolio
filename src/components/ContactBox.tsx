"use client";

import { useState } from "react";
import {
  Background,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  Row,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
import { mailchimp, person, social } from "@/resources";
import { opacity, SpacingToken } from "@once-ui-system/core";

export const ContactBox: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(person.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="80"
      style={{ marginBottom: "5rem" }}
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      position="relative"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />

      <Column maxWidth="s" horizontal="center" align="center" gap="16" style={{ zIndex: 1, position: "relative" }}>
        <Row gap="8" vertical="center" wrap horizontal="center">
          <Tag size="m" prefixIcon="globe">
            {person.location}
          </Tag>
          <Tag size="m" prefixIcon="rocket">
            Available for Opportunities
          </Tag>
        </Row>

        <Heading marginBottom="4" variant="display-strong-s" style={{ textAlign: "center" }}>
          Get in Touch
        </Heading>

        <Text
          wrap="balance"
          marginBottom="16"
          variant="body-default-l"
          onBackground="neutral-weak"
          style={{ textAlign: "center" }}
        >
          Interested in discussing full-stack development, distributed backend systems, or engineering collaboration? Let's connect directly.
        </Text>

        {/* Primary Contact Action Cards */}
        <Flex fillWidth gap="12" horizontal="center" wrap s={{ direction: "column" }}>
          <Button
            href={`mailto:${person.email}`}
            variant="primary"
            size="m"
            weight="default"
            prefixIcon="email"
          >
            {person.email}
          </Button>

          <Button
            href="https://wa.me/917995511936"
            variant="secondary"
            size="m"
            weight="default"
            prefixIcon="whatsapp"
          >
            Chat on WhatsApp (+91 79955 11936)
          </Button>

          <Button
            onClick={handleCopyEmail}
            variant="tertiary"
            size="m"
            weight="default"
          >
            {copied ? "✓ Email Copied!" : "Copy Email"}
          </Button>
        </Flex>

        {/* Social / Direct Network Links */}
        <Row gap="12" marginTop="16" vertical="center" horizontal="center" wrap>
          {social.map((item) =>
            item.link ? (
              <SmartLink
                key={item.name}
                href={item.link}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-full)",
                  background: "var(--neutral-alpha-weak)",
                  border: "1px solid var(--neutral-alpha-medium)",
                  textDecoration: "none",
                  fontSize: "14px",
                  color: "inherit",
                }}
              >
                <Icon name={item.icon} size="s" />
                <Text variant="label-default-s">{item.name}</Text>
              </SmartLink>
            ) : null
          )}
        </Row>
      </Column>
    </Column>
  );
};
