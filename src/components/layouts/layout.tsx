import { Announcement } from "~/components/sections/announcement";
import { Footer } from "~/components/sections/footer";
import { Navbar } from "~/components/sections/navbar";
import { type ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Announcement />
    <Navbar />
    {children}
  </>
);
