import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/LegalPage";

const TITLE = "Política de Privacidade — Domine Suas Dívidas";
const DESCRIPTION = "Saiba como os dados são tratados na página do e-book Domine Suas Dívidas.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacidade" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      updatedAt="18 de setembro de 2026"
      introduction="Esta política explica como as informações são tratadas durante sua visita e ao adquirir o e-book Domine Suas Dívidas."
      sections={[
        {
          title: "1. Informações coletadas",
          paragraphs: [
            "Esta página não solicita cadastro direto. Ao seguir para o pagamento, os dados necessários à compra são coletados e processados pela Kiwify, conforme a política de privacidade da própria plataforma.",
            "Dados técnicos e de navegação, como páginas visitadas e cliques nos botões de compra, podem ser medidos de forma agregada quando ferramentas de análise estiverem ativas.",
          ],
        },
        {
          title: "2. Uso das informações",
          paragraphs: [
            "As informações relacionadas à compra são utilizadas para processar o pagamento, liberar o acesso ao produto digital, prestar suporte e cumprir obrigações legais.",
          ],
        },
        {
          title: "3. Compartilhamento e segurança",
          paragraphs: [
            "Os dados podem ser tratados por fornecedores essenciais à operação, especialmente a plataforma de pagamento e entrega. Não comercializamos dados pessoais. Cada fornecedor adota suas próprias medidas de segurança e regras de privacidade.",
          ],
        },
        {
          title: "4. Seus direitos",
          paragraphs: [
            "Você pode solicitar informações, correção ou exclusão de dados sob nossa responsabilidade, observadas as obrigações legais de retenção. Envie sua solicitação ao e-mail indicado ao final desta página.",
          ],
        },
      ]}
    />
  );
}