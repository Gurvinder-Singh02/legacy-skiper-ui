"use client"

import { Bell, Home, HelpCircle, Settings, Shield, Mail, User, FileText, Lock } from "lucide-react";
import { ExpandedTabs } from "../ui/expanded-tabs";



export default function DefaultDemo() {
  const tabs = [
    { title: "Dashboard", icon: Home },
    { title: "Notifications", icon: Bell },
    { type: "separator" as const },
    { title: "Settings", icon: Settings },
    { title: "Support", icon: HelpCircle },
    { title: "Security", icon: Shield },
  ];

  return (
    <div className="flex items-center justify-center">
      <ExpandedTabs tabs={tabs} />
    </div>
  );
}

function CustomColorDemo() {
  const tabs = [
    { title: "Profile", icon: User },
    { title: "Messages", icon: Mail },
    { type: "separator" as const },
    { title: "Documents", icon: FileText },
    { title: "Privacy", icon: Lock },
  ];

  return (
    <div className="flex flex-col gap-4">
      <ExpandedTabs
        tabs={tabs}
        activeColor="text-blue-500"
        className="border-blue-200 dark:border-blue-800"
      />
    </div>
  );
}
