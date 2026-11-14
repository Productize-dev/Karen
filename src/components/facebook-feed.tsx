import { business } from "@/lib/business";
import { facebookPosts } from "@/lib/work";
import { DeferredIframe } from "@/components/deferred-iframe";
import { GoldRule, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function FacebookFeed() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-gold-dark">
            Social proof
          </p>
          <h2 className="mt-3 font-heading text-4xl text-ink md:text-5xl">
            From our Facebook
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Recent updates, tips, and work from Grace Living Cleaning Services.
          </p>
          <GoldRule className="mx-auto mt-5 w-24" delay={0.1} />
        </Reveal>

        <Stagger className="grid gap-6 lg:grid-cols-3">
          {facebookPosts.map((post) => {
            const src = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(post.href)}&show_text=true&width=500`;
            return (
              <StaggerItem key={post.href}>
                <div className="overflow-hidden border border-border bg-card p-2 shadow-[0_16px_40px_-32px_rgba(154,123,60,0.45)]">
                  <DeferredIframe
                    src={src}
                    title="Grace Living Facebook post"
                    height={post.height}
                    className="mx-auto max-w-full"
                  />
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {business.social.facebook ? (
          <Reveal className="mt-8 text-center" delay={0.1}>
            <Button
              asChild
              variant="outline"
              className="border-gold/40 transition hover:border-gold"
            >
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow us on Facebook
              </a>
            </Button>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
