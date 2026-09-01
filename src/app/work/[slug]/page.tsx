import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Schema,
  AvatarGroup,
  Button,
  Column,
  Flex,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
  Avatar,
  Line,
  Tag,
  Badge,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX, ShareCaseStudy, ProjectMedia, ProjectAtmosphere } from "@/components";
import { Metadata } from "next";
import { Projects } from "@/components/work/Projects";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "work", "projects"]);
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  let post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="l" horizontal="center" gap="l" position="relative" style={{ width: "100%" }} paddingY="16">
      <ProjectAtmosphere slug={post.slug} title={post.metadata.title} />
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Header Info */}
      <Column maxWidth="m" gap="12" horizontal="center" align="center" paddingTop="16" paddingBottom="4">
        <Row gap="8" vertical="center">
          <SmartLink href="/work">
            <Text variant="label-strong-m" onBackground="neutral-weak">
              Projects
            </Text>
          </SmartLink>
          <Text variant="label-default-s" onBackground="neutral-weak">/</Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Case Study
          </Text>
        </Row>
        
        <Text variant="body-default-xs" onBackground="neutral-weak">
          {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
        </Text>
        
        <Heading variant="display-strong-l" style={{ textAlign: "center", lineHeight: "1.15" }}>
          {post.metadata.title}
        </Heading>
      </Column>

      {/* Team / Author Row */}
      <Row marginBottom="8" horizontal="center">
        <Row gap="12" vertical="center">
          {post.metadata.team && <AvatarGroup reverse avatars={avatars} size="s" />}
          <Text variant="label-default-m" onBackground="neutral-weak">
            {post.metadata.team?.map((member, idx) => (
              <span key={`${member.name}-${idx}`}>
                {idx > 0 && (
                  <Text as="span" onBackground="neutral-weak">
                    ,{" "}
                  </Text>
                )}
                <SmartLink href={member.linkedIn}>{member.name}</SmartLink>
              </span>
            ))}
          </Text>
        </Row>
      </Row>

      {/* Action Buttons */}
      {(post.metadata.link || post.metadata.github) && (
        <Row gap="12" wrap horizontal="center" marginBottom="12">
          {post.metadata.link && (
            <Button
              href={post.metadata.link}
              target="_blank"
              variant="primary"
              size="m"
              suffixIcon="arrowUpRightFromSquare"
            >
              Launch Live App
            </Button>
          )}
          {post.metadata.github && (
            <Button
              href={post.metadata.github}
              target="_blank"
              variant="secondary"
              size="m"
              weight="default"
              prefixIcon="github"
            >
              Source Code
            </Button>
          )}
        </Row>
      )}

      {/* Tech Stack Pills */}
      {post.metadata.tags && post.metadata.tags.length > 0 && (
        <Row wrap gap="8" horizontal="center" marginBottom="16" maxWidth="m" paddingX="16">
          {post.metadata.tags.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.8125rem",
                padding: "3px 10px",
                borderRadius: "8px",
                background: "var(--neutral-alpha-weak, rgba(255, 255, 255, 0.05))",
                border: "1px solid var(--neutral-border-weak, rgba(255, 255, 255, 0.1))",
                color: "var(--neutral-on-background-weak)",
                fontWeight: 500,
              }}
            >
              {tech}
            </span>
          ))}
        </Row>
      )}

      {/* Project Video / Media Header */}
      <ProjectMedia
        video={post.metadata.video}
        title={post.metadata.title}
        poster={post.metadata.images.length > 0 ? post.metadata.images[0] : post.metadata.image}
        fallbackImage={post.metadata.images.length > 0 ? post.metadata.images[0] : post.metadata.image}
      />
      
      {/* Editorial Content with Constrained Max-Width for Optimal Reading */}
      <Column fillWidth as="article" horizontal="center" style={{ width: "100%" }}>
        <Column fillWidth style={{ maxWidth: "740px", width: "100%" }}>
          <CustomMDX source={post.content} />
          <ShareCaseStudy
            title={post.metadata.title}
            url={`${baseURL}${work.path}/${post.slug}`}
            summary={post.metadata.summary}
          />
        </Column>
      </Column>
      
      <Column fillWidth gap="32" horizontal="center" marginTop="32">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl" marginBottom="16">
          Related projects
        </Heading>
        <Projects exclude={[post.slug]} range={[2]} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
