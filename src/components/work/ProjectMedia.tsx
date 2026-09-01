"use client";

import React, { useRef, useState } from "react";
import { Media } from "@once-ui-system/core";
import styles from "./ProjectMedia.module.scss";

interface ProjectMediaProps {
  video?: string;
  poster?: string;
  fallbackImage?: string;
  title: string;
}

export const ProjectMedia: React.FC<ProjectMediaProps> = ({
  video,
  poster,
  fallbackImage,
  title,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  if (!video) {
    if (fallbackImage) {
      return (
        <div className={styles.videoWrapper}>
          <div className={styles.browserBar}>
            <div className={styles.trafficLights}>
              <span className={styles.trafficDot} style={{ background: "#ff5f56" }} />
              <span className={styles.trafficDot} style={{ background: "#ffbd2e" }} />
              <span className={styles.trafficDot} style={{ background: "#27c93f" }} />
            </div>
            <div className={styles.urlBar}>
              <svg className={styles.lockIcon} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </svg>
              <span className={styles.urlText}>{title} • Application Preview</span>
            </div>
            <div className={styles.liveIndicator}>
              <span className={styles.pulseDot} />
              <span className={styles.pulseText}>Live</span>
            </div>
          </div>
          <div className={styles.videoContainer}>
            <Media
              priority
              aspectRatio="16 / 9"
              alt={title || "Project preview"}
              src={fallbackImage}
            />
          </div>
        </div>
      );
    }
    return null;
  }

  return (
    <div className={styles.videoWrapper}>
      {/* Sleek Browser Frame Chrome */}
      <div className={styles.browserBar}>
        <div className={styles.trafficLights}>
          <span className={styles.trafficDot} style={{ background: "#ff5f56" }} />
          <span className={styles.trafficDot} style={{ background: "#ffbd2e" }} />
          <span className={styles.trafficDot} style={{ background: "#27c93f" }} />
        </div>
        
        <div className={styles.urlBar}>
          <svg className={styles.lockIcon} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
          </svg>
          <span className={styles.urlText}>{title} • Interactive Walkthrough Demo</span>
        </div>

        <div className={styles.liveIndicator}>
          <span className={styles.pulseDot} />
          <span className={styles.pulseText}>Demo</span>
        </div>
      </div>

      {/* High-Impact Responsive Video Viewport */}
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.videoElement}
          src={encodeURI(video)}
          poster={poster || fallbackImage}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onVolumeChange={(e) => setIsMuted((e.target as HTMLVideoElement).muted)}
        />
      </div>
    </div>
  );
};
