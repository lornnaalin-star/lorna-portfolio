import Hero from "@/components/sections/Hero";
import Rooms from "@/components/sections/Rooms";
import Fields from "@/components/sections/Fields";
import Writing from "@/components/sections/Writing";
import Studio from "@/components/sections/Studio";
import Connect from "@/components/sections/Connect";
import { usePageTitle } from "@/lib/usePageTitle";
import { profile } from "@/content/site";

// The homepage is one continuous walk through the "mind":
// Daydream → Rooms → Fields → Writing → Studio → Connect.
// Reorder or remove sections here.
export default function Index() {
  usePageTitle(profile.metaTitle);
  return (
    <>
      <Hero />
      <Rooms />
      <Fields />
      <Writing />
      <Studio />
      <Connect />
    </>
  );
}
