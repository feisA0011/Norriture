"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const services = [
  "Private Dining",
  "Catering & Event Styling",
  "At Home or Anywhere",
  "Bespoke Celebrations",
  "Brand / Corporate / VIP Dining",
  "Dietary & Allergy-Conscious Menu Design"
];

const occasions = [
  "Birthdays",
  "Anniversaries",
  "Proposals",
  "Family Gatherings",
  "Private Chef Nights",
  "Luxury Celebrations",
  "Corporate Dinners",
  "Launch Events"
];

const personalization = [
  "Menus tailored to taste, season, and story",
  "Mood boards and aesthetic food direction",
  "Venue sourcing or transformation planning",
  "Experiences for 6 to 250+ guests",
  "Allergy-aware and lifestyle-conscious curation",
  "Emotion-first guest journey design"
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export function LandingPage() {
  return (
    <main className="overflow-x-clip">
      <section className="relative isolate border-b border-[#2A221D] bg-hero-glow">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:pb-28 sm:pt-32 lg:px-8">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-6 text-sm uppercase tracking-[0.35em] text-muted"
          >
            Private Dining · Bespoke Catering · Elevated Events
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-5xl leading-tight sm:text-6xl lg:text-7xl"
          >
            Bespoke private dining experiences designed to be remembered.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            We craft intimate, cinematic food-led moments around your personality, your guests,
            your venue, and the emotion you want everyone to carry home.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button>Book a Private Consultation</Button>
            <Button variant="secondary">Explore Signature Experiences</Button>
          </motion.div>
        </div>
      </section>

      <SectionWrap title="Services" subtitle="Crafted with precision, never templated.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={service} delay={index * 0.05}>
              <h3 className="text-2xl">{service}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Every detail is tailored to your event vision, guest profile, and desired ambiance.
              </p>
            </Card>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap title="Our Philosophy" subtitle="We orchestrate atmosphere, connection, and flavor.">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[#2A221D] bg-surface p-8 md:p-12"
        >
          <p className="max-w-4xl text-lg leading-relaxed text-muted">
            Norriture begins by listening. We learn your story, understand your guests, map the
            space, and shape a dining experience that feels personal from the first arrival to the
            final course. This is not catering-as-usual; it is a composed experience designed for
            impact.
          </p>
        </motion.div>
      </SectionWrap>

      <SectionWrap title="Process" subtitle="A calm, high-touch flow from idea to execution.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            "We Listen",
            "We Shape the Concept",
            "We Curate Menu & Atmosphere",
            "We Deliver the Experience"
          ].map((step, i) => (
            <Card key={step} delay={i * 0.06}>
              <p className="text-sm uppercase tracking-[0.2em] text-accent">0{i + 1}</p>
              <h3 className="mt-3 text-2xl">{step}</h3>
            </Card>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap
        title="Experience Personalization"
        subtitle="Designed around your people, place, and purpose."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {personalization.map((item, i) => (
            <motion.div
              key={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="rounded-2xl border border-[#2A221D] bg-surfaceSoft p-5"
            >
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap title="Occasions" subtitle="From intimate milestones to marquee gatherings.">
        <div className="flex flex-wrap gap-3">
          {occasions.map((item, i) => (
            <motion.span
              key={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="rounded-full border border-[#3A3028] px-5 py-2 text-sm text-muted hover:border-accent hover:text-accent"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap title="Client Impressions" subtitle="Elegant social proof placeholder.">
        <Card delay={0}>
          <p className="text-lg leading-relaxed">
            “Every course felt deeply personal. The atmosphere, the pacing, the details — it was as
            if the evening had been written specifically for us.”
          </p>
          <p className="mt-5 text-sm uppercase tracking-[0.16em] text-muted">
            — Placeholder, Private Anniversary Dinner
          </p>
        </Card>
      </SectionWrap>

      <SectionWrap title="Enquiry" subtitle="Tell us the feeling you want to create.">
        <form className="grid gap-4 rounded-3xl border border-[#2A221D] bg-surface p-6 md:grid-cols-2 md:p-10">
          {[
            ["name", "Name"],
            ["email", "Email"],
            ["phone", "Phone"],
            ["eventType", "Event Type"],
            ["guestCount", "Guest Count"],
            ["date", "Preferred Date"],
            ["location", "Location"]
          ].map(([id, label]) => (
            <label key={id} className="text-sm text-muted">
              {label}
              <input
                id={id}
                name={id}
                type={id === "email" ? "email" : id === "date" ? "date" : "text"}
                className="mt-2 w-full rounded-xl border border-[#3B3028] bg-[#110E0D] px-4 py-3 text-text outline-none transition focus:border-accent"
                required={id === "name" || id === "email"}
              />
            </label>
          ))}
          <label className="text-sm text-muted md:col-span-2">
            Dietary Requirements
            <input
              id="dietary"
              name="dietary"
              type="text"
              className="mt-2 w-full rounded-xl border border-[#3B3028] bg-[#110E0D] px-4 py-3 text-text outline-none transition focus:border-accent"
            />
          </label>
          <label className="text-sm text-muted md:col-span-2">
            Message
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-2 w-full rounded-xl border border-[#3B3028] bg-[#110E0D] px-4 py-3 text-text outline-none transition focus:border-accent"
              placeholder="Share the mood, style, and experience you envision."
            />
          </label>
          <div className="md:col-span-2">
            <Button type="submit">Request Proposal</Button>
          </div>
        </form>
      </SectionWrap>

      <footer className="border-t border-[#2A221D] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 text-sm text-muted md:flex-row lg:px-8">
          <p>Norriture — Private Dining & Bespoke Catering</p>
          <p>© {new Date().getFullYear()} Norriture. Crafted for unforgettable gatherings.</p>
        </div>
      </footer>
    </main>
  );
}

function SectionWrap({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-4xl sm:text-5xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>
      </motion.div>
      {children}
    </section>
  );
}

function Card({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.5, delay }}
      className="rounded-3xl border border-[#2A221D] bg-surface p-6 shadow-luxury"
    >
      {children}
    </motion.div>
  );
}
