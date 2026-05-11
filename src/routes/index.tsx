import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Download, Headphones, MessageSquare, Facebook, Twitter, Instagram, ChevronUp, Check, Play, X } from "lucide-react";
import { useState } from "react";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import ParticlesComponent from "@/components/ui/particles-bg";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { TiltCard } from "@/components/ui/tilt-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BenefitsCarousel } from "@/components/ui/benefits-carousel";
import grafenoBottle from "@/assets/grafeno-bottle-loop-original.mp4";
import grafenoProduct from "@/assets/grafeno-product-video.mp4";
import grafenoLogo from "@/assets/grafeno-logo.png";
import grapheneProcess from "@/assets/graphene-process.png";
import productsLineup from "@/assets/products-lineup-v3.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Grafeno Coat — Revestimento de Grafeno 9H | 5 anos de garantia" },
      {
        name: "description",
        content:
          "Grafeno Coat: revestimento híbrido de grafeno para pintura automotiva, 9H de dureza e 5 anos de garantia. Da Alcance Profissional.",
      },
    ],
  }),
});

/* Vonixx-style angled CTA button */
function ChevronButton({
  children,
  variant = "outline",
}: {
  children: React.ReactNode;
  variant?: "outline" | "solid" | "brand";
}) {
  const base =
    "relative inline-flex items-center gap-3 px-7 py-4 text-sm font-semibold tracking-wide uppercase transition-transform hover:-translate-y-0.5";
  const styles =
    variant === "solid"
      ? "bg-brand-deep text-brand-foreground"
      : variant === "brand"
      ? "bg-brand text-brand-foreground"
      : "border border-current text-current";
  return (
    <button
      className={`${base} ${styles}`}
      style={{ clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)" }}
    >
      {children}
      <ArrowRight className="size-4" />
    </button>
  );
}

function SideTab() {
  return (
    <div className="fixed right-0 top-1/2 z-40 -translate-y-1/2">
      <div className="flex flex-col items-center gap-3 rounded-l-2xl bg-brand px-3 py-6 text-brand-foreground shadow-lg">
        <span
          className="text-xs font-bold tracking-[0.2em]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          FALE COM A GENTE AGORA
        </span>
        <MessageSquare className="size-5" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-8 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={grafenoLogo} alt="Grafeno Coat" className="h-10 w-10" />
          <div className="text-brand-foreground">
            <div className="text-lg font-bold leading-none">Grafeno<sup>®</sup></div>
            <div className="text-xs tracking-widest opacity-80">COAT</div>
          </div>
        </div>
        <nav className="hidden gap-8 text-sm font-medium text-brand-foreground/90 md:flex">
          <a href="#produto" className="hover:text-brand-foreground">Produto</a>
          <a href="#tecnologia" className="hover:text-brand-foreground">Tecnologia</a>
          <a href="#beneficios" className="hover:text-brand-foreground">Benefícios</a>
          <a href="#manual" className="hover:text-brand-foreground">Manual</a>
          <a href="#contato" className="hover:text-brand-foreground">Contato</a>
        </nav>
        <div />

      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden text-brand-foreground bg-black">
      <div className="relative z-10 mx-auto grid min-h-[80vh] max-w-7xl grid-cols-1 items-center gap-10 px-8 py-20 lg:grid-cols-2">
        <div className="relative">
          <div className="relative">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-brand-foreground/70">
            Nanotecnologia automotiva
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] md:text-6xl">
            GRAFENO <span className="block text-brand">COAT</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-foreground/85">
            Uma evolução dos sistemas de proteção de pintura automotiva, com nano partículas
            e moléculas que proporcionam maior nível de resistência, aumentando a intensidade
            do brilho e melhorando a profundidade de cor com uma incrível sensação ao toque.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ShinyButton href="https://wa.me/554188206718?text=Ol%C3%A1!%20Vim%20pelo%20site%20Grafeno%20Coat" target="_blank" rel="noopener noreferrer">SAIBA COMO REVENDER</ShinyButton>
          </div>
          </div>
        </div>
        <div className="relative">
          <video
            src={grafenoBottle}
            autoPlay
            loop
            muted
            playsInline
            className="relative z-10 mx-auto w-full max-w-xs md:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  const items = [
    "Um Maior Nível De Proteção",
    "Maior Intensidade De Brilho E Profundidade De Cor",
    "Melhor Sensibilidade Ao Toque (Extremamente Aveludado)",
    "Mais Repelência A Água, Óleo, Sujeiras E Agentes Contaminantes",
    "Aumento De Rendimento E Espalhabilidade Por Aplicação",
    "5 Anos De Garantia Comprovada Em Pintura Automotiva",
  ];
  return (
    <section id="produto" className="relative py-28" style={{ backgroundColor: "#E5E5E5" }}>
      <div className="mx-auto max-w-7xl px-8 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand">Conheça o produto</p>
        <h2 className="font-display text-4xl font-light text-foreground md:text-5xl">
          Grafeno Coat <span className="font-bold">5 anos de garantia | 9H</span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
          Revestimento híbrido constituído por átomos de carbono com estrutura molecular bidimensional
          ligado a moléculas de oxigênio que utiliza como coadjuvantes materiais inorgânicos, o que
          possibilita uma excelente ligação a diversos tipos de superfícies no veículo.
        </p>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <video
            src={grafenoProduct}
            autoPlay
            loop
            muted
            playsInline
            className="mx-auto w-full max-w-sm"
          />
          <div className="relative overflow-hidden rounded-3xl border bg-card p-10 shadow-sm">
            <BorderBeam size={250} duration={12} colorFrom="#4ade80" colorTo="#065f46" />
            <BorderBeam size={250} duration={12} delay={6} colorFrom="#22c55e" colorTo="#86efac" />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {items.map((it) => (
                <div key={it} className="text-left">
                  <Check className="mb-3 size-6 text-brand" strokeWidth={3} />
                  <p className="text-sm font-medium text-foreground">{it}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsDark() {
  return (
    <section id="beneficios" className="relative overflow-hidden text-brand-foreground" style={{ background: "var(--gradient-brand)" }}>
      <div className="mx-auto max-w-7xl px-8 py-28 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-brand-foreground/70">Proteção automotiva</p>
        <h2 className="font-display text-5xl font-light text-brand md:text-6xl">Benefícios Grafeno Coat</h2>
        <p className="mx-auto mt-6 max-w-3xl text-brand-foreground/85">
          O estímulo sensorial da visão e o toque proporcionado por um bom serviço aliado à
          performance do produto contribuem para o entusiasmo de qualquer pessoa quando o
          assunto é estética veicular.
        </p>

        <div className="mt-16">
          <BenefitsCarousel />
        </div>
      </div>
    </section>
  );
}

function TechSection() {
  return (
    <section id="tecnologia" className="relative overflow-hidden py-28 text-brand-foreground" style={{ background: "var(--gradient-brand)" }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-8 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand">Nanotecnologia</p>
          <h2 className="font-display text-5xl font-light">Característica técnica</h2>
          <div className="mt-6 space-y-4 text-brand-foreground/85">
            <p>
              Por ser um material quimicamente não reativo e inerte, o grafeno não tem função
              aderente e por si só não pode formar um revestimento que proporcione longa duração,
              por isso deve ser processado de uma forma muito específica.
            </p>
            <p>
              Para que o grafeno seja um material funcionalmente aderente ele deve ser oxidado
              quimicamente e ligado a moléculas de oxigênio até que se obtenha o óxido de grafeno
              reduzido (rGO).
            </p>
          </div>
          <div className="mt-8">
            <ShinyButton>SAIBA MAIS</ShinyButton>
          </div>
        </div>
        <div className="relative w-full">
          <ContainerScroll titleComponent={null}>
            <img src={grapheneProcess} alt="Processo de grafeno" className="mx-auto w-full h-auto object-contain" />
          </ContainerScroll>
        </div>
      </div>
    </section>
  );
}

function ManualSection() {
  return (
    <section id="manual" className="relative overflow-hidden text-brand-foreground" style={{ background: "var(--gradient-brand)" }}>
      <div className="mx-auto max-w-4xl px-8 py-28 text-center">
        <h2 className="font-display text-5xl font-light">Manual de uso</h2>
        <p className="mt-4 text-brand-foreground/80">
          Disponibilizamos um manual completo para o uso correto do produto.
        </p>
        <div className="mt-10 inline-block">
          <ShinyButton href="https://docs.google.com/document/d/1pRjbrqJ50LaZxs5iIrZp240iCQMdCxH9/edit?usp=sharing&ouid=105035906569480722512&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">BAIXAR O MANUAL COMPLETO</ShinyButton>
        </div>
      </div>
    </section>
  );
}

function CeramicVsGraphene() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative overflow-hidden text-brand-foreground" style={{ background: "var(--gradient-brand)" }}>
      <AuroraBackground showRadialGradient className="!h-auto !bg-transparent py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-foreground/70">Revestimento</p>
        <h2 className="mt-3 font-display text-5xl font-light text-brand md:text-6xl">
          Cerâmico vs Grafeno
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 text-left md:grid-cols-1">
          <p className="text-brand-foreground/85">
            No seguimento de estética automotiva o SiO2 tornou-se sinônimo de cerâmica. Revestimento cerâmico em sua definição são tratamentos dados a superfícies de veículos com produtos que tem em sua formulação a base de matéria inorgânica. O grafeno é carbono, ou seja, uma matéria orgânica que utiliza estrutura química de óxido de grafeno, e para que seja um revestimento ideal é acrescentado materiais inorgânicos, desta forma, o grafeno não pode ser classificado como um revestimento cerâmico, e sim, como um revestimento híbrido (carbono cerâmico) ou simplesmente revestimento de grafeno.
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <p className="text-brand-foreground/85">
              Os revestimentos de grafeno podem ser considerados uma evolução dos revestimentos cerâmicos no sentido de que é utilizado elementos químicos oxidativos e inorgânicos retirados da cerâmica para unir uma camada de grafeno inerte e não reativa a qualquer superfície e/ou substrato, dessa forma, o revestimento de grafeno é formado por carbono modificado, os revestimentos cerâmicos são formados por nanopartículas de dióxido de silício e/ou titânio.
            </p>
            <p className="text-brand-foreground/85">
              Embora próximos na tabela periódica, o carbono, o silício e o titânio são substâncias totalmente diferentes, mas que compartilham muitas características e semelhanças, e a nível molecular se combinam o que faz funcionar muito bem sobre as manutenções para manter revestimento à base de grafeno utilizando produtos químicos com base de SiO2 e/ou TiO2.
            </p>
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Reproduzir vídeo"
          className="mt-16 inline-grid size-20 place-items-center rounded-full bg-brand text-brand-foreground shadow-lg transition-transform hover:scale-110"
        >
          <Play className="size-8 fill-current" />
        </button>
      </div>
      </AuroraBackground>

      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 grid size-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Fechar"
          >
            <X className="size-5" />
          </button>
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="h-full w-full rounded-xl"
              src="https://www.youtube.com/embed/XoM6LmwfRfo?autoplay=1"
              title="Cerâmico vs Grafeno"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

function ExclusiveSection() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-8 lg:grid-cols-2">
        <TiltCard className="w-full" tiltLimit={12} scale={1.04} effect="evade" spotlight>
          <img src={productsLineup} alt="Linha Alcance Profissional" loading="lazy" className="w-full h-auto" />
        </TiltCard>
        <div>
          <h2 className="font-display text-5xl font-light text-foreground">
            Produto Exclusivo <span className="block font-bold">Alcance Profissional</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Grafeno Coat é um produto desenvolvido pela empresa Alcance Profissional em parceria
            com Scientific Society Nanotechnology, disponibilizando ao mercado uma ampla linha de
            produtos que são capazes de limpar e restaurar sem agredir a superfície promovendo uma
            proteção duradoura e proporcionando um melhor acabamento aos serviços de estética automotiva.
          </p>
          <div className="mt-8">
            <ShinyButton href="https://drive.google.com/file/d/1QWSofCEppBYa1oZzkLTD8Y3GMGxB05DG/view?usp=sharing" target="_blank" rel="noopener noreferrer">CONHEÇA A LINHA</ShinyButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResellerCTA() {
  return (
    <section className="bg-brand-dark py-12 text-brand-foreground">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-8">
        <ShinyButton href="https://wa.me/554188206718?text=Ol%C3%A1!%20Vim%20pelo%20site%20Grafeno%20Coat" target="_blank" rel="noopener noreferrer">SER REVENDEDOR</ShinyButton>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="bg-brand-dark text-brand-foreground/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-20 md:grid-cols-3">
        <div>
          <img src={grafenoLogo} alt="Grafeno Coat" className="h-16 w-16" />
          <div className="mt-3">
            <div className="text-2xl font-bold">Grafeno<sup>®</sup></div>
            <div className="text-sm tracking-widest">COAT</div>
          </div>
          <div className="mt-6 flex gap-3">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="grid size-9 place-items-center rounded-full bg-brand-foreground/10 hover:bg-brand">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-foreground">Menu</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#produto">Produto</a></li>
            <li><a href="#tecnologia">Tecnologia</a></li>
            <li><a href="#beneficios">Benefícios</a></li>
            <li><a href="#manual">Manual</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-foreground">Entre em contato</h4>
          <p className="text-sm leading-relaxed">
            Rua Baltazar Carrasco dos Reis, 2065, Rebouças,<br />
            Curitiba, PR, 80230-070 Brasil.
          </p>
          <p className="mt-4 text-sm">SAC: (41) 9986-7796</p>
          <p className="text-sm">Suporte técnico: (41) 9986-7796</p>
          <p className="text-sm">Email: contato@alcanceprofissional.com.br</p>
        </div>
      </div>
      <div className="border-t border-brand-foreground/10 py-6 text-center text-xs text-brand-foreground/50">
        Copyright © 2026 Grafeno Coat — Alcance Profissional. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function ScrollTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-40 grid size-12 place-items-center rounded-full bg-brand text-brand-foreground shadow-lg hover:scale-110 transition-transform"
      aria-label="Voltar ao topo"
    >
      <ChevronUp className="size-5" />
    </button>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background font-display text-foreground">
      <Header />
      <Hero />
      <MarqueeBanner />
      <ProductSection />
      <BenefitsDark />
      <TechSection />
      <ManualSection />
      <CeramicVsGraphene />
      <ExclusiveSection />
      <ResellerCTA />
      <Footer />
      
      <ScrollTop />
    </main>
  );
}
