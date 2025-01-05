"use client"

import { Twitter, Facebook, Linkedin, Link, Link2 } from "lucide-react";
import ShareButton from "./share-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Example usage
export const ShareButtonDemo = () => {
  const shareLinks = [
    {
      icon: Twitter,
      onClick: () => window.open('https://twitter.com/share'),
      label: 'Share on Twitter'
    },
    {
      icon: Facebook,
      onClick: () => window.open('https://facebook.com/share'),
      label: 'Share on Facebook'
    },
    {
      icon: Linkedin,
      onClick: () => window.open('https://linkedin.com/share'),
      label: 'Share on LinkedIn'
    },
    {
      icon: Link,
      onClick: () => navigator.clipboard.writeText(window.location.href),
      label: 'Copy link'
    }
  ];

  return (
    <div>
    <ShareButton links={shareLinks} className=" text-lg font-medium  " >
      <Link size={15} />
      Share
    </ShareButton>
    
    </div>
  );
};