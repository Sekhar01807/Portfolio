import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  video?: string;
  videos?: string[];
  tag?: string;
  tags?: string[];
  team: Team[];
  link?: string;
  github?: string;
};

// Automatic asset synchronization helper
function ensureAssetsSynced() {
  try {
    const baseBrainDir = "C:\\Users\\SOMA SEKHAR\\.gemini\\antigravity-ide\\brain";
    const brainDirs = [
      "C:\\Users\\SOMA SEKHAR\\.gemini\\antigravity-ide\\brain\\b78e0285-7f1e-4b34-ade5-a4b8bd540ab9\\.user_uploaded",
      "C:\\Users\\SOMA SEKHAR\\.gemini\\antigravity-ide\\brain\\a83ad37e-2de2-4c7f-9b64-541aabc4bd81\\.user_uploaded",
      "C:\\Users\\SOMA SEKHAR\\.gemini\\antigravity-ide\\brain\\9414b79a-bac0-4cd2-be7d-376b9e35fe86\\.user_uploaded",
    ];

    if (fs.existsSync(baseBrainDir)) {
      try {
        const subdirs = fs.readdirSync(baseBrainDir);
        for (const subdir of subdirs) {
          const uploadPath = path.join(baseBrainDir, subdir, ".user_uploaded");
          if (fs.existsSync(uploadPath) && !brainDirs.includes(uploadPath)) {
            brainDirs.unshift(uploadPath);
          }
        }
      } catch {
        // Fallback to static list
      }
    }

    const publicImagesDir = path.join(process.cwd(), "public", "images");

    const localSourceMap: { localSrc: string; destRel: string }[] = [
      // GolfForGood
      { localSrc: "projects/golfforgood/Screenshot 2026-08-29 193221.png", destRel: "projects/golfforgood/golfforgood-hero.png" },
      { localSrc: "projects/golfforgood/Screenshot 2026-08-29 193248.png", destRel: "projects/golfforgood/golfforgood-how-it-works.png" },
      { localSrc: "projects/golfforgood/Screenshot 2026-08-29 193442.png", destRel: "projects/golfforgood/golfforgood-dashboard.png" },
      { localSrc: "projects/golfforgood/Screenshot 2026-08-29 193604.png", destRel: "projects/golfforgood/golfforgood-scores.png" },
      { localSrc: "projects/golfforgood/Screenshot 2026-08-29 193652.png", destRel: "projects/golfforgood/golfforgood-billing.png" },
      { localSrc: "projects/golfforgood/Screenshot 2026-08-31 000735.png", destRel: "projects/golfforgood/golfforgood-stripe-checkout.png" },
      { localSrc: "projects/golfforgood/Screenshot 2026-08-31 002734.png", destRel: "projects/golfforgood/golfforgood-settings.png" },
      { localSrc: "projects/golfforgood/Screenshot 2026-08-29 193349.png", destRel: "projects/golfforgood/golfforgood-join.png" },
      { localSrc: "projects/golfforgood/Screenshot 2026-08-29 193315.png", destRel: "projects/golfforgood/golfforgood-signin.png" },

      // SchoolSync
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 225311.png", destRel: "projects/schoolsync/schoolsync-hero.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 225336.png", destRel: "projects/schoolsync/schoolsync-roles.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 222754.png", destRel: "projects/schoolsync/schoolsync-admin-dashboard.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 222938.png", destRel: "projects/schoolsync/schoolsync-timetable-admin.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 223044.png", destRel: "projects/schoolsync/schoolsync-academic-reports.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 223117.png", destRel: "projects/schoolsync/schoolsync-attendance-register.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 223153.png", destRel: "projects/schoolsync/schoolsync-announcements.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 223344.png", destRel: "projects/schoolsync/schoolsync-profile.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 223505.png", destRel: "projects/schoolsync/schoolsync-teacher-portal.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 223535.png", destRel: "projects/schoolsync/schoolsync-teacher-rollcall.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 223607.png", destRel: "projects/schoolsync/schoolsync-teacher-schedule.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 223641.png", destRel: "projects/schoolsync/schoolsync-assessment-setup.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 223703.png", destRel: "projects/schoolsync/schoolsync-class-analytics.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 223812.png", destRel: "projects/schoolsync/schoolsync-student-hub.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 223836.png", destRel: "projects/schoolsync/schoolsync-student-attendance.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 223912.png", destRel: "projects/schoolsync/schoolsync-student-timetable.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 223956.png", destRel: "projects/schoolsync/schoolsync-student-report-card.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 225355.png", destRel: "projects/schoolsync/schoolsync-signin.png" },
      { localSrc: "projects/schoolsync/Screenshot 2026-09-01 225434.png", destRel: "projects/schoolsync/schoolsync-create-account.png" },

      // PulseTrade
      { localSrc: "projects/pulsetrade/Screenshot 2026-08-29 192719.png", destRel: "projects/pulsetrade/pulsetrade-positions.png" },
      { localSrc: "projects/pulsetrade/Screenshot 2026-08-29 192744.png", destRel: "projects/pulsetrade/pulsetrade-funds.png" },
      { localSrc: "projects/pulsetrade/Screenshot 2026-08-29 193037.png", destRel: "projects/pulsetrade/pulsetrade-razorpay.png" },
      { localSrc: "projects/pulsetrade/Screenshot 2026-08-29 192815.png", destRel: "projects/pulsetrade/pulsetrade-profile.png" },

      // WanderLust
      { localSrc: "projects/wanderlust/Screenshot 2026-08-31 003203.png", destRel: "projects/wanderlust/wanderlust-hero.png" },
      { localSrc: "projects/wanderlust/Screenshot 2026-08-31 095447.png", destRel: "projects/wanderlust/wanderlust-listings.png" },
      { localSrc: "projects/wanderlust/Screenshot 2026-08-31 095538.png", destRel: "projects/wanderlust/wanderlust-host-dashboard.png" },
      { localSrc: "projects/wanderlust/Screenshot 2026-08-31 095850.png", destRel: "projects/wanderlust/wanderlust-booking.png" },
      { localSrc: "projects/wanderlust/Screenshot 2026-08-31 100040.png", destRel: "projects/wanderlust/wanderlust-property-management.png" },
      { localSrc: "projects/wanderlust/Screenshot 2026-08-31 100131.png", destRel: "projects/wanderlust/wanderlust-edit-property.png" },
      { localSrc: "projects/wanderlust/Screenshot 2026-08-31 100723.png", destRel: "projects/wanderlust/wanderlust-create-listing.png" },
      { localSrc: "projects/wanderlust/Screenshot 2026-08-31 003355.png", destRel: "projects/wanderlust/wanderlust-login.png" },
      { localSrc: "projects/wanderlust/Screenshot 2026-08-31 003441.png", destRel: "projects/wanderlust/wanderlust-signup.png" },
    ];

    for (const item of localSourceMap) {
      const srcPath = path.join(publicImagesDir, item.localSrc);
      const destPath = path.join(publicImagesDir, item.destRel);
      if (fs.existsSync(srcPath)) {
        if (!fs.existsSync(destPath) || fs.statSync(destPath).size !== fs.statSync(srcPath).size) {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    }

    const syncMap: { srcName: string; destRel: string }[] = [
      // NovaCall
      { srcName: "media_1788162099314.png", destRel: "projects/novacall/novacall-hero.png" },
      { srcName: "media_1788162181716.png", destRel: "projects/novacall/novacall-dashboard.png" },
      { srcName: "media_1788198001471.png", destRel: "projects/novacall/novacall-schedule.png" },
      { srcName: "media_1788198001492.png", destRel: "projects/novacall/novacall-lobby.png" },
      { srcName: "media_1788198001529.png", destRel: "projects/novacall/novacall-meeting.png" },
      { srcName: "media_1788198059470.png", destRel: "projects/novacall/novacall-screenshare.png" },
      { srcName: "media_1788162181688.png", destRel: "projects/novacall/novacall-history.png" },
      { srcName: "media_1788198001428.png", destRel: "projects/novacall/novacall-settings.png" },
      { srcName: "media_1788162181673.png", destRel: "projects/novacall/novacall-signin.png" },
      { srcName: "media_1788162181745.png", destRel: "projects/novacall/novacall-signup.png" },
      // SchoolSync
      { srcName: "media_1787948028133.png", destRel: "projects/schoolsync/schoolsync-hero.png" },
      { srcName: "media_1787948031779.png", destRel: "projects/schoolsync/schoolsync-roles.png" },
      { srcName: "media_1787948024908.png", destRel: "projects/schoolsync/schoolsync-signin.png" },
      { srcName: "media_1787948017428.png", destRel: "projects/schoolsync/schoolsync-create-account.png" },
      // WanderLust
      { srcName: "media_1787946279705.png", destRel: "projects/wanderlust/wanderlust-hero.png" },
      { srcName: "media_1787946279648.png", destRel: "projects/wanderlust/wanderlust-login.png" },
      { srcName: "media_1787946279702.png", destRel: "projects/wanderlust/wanderlust-signup.png" },
      // PulseTrade
      { srcName: "media_1788198707337.png", destRel: "projects/pulsetrade/pulsetrade-hero.png" },
      { srcName: "media_1788198707351.png", destRel: "projects/pulsetrade/pulsetrade-dashboard.png" },
      { srcName: "media_1788198707376.png", destRel: "projects/pulsetrade/pulsetrade-holdings.png" },
      { srcName: "media_1788198707347.png", destRel: "projects/pulsetrade/pulsetrade-create-account.png" },
      { srcName: "media_1788198707369.png", destRel: "projects/pulsetrade/pulsetrade-signin.png" },
      // GolfForGood
      { srcName: "media_1787946937606.png", destRel: "projects/golfforgood/golfforgood-hero.png" },
      { srcName: "media_1787946937632.png", destRel: "projects/golfforgood/golfforgood-how-it-works.png" },
      { srcName: "media_1787946937625.png", destRel: "projects/golfforgood/golfforgood-join.png" },
      { srcName: "media_1787946937662.png", destRel: "projects/golfforgood/golfforgood-signin.png" },
      // Profile Avatar
      { srcName: "media_1787944170590.jpg", destRel: "avatar-sekhar.jpg" },
      { srcName: "media_1787944170590.jpg", destRel: "avatar.jpg" },
    ];

    for (const item of syncMap) {
      const destPath = path.join(publicImagesDir, item.destRel);
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }

      for (const brainDir of brainDirs) {
        const srcPath = path.join(brainDir, item.srcName);
        if (fs.existsSync(srcPath)) {
          if (!fs.existsSync(destPath) || fs.statSync(destPath).size !== fs.statSync(srcPath).size) {
            fs.copyFileSync(srcPath, destPath);
          }
          break;
        }
      }
    }
  } catch {
    // Non-blocking fallback
  }
}

const EXCLUDED_TEMPLATE_SLUGS = [
  "automate-design-handovers-with-a-figma-to-code-pipeline",
  "building-once-ui-a-customizable-design-system",
  "simple-portfolio-builder",
];

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx" && !EXCLUDED_TEMPLATE_SLUGS.includes(path.basename(file, ".mdx")));
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);
  const slug = path.basename(filePath, path.extname(filePath));

  let resolvedVideo = data.video || (Array.isArray(data.videos) && data.videos.length > 0 ? data.videos[0] : undefined);
  const isVideoOnDisk = resolvedVideo && typeof resolvedVideo === "string" && fs.existsSync(path.join(process.cwd(), "public", resolvedVideo.replace(/^\//, "")));
  
  if (!resolvedVideo || !isVideoOnDisk) {
    const videoProjDir = path.join(process.cwd(), "public", "videos", "projects", slug);
    if (fs.existsSync(videoProjDir)) {
      try {
        const vidFiles = fs.readdirSync(videoProjDir).filter((f) => f.endsWith(".mp4") || f.endsWith(".webm") || f.endsWith(".mov"));
        if (vidFiles.length > 0) {
          resolvedVideo = `/videos/projects/${slug}/${vidFiles[0]}`;
        }
      } catch {
        // Fallback
      }
    }
  }

  const metadata: Metadata = {
    title: data.title || "",
    subtitle: data.subtitle || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    video: resolvedVideo || "",
    videos: Array.isArray(data.videos) ? data.videos : resolvedVideo ? [resolvedVideo] : [],
    tag: data.tag || "",
    tags: Array.isArray(data.tags) ? data.tags : data.tag ? (Array.isArray(data.tag) ? data.tag : [data.tag]) : [],
    team: data.team || [],
    link: data.link || "",
    github: data.github || "",
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  ensureAssetsSynced();
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir);
}
