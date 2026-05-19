import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="px-6 py-24"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">
          Contact
        </h2>

        <p className="mt-4 text-zinc-400">
          Want to work together or have a
          project in mind? Let’s connect.
        </p>

        <div className="mt-10 space-y-4">
          <Input
            placeholder="Your name"
          />

          <Input
            placeholder="Your email"
          />

          <Textarea
            placeholder="Your message"
            className="min-h-[140px]"
          />

          <Button size="lg">
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
}