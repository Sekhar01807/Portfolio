"use client";

import { useState } from "react";
import { Button, Column, Flex, Heading, IconButton, Row, Text } from "@once-ui-system/core";

interface ShareCaseStudyProps {
  title: string;
  url: string;
  summary?: string;
}

export const ShareCaseStudy: React.FC<ShareCaseStudyProps> = ({ title, url, summary }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const encodedUrl = encodeURIComponent(typeof window !== "undefined" ? window.location.href : url);
  const encodedTitle = encodeURIComponent(`Check out ${title} case study: ${summary || ""}`);

  return (
    <Column
      fillWidth
      padding="m"
      radius="l"
      background="surface"
      border="neutral-alpha-weak"
      marginTop="24"
      gap="12"
      horizontal="between"
      s={{ direction: "column", gap: "12" }}
    >
      <Row fillWidth horizontal="between" vertical="center" wrap s={{ direction: "column", align: "start", gap: "12" }}>
        <Column gap="4">
          <Text variant="heading-strong-m">Share this case study</Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            Liked this engineering breakdown? Share it with your network or team.
          </Text>
        </Column>
        <Flex gap="8" vertical="center" wrap>
          <Button
            onClick={handleCopy}
            variant="secondary"
            size="s"
            weight="default"
            prefixIcon="openLink"
          >
            {copied ? "✓ Copied Link" : "Copy Link"}
          </Button>
          <IconButton
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target="_blank"
            icon="linkedin"
            tooltip="Share on LinkedIn"
            size="m"
            variant="secondary"
          />
          <IconButton
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
            target="_blank"
            icon="x"
            tooltip="Share on X"
            size="m"
            variant="secondary"
          />
          <IconButton
            href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
            target="_blank"
            icon="whatsapp"
            tooltip="Share on WhatsApp"
            size="m"
            variant="secondary"
          />
        </Flex>
      </Row>
    </Column>
  );
};
