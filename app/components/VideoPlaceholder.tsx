"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Upload, Film, X } from "lucide-react";

interface VideoPlaceholderProps {
  projectId: string;
  label: string;
  videoUrl?: string;
}

export function VideoPlaceholder({ projectId, label, videoUrl }: VideoPlaceholderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(null);

  const activeUrl = videoUrl || uploadedVideo;

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("video/")) {
        setUploadedVideo(URL.createObjectURL(file));
      }
    }
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("video/")) {
        setUploadedVideo(URL.createObjectURL(file));
      }
    }
  }, []);

  if (activeUrl && isPlaying) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative w-full aspect-video bg-neutral-900 rounded-xl overflow-hidden"
      >
        <video
          src={activeUrl}
          controls
          autoPlay
          className="w-full h-full object-cover"
          onEnded={() => setIsPlaying(false)}
        />
        <button
          onClick={() => setIsPlaying(false)}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative w-full aspect-video rounded-xl border-2 border-dashed transition-all duration-300 overflow-hidden ${
        isDragOver
          ? "border-neutral-900 dark:border-neutral-100 bg-neutral-100 dark:bg-neutral-800"
          : "border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
        {activeUrl ? (
          <>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(true)}
              className="flex items-center justify-center w-16 h-16 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 shadow-lg"
            >
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </motion.button>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{label}</p>
          </>
        ) : (
          <>
            <Film className="w-10 h-10 text-neutral-300 dark:text-neutral-600" />
            <div className="text-center space-y-1">
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{label}</p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500">
                Drag & drop a video or click to upload
              </p>
            </div>
            <label className="cursor-pointer">
              <input type="file" accept="video/*" className="hidden" onChange={handleFileInput} />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium"
              >
                <Upload className="w-4 h-4" />
                Upload Video
              </motion.div>
            </label>
          </>
        )}
      </div>
    </motion.div>
  );
}
