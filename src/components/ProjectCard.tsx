"use client";

import React from "react";
import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

export interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images?: string[];
  title?: string;
  content?: string;
  description?: string;
  avatars?: { src?: string; [key: string]: any }[];
  link?: string;
  github?: string;
  tags?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title = "",
  content = "",
  description = "",
  avatars = [],
  link = "",
  github = "",
  tags = [],
}) => {
  const safeImages = Array.isArray(images) ? images : [];
  const safeAvatars = Array.isArray(avatars) ? avatars : [];
  const safeTags = Array.isArray(tags) ? tags : [];

  return (
    <Column
      fillWidth
      gap="s"
      radius="l"
      background="surface"
      border="neutral-alpha-weak"
      style={{
        overflow: "hidden",
      }}
    >
      {safeImages.length > 0 && (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={safeImages.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
      )}
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="m"
        paddingTop="8"
        paddingBottom="16"
        gap="m"
      >
        {title && (
          <Flex flex={5} direction="column" gap="4">
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(safeAvatars.length > 0 || description?.trim() || content?.trim() || safeTags.length > 0) && (
          <Column flex={7} gap="12">
            {safeAvatars.length > 0 && <AvatarGroup avatars={safeAvatars as any} size="s" reverse />}
            {description?.trim() && (
              <Text
                wrap="balance"
                variant="body-default-s"
                onBackground="neutral-weak"
                style={{ maxWidth: "62ch", lineHeight: "160%" }}
              >
                {description}
              </Text>
            )}

            {/* Tech Stack Badges */}
            {safeTags.length > 0 && (
              <Flex gap="8" wrap>
                {safeTags.slice(0, 5).map((tag, index) => (
                  <span
                    key={`${tag}-${index}`}
                    style={{
                      fontSize: "0.75rem",
                      padding: "2px 8px",
                      borderRadius: "6px",
                      background: "var(--neutral-alpha-weak, rgba(255, 255, 255, 0.05))",
                      border: "1px solid var(--neutral-border-weak, rgba(255, 255, 255, 0.1))",
                      color: "var(--neutral-on-background-weak)",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </Flex>
            )}

            <Flex gap="16" wrap vertical="center" paddingTop="4">
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">
                    Live demo
                  </Text>
                </SmartLink>
              )}
              {github && (
                <SmartLink
                  prefixIcon="github"
                  style={{ margin: "0", width: "fit-content" }}
                  href={github}
                >
                  <Text variant="body-default-s">GitHub</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};

export default ProjectCard;
